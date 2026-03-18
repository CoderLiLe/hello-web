#!/usr/bin/env node

/**
 * 构建脚本
 * 用于构建和部署项目
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 配置
const BUILD_DIR = path.join(__dirname, '..', 'dist');
const DOCS_DIR = path.join(__dirname, '..', 'docs');

/**
 * 清理构建目录
 */
function cleanBuildDirectory() {
  console.log('🧹 清理构建目录...');
  
  if (fs.existsSync(BUILD_DIR)) {
    fs.rmSync(BUILD_DIR, { recursive: true, force: true });
    console.log('   已清理 dist 目录');
  }
  
  // 清理VuePress缓存
  const cacheDir = path.join(__dirname, '..', '.vuepress', '.cache');
  const tempDir = path.join(__dirname, '..', '.vuepress', '.temp');
  
  [cacheDir, tempDir].forEach(dir => {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
  
  console.log('   已清理缓存文件');
}

/**
 * 检查依赖
 */
function checkDependencies() {
  console.log('📦 检查依赖...');
  
  try {
    // 检查package.json
    const packageJson = JSON.parse(
      fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8')
    );
    
    console.log(`   项目名称: ${packageJson.name}`);
    console.log(`   版本: ${packageJson.version}`);
    console.log(`   描述: ${packageJson.description}`);
    
    // 检查node_modules
    const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
    if (!fs.existsSync(nodeModulesPath)) {
      console.log('⚠️  node_modules 不存在，正在安装依赖...');
      execSync('npm install', { stdio: 'inherit' });
    } else {
      console.log('✅  依赖已安装');
    }
    
    return true;
  } catch (error) {
    console.error('❌ 检查依赖失败:', error.message);
    return false;
  }
}

/**
 * 构建文档
 */
function buildDocumentation() {
  console.log('📚 构建文档...');
  
  try {
    // 检查docs目录
    if (!fs.existsSync(DOCS_DIR)) {
      console.error('❌ docs 目录不存在');
      return false;
    }
    
    // 运行VuePress构建
    console.log('   运行 VuePress 构建...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // 检查构建结果
    if (fs.existsSync(BUILD_DIR)) {
      const files = fs.readdirSync(BUILD_DIR);
      console.log(`✅  构建完成，生成 ${files.length} 个文件`);
      return true;
    } else {
      console.error('❌ 构建目录未生成');
      return false;
    }
  } catch (error) {
    console.error('❌ 构建失败:', error.message);
    return false;
  }
}

/**
 * 验证构建结果
 */
function validateBuild() {
  console.log('🔍 验证构建结果...');
  
  try {
    // 检查必要的文件
    const requiredFiles = ['index.html', '404.html', 'assets/'];
    const missingFiles = [];
    
    for (const file of requiredFiles) {
      const filePath = path.join(BUILD_DIR, file);
      if (!fs.existsSync(filePath)) {
        missingFiles.push(file);
      }
    }
    
    if (missingFiles.length > 0) {
      console.log(`⚠️  缺少必要文件: ${missingFiles.join(', ')}`);
      return false;
    }
    
    // 检查HTML文件
    const indexHtml = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');
    if (!indexHtml.includes('<!DOCTYPE html>')) {
      console.log('⚠️  index.html 格式不正确');
      return false;
    }
    
    console.log('✅  构建验证通过');
    return true;
  } catch (error) {
    console.error('❌ 验证失败:', error.message);
    return false;
  }
}

/**
 * 生成构建报告
 */
function generateBuildReport() {
  console.log('📊 生成构建报告...');
  
  try {
    const buildTime = new Date().toISOString();
    const packageJson = JSON.parse(
      fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8')
    );
    
    // 统计文件
    function countFiles(dir) {
      let count = 0;
      
      function traverse(currentPath) {
        const items = fs.readdirSync(currentPath);
        
        for (const item of items) {
          const fullPath = path.join(currentPath, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            traverse(fullPath);
          } else {
            count++;
          }
        }
      }
      
      traverse(dir);
      return count;
    }
    
    const fileCount = fs.existsSync(BUILD_DIR) ? countFiles(BUILD_DIR) : 0;
    
    const report = {
      project: packageJson.name,
      version: packageJson.version,
      buildTime: buildTime,
      fileCount: fileCount,
      buildSize: getDirectorySize(BUILD_DIR),
      status: 'success'
    };
    
    const reportPath = path.join(BUILD_DIR, 'build-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('✅  构建报告已生成');
    console.log(`   项目: ${report.project} v${report.version}`);
    console.log(`   构建时间: ${new Date(buildTime).toLocaleString()}`);
    console.log(`   文件数量: ${report.fileCount}`);
    console.log(`   构建大小: ${formatBytes(report.buildSize)}`);
    
    return true;
  } catch (error) {
    console.error('❌ 生成报告失败:', error.message);
    return false;
  }
}

/**
 * 获取目录大小
 */
function getDirectorySize(dir) {
  if (!fs.existsSync(dir)) return 0;
  
  let totalSize = 0;
  
  function traverse(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else {
        totalSize += stat.size;
      }
    }
  }
  
  traverse(dir);
  return totalSize;
}

/**
 * 格式化字节大小
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * 主函数
 */
async function main() {
  console.log('🚀 开始构建项目\n');
  
  const steps = [
    { name: '清理构建目录', func: cleanBuildDirectory },
    { name: '检查依赖', func: checkDependencies },
    { name: '构建文档', func: buildDocumentation },
    { name: '验证构建结果', func: validateBuild },
    { name: '生成构建报告', func: generateBuildReport }
  ];
  
  let success = true;
  
  for (const step of steps) {
    console.log(`\n${step.name}`);
    console.log('-'.repeat(50));
    
    const stepSuccess = step.func();
    
    if (!stepSuccess) {
      console.log(`❌ ${step.name} 失败`);
      success = false;
      break;
    }
  }
  
  console.log('\n' + '='.repeat(50));
  
  if (success) {
    console.log('🎉 构建成功！');
    console.log(`📁 构建结果位于: ${BUILD_DIR}`);
    console.log('💡 提示: 运行 npm run serve 预览构建结果');
    process.exit(0);
  } else {
    console.log('❌ 构建失败');
    process.exit(1);
  }
}

// 执行主函数
if (require.main === module) {
  main().catch(error => {
    console.error('❌ 构建脚本执行失败:', error);
    process.exit(1);
  });
}

module.exports = {
  cleanBuildDirectory,
  checkDependencies,
  buildDocumentation,
  validateBuild,
  generateBuildReport
};