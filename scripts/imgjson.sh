#!/usr/bin/env bash

# CREATE A JSON ARRAY WITH ALL IMGS TO LOOP THROUGH

IMG_DIR="static/img/jpg"
OUT_FILE="$IMG_DIR/images.json"

# List only image files, remove paths, and sort
files=$(ls "$IMG_DIR" | grep -Ei '\.(jpg|jpeg|png|gif|webp)$' | sort)

# Build JSON array
echo "[" > "$OUT_FILE"
first=true
for f in $files; do
  if [ "$first" = true ]; then
    first=false
  else
    echo "," >> "$OUT_FILE"
  fi
  printf "  \"%s\"" "$f" >> "$OUT_FILE"
done
echo "" >> "$OUT_FILE"
echo "]" >> "$OUT_FILE"

echo "Generated $OUT_FILE with $(echo "$files" | wc -l) images"
