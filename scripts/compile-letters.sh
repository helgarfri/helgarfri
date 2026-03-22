#!/usr/bin/env bash
# Compile all cover letters in letters/ (XeLaTeX). Run after editing any .tex there.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/letters"
for tex in *.tex; do
  case "$tex" in
    letter-style.tex | letter-template.tex) continue ;;
    *)
      echo "==> xelatex $tex"
      xelatex -interaction=nonstopmode "$tex"
      ;;
  esac
done
echo "Done."
