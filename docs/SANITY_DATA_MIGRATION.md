# Sanity Data Migration Guide 📦

**Goal**: Move data from `dev` dataset → `production` dataset

---

## 🎯 Method 1: Dataset Export/Import (Recommended)

**Best for**: Complete migration with all content

### Step 1: Export from Dev Dataset

```bash
cd /Users/lucas.bertolo/Desktop/Personal/projects/idalgo_cortijo

# Export all data from dev dataset
sanity dataset export dev dev-backup.tar.gz

# This creates: dev-backup.tar.gz with all your content
```

**What gets exported**:

- ✅ All documents (articles, operation areas, about, etc.)
- ✅ All images and assets
- ✅ All drafts
- ✅ Document history

---

### Step 2: Create Production Dataset (if doesn't exist)

```bash
# Check existing datasets
sanity dataset list

# If production doesn't exist, create it
sanity dataset create production
```

---

### Step 3: Import to Production Dataset

```bash
# Import data to production dataset
sanity dataset import dev-backup.tar.gz production

# Choose options when prompted:
# - Replace documents: Yes (if overwriting)
# - Import assets: Yes
```

**That's it!** Data is now in production. ✅

---

## 🎯 Method 2: Direct Dataset Copy

**Faster but less control**

```bash
# Copy entire dev dataset to production
sanity dataset copy dev production

# Confirm when prompted
```

**Pros**:

- ✅ Fast (one command)
- ✅ Copies everything
- ✅ Maintains relationships

**Cons**:

- ⚠️ Overwrites production if it exists
- ⚠️ Less control over what's copied

---

## 🎯 Method 3: Duplicate with Different Name

**Good for testing production setup without overwriting**

```bash
# Create a copy with a new name
sanity dataset copy dev production-test

# Test your app with this dataset first
# Then copy to actual production when ready
```

---

## 🎯 Method 4: Sanity Manage (Web UI)

**Good for non-technical users**

1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to "Datasets" tab
4. Click "Copy dataset"
5. Source: `dev`
6. Target: `production` (or create new)
7. Click "Copy"

---

## ⚙️ Update Your Environment Variables

### After Migration

**Update your production environment to use production dataset**:

#### Local Production Testing (`.env.production`)

```bash
NEXT_PUBLIC_SANITY_DATASET=production  # Changed from 'dev'
```

#### Deployment Platform (Vercel/Netlify)

```
1. Go to Environment Variables
2. Update: NEXT_PUBLIC_SANITY_DATASET = production
3. Redeploy
```

---

## 🔄 Complete Migration Workflow

### Recommended Steps:

```bash
# 1. Export dev data
sanity dataset export dev dev-backup.tar.gz

# 2. Create production dataset (if needed)
sanity dataset create production

# 3. Import to production
sanity dataset import dev-backup.tar.gz production

# 4. Verify data imported
sanity dataset list
# Should see: dev (your original) and production (new)

# 5. Update production env variable
# In Vercel/Netlify: NEXT_PUBLIC_SANITY_DATASET=production

# 6. Redeploy
# Trigger new deployment with updated env var

# 7. Test production site
# Visit site and verify all content loads correctly
```

---

## 🧪 Test After Migration

**Visit your production site and check**:

```
✅ Homepage loads with correct content
✅ Articles show up
✅ Operation areas display
✅ About section works
✅ Images load correctly
✅ No "document not found" errors
```

---

## 🔍 Troubleshooting

### Issue: "Dataset already exists"

**Solution**: Either delete it first or import with replace flag

```bash
# Option 1: Delete and recreate
sanity dataset delete production
sanity dataset create production
sanity dataset import dev-backup.tar.gz production

# Option 2: Import with replace
sanity dataset import dev-backup.tar.gz production --replace
```

---

### Issue: "Missing documents after import"

**Check**: Did you export drafts?

```bash
# Export including drafts
sanity dataset export dev dev-backup.tar.gz --drafts
```

---

### Issue: Images not showing after migration

**Cause**: Images are stored per-project, not per-dataset

**Solution**: Images should work automatically, but if not:

```bash
# Check image URLs in Sanity Studio
# They should be: https://cdn.sanity.io/images/YOUR_PROJECT_ID/production/...

# If showing 'dev' in URL, re-upload images or:
sanity dataset copy dev production --assets-only
```

---

## 📊 Dataset Strategy

### Recommended Setup

**Development**:

```
Dataset: dev
Purpose: Testing, development, breaking changes
Access: You and developers
```

**Production**:

```
Dataset: production
Purpose: Live site content
Access: Limited (editors only)
```

**Optional - Staging**:

```
Dataset: staging
Purpose: Preview before production
Access: Clients/stakeholders for approval
```

---

## 🔐 Best Practices

### 1. Always Backup Before Migration

```bash
# Backup production before overwriting
sanity dataset export production production-backup-$(date +%Y%m%d).tar.gz

# Then safe to import
sanity dataset import dev-backup.tar.gz production --replace
```

---

### 2. Use Descriptive Backup Names

```bash
# Good backup names
sanity dataset export dev backup-dev-before-migration-2024-10-14.tar.gz
sanity dataset export dev backup-dev-v1.0.tar.gz
```

---

### 3. Keep Multiple Backups

```bash
# Create backups directory
mkdir -p backups

# Export with timestamp
sanity dataset export dev backups/dev-$(date +%Y%m%d-%H%M%S).tar.gz
```

