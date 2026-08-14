# Drowsy’s WFRP4e Toolkit

Small, focused Foundry VTT consoles for administering WFRP4e games.

## Installation

Use this manifest URL in Foundry's module installer:

```text
https://github.com/jeremyglebe/Foundry.Warhammer-Fantasy.Drowsy-Toolkit/releases/latest/download/module.json
```

The installation ID remains unchanged so existing Enhanced Fear & Terror installations update in
place under the new toolkit name.

## Included Consoles

All four current consoles and their bundled launchers are GM-only.

- `Fear Console` prompts or applies WFRP4e Fear and Terror from Token Controls, supported actor
  sheets, a macro, or the module API.
- `XP Curve Console` previews and awards capped catch-up XP to targeted actors or a configurable
  Party, Company, or World fallback group.
- `XP Award Console` applies one reviewed XP change with compatible Party and Company behavior.
- `Session Management Console` migrates GM Toolkit defaults and records timestamped turnovers.
- The Fear and XP Curve consoles have separate configurators. All four consoles have a launcher in
  `Drowsy’s WFRP4e Toolkit Macros` and a public API operation.

The XP Curve Console owns its recipient, reason, and curve defaults under Drowsy’s settings. Its
configurator can restore the complete built-in baseline before saving.

The Session Management Console also supports an explicit one-way migration of GM Toolkit's session
reference and generic XP defaults. After import, Drowsy’s Toolkit owns the current reference,
timestamped session history, and timestamped generic-XP audit batches. GM Toolkit settings remain
read-only.

## Macro and API Access

As a GM, import any `Open … Console` launcher or `Change Grid Scale (Preserve Lighting)` from the
GM-only macro compendium. The grid utility changes the active Scene's grid settings while preserving
the rendered size of its Ambient Lights and Token-emitted lights. Equivalent custom script macros
can use:

```js
const api = game.modules.get("wfrp4e-enhanced-fear-terror")?.api;

await api.openFearConsole();
await api.openXpAwardConsole();
await api.openXpCurveConsole();
await api.openSessionManagementConsole();
await api.changeGridScalePreservingLighting();
```

## Compatibility

- Foundry VTT 13 minimum; Foundry VTT 14 verified.
- WFRP4e system required.
