#!/bin/bash

# 自动提交脚本
# 用于自动提交优化后的代码到GitHub

set -euo pipefail

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 日志函数
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 检查命令是否存在
check_command() {
    if ! command -v "$1" &> /dev/null; then
        log_error "命令 $1 未找到，请先安装"
        exit 1
    fi
}

# 主函数
main() {
    log_info "开始自动提交流程..."
    
    # 检查必要命令
    check_command git
    check_command npm
    
    # 获取当前分支
    CURRENT_BRANCH=$(git branch --show-current)
    log_info "当前分支: $CURRENT_BRANCH"
    
    # 检查是否有未提交的更改
    if git diff-index --quiet HEAD --; then
        log_info "没有未提交的更改"
    else
        log_info "检测到未提交的更改"
        
        # 运行优化脚本
        log_info "运行项目优化..."
        npm run update
        
        # 添加所有更改
        log_info "添加更改到暂存区..."
        git add .
        
        # 提交更改
        COMMIT_MESSAGE="chore: 项目优化和自动化配置更新 $(date '+%Y-%m-%d %H:%M:%S')"
        log_info "提交更改: $COMMIT_MESSAGE"
        git commit -m "$COMMIT_MESSAGE"
        
        # 推送到远程仓库
        log_info "推送到远程仓库..."
        git push origin "$CURRENT_BRANCH"
        
        log_success "代码已成功提交并推送到远程仓库"
        
        # 显示提交信息
        log_info "提交详情:"
        git log --oneline -1
    fi
    
    # 显示仓库状态
    log_info "仓库状态:"
    git status --short
    
    # 显示最近提交
    log_info "最近提交记录:"
    git log --oneline -5
    
    log_success "自动提交流程完成！"
}

# 处理参数
case "${1:-}" in
    "--help" | "-h")
        echo "用法: $0 [选项]"
        echo "选项:"
        echo "  --help, -h    显示帮助信息"
        echo "  --force, -f   强制提交（即使没有更改）"
        echo "  --dry-run, -d 干运行，不实际提交"
        exit 0
        ;;
    "--force" | "-f")
        log_warning "强制提交模式"
        FORCE_MODE=true
        ;;
    "--dry-run" | "-d")
        log_warning "干运行模式，不会实际提交"
        DRY_RUN=true
        ;;
    "")
        # 正常模式
        ;;
    *)
        log_error "未知选项: $1"
        echo "使用 $0 --help 查看帮助"
        exit 1
        ;;
esac

# 执行主函数
main "$@"