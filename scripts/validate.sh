#!/bin/bash
# Script de validation HTML/CSS pour le projet resume
# À exécuter avant et après chaque modification

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PUBLIC_DIR="$PROJECT_ROOT/public"

echo "=== Validation HTML/CSS ==="
echo ""

# Vérifier que html5validator est installé
if ! command -v html5validator &> /dev/null; then
    echo "❌ html5validator non installé. Installation..."
    pip3 install --break-system-packages html5validator 2>/dev/null
fi

echo "1. Validation HTML (html5validator - W3C Nu)"
echo "-------------------------------------------"
html5validator "$PUBLIC_DIR/index.html" 2>&1 || true
HTML_RESULT=$?

if [ $HTML_RESULT -eq 0 ]; then
    echo "✅ HTML valide"
else
    echo "❌ Erreurs HTML trouvées"
fi

echo ""
echo "2. Vérification rapide avec tidy (HTML5)"
echo "-------------------------------------------"
tidy -q -ashtml -utf8 "$PUBLIC_DIR/index.html" 2>&1 | grep -E "^(line|Error|Warning)" | head -20 || true

echo ""
echo "3. Vérification encodage UTF-8"
echo "-------------------------------------------"
file -I "$PUBLIC_DIR/index.html"

echo ""
echo "4. Lignes totales"
echo "-------------------------------------------"
wc -l "$PUBLIC_DIR/index.html"

echo ""
echo "5. Validation SEO"
echo "-------------------------------------------"
SEO_ERRORS=0

# Vérifier les balises meta essentielles
for tag in "description" "keywords" "author" "viewport"; do
    if grep -q "<meta name=\"$tag\"" "$PUBLIC_DIR/index.html" 2>/dev/null; then
        echo "✅ Meta $tag: présent"
    else
        echo "❌ Meta $tag: MANQUANT"
        SEO_ERRORS=$((SEO_ERRORS + 1))
    fi
done

# Vérifier Open Graph
for og_tag in "og:title" "og:description" "og:image" "og:url"; do
    if grep -q "property=\"$og_tag\"" "$PUBLIC_DIR/index.html" 2>/dev/null; then
        echo "✅ Open Graph $og_tag: présent"
    else
        echo "❌ Open Graph $og_tag: MANQUANT"
        SEO_ERRORS=$((SEO_ERRORS + 1))
    fi
done

# Vérifier Structured Data
if grep -q "application/ld+json" "$PUBLIC_DIR/index.html" 2>/dev/null; then
    echo "✅ Structured Data (JSON-LD): présent"
else
    echo "❌ Structured Data (JSON-LD): MANQUANT"
    SEO_ERRORS=$((SEO_ERRORS + 1))
fi

# Vérifier canonical URL
if grep -q "rel=\"canonical\"" "$PUBLIC_DIR/index.html" 2>/dev/null; then
    echo "✅ Canonical URL: présent"
else
    echo "❌ Canonical URL: MANQUANT"
    SEO_ERRORS=$((SEO_ERRORS + 1))
fi

# Vérifier title
if grep -q "<title>" "$PUBLIC_DIR/index.html" 2>/dev/null; then
    echo "✅ Title tag: présent"
else
    echo "❌ Title tag: MANQUANT"
    SEO_ERRORS=$((SEO_ERRORS + 1))
fi

# Vérifier favicon
if [ -f "$PUBLIC_DIR/favicon.ico" ] || grep -q "rel=\"icon\"" "$PUBLIC_DIR/index.html" 2>/dev/null; then
    echo "✅ Favicon: présent"
else
    echo "❌ Favicon: MANQUANT"
    SEO_ERRORS=$((SEO_ERRORS + 1))
fi

# Vérifier robots.txt et sitemap.xml
if [ -f "$PUBLIC_DIR/robots.txt" ]; then
    echo "✅ robots.txt: présent"
else
    echo "❌ robots.txt: MANQUANT"
    SEO_ERRORS=$((SEO_ERRORS + 1))
fi

if [ -f "$PUBLIC_DIR/sitemap.xml" ]; then
    echo "✅ sitemap.xml: présent"
else
    echo "❌ sitemap.xml: MANQUANT"
    SEO_ERRORS=$((SEO_ERRORS + 1))
fi

if [ $SEO_ERRORS -eq 0 ]; then
    echo "✅ SEO: Valide"
else
    echo "❌ SEO: $SEO_ERRORS problème(s) trouvé(s)"
fi

echo ""
echo "=== Validation terminée ==="

# Retourner un code d'erreur si HTML ou SEO a des problèmes
if [ $HTML_RESULT -ne 0 ] || [ $SEO_ERRORS -ne 0 ]; then
    exit 1
fi

exit 0
