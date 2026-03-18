#!/usr/bin/env node

/**
 * 文档优化脚本
 * 用于自动检查和优化Markdown文档
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 配置
const DOCS_DIR = path.join(__dirname, '..', 'docs');
const IGNORE_FILES = ['README.md', 'SUMMARY.md'];

/**
 * 检查文件是否存在
 */
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    return false;
  }
}

/**
 * 获取所有Markdown文件
 */
function getAllMarkdownFiles(dir) {
  const files = [];
  
  function traverse(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.md') && !IGNORE_FILES.includes(item)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

/**
 * 检查文档格式
 */
function checkDocumentFormat(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const issues = [];
  
  // 检查是否有标题
  if (!content.startsWith('# ')) {
    issues.push('文档缺少一级标题');
  }
  
  // 检查代码块格式
  let inCodeBlock = false;
  let codeBlockLanguage = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // 检查代码块开始
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockLanguage = line.substring(3).trim();
        
        // 检查是否有语言标识
        if (!codeBlockLanguage) {
          issues.push(`第${i + 1}行: 代码块缺少语言标识`);
        }
      } else {
        inCodeBlock = false;
      }
    }
    
    // 检查过长的行
    if (!inCodeBlock && line.length > 120) {
      issues.push(`第${i + 1}行: 行过长 (${line.length}字符)`);
    }
  }
  
  return {
    file: path.relative(process.cwd(), filePath),
    lineCount: lines.length,
    issues: issues,
    hasIssues: issues.length > 0
  };
}

/**
 * 添加文档头部信息
 */
function addDocumentHeader(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath, '.md');
  const title = fileName.replace(/_/g, ' ').replace(/\d+/g, '').trim();
  
  // 如果已经有标题，跳过
  if (content.startsWith('# ')) {
    return false;
  }
  
  const header = `# ${title}\n\n> 最后更新: ${new Date().toISOString().split('T')[0]}\n\n`;
  fs.writeFileSync(filePath, header + content);
  return true;
}

/**
 * 运行Markdownlint
 */
function runMarkdownlint() {
  try {
    console.log('运行Markdownlint检查...');
    execSync('npx markdownlint "**/*.md" --ignore node_modules', { stdio: 'inherit' });
    console.log('✅ Markdownlint检查完成');
    return true;
  } catch (error) {
    console.log('⚠️ Markdownlint发现了一些问题');
    return false;
  }
}

/**
 * 运行Prettier格式化
 */
function runPrettier() {
  try {
    console.log('运行Prettier格式化...');
    execSync('npx prettier --write "**/*.md"', { stdio: 'inherit' });
    console.log('✅ Prettier格式化完成');
    return true;
  } catch (error) {
    console.error('❌ Prettier格式化失败:', error.message);
    return false;
  }
}

/**
 * 主函数
 */
async function main() {
  console.log('📚 开始文档优化检查\n');
  
  // 1. 获取所有Markdown文件
  console.log('1. 扫描Markdown文件...');
  const files = getAllMarkdownFiles(DOCS_DIR);
  console.log(`   找到 ${files.length} 个Markdown文件\n`);
  
  // 2. 检查文档格式
  console.log('2. 检查文档格式...');
  const results = [];
  let totalIssues = 0;
  
  for (const file of files) {
    const result = checkDocumentFormat(file);
    results.push(result);
    
    if (result.hasIssues) {
      totalIssues += result.issues.length;
      console.log(`   ${result.file}:`);
      result.issues.forEach(issue => console.log(`     - ${issue}`));
    }
  }
  
  console.log(`\n   发现 ${totalIssues} 个格式问题\n`);
  
  // 3. 添加文档头部
  console.log('3. 添加文档头部信息...');
  let headersAdded = 0;
  
  for (const file of files) {
    if (addDocumentHeader(file)) {
      headersAdded++;
    }
  }
  
  console.log(`   为 ${headersAdded} 个文档添加了头部信息\n`);
  
  // 4. 运行格式化工具
  console.log('4. 运行代码格式化工具...\n');
  const prettierSuccess = runPrettier();
  const markdownlintSuccess = runMarkdownlint();
  
  // 5. 生成报告
  console.log('\n📊 优化报告');
  console.log('='.repeat(50));
  console.log(`📁 扫描文件: ${files.length}`);
  console.log(`⚠️  发现问题: ${totalIssues}`);
  console.log(`📝 添加头部: ${headersAdded}`);
  console.log(`✨ Prettier: ${prettierSuccess ? '✅ 成功' : '❌ 失败'}`);
  console.log(`🔍 Markdownlint: ${markdownlintSuccess ? '✅ 通过' : '⚠️  有问题'}`);
  console.log('='.repeat(50));
  
  if (totalIssues > 0 || !markdownlintSuccess) {
    console.log('\n💡 建议: 请手动修复上述问题');
    process.exit(1);
  } else {
    console.log('\n🎉 所有文档检查通过！');
    process.exit(0);
  }
}

// 执行主函数
if (require.main === module) {
  main().catch(error => {
    console.error('❌ 脚本执行失败:', error);
    process.exit(1);
  });
}

module.exports = {
  getAllMarkdownFiles,
  checkDocumentFormat,
  addDocumentHeader
};