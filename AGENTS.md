<!-- ARIS-CODEX:BEGIN -->
## ARIS Codex Skill Scope
ARIS Codex packages installed in this project: skills-codex
Managed entries: 69
Manifest: `.aris/installed-skills-codex.txt`
ARIS repo root: `/home/nn/workspace/Auto-claude-code-research-in-sleep`
Project skill path: `.agents/skills/<skill-name>`
For ARIS Codex workflows, prefer the project-local skills under `.agents/skills/`.
When a skill needs ARIS helper scripts, resolve the repo root from the manifest or set it explicitly:
`ARIS_REPO=$(awk -F'\t' '$1=="repo_root"{print $2; exit}' "/home/nn/workspace/yifanyang6.github.io/.aris/installed-skills-codex.txt")`
Do not edit or delete symlinked skills in place; update upstream or rerun:
`bash /home/nn/workspace/Auto-claude-code-research-in-sleep/tools/install_aris_codex.sh "/home/nn/workspace/yifanyang6.github.io" --reconcile`
For copied Codex installs, use:
`bash /home/nn/workspace/Auto-claude-code-research-in-sleep/tools/smart_update_codex.sh --project "/home/nn/workspace/yifanyang6.github.io"`
<!-- ARIS-CODEX:END -->
