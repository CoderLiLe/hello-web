#!/usr/bin/env node

/**
 * 代码优化脚本
 * 用于整理和优化代码示例
 */

const fs = require('fs');
const path = require('path');

// 代码目录
const CODES_DIR = path.join(__dirname, '..', 'codes');
const VUE_DIR = path.join(__dirname, '..', 'vue');

// 支持的代码文件扩展名
const CODE_EXTENSIONS = ['.html', '.js', '.css', '.vue', '.ts', '.jsx', '.tsx'];

// 代码文件模板
const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{TITLE}</title>
    <style>
        /* 基础样式 */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 30px;
        }
        
        h1 {
            color: #2c3e50;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #42b883;
        }
        
        .description {
            background: #f8f9fa;
            border-left: 4px solid #42b883;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 4px;
        }
        
        .code-container {
            margin: 20px 0;
        }
        
        .demo-container {
            margin: 30px 0;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
            border: 1px solid #e9ecef;
        }
        
        footer {
            margin-top: 40px;
            text-align: center;
            color: #6c757d;
            font-size: 0.9em;
            border-top: 1px solid #e9ecef;
            padding-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>{TITLE}</h1>
        
        <div class="description">
            <p><strong>描述:</strong> {DESCRIPTION}</p>
            <p><strong>创建时间:</strong> {DATE}</p>
            <p><strong>技术栈:</strong> {TECH_STACK}</p>
        </div>
        
        <div class="code-container">
            <h2>代码实现</h2>
            <pre><code>{CODE}</code></pre>
        </div>
        
        <div class="demo-container">
            <h2>效果演示</h2>
            <!-- 演示内容将在这里 -->
            {DEMO_CONTENT}
        </div>
        
        <footer>
            <p>Hello Web - 前端学习笔记 | <a href="https://github.com/CoderLiLe/hello-web" target="_blank">GitHub仓库</a></p>
        </footer>
    </div>
    
    <script>
        // JavaScript代码将在这里执行
        {SCRIPT}
    </script>
</body>
</html>`;

// 优化HTML文件
function optimizeHtmlFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath, '.html');
    
    // 检查是否已经是优化过的格式
    if (content.includes('Hello Web - 前端学习笔记')) {
      console.log(`✓ 文件已优化: ${filePath}`);
      return false;
    }
    
    // 提取标题
    let title = fileName.replace(/-/g, ' ').replace(/_/g, ' ');
    title = title.charAt(0).toUpperCase() + title.slice(1);
    
    // 创建优化后的内容
    const optimizedContent = HTML_TEMPLATE
      .replace(/{TITLE}/g, title)
      .replace(/{DESCRIPTION}/g, '前端代码示例')
      .replace(/{DATE}/g, new Date().toISOString().split('T')[0])
      .replace(/{TECH_STACK}/g, 'HTML, CSS, JavaScript')
      .replace(/{CODE}/g, content)
      .replace(/{DEMO_CONTENT}/g, content)
      .replace(/{SCRIPT}/g, '// 示例脚本');
    
    fs.writeFileSync(filePath, optimizedContent, 'utf8');
    console.log(`✓ 优化HTML文件: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`✗ 处理HTML文件失败: ${filePath}`, error.message);
    return false;
  }
}

