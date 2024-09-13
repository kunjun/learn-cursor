---
title: 什么是 Cursor Composer？如何利用 AI 构建完整应用程序
description: "我发现了一个我还未充分利用的强大 Beta 功能：**Cursor Composer**。\U0001F440探索 Cursor Composer：提升代码编写的新利器"
date: '2024-08-16T03:57:46.153Z'
lastModified: '2024-09-13T07:25:13.654Z'
---
# 探索 Cursor Composer：提升代码编写的新利器

在过去的一段时间里，我一直使用 Cursor 来代替 VS Code，这极大地加速了我的开发过程。最近，我发现了一个我还未充分利用的强大 Beta 功能：**Cursor Composer**。👀

这个新版本引入了一个实验性的多文件编辑功能。要启用它，点击设置齿轮，进入 Beta 选项，激活 "Composer"。使用快捷键 `Cmd+I` 即可开始使用。

## 什么是 Cursor Composer？

Cursor Composer 能够在很大程度上为你编写完整的应用程序（在合理范围内）。它将 Cursor 的 AI 代码辅助从只编辑单行代码和单个页面，提升到了同时编辑和创建多个页面。

只需提供指令，它就会开始工作。如果你已经从上方的图片猜到了，我使用 Composer 和 Claude AI 创建了一个 Duolingo 克隆应用作为演示。以下是整个过程的视频：

<iframe width="560" height="315" src="https://youtu.be/W4QmPwNwt8E" frameborder="0" allowfullscreen></iframe>

## 如何访问 Composer：Cursor 设置

自 Cursor 0.40 版本起，Composer 已默认开启，但你也可以在 Cursor 设置中打开或关闭它。路径是：`Cursor > Settings > Cursor Settings`。

![Mac 上的 Cursor 设置菜单截图] (https://prototyprio.gumlet.io/strapi/a13d8dfab6eebbdc961374b96caf165b.png?w=1536&q=75&format=avif&compress=true&dpr=1"Cursor > Settings > Cursor Settings")

Cursor 设置是一个非常有用的部分，你还可以在其中定义你自己的 AI 规则，例如"不要使用 TypeScript"等。

![Cursor 设置：启用 Cursor Composer] (https://prototyprio.gumlet.io/strapi/41b0b026ba39b5293692188381e68208.png?w=1536&q=75&format=avif&compress=true&dpr=1"Cursor 设置：启用 Cursor Composer")

方便的"Rules for AI"部分位于 General 选项卡下：

![Cursor 设置：AI 规则](https://prototyprio.gumlet.io/strapi/749dff2babc25e71362d11ba8bc98402.png?w=1536&q=75&format=avif&compress=true&dpr=1"Cursor 设置：AI 规则")

## Cursor 快捷键：CMD+I 和 CMD+SHIFT+I

在激活 Composer 后，可以使用快捷键 `CMD+I` 或 `CMD+Shift+I` 打开它。它们的区别如下：

- **CMD+I**：以浮动窗口打开 Composer，你可以调整其大小和位置——这在你复制粘贴命令到终端时非常方便。

![https://sfo2.digitaloceanspaces.com/prototypr-media/strapi/58a64e6bda376b4e80f082babd9f5578.mov]
浮动的 Composer，便于移动、调整大小，并在 Composer 创建的文件标签间导航
<iframe width="560" height="315" src="https://sfo2.digitaloceanspaces.com/prototypr-media/strapi/58a64e6bda376b4e80f082babd9f5578.mov" frameborder="0" allowfullscreen></iframe>

在视频的 3:42 处可以看到这一部分。

- **CMD+SHIFT+I**：全屏打开 Composer，包含三个面板：一个进度面板，允许你导航文件；中央的文件区域；右侧的聊天面板，用于添加更多提示。这让你能够更专注地了解正在发生的事情。

!https://sfo2.digitaloceanspaces.com/prototypr-media/strapi/bafd60cb01c91e2e885f9eab65485a83.mp4
[全屏的 Composer，包含三个面板]
<iframe width="560" height="315" src="https://sfo2.digitaloceanspaces.com/prototypr-media/strapi/bafd60cb01c91e2e885f9eab65485a83.mp4" frameborder="0" allowfullscreen></iframe>

这一部分可在视频的 2:52 处查看。

## 善用所有快捷键

总体来说，使用 Cursor 的 Composer 进行编码，真的减轻了我的负担。我过去不喜欢的很多代码工作是重复创建本质上是样板代码的无聊内容。

我仍然使用其他两个快捷键：`CMD+K`（内联提示）和 `CMD+L`（侧边栏聊天提示），以及 `CMD+I`。它们各有妙用。

- **CMD + K**：内联提示示例：

- **CMD + L**：侧边栏聊天示例

通过结合使用这些工具，我的开发效率得到了显著提升。
