# Uploading Your Portfolio to GitHub

## Step-by-Step Guide

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create an account)
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name your repository (e.g., `portfolio-website` or `adam-decker-portfolio`)
4. Choose **Public** (so Netlify can access it, or Private if you prefer)
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

### Step 2: Initialize Git in Your Project

Open your terminal in the project folder and run:

```bash
cd "/Users/adam/Desktop/port website react"
```

Then run these commands:

```bash
# Initialize git repository
git init

# Add all files to git
git add .

# Create your first commit
git commit -m "Initial commit: Portfolio website with React"
```

### Step 3: Connect to GitHub and Push

GitHub will show you commands after creating the repo. They'll look like this:

```bash
# Add your GitHub repository as remote (replace with YOUR username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name!**

## Complete Command Sequence

Here's the full sequence (copy and paste, then edit the last 3 commands):

```bash
# Navigate to project folder
cd "/Users/adam/Desktop/port website react"

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website with React"

# Connect to GitHub (EDIT THIS LINE with your details)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## What Gets Uploaded?

✅ **Included:**
- All source code (`src/` folder)
- Configuration files (`package.json`, `vite.config.js`, etc.)
- Public assets (`public/` folder)
- Documentation files

❌ **Excluded (thanks to .gitignore):**
- `node_modules/` folder (too large, regenerated with `npm install`)
- `dist/` folder (build output, generated fresh)
- Environment files
- OS-specific files

## Authentication

If you're asked for credentials:
- **Username:** Your GitHub username
- **Password:** Use a **Personal Access Token** (not your GitHub password)

### Creating a Personal Access Token:

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token"
3. Name it (e.g., "Portfolio Upload")
4. Select scopes: **repo** (check all repo permissions)
5. Generate token
6. **Copy it immediately** (you won't see it again!)
7. Use this token as your password when pushing

## Future Updates

After the initial upload, updating is simple:

```bash
# Make your changes to files...

# Add changed files
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

Netlify will automatically detect the push and redeploy your site!

## Troubleshooting

### "Repository not found"
- Check your repository name and username are correct
- Make sure the repository exists on GitHub

### "Permission denied"
- You need to authenticate - use a Personal Access Token
- Make sure you have write access to the repository

### "Fatal: not a git repository"
- Make sure you're in the project folder
- Run `git init` first

### Files are too large
- Check `.gitignore` is working (should exclude `node_modules` and `dist`)
- Large files should be in `public/` folder, not committed directly

## Quick Checklist

- [ ] Created GitHub repository
- [ ] Initialized git (`git init`)
- [ ] Added files (`git add .`)
- [ ] Created commit (`git commit`)
- [ ] Connected to GitHub (`git remote add origin`)
- [ ] Pushed to GitHub (`git push -u origin main`)

Once uploaded, you can connect it to Netlify for automatic deployments!
