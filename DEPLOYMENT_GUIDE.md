# Next.js Deployment Guide (Node.js Server)

Since you are switching from a static export to a standard Next.js build, you will need a Node.js environment on your server. This guide explains how to prepare, move, and run your project.

## 1. Prepare the Build
On your local machine (or your CI/CD server), run the following command to generate the production build:

```bash
npm run build
```

This will create a `.next` folder containing the optimized production files.

## 2. Essential Files for Server
To run your project on the server, you ONLY need to copy the following files/folders:

- `.next/` (The build output)
- `public/` (Static assets like images/logos)
- `package.json`
- `package-lock.json`
- `next.config.ts` (or `next.config.js/mjs`)
- `.env` (Your environment variables)

> [!TIP]
> You do **not** need the `src/`, `app/`, `components/`, or `node_modules/` folders from your local machine (unless you are building on the server). It's better to run `npm install --production` on the server itself.

## 3. Running on the Server

### Option A: Standard Command
Once the files are moved to your server:

1. Install production dependencies (use this exact command to avoid version conflicts):
   ```bash
   npm install --omit=dev --legacy-peer-deps
   ```
   > [!NOTE]
   > `--omit=dev` ensures only production dependencies are installed.
   > `--legacy-peer-deps` avoids version conflicts between Next.js and React versions during installation.

2. Start the server:
   ```bash
   npm start
   ```
By default, the app will run on `http://localhost:3000`.

### Option B: Using PM2 (Recommended)
PM2 ensures your app restarts automatically if it crashes or the server reboots.

1. Install PM2: `npm install -g pm2`
2. Start the app:
   ```bash
   pm2 start npm --name "si-dent-app" -- start
   ```
3. Save the process: `pm2 save`

## 4. Domain Mapping (Reverse Proxy)
To map your domain (e.g., `si-dent.in`) to the Node.js server running on port 3000, you should use a reverse proxy like **Nginx** or **Apache**.

### Example Nginx Config:
```nginx
server {
    listen 80;
    server_name si-dent.in;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 5. Summary of Changes
- **Old way**: You were using `npm run build && npm run export` (static HTML in `/out`).
- **New way**: You use `npm run build` and then run `npm start` (active Node.js server).

> [!IMPORTANT]
> The `out/` folder is no longer needed and can be deleted. Your production files are now stored in the hidden `.next/` folder.
