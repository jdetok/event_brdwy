#!/usr/bin/env bash
mkdir -p static/img/jpg
for f in static/img/heic/*.HEIC; do
    base=$(basename "$f" .HEIC)
    heif-convert "$f" "static/img/jpg/${base}.jpg"
done

