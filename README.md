# Happy Birthday, web page made by Pratham Dada 🎉

A single-page birthday website ready for GitHub Pages.

## Files
- `index.html` — page structure
- `style.css` — dark/gold glassmorphism theme, floating heading animation
- `script.js` — confetti celebration + music toggle
- `audio/` — drop your own MP3 here as `birthday-tune.mp3` (the player looks for this file)

## Deploy to GitHub Pages
1. Create a new GitHub repository (e.g. `pratham-birthday`).
2. Upload these files (keep the folder structure as-is).
3. Go to **Settings → Pages**, set source to `main` branch, root folder.
4. Your site will be live at `https://<your-username>.github.io/pratham-birthday/`.

## Customize
- Edit the message text directly in `index.html` inside `<p class="message">`.
- Swap colors by changing the `--gold`, `--bg-deep`, etc. variables at the top of `style.css`.
- Add a real song file to `audio/birthday-tune.mp3` — the toggle button will pick it up automatically.
