#!/bin/bash

recursive_minify() {
    local folder="$1"

    for file in "$folder"/*.html; do
        if [ -f "$file" ]; then
            echo "Minifying: $file"
            html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype "$file" -o "$file"
        fi
    done

    for subfolder in "$folder"/*; do
        if [ -d "$subfolder" ]; then
            recursive_minify "$subfolder"
        fi
    done
}
npm install html-minifier -g
# Compile the site
pip install -r requirements.txt
# Set the target environment
export BUILD_TYPE=production
echo "Running: $BUILD_TYPE"
mkdocs build
recursive_minify "site"