#!/bin/bash

# PWA Icon Generator Script
# Generates 192x192 and 512x512 PWA icons from your logo

echo "🎨 PWA Icon Generator"
echo "===================="
echo ""

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "⚠️  ImageMagick not found!"
    echo ""
    echo "Please install ImageMagick:"
    echo "  macOS: brew install imagemagick"
    echo "  Linux: sudo apt-get install imagemagick"
    echo ""
    echo "Or use online tools:"
    echo "  https://www.pwabuilder.com/imageGenerator"
    echo "  https://www.iloveimg.com/resize-image"
    exit 1
fi

# Get the project root (script is in /scripts)
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"
PUBLIC_DIR="$PROJECT_ROOT/public"
LOGO_DIR="$PROJECT_ROOT/src/assets/logo"

echo "📁 Project root: $PROJECT_ROOT"
echo ""

# Check for logo files
if [ -f "$LOGO_DIR/logo-32x32.png" ]; then
    LOGO_FILE="$LOGO_DIR/logo-32x32.png"
elif [ -f "$LOGO_DIR/temp-logo.png" ]; then
    LOGO_FILE="$LOGO_DIR/temp-logo.png"
elif [ -f "$PUBLIC_DIR/favicon.ico" ]; then
    LOGO_FILE="$PUBLIC_DIR/favicon.ico"
else
    echo "❌ No logo file found!"
    echo ""
    echo "Please place a logo file in one of these locations:"
    echo "  - src/assets/logo/logo.png"
    echo "  - src/assets/logo/temp-logo.png"
    echo "  - public/favicon.ico"
    exit 1
fi

echo "✅ Found logo: $LOGO_FILE"
echo ""

# Generate icons
echo "🔨 Generating PWA icons..."
echo ""

# 192x192 icon
echo "📱 Creating icon-192x192.png..."
convert "$LOGO_FILE" \
    -resize 172x172 \
    -gravity center \
    -background white \
    -extent 192x192 \
    "$PUBLIC_DIR/icon-192x192.png"

if [ $? -eq 0 ]; then
    echo "   ✅ Created: $PUBLIC_DIR/icon-192x192.png"
else
    echo "   ❌ Failed to create 192x192 icon"
    exit 1
fi

# 512x512 icon
echo "📱 Creating icon-512x512.png..."
convert "$LOGO_FILE" \
    -resize 460x460 \
    -gravity center \
    -background white \
    -extent 512x512 \
    "$PUBLIC_DIR/icon-512x512.png"

if [ $? -eq 0 ]; then
    echo "   ✅ Created: $PUBLIC_DIR/icon-512x512.png"
else
    echo "   ❌ Failed to create 512x512 icon"
    exit 1
fi

echo ""
echo "🎉 Success! PWA icons created:"
echo "   - $PUBLIC_DIR/icon-192x192.png (192×192)"
echo "   - $PUBLIC_DIR/icon-512x512.png (512×512)"
echo ""
echo "📝 Next steps:"
echo "   1. Rebuild: npm run build"
echo "   2. Test: Open DevTools → Application → Manifest"
echo "   3. Verify icons show correctly"
echo ""

