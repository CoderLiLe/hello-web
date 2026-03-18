#!/usr/bin/env node

/**
 * 自动提交脚本
 * 用于自动提交代码到GitHub
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 配置
const COMMIT_TYPES = {
  feat: '新功能',
  fix: 'Bug修复',
  docs: '文档更新',
  style: '代码格式调整',
  refactor: '代码重构',
  test: '测试相关',
  chore: '构建过程或辅助工具',
  perf: '性能优化',
  ci: 'CI配置'
};

/**
 * 获取Git状态
 */
function getGitStatus() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    return status.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    console.error('❌ 获取Git状态失败:', error.message);
    return [];
  }
}

/**
 * 获取变更文件
 */
function getChangedFiles() {
  const statusLines = getGitStatus();
  const files = {
    added: [],
    modified: [],
    deleted: [],
    renamed: []
  };
  
  for (const line of statusLines) {
    const status = line.substring(0, 2);
    const file = line.substring(3);
    
    if (status.startsWith('A')) {
      files.added.push(file);
    } else if (status.startsWith('M')) {
      files.modified.push(file);
    } else if (status.startsWith('D')) {
      files.deleted.push(file);
    } else if (status.startsWith('R')) {
      files.renamed.push(file);
    }
  }
  
  return files;
}

/**
 * 分析变更类型
 */
function analyzeChanges(files) {
  const changes = {
    type: 'chore', // 默认类型
    scope: '',
    description: '自动提交'
  };
  
  // 根据文件类型判断变更类型
  const allFiles = [
    ...files.added,
    ...files.modified,
    ...files.deleted,
    ...files.renamed
  ];
  
  // 检查文档变更
  const hasDocs = allFiles.some(file => 
    file.endsWith('.md') || 
    file.includes('docs/') ||
    file.includes('README')
  );
  
  // 检查代码变更
  const hasCode = allFiles.some(file => 
    file.endsWith('.js') || 
    file.endsWith('.ts') ||
    file.endsWith('.vue') ||
    file.endsWith('.html') ||
    file.endsWith('.css')
  );
  
  // 检查配置变更
  const hasConfig = allFiles.some(file => 
    file.endsWith('.json') || 
    file.endsWith('.yml') ||
    file.endsWith('.yaml') ||
    file.includes('package.json') ||
    file.includes('.github/')
  );
  
  // 确定变更类型
  if (hasDocs && !hasCode) {
    changes.type = 'docs';
    changes.scope = 'docs';
    changes.description = '更新文档';
  } else if (hasCode) {
    // 检查是否是Bug修复
    const hasBugFix = allFiles.some(file => 
      file.includes('fix') || 
      file.includes('bug') ||
      allFiles.some(f => f.includes('error') || f.includes('issue'))
    );
    
    if (hasBugFix) {
      changes.type = 'fix';
      changes.description = '修复问题';
    } else {
      changes.type = 'feat';
      changes.description = '添加新功能';
    }
    
    // 确定范围
    if (allFiles.some(f => f.includes('scripts/'))) {
      changes.scope = 'scripts';
    } else if (allFiles.some(f => f.includes('docs/'))) {
      changes.scope = 'docs';
    } else if (allFiles.some(f => f.includes('.github/'))) {
      changes.scope = 'ci';
      changes.type = 'ci';
    }
  } else if (hasConfig) {
    changes.type = 'chore';
    changes.scope = 'config';
    changes.description = '更新配置';
  }
  
  // 生成详细描述
  const fileCount = allFiles.length;
  if (fileCount === 1) {
    changes.description += `: ${path.basename(allFiles[0])}`;
  } else if (fileCount > 1) {
    changes.description += ` (${fileCount}个文件)`;
  }
  
  return changes;
}

/**
 * 生成提交信息
 */
function generateCommitMessage(changes) {
  let message = `${changes.type}`;
  
  if (changes.scope) {
    message += `(${changes.scope})`;
  }
  
  message += `: ${changes.description}\n\n`;
  
  // 添加文件列表
  const allFiles = getChangedFiles();
  const fileLists = [];
  
  if (allFiles.added.length > 0) {
    fileLists.push(`新增文件:\n${allFiles.added.map(f => `  - ${f}`).join('\n')}`);
  }
  
  if (allFiles.modified.length > 0) {
    fileLists.push(`修改文件:\n${allFiles.modified.map(f => `  - ${f}`).join('\n')}`);
  }
  
  if (allFiles.deleted.length > 0) {
    fileLists.push(`删除文件:\n${allFiles.deleted.map(f => `  - ${f}`).join('\n')}`);
  }
  
  if (allFiles.renamed.length > 0) {
    fileLists.push(`重命名文件:\n${allFiles.renamed.map(f => `  - ${f}`).join('\n')}`);
  }
  
  if (fileLists.length > 0) {
    message += fileLists.join('\n\n');
  }
  
  // 添加时间戳
  message += `\n\n自动提交于: ${new Date().toISOString()}`;
  
  return message;
}

/**
 * 运行代码检查
 */
