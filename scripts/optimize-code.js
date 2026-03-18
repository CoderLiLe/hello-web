#!/usr/bin/env node

/**
 * 代码优化脚本
 * 用于检查和优化HTML、CSS、JavaScript代码
 */

const fs = require('fs');
const path = require('path');

// 配置
const CODE_DIRS = [
  path.join(__dirname, '..', 'codes'),
  path.join(__dirname, '..', 'vue')
];

const IGNORE_PATTERNS = [
  /node_modules/,
  /\.git/,
  /dist/,
  /\.vuepress/
];

/**
 * 获取所有代码文件
 */
function getAllCodeFiles() {
  const files = [];
  
  function traverse(dir) {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      
      // 检查是否忽略
      const shouldIgnore = IGNORE_PATTERNS.some(pattern => 
        pattern.test(fullPath)
      );
      
      if (shouldIgnore) continue;
      
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (isCodeFile(fullPath)) {
        files.push(fullPath);
      }
    }
  }
  
  CODE_DIRS.forEach(dir => traverse(dir));
  return files;
}

/**
 * 检查是否是代码文件
 */
function isCodeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ['.html', '.htm', '.css', '.js', '.vue', '.ts'].includes(ext);
}

/**
 * 检查HTML文件
 */
function checkHtmlFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  // 检查DOCTYPE
  if (!content.includes('<!DOCTYPE html>')) {
    issues.push('缺少 DOCTYPE 声明');
  }
  
  // 检查字符编码
  if (!content.includes('charset="UTF-8"') && !content.includes('charset=utf-8')) {
    issues.push('缺少 UTF-8 字符编码声明');
  }
  
  // 检查viewport
  if (!content.includes('viewport')) {
    issues.push('缺少 viewport 声明');
  }
  
  // 检查语义化标签
  const semanticTags = ['header', 'nav', 'main', 'section', 'article', 'aside', 'footer'];
  const hasSemanticTags = semanticTags.some(tag => content.includes(`<${tag}`));
  
  if (!hasSemanticTags) {
    issues.push('建议使用语义化HTML标签');
  }
  
  return issues;
}

/**
 * 检查CSS文件
 */
function checkCssFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  // 检查CSS选择器复杂度
  const lines = content.split('\n');
  let complexSelectors = 0;
  
  for (const line of lines) {
    if (line.includes('{') && !line.includes('@')) {
      const selector = line.trim().split('{')[0].trim();
      
      // 检查选择器复杂度
      const depth = (selector.match(/[>+~]/g) || []).length;
      const classes = (selector.match(/\.[a-zA-Z_-]+/g) || []).length;
      const ids = (selector.match(/#[a-zA-Z_-]+/g) || []).length;
      
      if (depth > 2 || classes > 3 || ids > 1) {
        complexSelectors++;
      }
    }
  }
  
  if (complexSelectors > 0) {
    issues.push(`发现 ${complexSelectors} 个复杂CSS选择器`);
  }
  
  // 检查未使用的样式（简单检查）
  const styleDefinitions = content.match(/[.#][a-zA-Z_-]+\s*{/g) || [];
  if (styleDefinitions.length > 50) {
    issues.push('CSS文件较大，建议拆分');
  }
  
  return issues;
}

/**
 * 检查JavaScript文件
 */
function checkJsFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  // 检查ES6+特性使用
  const es6Features = {
    'const/let': /(const|let)\s+\w+\s*=/g,
    'arrow functions': /=>/g,
    'template literals': /`[^`]*\$\{[^}]*\}[^`]*`/g,
    'destructuring': /{.*}=/g,
    'spread operator': /\.\.\./g
  };
  
  let es6Usage = 0;
  for (const [feature, pattern] of Object.entries(es6Features)) {
    const matches = content.match(pattern);
    if (matches) {
      es6Usage += matches.length;
    }
  }
  
  if (es6Usage === 0) {
    issues.push('建议使用ES6+语法特性');
  }
  
  // 检查代码长度
  const lines = content.split('\n').length;
  if (lines > 200) {
    issues.push(`文件较大 (${lines}行)，建议拆分`);
  }
  
  // 检查注释比例
  const commentLines = (content.match(/\/\/.*|\/\*[\s\S]*?\*\//g) || []).length;
  const commentRatio = commentLines / lines;
  
  if (commentRatio < 0.1 && lines > 50) {
    issues.push('代码注释较少，建议添加更多注释');
  }
  
  return issues;
}

/**
 * 优化HTML文件
 */
function optimizeHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // 添加DOCTYPE如果缺失
  if (!content.includes('<!DOCTYPE html>')) {
    content = '<!DOCTYPE html>\n' + content;
    modified = true;
  }
  
  // 添加meta charset如果缺失
  if (!content.includes('charset="UTF-8"') && !content.includes('charset=utf-8')) {
    content = content.replace(
      /<head>/i,
      '<head>\n  <meta charset="UTF-8">'
    );
    modified = true;
  }
  
  // 添加viewport如果缺失
  if (!content.includes('viewport')) {
    content = content.replace(
      /<meta charset="[^"]+">/,
      '$&\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">'
    );
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
  }
  
  return modified;
}

/**
 * 生成优化报告
 */
function generateOptimizationReport(results) {
  console.log('\n📊 代码优化报告');
  console.log('='.repeat(60));
  
  let totalFiles = 0;
  let totalIssues = 0;
  let totalOptimized = 0;
  
  for (const [fileType, fileResults] of Object.entries(results)) {
    console.log(`\n${fileType.toUpperCase()} 文件:`);
    console.log('-'.repeat(40));
    
    for (const result of fileResults) {
      totalFiles++;
      
      if (result.issues.length > 0) {
        console.log(`\n  ${path.relative(process.cwd(), result.file)}:`);
        result.issues.forEach(issue => {
          console.log(`    ⚠️  ${issue}`);
          totalIssues++;
        });
      }
      
      if (result.optimized) {
        totalOptimized++;
        console.log(`  ✅ ${path.relative(process.cwd(), result.file)}: 已优化`);
      }
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`📁 扫描文件: ${totalFiles}`);
  console.log(`⚠️  发现问题: ${totalIssues}`);
  console.log(`✨ 优化文件: ${totalOptimized}`);
  console.log('='.repeat(60));
  
  return {
    totalFiles,
    totalIssues,
    totalOptimized
  };
}

/**
 * 主函数
 */
async function main() {
  console.log('🔧 开始代码优化检查\n');
  
  // 获取所有代码文件
  console.log('1. 扫描代码文件...');
  const files = getAllCodeFiles();
  console.log(`   找到 ${files.length} 个代码文件\n`);
  
  // 按类型分类
  const htmlFiles = files.filter(f => f.endsWith('.html') || f.endsWith('.htm'));
  const cssFiles = files.filter(f => f.endsWith('.css'));
  const jsFiles = files.filter(f => f.endsWith('.js'));
  
  console.log(`   HTML文件: ${htmlFiles.length}`);
  console.log(`   CSS文件: ${cssFiles.length}`);
  console.log(`   JavaScript文件: ${jsFiles.length}\n`);
  
  // 检查文件
  console.log('2. 检查代码质量...\n');
  
  const results = {
    html: [],
    css: [],
    js: []
  };
  
  // 检查HTML文件
  for (const file of htmlFiles) {
    const issues = checkHtmlFile(file);
    const optimized = optimizeHtmlFile(file);
    
    results.html.push({
      file,
      issues,
      optimized
    });
  }
  
  // 检查CSS文件
  for (const file of cssFiles) {
    const issues = checkCssFile(file);
    
    results.css.push({
      file,
      issues,
      optimized: false // CSS优化需要手动进行
    });
  }
  
  // 检查JavaScript文件
  for (const file of jsFiles) {
    const issues = checkJsFile(file);
    
    results.js.push({
      file,
      issues,
      optimized: false // JS优化需要手动进行
    });
  }
  
  // 生成报告
  const report = generateOptimizationReport(results);
  
  // 提供建议
  console.log('\n💡 优化建议:');
  console.log('-'.repeat(40));
  
  if (report.totalIssues > 0) {
    console.log('1. 修复发现的问题');
    console.log('2. 使用现代HTML5语义化标签');
    console.log('3. 优化CSS选择器复杂度');
    console.log('4. 使用ES6+ JavaScript语法');
    console.log('5. 添加适当的代码注释');
    console.log('\n🔧 可以运行以下命令:');
    console.log('   npm run format:md    # 格式化文档');
    console.log('   npm run optimize:all # 运行所有优化');
  } else {
    console.log('✅ 代码质量良好，无需优化');
  }
  
  console.log('\n🎉 代码检查完成！');
}

// 执行主函数
if (require.main === module) {
  main().catch(error => {
    console.error('❌ 代码优化脚本执行失败:', error);
    process.exit(1);
  });
}

module.exports = {
  getAllCodeFiles,
  checkHtmlFile,
  checkCssFile,
  checkJsFile,
  optimizeHtmlFile
};