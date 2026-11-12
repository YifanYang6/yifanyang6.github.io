#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PUBLIC_REPO="${1:-https://github.com/YifanYang6/yifanyang6.github.io.git}"
TMP_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

cd "$ROOT_DIR"

command -v docker >/dev/null || { echo "docker is required" >&2; exit 1; }
command -v git >/dev/null || { echo "git is required" >&2; exit 1; }

echo "Building Jekyll site..."
docker compose run --rm -e JEKYLL_ENV=production jekyll bundle exec jekyll build

echo "Purging unused CSS..."
docker run --rm \
  -v "$ROOT_DIR:/work" \
  -w /work \
  node:22-alpine \
  sh -c 'npx --yes purgecss -c purgecss.config.js'

echo "Cloning public deployment branch..."
git clone --depth 1 --branch gh-pages "$PUBLIC_REPO" "$TMP_DIR/public"

echo "Syncing generated files..."
rsync -a --delete --exclude='.git' "$ROOT_DIR/_site/" "$TMP_DIR/public/"

cd "$TMP_DIR/public"
if git diff --quiet && git diff --cached --quiet; then
  echo "Public site is already up to date."
  exit 0
fi

git add -A
git -c user.name="YifanYang6" \
    -c user.email="yifanyang6@link.cuhk.edu.cn" \
    commit -m "Deploy website"
git push origin gh-pages
echo "Published to https://yifanyang6.github.io/"
