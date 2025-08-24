# Construction Company Website - Next.js & Tailwind CSS

This is a complete migration of a traditional HTML/CSS/JS construction company website to a modern Next.js application with Tailwind CSS.

## 🚀 Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Responsive Design** for all devices
- **Modern Components** with React hooks
- **Optimized Images** with Next.js Image component
- **SEO Optimized** with proper meta tags
- **Fast Loading** with code splitting and optimization

## 📁 Project Structure

```
rasyom-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   ├── services/
│   │   │   └── page.tsx        # Services page
│   │   ├── projects/
│   │   │   └── page.tsx        # Projects page
│   │   ├── blog/
│   │   │   └── page.tsx        # Blog page
│   │   └── contact/
│   │       └── page.tsx        # Contact page
│   └── components/
│       ├── Header.tsx          # Navigation header
│       ├── Footer.tsx          # Site footer
│       └── Navigation.tsx      # Navigation component
├── public/
│   └── assets/                # Static assets (images, fonts, etc.)
├── tailwind.config.js         # Tailwind CSS configuration
├── next.config.ts            # Next.js configuration
└── package.json              # Dependencies
```

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd rasyom-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📱 Pages Overview

- **Home** (`/`) - Landing page with hero section, services, and projects
- **About** (`/about`) - Company information, mission, and team
- **Services** (`/services`) - Detailed service offerings
- **Projects** (`/projects`) - Portfolio of completed projects
- **Blog** (`/blog`) - Latest articles and insights
- **Contact** (`/contact`) - Contact form and company information

## 🎨 Styling

The project uses **Tailwind CSS** for styling with a custom configuration that includes:

- **Color palette** based on the original design
- **Responsive utilities** for mobile-first design
- **Custom components** for buttons, cards, and forms
- **Animation utilities** for smooth transitions

## 🖼️ Assets

All original assets have been migrated to the `public/assets/` directory:
- Images from `/assets/img/`
- Fonts and icons
- Logos and branding materials

## 🔧 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... more shades
  }
}
```

### Components
Reusable components are located in `src/components/` and can be easily customized.

## 📊 Performance

- **Image Optimization**: Automatic optimization with Next.js Image component
- **Code Splitting**: Automatic code splitting for faster loading
- **Responsive Images**: Optimized for all screen sizes
- **SEO Ready**: Proper meta tags and structured data

## 🚀 Deployment

The project can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS**
- **Digital Ocean**

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For support, email info@construction.com or visit our [contact page](/contact).
