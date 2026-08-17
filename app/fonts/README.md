# Self-hosted fonts

This folder is empty on purpose — the `.woff2` files aren't checked in.
Drop them here to switch the site to self-hosted fonts (see
`app/layout.local-fonts.js`), which removes the build-time dependency
on Google's font CDN entirely.

## Files needed

| Filename                     | Family        | Weight |
|-------------------------------|---------------|--------|
| `Manrope-Medium.woff2`        | Manrope       | 500    |
| `Manrope-Bold.woff2`          | Manrope       | 700    |
| `Manrope-ExtraBold.woff2`     | Manrope       | 800    |
| `Inter-Regular.woff2`         | Inter         | 400    |
| `Inter-Medium.woff2`          | Inter         | 500    |
| `Inter-Bold.woff2`            | Inter         | 700    |
| `IBMPlexMono-Regular.woff2`   | IBM Plex Mono | 400    |
| `IBMPlexMono-Medium.woff2`    | IBM Plex Mono | 500    |

## How to get them

**Option A — Google Fonts directly**
1. Visit https://fonts.google.com/specimen/Manrope (and the pages for
   Inter / IBM Plex Mono)
2. Click "Download family" — this gives you `.ttf` files, not `.woff2`
3. Convert to `.woff2` with a free tool like
   https://cloudconvert.com/ttf-to-woff2, or with `fonttools`:
   ```bash
   pip install fonttools brotli
   fonttools varLib.instancer ... # or simply:
   python3 -c "from fontTools.ttLib import TTFont; f = TTFont('Manrope-Medium.ttf'); f.flavor = 'woff2'; f.save('Manrope-Medium.woff2')"
   ```

**Option B — Google Webfonts Helper (recommended, gives `.woff2` directly)**
1. Go to https://gwfh.mranftl.com/fonts
2. Search each family, select the weights listed above
3. Download the "modern browsers" `.woff2` package
4. Rename the files to match the table above

## Switching over

Once the files are in this folder:

```bash
mv app/layout.js app/layout.google-fonts.js.bak
mv app/layout.local-fonts.js app/layout.js
```

Then redeploy. The build no longer touches `fonts.gstatic.com` at all,
so a flaky connection to Google's CDN can never fail the build again.
