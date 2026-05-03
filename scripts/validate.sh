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
echo "=== Validation terminée ==="

exit $HTML_RESULT
