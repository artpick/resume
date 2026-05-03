#!/bin/bash
# Simple validation script for Agent Skills specification

SKILL_DIR="$1"

if [ -z "$SKILL_DIR" ]; then
    echo "Usage: $0 <skill-directory>"
    exit 1
fi

echo "=== Validating Agent Skill: $SKILL_DIR ==="
echo ""

# Check directory exists
if [ ! -d "$SKILL_DIR" ]; then
    echo "❌ Directory does not exist: $SKILL_DIR"
    exit 1
fi

# Check SKILL.md exists
if [ ! -f "$SKILL_DIR/SKILL.md" ]; then
    echo "❌ SKILL.md not found"
    exit 1
else
    echo "✅ SKILL.md exists"
fi

# Check name matches directory
SKILL_NAME=$(grep -m1 '^name:' "$SKILL_DIR/SKILL.md" | cut -d' ' -f2 | tr -d ' ')
DIR_NAME=$(basename "$SKILL_DIR")

if [ "$SKILL_NAME" != "$DIR_NAME" ]; then
    echo "❌ Name mismatch: skill name='$SKILL_NAME', directory='$DIR_NAME'"
    exit 1
else
    echo "✅ Name matches directory: $SKILL_NAME"
fi

# Check required frontmatter fields
if ! grep -q '^name:' "$SKILL_DIR/SKILL.md"; then
    echo "❌ Missing 'name' field"
    exit 1
fi

if ! grep -q '^description:' "$SKILL_DIR/SKILL.md"; then
    echo "❌ Missing 'description' field"
    exit 1
fi

echo "✅ Required frontmatter fields present"

# Check name format (lowercase, hyphens, 1-64 chars)
if [[ ! "$SKILL_NAME" =~ ^[a-z0-9-]{1,64}$ ]]; then
    echo "❌ Invalid name format: $SKILL_NAME"
    exit 1
fi

if [[ "$SKILL_NAME" =~ ^-|-[^-]$|-- ]]; then
    echo "❌ Invalid name format (starts/ends with hyphen or consecutive hyphens): $SKILL_NAME"
    exit 1
fi

echo "✅ Name format valid"

# Check description length
DESCRIPTION=$(grep '^description:' "$SKILL_DIR/SKILL.md" | cut -d'"' -f2)
DESC_LEN=${#DESCRIPTION}

if [ "$DESC_LEN" -lt 1 ] || [ "$DESC_LEN" -gt 1024 ]; then
    echo "❌ Description length invalid: $DESC_LEN chars (must be 1-1024)"
    exit 1
fi

echo "✅ Description length valid: $DESC_LEN chars"

# Count lines in SKILL.md
SKILL_LINES=$(wc -l < "$SKILL_DIR/SKILL.md")
if [ "$SKILL_LINES" -gt 500 ]; then
    echo "⚠️  SKILL.md has $SKILL_LINES lines (recommended < 500)"
else
    echo "✅ SKILL.md line count: $SKILL_LINES (< 500 recommended)"
fi

# Check for optional directories
for dir in scripts references assets; do
    if [ -d "$SKILL_DIR/$dir" ]; then
        echo "✅ Optional directory exists: $dir/"
    fi
done

echo ""
echo "=== Skill is valid! ==="