// 优化JavaScript文件
function optimizeJsFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 检查是否已经有文件头注释
    if (content.includes('@file') || content.includes('@description')) {
      console.log(`✓ 文件已优化: ${filePath}`);
      return false;
    }
    
    const fileName = path.basename(filePath);
    const fileHeader = `/**
 * @file ${fileName}
 * @description 前端JavaScript示例
 * @author CoderLiLe
 * @date ${new Date().toISOString().split('T')[0]}
 */

'use strict';

`;
    
    const optimizedContent = fileHeader + content;
    fs.writeFileSync(filePath, optimizedContent, 'utf8');
    console.log(`✓ 优化JavaScript文件: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`✗ 处理JavaScript文件失败: ${filePath}`, error.message);
    return false;
  }
}

// 优化CSS文件
function optimizeCssFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 检查是否已经有文件头注释
    if (content.includes('@file') || content.includes('CSS样式')) {
      console.log(`✓ 文件已优化: ${filePath}`);
      return false;
    }
    
    const fileName = path.basename(filePath);
    const fileHeader = `/*!
 * @file ${fileName}
 * @description 前端CSS样式示例
 * @author CoderLiLe
 * @date ${new Date().toISOString().split('T')[0]}
 */

`;
    
    const optimizedContent = fileHeader + content;
    fs.writeFileSync(filePath, optimizedContent, 'utf8');
    console.log(`✓ 优化CSS文件: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`✗ 处理CSS文件失败: ${filePath}`, error.message);
    return false;
  }
}

// 查找所有代码文件
function findCodeFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else {
        const ext = path.extname(item).toLowerCase();
        if (CODE_EXTENSIONS.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// 根据文件类型选择优化函数
function optimizeCodeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  switch (ext) {
    case '.html':
      return optimizeHtmlFile(filePath);
    case '.js':
      return optimizeJsFile(filePath);
    case '.css':
      return optimizeCssFile(filePath);
    default:
      console.log(`⚠️  跳过不支持的文件类型: ${filePath}`);
      return false;
  }
}

// 主函数
async function main() {
  console.log('🚀 开始优化代码文件...\n');
  
  // 查找所有代码文件
  const codeFiles = findCodeFiles(CODES_DIR);
  const vueFiles = findCodeFiles(VUE_DIR);
  const allFiles = [...codeFiles, ...vueFiles];
  
  console.log(`📁 找到 ${allFiles.length} 个代码文件\n`);
  
  // 优化每个文件
  let optimizedCount = 0;
  for (const file of allFiles) {
    const relativePath = path.relative(process.cwd(), file);
    const wasOptimized = optimizeCodeFile(file);
    if (wasOptimized) optimizedCount++;
  }
  
  console.log(`\n✅ 代码优化完成！`);
  console.log(`📊 统计:`);
  console.log(`  总文件数: ${allFiles.length}`);
  console.log(`  优化文件数: ${optimizedCount}`);
  console.log(`  无需优化: ${allFiles.length - optimizedCount}`);
  
  // 生成代码文件清单
  console.log('\n📋 生成代码文件清单...');
  generateCodeIndex(allFiles);
}

// 生成代码文件索引
function generateCodeIndex(files) {
  const index = {
    html: [],
    js: [],
    css: [],
    vue: [],
    other: []
  };
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase().replace('.', '');
    const relativePath = path.relative(process.cwd(), file);
    
    if (index[ext]) {
      index[ext].push(relativePath);
    } else {
      index.other.push(relativePath);
    }
  }
  
  const indexContent = `# 代码文件索引
生成时间: ${new Date().toISOString()}

## 文件统计
- HTML文件: ${index.html.length} 个
- JavaScript文件: ${index.js.length} 个  
- CSS文件: ${index.css.length} 个
- Vue文件: ${index.vue.length} 个
- 其他文件: ${index.other.length} 个
- 总计: ${files.length} 个

## 文件列表

### HTML文件 (${index.html.length})
${index.html.map(file => `- ${file}`).join('\n')}

### JavaScript文件 (${index.js.length})
${index.js.map(file => `- ${file}`).join('\n')}

### CSS文件 (${index.css.length})
${index.css.map(file => `- ${file}`).join('\n')}

### Vue文件 (${index.vue.length})
${index.vue.map(file => `- ${file}`).join('\n')}

### 其他文件 (${index.other.length})
${index.other.map(file => `- ${file}`).join('\n')}
`;
  
  const indexPath = path.join(__dirname, '..', 'CODE_INDEX.md');
  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log(`✅ 代码索引已生成: ${indexPath}`);
}

// 执行主函数
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  optimizeHtmlFile,
  optimizeJsFile,
  optimizeCssFile,
  findCodeFiles,
  generateCodeIndex
};