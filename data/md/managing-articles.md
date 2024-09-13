---
title: What's Cursor Composer? How to Build Full Apps with AI
description: 'Cursor Composer: A Powerful Beta Feature for Multi-File Editing'
date: '2024-08-11T13:16:44.231Z'
lastModified: '2024-09-13T06:41:24.377Z'
---
# Cursor Composer: A Powerful Beta Feature for Multi-File Editing

I've been using Cursor instead of VS Code for a while, and it's really sped up my development. Over the last week though, I saw a really powerful beta feature I wasn't making use of yet: Cursor Composer. 👀

This build comes with a new experimental multi-file editing feature. To enable it, click the settings gear, head to Beta, and activate "Composer." To use it, hit Cmd+I.

## What's Cursor Composer?

Composer in Cursor can pretty much write a full app for you (within reason). It has progressed Cursor's AI code assistance from just editing single lines of code and individual pages, to editing and creating multiple pages at once.

Provide it with instructions, and away it goes. If you haven't guessed already from the hero image, I went ahead and used Composer and Claude to create a Duolingo clone app as a demo. Here's the entire process on video:

[视频入口占位符]

You can try the live version here too:

[Duolingo Clone 链接占位符]

## How to access Composer: Cursor Settings

Since Cursor 0.40, Composer turned on by default, but you can also turn it on and off from Cursor Settings. Access it here Cursor>Settings>Cursor Settings:

![Screenshot of Cursor Settings menu on Mac: Cursor>Settings>Cursor Settings](图片链接占位符)

Cursor Settings is a really useful section where you can also define your own AI rules, such as 'don't use typescript', and more:

![Cursor Settings: Enable Cursor Composer](图片链接占位符)

That handy 'Rules for AI' section is on the general tab:

![Cursor settings: Rules for AI](图片链接占位符)

## Cursor Shortcuts: CMD+i and CMD+SHIFT+i

With Composer activated, to open it, use the shortcut CMD+i or CMD+Shift+i. Here's the differences:

- **CMD+I**: Opens cursor in a floating window that you can resize and move around - this is handy when you're copy pasting commands into the terminal:

![The floating Composer lets you move it around, resize it, and navigate between tabs for files that Composer has created.](图片链接占位符)

See this bit at 3:42 of the YouTube vid

- **CMD+SHIFT+I**: Opens the full screen cursor with 3 panels: a progress panel that lets you navigate files, the central file section, and a chat panel on the right for adding more prompts. This gives you a more focused view of what's going on

![The full screen Composer with 3 panels.](图片链接占位符)

See the YouTube vid at 2:52 for this bit.

## Use all the shortcuts

Overall, coding with Composer in Cursor has really taken a weight off my shoulders. A lot of what I hated doing with code was recreating boring stuff that's essentially boilerplate code.

I still use the other 2 shortcuts: CMD+K (inline prompt) and CMD+L (sidebar chat prompt) along with CMD+I. They're great for different things.

CMD + K: Inline prompt example:
![CKD + K: Inline prompt example](图片链接占位符)

CMD + L: Sidebar chat example
![CKD + L: Sidebar chat example](图片链接占位符)
