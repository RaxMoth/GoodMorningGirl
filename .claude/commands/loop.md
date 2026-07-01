---
description: Autonomous improvement loop — audit codebase vs. spec, work one task, track progress, propose (don't build) new features
argument-hint: [stack: godot|flutter|react] [optional focus area]
allowed-tools: Read, Grep, Glob, Edit, Write, Bash(git:*), Bash(godot:*), Bash(flutter:*), Bash(npm:*), Bash(npx:*)
---

# /loop — One iteration of the continuous improvement loop

Target stack: **$1** (default: `godot` if empty). Optional focus: $2

You are running ONE iteration of an ongoing improvement loop. Each invocation does exactly one unit of work, updates the tracking file, and stops. Never batch multiple tasks into one iteration.

## Source-of-truth files

- `GAME_DESIGN.md` (or `FEATURES.md` / `SPEC.md` if that's what exists) — the wanted features. Read-only for you unless explicitly told otherwise.
- `PROGRESS.md` — the living state of the project. You own this file. If it doesn't exist, create it with this structure:

```markdown
# Progress Tracker

Last loop run: <ISO timestamp>
Stack: <godot|flutter|react>

## Done

- [x] Feature — short note, commit hash

## In Progress

- [ ] Feature — current state, blockers

## Backlog (from spec, not started)

- [ ] Feature

## Proposed (NOT approved — do not implement)

- [ ] Idea — rationale. Status: awaiting review

## Tech Debt / Improvements

- [ ] Item — why it matters
```

## Iteration steps

### 1. Sync state

- Read `PROGRESS.md` and the spec file.
- Run `git log --oneline -15` and `git status` to see what actually changed since the last loop (don't trust PROGRESS.md blindly — verify against the code).
- Reconcile: if something marked "In Progress" is actually finished and committed, move it to Done.

### 2. Audit (lightweight, capped at ~10 min of effort)

Scan the codebase for divergence from industry-standard practice **for the active stack**:

**If stack = godot:**

- Prefer native engine features over hand-rolled systems: signals instead of polling, `TileMapLayer` for grids, `AnimationPlayer`/`Tween` for motion, `Area2D`/collision layers for detection, Resources (`.tres`) for data-driven config, autoloads only for true singletons, node groups for broadcasts, `_physics_process` vs `_process` used correctly.
- Scene composition over inheritance; typed GDScript (`: int`, `-> void`); no logic in `_ready` that belongs in dedicated setup; exported variables over magic numbers.

**If stack = flutter:**

- Prefer framework-native solutions: existing widgets over custom painting, established state management already used in the repo (don't introduce a second one), `const` constructors, proper `dispose()`, repository pattern for data access.

**If stack = react:**

- Prefer platform/framework features: built-in hooks over reinvented state machines, existing component library in the repo, proper memoization only where measured, accessibility attributes, no prop drilling where context/store already exists.

Log new findings as checkboxes under **Tech Debt / Improvements** in `PROGRESS.md`. Do NOT fix them all now.

### 3. Compare spec vs. reality

Diff the spec's feature list against the codebase. Any spec feature that's missing or partial goes into **Backlog** (or stays **In Progress**) with a one-line status.

### 4. Pick ONE task and do it

Priority order:

1. Finish anything **In Progress** (never start new work while something is half-done).
2. Highest-value **Backlog** feature from the spec.
3. Highest-impact **Tech Debt** item.

Rules for the work:

- Keep the change small and shippable within this iteration. If the task is too big, split it in `PROGRESS.md` and do only the first slice.
- Use the stack's native/idiomatic approach (see step 2 lists).
- Verify before committing: run the project's checks if available (`godot --headless --check-only` / parse scripts, `flutter analyze && flutter test`, `npm run lint && npm test`). Fix what you broke.
- Commit with a conventional message: `feat: ...`, `fix: ...`, `refactor: ...`
- Update `PROGRESS.md`: move the item, note the commit hash, update the timestamp.

### 5. If everything is up to date (no backlog, no in-progress, no meaningful debt)

**Do not invent and implement features.** Instead:

- Propose 3–5 new feature ideas that fit the existing design's direction. For each: one-paragraph rationale, rough effort estimate (S/M/L), and what native engine/framework features it would use.
- Write them under **Proposed (NOT approved)** in `PROGRESS.md` with status `awaiting review`.
- End the iteration and tell the user: "No approved work remains. I've added proposals to PROGRESS.md — review them and move approved ones to Backlog, then run /loop again."
- On future iterations, treat anything still under **Proposed** as untouchable until the user has moved it to Backlog or marked it approved.

### 6. Report

End every iteration with a short summary: what was done, what's next in the queue, and any blockers — max 10 lines.

## Hard rules

- One task per iteration. Stop after it.
- Never implement anything from the **Proposed** section.
- Never rewrite the spec file's feature definitions on your own.
- Prefer targeted, minimal fixes over broad restructuring.
- If tests/checks fail and you can't fix them within the iteration, revert, log the failure in PROGRESS.md, and stop.
