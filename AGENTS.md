<!-- ARIS-CODEX:BEGIN -->
## ARIS Codex Skill Scope
ARIS Codex packages installed in this project: skills-codex
Managed entries: 88
Manifest: `.aris/installed-skills-codex.txt`
ARIS repo root: `/home/nn/workspace/Auto-claude-code-research-in-sleep`
Project skill path: `.agents/skills/<skill-name>`
For ARIS Codex workflows, prefer the project-local skills under `.agents/skills/`.
When a skill needs ARIS helper scripts, resolve the repo root from the manifest or set it explicitly:
`ARIS_REPO=$(awk -F'	' '$1=="repo_root"{print $2; exit}' "/home/nn/workspace/yifanyang6.github.io/.aris/installed-skills-codex.txt")`
Do not edit or delete symlinked skills in place; update upstream or rerun:
`bash /home/nn/workspace/Auto-claude-code-research-in-sleep/tools/install_aris_codex.sh "/home/nn/workspace/yifanyang6.github.io" --reconcile`
For copied Codex installs, use:
`bash /home/nn/workspace/Auto-claude-code-research-in-sleep/tools/smart_update_codex.sh --project "/home/nn/workspace/yifanyang6.github.io"`

### Goal Pulse for Codex Goals
When the user starts or resumes a Goal, or you take over an active Goal, read and enable HERO Goal Pulse for the current thread by default, without another confirmation:
https://github.com/wanshuiyin/HERO-Anti-OverDefense/tree/main/skills/goal-pulse
First read the installed `${CODEX_HOME:-~/.codex}/skills/goal-pulse/SKILL.md`; if missing, follow the HERO guide above to prepare the skill and dependencies. Report blockers rather than claim it is enabled.
Bind only to `CODEX_THREAD_ID` or an explicit host-supplied thread ID; never guess the most recent thread.
Use the installed skill's start/status/stop commands: bilingual reminders every 30 minutes, read-only local polling every 60 seconds, on compatible macOS/Linux Codex app-server setups.
Honor user disable/pause. Stay silent while paused, waiting for user/approval, blocked, or budget-limited; exit on Goal completion, deletion, or replacement. Never resume a Goal or start a new turn.
This is an instruction for the main agent, not a native Codex hook. Installing ARIS or ordinary chat does not start a timer; do not extend it to other threads.
HERO maintains the only implementation. Reviewer and writing-worker selection are unchanged.
<!-- ARIS-CODEX:END -->

## Public / Private Content Policy

This repository is private, but the generated website is public. Maintain a strict separation between public website content and private application/research materials.

### Public website sources

Only these sources should drive public website pages and the public downloadable CV:

- `cv/Yifan_Yang_CV_public.yaml`
- `cv/Yifan_Yang_CV.yaml` (compatibility copy of the public CV source)
- `_data/cv.yml` (generated from the public CV source)
- `_bibliography/papers.bib`
- `assets/pdf/Yifan_Yang_CV.pdf`
- `_pages/*.md`

Public content should include only work that is public and externally verifiable, such as accepted papers and public preprints. Do not list non-public submissions, internal project names, or papers without a public preprint on the website or public CV unless the user explicitly asks to publish them.

### Private/application sources

Private content may include submitted, under-review, unpublished, or application-only materials. Maintain these separately:

- `cv/Yifan_Yang_CV_private.yaml`
- `.local/research/private/papers_private.bib`
- `.local/personal/cv/Yifan_Yang_CV.pdf`
- `.local/personal/application_attachments/Yifan_Yang_CV.pdf`

By default, update the private CV first when adding new research, submissions, or application materials. Only promote selected items from private to public when the user explicitly says to update public website/public CV content.

### CV rendering commands

Use the variant-aware renderer:

```bash
bash scripts/render_cv.sh public   # public website CV and _data/cv.yml
bash scripts/render_cv.sh private  # private/application CV copies
bash scripts/render_cv.sh all      # both, preserving separation
```

Never replace public CV sources with private sources as a shortcut. Before committing public website updates, check that public sources do not contain private-only markers such as `Metis`, `Submitted`, `Under review`, `TOSEM`, or `NeurIPS` unless the user explicitly approved publication. `OpenRCA 2.0` is public after arXiv `2606.27154`, but public sources should label it as an arXiv preprint rather than a venue submission.