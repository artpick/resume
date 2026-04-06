# Julian Sabos - Personal Website

## 📌 Project Status
**Version**: 2.0 (Complete Redesign)
**Status**: ✅ Production Ready
**GitHub**: [artpick/resume](https://github.com/artpick/resume)
**Live Site**: [https://www.julian-sabos.com/](https://www.julian-sabos.com/)

## 🚀 Quick Start

### Local Development
```bash
# Clone the repository
git clone https://github.com/artpick/resume.git
cd resume/public  # Go to public directory

# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Deployment
**Via GitHub Actions** (Recommended):
1. Merge to `master`
2. Run "Deploy to OVH via SFTP" workflow
3. Select "prod" environment

**Manual**:
```bash
# Copy public/ contents to your web server
scp -r public/* user@server:/www/
```

## 📁 Structure
```
public/
├── index.html          # Main website
├── css/styles.css      # Optimized CSS (6.3KB)
├── images/             # Profile image
└── assets/             # Technical presentations
```

## 🎨 Features
- Professional blue design (#0077B6)
- Mobile-first responsive layout
- Optimized performance (48KB total)
- No dependencies (vanilla HTML/CSS/JS)
- GitHub Actions CI/CD pipeline

## 🔮 Roadmap
- Multilingual support (FR/ES)
- SEO optimization
- Accessibility improvements

## 📄 License
MIT License - See `LICENCE.txt`

---

*© 2026 Julian Sabos* | [LinkedIn](https://www.linkedin.com/in/juliansabos/) | [GitHub](https://github.com/artpick)