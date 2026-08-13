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

- `Fear Console` prompts or applies WFRP4e Fear and Terror from Token Controls, supported actor
  sheets, a macro, or the module API.
- `XP Curve Console` previews and awards capped catch-up XP to targeted actors or a configurable
  Party, Company, or World fallback group.
- Each console has a separate configurator available from Module Settings and its in-console cog,
  independently configurable Foundry launchers, and a macro in `Drowsy’s WFRP4e Toolkit Macros`.

The XP console can reuse an active WFRP4e GM Toolkit's session reference, default XP reason, and
Party/Company selection. It does not modify GM Toolkit settings and can operate alongside that
module.

## Macro and API Access

Import `Open Fear Console` or `Open XP Curve Console` from the macro compendium. Equivalent custom
script macros can use:

```js
const api = game.modules.get("wfrp4e-enhanced-fear-terror")?.api;

await api.openFearConsole();
await api.openXpCurveConsole();
```

## Compatibility

- Foundry VTT 13 minimum; Foundry VTT 14 verified.
- WFRP4e system required.
