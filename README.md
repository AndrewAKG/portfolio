# Andrew Ghobrial - Portfolio

A modern, responsive portfolio website built with Astro, showcasing my work as a Senior Backend Developer and Cloud Architect.

🌐 **Live Site**: [andrewakg.dev](https://andrewakg.dev)

## ✨ Features

- **Modern Design**: Clean, professional interface with dark/light theme support
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Blog System**: MDX-powered blog with categories, tags, and RSS feeds
- **Project Showcase**: Detailed project portfolio with tech stacks
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

### Core Technologies

- **[Astro](https://astro.build/)** - Static site generator
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Starwind](https://starwind.dev/)** - Enhanced Tailwind components

### Integrations

- **MDX** - Markdown with JSX components
- **RSS Feeds** - Automatic blog feed generation
- **Sitemap** - SEO optimization
- **Sharp** - Image optimization

### Deployment

- **Netlify** - Hosting and CI/CD
- **Custom Domain** - andrewakg.dev

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AndrewAKG/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── favicon.*          # Favicon files
│   ├── fonts/             # Custom fonts
│   └── manifest.webmanifest
├── src/
│   ├── assets/            # Images, icons, logos
│   ├── components/        # Reusable Astro components
│   │   ├── sections/      # Page sections
│   │   └── ui/           # UI components
│   ├── content/          # MDX blog posts
│   ├── data/             # Static data (projects, skills, etc.)
│   ├── layouts/          # Page layouts
│   ├── lib/              # Utility functions
│   ├── pages/            # Route pages
│   └── styles/           # CSS and theme files
├── astro.config.mjs      # Astro configuration
├── starwind.config.json  # Starwind configuration
└── netlify.toml          # Netlify deployment config
```

## 🎨 Customization

### Adding New Projects

Edit `src/data/projects.ts` to add or modify projects:

```typescript
{
  title: 'Your Project',
  techStack: 'Tech • Stack • Here',
  description: 'Project description',
  ctaText: 'View Project',
  ctaLink: 'https://your-project.com',
  icon: YourIcon,
}
```

### Adding Blog Posts

Create new `.md` files in `src/content/blog/` with frontmatter:

```markdown
---
title: 'Your Blog Post'
description: 'Post description'
pubDate: 2024-01-01
heroImage: '/path/to/image.jpg'
tags: ['tag1', 'tag2']
---

Your blog content here...
```

### Theme Customization

Modify colors in `src/styles/themes/`:

- `light.css` - Light theme colors
- `dark.css` - Dark theme colors
- `tokens.css` - Base design tokens

## 📝 Content Management

### Blog Features

- **Categories**: Organize posts by topic
- **Tags**: Flexible tagging system
- **RSS Feeds**: Automatic feed generation
- **Pagination**: Built-in pagination support
- **Search**: Client-side search functionality

### SEO Features

- **Meta Tags**: Dynamic meta descriptions
- **Open Graph**: Social media previews
- **Sitemap**: Automatic sitemap generation
- **Structured Data**: Rich snippets support

## 🚀 Deployment

This portfolio is deployed on Netlify with automatic deployments from the main branch.

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

### Environment Variables

No environment variables required for basic functionality.

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [andrewakg.dev](https://andrewakg.dev)
- **LinkedIn**: [andrew-akg](https://www.linkedin.com/in/andrew-akg/)
- **GitHub**: [AndrewAKG](https://github.com/AndrewAKG)

---

⭐ **Star this repo if you found it helpful!**
