# 🎬 亲子动画打卡

和宝贝一起补经典动画的打卡清单。皮克斯 / 迪士尼 / 梦工厂 / 吉卜力 / 新海诚 / 其他，一键标记「已看」，进度本地保存。

**在线访问**：<https://family-movie.pages.dev> （Cloudflare Pages 部署后替换为实际地址）

## ✨ 功能

- 🎞️ **真实电影海报**：接入 TMDB，自动匹配高清海报
- ✅ **一键打卡**：点卡片标记已看，进度环实时更新
- 🏢 **厂牌分类**：皮克斯、迪士尼、梦工厂、吉卜力、新海诚，各自独立进度
- ➕ **自定义添加**：搜索片名 → 选候选 → 自动填充海报/年份/分类
- 🔍 **搜索 + 筛选**：按片名搜、按已看/未看筛
- 💾 **本地保存**：所有数据存在浏览器 localStorage，无需账号

## 🔑 启用海报（可选）

页面默认显示彩色 emoji 卡片。想换成真实海报，需要一个免费的 TMDB API Key：

1. 注册 <https://www.themoviedb.org/signup>
2. 进入 <https://www.themoviedb.org/settings/api> 申请 API Key（选 Developer，网址随便填）
3. 复制 **API Key (v3 auth)**，粘贴进页面顶部的输入框

海报会缓存到本地，只需抓取一次。

## 🚀 本地预览

直接用浏览器打开 `index.html` 即可，无需安装任何依赖。

## 📦 部署

纯静态单文件，可部署到任意静态托管：

- **Cloudflare Pages**：连接本仓库，构建命令留空，输出目录 `/`
- **Netlify**：拖拽 `index.html` 到 <https://app.netlify.com/drop>
- **GitHub Pages**：Settings → Pages → Source: main / root

## 📝 说明

- 「已看」进度存在浏览器本地，换设备 / 清缓存会重置
- 内置片单为手工整理，欢迎自行增删
