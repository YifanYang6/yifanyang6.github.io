#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"
cp cv/Yifan_Yang_CV.yaml _data/cv.yml
uv sync --frozen >/dev/null 2>&1 || uv sync >/dev/null
uv run rendercv render cv/Yifan_Yang_CV.yaml \
  -nomd -nohtml -nopng \
  --pdf-path ../assets/pdf/Yifan_Yang_CV.pdf
