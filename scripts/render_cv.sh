#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

variant="${1:-public}"
uv sync --frozen >/dev/null 2>&1 || uv sync >/dev/null

render_public() {
  cp cv/Yifan_Yang_CV_public.yaml _data/cv.yml
  cp cv/Yifan_Yang_CV_public.yaml cv/Yifan_Yang_CV.yaml
  uv run rendercv render cv/Yifan_Yang_CV_public.yaml \
    -nomd -nohtml -nopng \
    --pdf-path ../assets/pdf/Yifan_Yang_CV.pdf
}

render_private() {
  uv run rendercv render cv/Yifan_Yang_CV_private.yaml \
    -nomd -nohtml -nopng \
    --pdf-path ../.local/personal/cv/Yifan_Yang_CV.pdf
  cp .local/personal/cv/Yifan_Yang_CV.pdf .local/personal/application_attachments/Yifan_Yang_CV.pdf
  cp cv/Yifan_Yang_CV_private.yaml .local/research/private/Yifan_Yang_CV_private.yaml
}

case "$variant" in
  public)
    render_public
    ;;
  private)
    render_private
    ;;
  all)
    render_public
    render_private
    ;;
  *)
    echo "Usage: $0 [public|private|all]" >&2
    exit 2
    ;;
esac
