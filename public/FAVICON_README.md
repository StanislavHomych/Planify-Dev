# Favicon Setup

To add your logo as favicon, place your icon files in the `/public` folder:

1. **favicon.ico** - Main favicon (16x16, 32x32, 48x48 sizes recommended)
2. **icon.png** - PNG icon (32x32 or larger, will be resized automatically)
3. **icon.svg** - SVG icon (scalable, recommended for modern browsers)
4. **apple-touch-icon.png** - Apple touch icon (180x180 for iOS devices)

## Quick Setup

1. Convert your logo to favicon format:
   - Use online tools like https://favicon.io or https://realfavicongenerator.net
   - Or use image editing software to create 32x32, 64x64, or 128x128 pixel images

2. Place the files:
   - `favicon.ico` → `/public/favicon.ico`
   - `icon.png` → `/public/icon.png` (optional, but recommended)
   - `icon.svg` → `/public/icon.svg` (optional, for better quality)
   - `apple-touch-icon.png` → `/public/apple-touch-icon.png` (optional, for iOS)

3. The favicon will automatically be used by Next.js!

## Alternative: App Directory Method

You can also place an `icon.png`, `icon.ico`, or `icon.svg` file directly in the `/app` directory, and Next.js will automatically use it as the favicon.


