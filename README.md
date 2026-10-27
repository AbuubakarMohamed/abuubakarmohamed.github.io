# Abuubakar Mohamed: Portfolio

My personal portfolio website: about me, my projects, skills, experience and education.

Live at **https://abuubakar.co.uk**

Built with plain HTML, CSS and JavaScript, no build step needed.

## Add or edit a project

Projects are written directly in [`index.html`](index.html), in the `#projects` section, so they show for everyone, including search engines, link previews and browsers without JavaScript.

1. Find the commented-out `TEMPLATE` card in the Projects section, copy it, and paste it above the comment (without the `<!--` and `-->`).
2. Fill in the problem, what you built, the tech chips and the code link.
3. Put a screenshot in the `images` folder and point the `<img>` at it. Don't include screenshots that show emails, names or keys.
4. Publish:

   ```
   git add -A
   git commit -m "Add project"
   git push
   ```

The site updates within a minute or two.

If a skill in the Skills section was used in the new project, change its `<span>` to an `<a class="used" href="#project-id">` so it links to the project.

## Link previews

`images/og-image.png` (1200×630) is the picture shown when the site is shared on LinkedIn and elsewhere. LinkedIn caches previews; to refresh one, paste the URL into https://www.linkedin.com/post-inspector/.

## Run locally

Open `index.html` in a browser.

## Hosting

GitHub Pages from the `main` branch root, with the custom domain set in `CNAME`. DNS is on Cloudflare (DNS only, grey cloud).

## Links

- LinkedIn: https://www.linkedin.com/in/abuubakar-mohamed/
- GitHub: https://github.com/abuubakarmohamed
