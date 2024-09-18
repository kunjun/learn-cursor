---
title: "什么是 Cursor Composer？如何使用 AI 构建完整应用"
date: "2024-09-03"
excerpt: "Cursor 中的 Composer 基本上可以为你编写完整的应用程序（在合理范围内）。它将 Cursor 的 AI 代码辅助从仅编辑单行代码和单个页面，发展到一次性编辑和创建多个页面。"
views: 1871
---


我已经使用 Cursor 替代 VS Code 一段时间了，它真的加快了我的开发速度。然而在过去的一周，我发现了一个我还没有利用的非常强大的测试功能：**Cursor Composer。👀**

> 这个版本带来了一个新的实验性多文件编辑功能。要启用它，点击设置齿轮，前往 Beta，并激活 "Composer"。要使用它，按 Cmd+I。

## 什么是 Cursor Composer？

Cursor 中的 Composer 基本上可以为你编写完整的应用程序（在合理范围内）。它将 Cursor 的 AI 代码辅助从仅编辑单行代码和单个页面，发展到一次性编辑和创建多个页面。

提供给它指令，它就会开始工作。如果你还没有从英雄图像中猜到，我提前使用 Composer 和 Claude 创建了一个 Duolingo 克隆应用作为演示。这是整个过程的视频：

[观看演示视频](https://youtu.be/W4QmPwNwt8E)

---

## 如何访问 Composer：Cursor 设置

从 Cursor 0.40 版本开始，Composer 默认开启，但你也可以在 **Cursor 设置** 中开启或关闭它。在这里访问 Cursor > 设置 > Cursor 设置：

![图片描述](https://prototyprio.gumlet.io/strapi/a13d8dfab6eebbdc961374b96caf165b.png?w=1400&q=75&format=avif&compress=true&dpr=1)

Cursor 设置菜单

Cursor 设置是一个真正有用的部分，你还可以在这里定义你自己的 AI 规则，比如 "不要使用 TypeScript"，等等：

Cursor 设置：启用 Composer

![图片描述](https://prototyprio.gumlet.io/strapi/41b0b026ba39b5293692188381e68208.png?w=1400&q=75&format=avif&compress=true&dpr=1)

那个方便的 "**AI 规则**" 部分在常规标签页：

AI 规则

![图片描述](https://prototyprio.gumlet.io/strapi/749dff2babc25e71362d11ba8bc98402.png?w=1400&q=75&format=avif&compress=true&dpr=1)

---

---

## Cursor 快捷方式：CMD+I 和 CMD+SHIFT+I

激活 Composer 后，要打开它，请使用快捷方式 CMD+I 或 CMD+Shift+I。这是它们之间的区别：

- **CMD+I：** 打开一个悬浮窗口中的 Cursor，你可以调整大小并移动它——这在你将命令复制粘贴到终端时很方便。悬浮的 Composer 让你可以移动它，调整大小，并在 Composer 创建的文件标签之间导航。

  在 YouTube 视频的 3:42 处查看这部分。
  [点击这里观看视频](https://sfo2.digitaloceanspaces.com/prototypr-media/strapi/58a64e6bda376b4e80f082babd9f5578.mov)

- **CMD+SHIFT+I：** 打开全屏 Cursor，带有 3 个面板：一个进度面板让你导航文件，中间的文件部分，以及右侧用于添加更多提示的聊天面板。这为你提供了一个更专注的视图。全屏 Composer 带有 3 个面板。

  在 YouTube 视频的 2:52 处查看这部分。
  [点击这里观看视频](https://sfo2.digitaloceanspaces.com/prototypr-media/strapi/bafd60cb01c91e2e885f9eab65485a83.mp4)

---

## 使用所有快捷方式

总的来说，在 Cursor 中使用 Composer 编码真的减轻了我的负担。我在编码中讨厌做的很多事情都是重复无聊的事情，这些基本上是样板代码。

我仍然使用其他两个快捷方式：**CMD+K**（内联提示）和 **CMD+L**（侧边栏聊天提示）以及 **CMD+I**。它们适用于不同的事情。

### CMD + K：内联提示示例：

### CMD + L：侧边栏聊天示例：

---

- 使用 Cursor 构建全栈应用
- Claude Artifacts


