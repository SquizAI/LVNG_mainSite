#!/bin/bash

echo "🚀 Setting up LVNG.ai Website..."
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOL
# Environment variables for LVNG.ai website
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://api.lvng.ai
EOL
    echo "✅ .env.local created"
fi

echo ""
echo "🎉 Setup complete!"
echo "=================================="
echo ""
echo "To start the development server:"
echo "  npm run dev"
echo ""
echo "To build for production:"
echo "  npm run build"
echo ""
echo "The website will be available at: http://localhost:3000"
echo ""
echo "Happy coding! 🚀" 