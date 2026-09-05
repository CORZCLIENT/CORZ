# Corz GitHub Pages Website

A polished, framework-free Corz landing page based on the supplied design.

## Folder structure

- `index.html` — page structure and editable content
- `css/style.css` — all styling
- `js/main.js` — counters, mobile menu, clip filters, video playback and reveal animations
- `assets/images/` — screenshots, thumbnails, favicon and image placeholders
- `assets/clips/` — your own `.mp4` / `.webm` showcase clips

## Before publishing

Search the project for these placeholders and replace them:

- `YOUR_INVITE` → your Discord invite
- `YOUR_USER/YOUR_REPO` → your GitHub repository
- `YOUR_PAYMENT_LINK.example` → your real premium checkout URL
- `data-count="..."` → verified community/player numbers
- clip filenames in `index.html` → your actual videos
- `assets/images/clip-placeholder.svg` → your preferred thumbnails if desired

### Download hosting

For GitHub Pages, the recommended setup is:

1. Push the website to a GitHub repository.
2. Upload your client archive/installer to a **GitHub Release**.
3. Keep the website button pointing to `/releases/latest`.
4. Enable **Settings → Pages → Deploy from branch**.

Do not put large client binaries directly into the normal Git repository if you can avoid it; GitHub Releases are better for downloadable builds.

## Important copy note

The page includes a server-rules notice. Keep it accurate for your project and only advertise claims that you can substantiate. In particular, do not publish "undetected" or similar security/evasion claims unless you have a reliable basis for them and are comfortable standing behind the claim.

## Adding clips

Put files such as:

- `assets/clips/combat-01.mp4`
- `assets/clips/building-01.mp4`
- `assets/clips/movement-01.mp4`
- `assets/clips/visuals-01.mp4`

in the clips folder, or change the `<source src="...">` values in `index.html`.

## Minecraft-like font

The site uses **Press Start 2P** for small pixel labels. It is a pixel-style web font rather than the official Minecraft typeface.

## Local preview

You can double-click `index.html` for a basic preview. For the best local behavior, use any static server, then open the local address in your browser.

Example with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Disclaimer

Corz is not affiliated with Mojang Studios or Microsoft. Minecraft server rules vary; users are responsible for following the rules of the environment in which they play.
