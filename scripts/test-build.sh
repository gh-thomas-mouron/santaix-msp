#!/bin/bash
# Script to test the GitHub Actions build locally

set -e  # Exit on error

echo "🔨 Testing GitHub Actions build locally..."
echo ""

# Step 1: Install dependencies (like GitHub Actions)
echo "📦 Step 1: Installing dependencies..."
npm ci

# Step 2: Fetch practitioners data (optional - skip if env vars not set)
if [ -n "$GOOGLE_SHEET_ID" ] || [ -f .env ]; then
  echo ""
  echo "📥 Step 2: Fetching practitioners data from Google Sheets..."
  node scripts/fetch-practitioners.js
else
  echo ""
  echo "⏭️  Step 2: Skipping practitioners fetch (no GOOGLE_SHEET_ID or .env file)"
fi

# Step 3: Build with Astro
echo ""
echo "🏗️  Step 3: Building with Astro..."
npm run build

echo ""
echo "✅ Build completed successfully!"
echo "📁 Output is in the 'dist' directory"
echo ""
echo "To preview the build, run: npm run preview"
