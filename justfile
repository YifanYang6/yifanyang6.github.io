set shell := ["bash", "-euo", "pipefail", "-c"]

public_repo := "https://github.com/YifanYang6/yifanyang6.github.io.git"

# Build the site locally and publish only the generated _site directory.
update:
    ./scripts/update_public_site.sh "{{public_repo}}"

# Build the Jekyll site without publishing it.
build:
    docker compose run --rm -e JEKYLL_ENV=production jekyll bundle exec jekyll build