---

## 🚀 Quick Migration (5 Minutes)

**Complete process**:

```bash
# 1. Export dev
sanity dataset export dev dev-backup.tar.gz
# ✅ Creates: dev-backup.tar.gz

# 2. Create production (if needed)
sanity dataset create production
# ✅ Dataset created

# 3. Import to production
sanity dataset import dev-backup.tar.gz production
# ✅ Data imported

# 4. Update env var in Vercel/Netlify
# NEXT_PUBLIC_SANITY_DATASET=production

# 5. Redeploy
# ✅ Site now uses production data
```

---

## 🎯 After Migration

### Update Multiple Environments

**Local development** (`.env.development`):

```bash
NEXT_PUBLIC_SANITY_DATASET=dev  # Keep using dev for local work
```

**Production** (Vercel/Netlify):

```bash
NEXT_PUBLIC_SANITY_DATASET=production  # Use production data
```

**This way**:

- 🏠 Local: Edit dev dataset (safe to break)
- 🌐 Production: Uses production dataset (stable)

---

## 📝 Add to package.json

**Useful scripts for future migrations**:

```json
{
  "scripts": {
    "sanity:export": "sanity dataset export dev backups/dev-$(date +%Y%m%d).tar.gz",
    "sanity:import": "sanity dataset import",
    "sanity:copy": "sanity dataset copy dev production",
    "sanity:list": "sanity dataset list",
    "sanity:backup": "sanity dataset export production backups/prod-backup-$(date +%Y%m%d).tar.gz"
  }
}
```

**Usage**:

```bash
npm run sanity:export  # Quick backup
npm run sanity:copy    # Copy dev → production
npm run sanity:list    # See all datasets
```

---

## ⚠️ Important Notes

### 1. Document IDs Remain Same

- IDs don't change during migration
- URLs stay the same
- Relationships preserved

### 2. Drafts Behavior

- Drafts are copied as drafts
- Publish them in production Studio if needed

### 3. Users & Permissions

- User access is project-level, not dataset-level
- Same users can access all datasets
- Can restrict by dataset if needed

### 4. API Tokens

- Different datasets can have different tokens
- Update tokens if using authenticated requests

---

## 🎨 Alternative: Gradual Migration

**If you want to test first**:

```bash
# 1. Copy to staging dataset
sanity dataset copy dev staging

# 2. Test your app with staging
# Update NEXT_PUBLIC_SANITY_DATASET=staging

# 3. If all works, copy to production
sanity dataset copy staging production
```

---

## 🔄 Ongoing Sync Strategy

### Option A: Manual Sync

```bash
# When dev content is ready for production
sanity dataset export dev temp.tar.gz
sanity dataset import temp.tar.gz production --replace
rm temp.tar.gz
```

### Option B: Content in Production, Dev for Testing

```
- Edit content in 'production' dataset via Studio
- Use 'dev' dataset only for testing new features
- Production is always the source of truth
```

**This is the recommended approach!** ✅

### Option C: Scheduled Sync (Advanced)

```bash
# Create a cron job or GitHub Action
# Syncs dev → production nightly
# Only if you have a specific workflow need
```

---

## 📊 Check Current Datasets

```bash
# List all datasets in your project
sanity dataset list

# Should see something like:
# dev (current)
# production (after creation)
```

---

## ✅ Complete Migration Checklist

Migration steps:

- [ ] Backup dev dataset: `sanity dataset export dev backup.tar.gz`
- [ ] Create production dataset: `sanity dataset create production`
- [ ] Import to production: `sanity dataset import backup.tar.gz production`
- [ ] Verify data in Sanity Studio (switch dataset dropdown)
- [ ] Update production env var: `NEXT_PUBLIC_SANITY_DATASET=production`
- [ ] Redeploy site
- [ ] Test all pages load correctly
- [ ] Verify images display
- [ ] Check Studio access to production dataset

---

## 🚀 Quick Start

**To migrate now, run these commands**:

```bash
cd /Users/lucas.bertolo/Desktop/Personal/projects/idalgo_cortijo

# 1. Export dev
sanity dataset export dev dev-backup.tar.gz

# 2. Create production (if doesn't exist)
sanity dataset create production

# 3. Import
sanity dataset import dev-backup.tar.gz production

# Done! Now update your production env variable to use 'production' dataset
```

---

## 💡 Pro Tips

### Tip 1: Regular Backups

```bash
# Add to your workflow
# Before major changes, export:
sanity dataset export production backup-$(date +%Y%m%d).tar.gz
```

### Tip 2: Studio Dataset Switcher

In Sanity Studio, you can switch between datasets:

- Top-right dropdown → Select dataset
- Edit in 'dev' for testing
- Edit in 'production' for live site

### Tip 3: Different API Tokens

If you want extra security:

- Create separate API tokens for dev/production
- Restrict token access by dataset
- Use in environment variables

---

## 🎯 Recommended Flow Going Forward

**For your law firm site**:

1. **Use 'production' dataset for live content**

   - Editors create content in production
   - Site uses production dataset
   - Stable, reliable

2. **Use 'dev' dataset for testing**

   - Test new Sanity schema changes
   - Test new features
   - Break things safely

3. **Separate deployments**:
   - `main` branch → Production (uses 'production' dataset)
   - `dev` branch → Staging (uses 'dev' dataset)

---

**Want me to help you run the migration now?** Just let me know and I'll guide you through it step by step! 🚀
