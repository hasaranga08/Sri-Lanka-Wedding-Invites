# Wedding Invitation Integration Architecture & Guide

This document defines the architecture and exact workflow for integrating future customer wedding invitations exported from separate Google AI Studio projects into the main **Sri Lanka Wedding Invites** platform.

---

## Architectural Principles

1. **Complete Independence**: Each customer invitation lives in its own dedicated source folder (`src/invitations/<slug>/`) and asset folder (`public/invitations/<slug>/`), with its own HTML entry point (`<slug>/index.html`).
2. **Zero Modification to Existing Invitations**: Adding or modifying an invitation never touches any existing customer files or the main business website.
3. **Privacy by Default**: Individual customer pages include `<meta name="robots" content="noindex, nofollow" />` to prevent search engine indexing. Invitations are NOT automatically added to the public portfolio or navigation unless manually selected by the business owner.
4. **Lowercase, Descriptive Slugs**: All invitation URLs follow lowercase hyphenated slugs (e.g., `/amal-sanduni/`, `/kasun-tharushi/`, `/roshini-hasaranga/`). Multiple distinct slugs can be created for the same couple (e.g., `/kasun-tharushi-church/`, `/kasun-tharushi-reception/`).
5. **No Shared Configuration Overwrite**: Uploaded ZIP files are inspected first. Root configurations (`package.json`, `vite.config.ts`, `tsconfig.json`) are never blindly overwritten; only new dependencies are carefully merged.

---

## Future ZIP Integration Protocol

Whenever a new invitation project ZIP is uploaded:

### Step 1: Pre-Integration Inspection
- Unpack the ZIP into an isolated sandbox/temporary directory.
- Inspect its file tree, `package.json`, components, assets, audio files, and video files.
- Compare dependencies with the main `package.json` to identify any new packages needed (e.g., animations, specialized icons) and install them safely without downgrading existing packages.

### Step 2: Source Code Placement
- Create a dedicated folder in `src/invitations/<slug>/`.
- Move the couple's components, data configurations, and entry files:
  ```text
  src/invitations/<slug>/
  ├── components/          # All invitation UI components
  ├── data/weddingData.ts  # Couple names, schedule, venues, WhatsApp number
  ├── utils/               # Audio manager, asset helper, calendar generator
  ├── index.css            # Invitation-specific themes & styling
  ├── App.tsx              # Main invitation layout & state
  └── main.tsx             # React mount entry
  ```

### Step 3: Public Media Isolation
- Create a dedicated asset directory:
  ```text
  public/invitations/<slug>/
  ├── videos/              # 3D envelope MP4 video & fallback video
  ├── music/               # Wedding song MP3
  └── images/              # Stationery artwork & photography
  ```
- Ensure the invitation's `assets.ts` helper resolves to `/invitations/<slug>/` so assets load seamlessly from anywhere.

### Step 4: Create Subfolder HTML Entry Point
- Create `<slug>/index.html` at the project root with the required `noindex, nofollow` privacy tag:
  ```html
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <title>Couple Names — Wedding Invitation</title>
      <meta name="robots" content="noindex, nofollow" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <!-- Include couple's preferred Google Fonts -->
    </head>
    <body class="bg-[#140513] text-[#FAF6EE] antialiased">
      <div id="root"></div>
      <script type="module" src="/src/invitations/<slug>/main.tsx"></script>
    </body>
  </html>
  ```

### Step 5: Register in `vite.config.ts`
- Add the new HTML file to `build.rollupOptions.input`:
  ```typescript
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        roshiniHasaranga: path.resolve(__dirname, 'roshini-hasaranga/index.html'),
        coupleSlug: path.resolve(__dirname, '<slug>/index.html'), // New entry
      },
    },
  },
  ```

### Step 6: Multi-Page Build Verification
- Run `npm run build`.
- Verify that `dist/<slug>/index.html` is generated alongside all existing pages.
- Verify that all media assets load with `HTTP 200 OK`.
