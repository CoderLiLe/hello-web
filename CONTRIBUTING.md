# 贡献指南

感谢您考虑为 Hello Web 项目做出贡献！本指南将帮助您了解如何参与项目开发。

## 🎯 贡献方式

您可以通过以下方式贡献：

1. **报告问题** - 提交Bug报告或功能建议
2. **改进文档** - 修复错别字、改进文档结构
3. **添加内容** - 添加新的学习笔记或代码示例
4. **修复Bug** - 修复代码或文档中的错误
5. **优化代码** - 改进现有代码质量

## 📋 开发流程

### 1. 环境准备

```bash
# 克隆项目
git clone https://github.com/CoderLiLe/hello-web.git
cd hello-web

# 安装依赖
npm install
```

### 2. 创建分支

```bash
# 从main分支创建新分支
git checkout -b feature/your-feature-name
```

分支命名规范：
- `feature/` - 新功能
- `fix/` - Bug修复
- `docs/` - 文档更新
- `refactor/` - 代码重构
- `style/` - 代码格式调整

### 3. 开发规范

#### 文档规范
- 使用中文编写，保持语言简洁明了
- 遵循Markdown语法规范
- 代码示例要有明确的说明
- 添加必要的截图或图示

#### 代码规范
- JavaScript: 遵循ES6+语法
- HTML: 使用语义化标签
- CSS: 使用现代CSS特性
- 添加必要的注释

#### 提交信息规范
使用约定式提交（Conventional Commits）：

```
类型(范围): 描述

[可选正文]

[可选脚注]
```

类型包括：
- `feat`: 新功能
- `fix`: Bug修复
- `docs`: 文档更新
- `style`: 代码格式
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具

示例：
```
feat(docs): 添加Vue3响应式系统文档

- 添加reactive和ref的详细说明
- 添加响应式原理图解
- 添加相关代码示例
```

### 4. 代码检查

提交前请运行：
```bash
# 检查Markdown格式
npm run lint:md

# 格式化代码
npm run format:md
```

### 5. 提交更改

```bash
# 添加更改
git add .

# 提交更改
git commit -m "feat: 添加新功能描述"

# 推送到远程
git push origin feature/your-feature-name
```

### 6. 创建Pull Request

1. 在GitHub上创建Pull Request
2. 填写清晰的PR描述
3. 关联相关Issue（如果有）
4. 等待代码审查

## 🧪 测试要求

- 文档更改：确保Markdown渲染正常
- 代码示例：确保代码可以正常运行
- 链接检查：确保所有链接有效

## 📝 文档标准

### 文件结构
```
# 标题

## 二级标题

### 三级标题

正文内容...

```javascript
// 代码示例
console.log('Hello World');
```

- 列表项1
- 列表项2

> 引用内容
```

### 图片规范
- 使用相对路径引用图片
- 图片大小适中，不超过1MB
- 添加alt文本描述

### 代码示例
- 添加语言标识（如：```javascript）
- 复杂的代码要有注释说明
- 展示输入和输出结果

## 🚨 注意事项

1. **不要提交敏感信息**（如API密钥、密码等）
2. **保持代码简洁**，避免过度设计
3. **尊重他人工作**，引用来源要注明
4. **遵守开源协议**，使用兼容的第三方库

## 🤔 需要帮助？

如果您在贡献过程中遇到问题：
1. 查看现有文档和Issue
2. 在GitHub Discussions中提问
3. 联系维护者

## 🙏 感谢

感谢您的贡献！您的每一份努力都让这个项目变得更好。

---

*最后更新：2026年3月19日*