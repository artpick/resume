# Julian Sabos - Personal Website

## 📌 Project Status: Active Development

**Current Version**: 2.0 (Complete Redesign)
**Last Update**: April 6, 2023
**Deployment Status**: Ready for production

## 🚀 Quick Start

### Local Development
```bash
# Clone the repository
git clone https://github.com/juliansabos/resume.git
cd resume

# Open the website
open public/index.html
```

### Production Deployment
The `public/` folder contains all files ready for deployment to any static hosting:
- OVH
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web server

## 📁 Project Structure

```
resume/
├── .github/
│   └── workflows/          # GitHub Actions configuration
├── docs/                  # Project documentation
│   ├── evolution_plan.md  # Future development roadmap
│   └── project_history.md # Complete project history
├── public/                # Deployment-ready files
│   ├── index.html         # Main website (English)
│   ├── css/               # Optimized CSS
│   ├── images/            # Optimized images
│   └── assets/            # Additional assets
├── src/                   # Development source files
│   ├── new_design/        # Current working design
│   ├── js/                # Legacy JavaScript
│   ├── fonts/             # Font files
│   └── [old files]        # Archived versions
├── .gitignore
├── README.md              # This file
└── LICENCE.txt
```

## 🎨 Design Features

### Professional Blue Theme
- **Primary Color**: #0077B6 (Professional blue)
- **Typography**: Inter font family
- **Layout**: Centered 800px max-width
- **Spacing**: Generous white space for readability

### Key Sections
1. **About**: Professional summary and values
2. **Experience**: 6 detailed work experiences with achievements
3. **Skills**: Technical skills organized by category
4. **Education**: Academic background and certifications

### Technical Choices
- **No Framework**: Vanilla HTML5/CSS3/JavaScript
- **Responsive**: Mobile-first approach
- **Performance**: Optimized for fast loading
- **Accessibility**: Semantic HTML, good contrast

## 🔧 Development

### Requirements
- No build process needed
- No dependencies
- Works with any modern browser

### Customization
Edit `public/index.html` directly:
- Update content in the HTML
- Modify styles in the `<style>` section
- Add/remove sections as needed

### Adding Translations
To add French/Spanish versions:
1. Duplicate `index.html` → `index_fr.html`
2. Translate all text content
3. Update navigation links
4. Add language selector

## 📦 Deployment

### Manual Deployment
1. Copy contents of `public/` to your web server
2. Ensure `index.html` is the default document
3. Set proper MIME types for CSS and images

### GitHub Actions (Planned)
Automatic deployment workflow will be configured in `.github/workflows/deploy.yml`

### OVH Specific
For deployment to OVH hosting:
1. Upload `public/` contents via FTP/SFTP
2. Configure `.htaccess` if needed
3. Set up domain pointing

## 📊 Performance

**Current Metrics** (estimated):
- Load time: < 1s (empty cache)
- Page weight: ~50KB
- Requests: 2-3 (HTML + CSS + FontAwesome CDN)
- Lighthouse score: 95+ (estimated)

**Optimizations**:
- Minified CSS
- Optimized images
- No unnecessary JavaScript
- Efficient font loading

## 🌍 Internationalization

**Current Status**: English only

**Planned**:
- French version (`index_fr.html`)
- Spanish version (`index_es.html`)
- Language selector in header
- Automatic browser language detection

## 🔮 Future Evolution

See `docs/evolution_plan.md` for detailed roadmap including:
- Blog integration
- Multilingual support
- Contact form
- SEO improvements
- Performance monitoring

## 📝 Changelog

### Version 2.0 (April 2023)
- Complete redesign inspired by modern portfolios
- Professional blue color scheme
- Integrated content from jsonresume version
- Removed contact section (LinkedIn link sufficient)
- Improved mobile responsiveness
- Better typography and spacing

### Version 1.0 (2014-2019)
- Original Bootstrap 3 design
- Multiple language versions
- Interactive maps and charts
- Complex dependency structure

## 🤝 Contributing

While this is a personal project, suggestions are welcome:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request
4. Or open an issue with suggestions

## 📄 License

This project is licensed under the MIT License - see `LICENCE.txt` for details.

## 📞 Contact

For professional inquiries, please connect via:
- [LinkedIn](https://www.linkedin.com/in/juliansabos/)
- [GitHub](https://github.com/juliansabos)

---

*© 2023 Julian Sabos. All rights reserved.*
*Last updated: April 6, 2023*
