# Deploying to GoDaddy

This guide will help you deploy your React portfolio website to GoDaddy hosting.

## Step 1: Build the Production Version

1. Open your terminal in the project directory
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Build the production version:
   ```bash
   npm run build
   ```

This will create a `dist` folder with all the optimized files ready for hosting.

## Step 2: Prepare Files for Upload

After building, you'll have a `dist` folder containing:
- `index.html`
- `assets/` folder (with all your CSS, JS, and optimized assets)
- Your images from `public/` folder

**IMPORTANT:** Copy the `.htaccess` file into the `dist` folder after building. This file is required for proper routing on GoDaddy.

## Step 3: Upload to GoDaddy

### Option A: Using cPanel File Manager

1. Log into your GoDaddy account and go to **cPanel**
2. Navigate to **File Manager**
3. Go to `public_html` folder (or your domain's root folder)
4. **Delete or backup** any existing files in this folder
5. Upload all contents from the `dist` folder:
   - Select all files in `dist` folder
   - Upload them to `public_html`
   - **Make sure to upload the `.htaccess` file** (it might be hidden, ensure "Show Hidden Files" is enabled)

### Option B: Using FTP

1. Connect to your GoDaddy FTP server
2. Navigate to `public_html` (or your domain's root directory)
3. Upload all files from the `dist` folder
4. **Make sure to upload the `.htaccess` file** (it might be hidden)

## Step 4: Verify

1. Visit your domain in a browser
2. Test all pages and navigation
3. Check that images load correctly
4. Test the contact form (if you have backend integration)

## Troubleshooting

### If you get 404 errors on page refresh:
- Make sure the `.htaccess` file is in the root directory
- Check that mod_rewrite is enabled on your GoDaddy hosting

### If images don't load:
- Verify all images from `public/` folder are in the `dist` folder
- Check that image paths in your code are correct (they should be relative paths like `/image.png`)

### If the site doesn't load at all:
- Check that `index.html` is in the root directory
- Verify all asset files are uploaded correctly
- Check browser console for any errors

## Notes

- The `.htaccess` file handles React Router and ensures all routes work correctly
- GoDaddy supports modern React apps, but you may need to contact support if you encounter issues with mod_rewrite
- Keep your `package.json` and source files for future updates - you'll need to rebuild and re-upload when making changes
