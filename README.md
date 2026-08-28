# HackStack

A single-page dashboard listing the 16 AI and dev tools your team uses during a hackathon build — from idea to demo day — each card links straight to the tool.

## Files

```
hackstack/
├── index.html   → page structure and content
├── style.css    → all styling (dark/light theme, cards, layout)
├── script.js    → tool data, search, theme toggle
└── README.md    → this file
```

## How to run

No build step, no install. Just open `index.html` in a browser — or for the search/theme features to work reliably, serve the folder locally:

```bash
# with Python
python3 -m http.server 8000

# then open
http://localhost:8000
```

You can also drag the whole `hackstack/` folder onto a static host (GitHub Pages, Vercel, Netlify) and it'll work as-is.

## Features

- **16 tool cards** in workflow order (Plan → Research → Design → Code → Backend → Ship → Present), each with its real logo and a one-line description
- **Live search** — filter by tool name or description (`Ctrl/Cmd + K` to focus the search box)
- **Dark / light theme toggle** in the top right
- Built with **HTML, CSS, vanilla JS, and Bootstrap 5** (via CDN) — no frameworks, no dependencies to install

## Editing the tool list

Open `script.js` and edit the `TOOLS` array. Each entry looks like:

```js
{ step: 1, name: "ChatGPT", icon: "🧠", logo: "openai", desc: "...", url: "https://chat.openai.com" }
```

- `logo` is a [Simple Icons](https://simpleicons.org) slug, loaded from `cdn.simpleicons.org`. Set it to `null` to fall back to the emoji in `icon`.
- Cards render in ascending `step` order automatically.

## Credits

Built by **Kabish** for the hackathon.
