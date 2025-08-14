#!/usr/bin/env bash
mkdir -p img/jpg
for f in img/heic/*.HEIC; do
    base=$(basename "$f" .HEIC)
    heif-convert "$f" "img/jpg/${base}.jpg"
done

