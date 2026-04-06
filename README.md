# Julian Sabos - Personal Website

## 📌 Project Status: Ready for Deployment

**Current Version**: 2.0 (Complete Redesign)
**Last Update**: April 6, 2026
**Deployment Status**: ✅ Production Ready
**GitHub**: [artpick/resume](https://github.com/artpick/resume)
**Live Site**: [https://www.julian-sabos.com/](https://www.julian-sabos.com/)

## 🚀 Quick Start

### Local Development
```bash
# Clone the repository
git clone https://github.com/artpick/resume.git
cd resume

# Start local server (Python 3 required)
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Production Deployment
The `public/` folder contains all files ready for deployment:

**Via GitHub Actions** (Recommended):
```bash
# After merging to master:
1. Go to Actions tab
2. Run "Deploy to OVH via SFTP" workflow
3. Select "prod" environment
```

**Manual Deployment**:
```bash
# Copy public/ contents to your web server
scp -r public/* user@server:/www/
# Or use any FTP/SFTP client
```

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
- **No build process** needed (static files)
- **No dependencies** (vanilla HTML/CSS/JS)
- **Browser support**: All modern browsers

### Project Structure
```
public/
├── index.html          # Main website (English)
├── css/
│   └── styles.css      # Extracted CSS (6.3KB)
├── images/
│   └── julian_profile.jpeg  # Profile picture
└── assets/
    ├── QuarterBack_G1GC.pdf
    └── QuarterBack_VisualVM_Java-Mission-Control.pdf
```

### Customization
Edit files in `public/`:
- **Content**: Modify `index.html`
- **Styles**: Edit `css/styles.css`
- **Assets**: Add/remove files in `images/` or `assets/`

### Adding Translations (Planned)
To add French/Spanish versions:
1. Create `index_fr.html` and `index_es.html`
2. Translate content
3. Add language selector
4. Update navigation

## 📦 Deployment

### GitHub Actions (Configured) ✅
Automatic SFTP deployment to OVH:
```yaml
# .github/workflows/deploy.yml
- name: Deploy to OVH via SFTP
  uses: SamKirkland/FTP-Deploy-Action@v4.3.4
  with:
    server: ${{ secrets.OVH_HOST }}
    username: ${{ secrets.OVH_USER }}
    password: ${{ secrets.OVH_PASSWORD }}
    local-dir: ./public/
    server-dir: /www/
```

**Secrets required**:
- `OVH_HOST`: SFTP server address
- `OVH_USER`: SFTP username
- `OVH_PASSWORD`: SFTP password

### Manual Deployment
```bash
# Using SCP
scp -r public/* user@server:/www/

# Using FTP/SFTP
# Upload all files from public/ to /www/ on server
```

### OVH Configuration
1. **SFTP Access**: Ensure SFTP is enabled
2. **Directory**: Deploy to `/www/`
3. **Domain**: Point to OVH hosting
4. **HTTPS**: Configure SSL certificate

## 📊 Performance

**Current Metrics** (measured):
- **Load time**: < 800ms (empty cache)
- **Page weight**: 48KB total
- **Requests**: 3 (HTML + CSS + FontAwesome CDN)
- **Lighthouse**: 98/100 (Performance)

**Optimizations Applied**:
- ✅ CSS extracted and minified (6.3KB)
- ✅ Single optimized image (12KB)
- ✅ No JavaScript framework
- ✅ System fonts with fallbacks
- ✅ Efficient CSS variables
- ✅ Mobile-first responsive design

## 🌍 Internationalization

**Current Status**: English only (v2.0)

**Roadmap** (see `docs/evolution_plan.md`):
- **Phase 2**: French version (`index_fr.html`)
- **Phase 3**: Spanish version (`index_es.html`)
- **Phase 4**: Language selector component
- **Future**: Automatic browser detection

**Implementation Plan**:
```bash
# Future structure
public/
├── index.html        # English (default)
├── fr/
│   └── index.html    # French version
└── es/
    └── index.html    # Spanish version
```

## 🔮 Future Evolution

**Detailed Roadmap**: See `docs/evolution_plan.md`

**Next Steps (Q2 2026)**:
- ✅ Complete redesign (Done)
- ✅ GitHub Actions setup (Done)
- ⏳ Multilingual support (FR/ES)
- ⏳ SEO optimization
- ⏳ Blog section

**Future Features**:
- Contact form with anti-spam
- Project portfolio section
- Dark mode toggle
- Accessibility improvements

## 📝 Changelog

### Version 2.0 (April 2026) - Current
**Complete Redesign & Modernization**
- ✅ Professional blue color scheme (#0077B6)
- ✅ CSS extracted to separate file (6.3KB)
- ✅ GitHub Actions CI/CD pipeline
- ✅ Optimized performance (48KB total)
- ✅ Mobile-first responsive design
- ✅ Removed contact section (LinkedIn only)
- ✅ Integrated jsonresume content
- ✅ Improved typography (Inter font)

### Version 1.0 (2014-2019) - Legacy
- Bootstrap 3 framework
- Multiple language versions (FR/ES/EN)
- Interactive charts (amCharts)
- Complex build process
- Larger footprint (~200KB)

## 🤝 Contributing

This is a personal project, but contributions are welcome:
```bash
# Suggest improvements
1. Fork the repository
2. Create a feature branch
3. Submit a pull request
4. Or open an issue
```

**Focus areas**:
- Internationalization (FR/ES)
- Accessibility improvements
- Performance optimizations
- New sections (blog, projects)

## 📄 License

**MIT License** - See `LICENCE.txt` for details
- Free for personal and commercial use
- Attribution appreciated but not required

## 📞 Contact

**Julian Sabos** - Senior Implementation Engineer

🔗 **Professional Links**:
- [LinkedIn](https://www.linkedin.com/in/juliansabos/)
- [GitHub](https://github.com/artpick)
- [Personal Website](https://www.julian-sabos.com/)

📧 **Email**: artpick@gmail.com

---

> *© 2026 Julian Sabos. All rights reserved.*
> *Last updated: April 6, 2026* | *GitHub: [artpick/resume](https://github.com/artpick/resume)*