function runCodeChecks() {
  console.log('🔍 运行代码检查...');
  
  try {
    // 检查是否有package.json
    if (fs.existsSync('package.json')) {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      // 运行lint命令如果存在
      if (packageJson.scripts && packageJson.scripts.lint) {
        console.log('   运行 lint 命令...');
        execSync('npm run lint', { stdio: 'inherit' });
      }
      
      // 运行测试如果存在
      if (packageJson.scripts && packageJson.scripts.test) {
        console.log('   运行测试...');
        execSync('npm test', { stdio: 'inherit' });
      }
    }
    
    console.log('✅ 代码检查完成');
    return true;
  } catch (error) {
    console.error('❌ 代码检查失败:', error.message);
    return false;
  }
}

/**
 * 提交代码
 */
function commitChanges(commitMessage) {
  console.log('📝 提交代码...');
  
  try {
    // 添加所有文件
    execSync('git add .', { stdio: 'inherit' });
    
    // 提交
    execSync(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`, { 
      stdio: 'inherit' 
    });
    
    console.log('✅ 代码提交完成');
    return true;
  } catch (error) {
    console.error('❌ 提交失败:', error.message);
    return false;
  }
}

/**
 * 推送代码
 */
function pushChanges() {
  console.log('🚀 推送代码到远程仓库...');
  
  try {
    // 获取当前分支
    const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    
    // 推送
    execSync(`git push origin ${branch}`, { stdio: 'inherit' });
    
    console.log(`✅ 代码已推送到 origin/${branch}`);
    return true;
  } catch (error) {
    console.error('❌ 推送失败:', error.message);
    return false;
  }
}

/**
 * 生成提交报告
 */
function generateCommitReport(success, changes, commitMessage) {
  console.log('\n📊 提交报告');
  console.log('='.repeat(60));
  
  if (success) {
    console.log('🎉 自动提交成功！');
  } else {
    console.log('❌ 自动提交失败');
  }
  
  console.log('\n变更摘要:');
  console.log('-'.repeat(40));
  console.log(`类型: ${COMMIT_TYPES[changes.type] || changes.type}`);
  console.log(`范围: ${changes.scope || '无'}`);
  console.log(`描述: ${changes.description}`);
  
  const files = getChangedFiles();
  const totalFiles = Object.values(files).reduce((sum, arr) => sum + arr.length, 0);
  
  console.log(`\n文件统计:`);
  console.log(`  新增: ${files.added.length}`);
  console.log(`  修改: ${files.modified.length}`);
  console.log(`  删除: ${files.deleted.length}`);
  console.log(`  重命名: ${files.renamed.length}`);
  console.log(`  总计: ${totalFiles}`);
  
  console.log('\n提交信息:');
  console.log('-'.repeat(40));
  console.log(commitMessage.split('\n')[0]); // 只显示第一行
  
  console.log('='.repeat(60));
}

/**
 * 主函数
 */
async function main() {
  console.log('🤖 开始自动提交流程\n');
  
  // 1. 检查Git状态
  console.log('1. 检查Git状态...');
  const changedFiles = getChangedFiles();
  const totalChanges = Object.values(changedFiles).reduce((sum, arr) => sum + arr.length, 0);
  
  if (totalChanges === 0) {
    console.log('✅ 没有需要提交的变更');
    process.exit(0);
  }
  
  console.log(`   发现 ${totalChanges} 个变更\n`);
  
  // 2. 分析变更
  console.log('2. 分析变更类型...');
  const changes = analyzeChanges(changedFiles);
  console.log(`   变更类型: ${changes.type}(${changes.scope}): ${changes.description}\n`);
  
  // 3. 生成提交信息
  console.log('3. 生成提交信息...');
  const commitMessage = generateCommitMessage(changes);
  console.log(`   提交信息: ${commitMessage.split('\n')[0]}\n`);
  
  // 4. 运行代码检查
  const checksPassed = runCodeChecks();
  if (!checksPassed) {
    console.log('⚠️  代码检查未通过，是否继续提交？(y/n)');
    // 这里可以添加用户确认逻辑
  }
  
  // 5. 提交代码
  const commitSuccess = commitChanges(commitMessage);
  if (!commitSuccess) {
    console.error('❌ 提交失败，终止流程');
    process.exit(1);
  }
  
  // 6. 推送代码
  console.log('\n4. 推送代码...');
  const pushSuccess = pushChanges();
  
  // 7. 生成报告
  generateCommitReport(pushSuccess, changes, commitMessage);
  
  if (pushSuccess) {
    console.log('\n🎉 自动提交流程完成！');
    process.exit(0);
  } else {
    console.log('\n⚠️  代码已提交但推送失败，请手动推送');
    process.exit(1);
  }
}

// 执行主函数
if (require.main === module) {
  main().catch(error => {
    console.error('❌ 自动提交脚本执行失败:', error);
    process.exit(1);
  });
}

module.exports = {
  getGitStatus,
  getChangedFiles,
  analyzeChanges,
  generateCommitMessage,
  runCodeChecks,
  commitChanges,
  pushChanges
};