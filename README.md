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

Current applications and their bundled launchers are GM-only.

- `Toolkit Home` opens every gameplay and campaign tool without depending on macro names.
- `Fear Console` prompts or applies WFRP4e Fear and Terror from Token Controls, supported actor
  sheets, a macro, or the module API.
- `XP Curve Console` previews and awards capped catch-up XP to targeted actors or a configurable
  Party, Company, or World fallback group.
- `XP Award Console` applies one reviewed XP change with compatible Party and Company behavior.
- `Session Turnover Console` runs resumable pause, holding Scene, XP, Fortune, chat export, and
  record turnover steps.
- `Imperial Calendar Calculator` measures the exact time between two Imperial dates, including all
  six festival days, without changing game time or requiring a calendar module.
- `Combat Console` manages Advantage automation and supported condition checks.
- `Damage Console` applies reviewed batch damage through WFRP4e.
- `Secret Group Tests` supports private delegated and GM-run tests with aggregation.
- `Dark Whispers` owns editable prompts, recipients, private delivery, and responses.
- `Token Vision & Light` provides five vision modes and fourteen light choices.
- `Scene Management Console` groups grid scaling, player pulls, Scene lighting modes, and the Token
  Vision & Light launcher while keeping each action available as its own macro.
- `Administration Console` manages Scene lighting, compendium visibility, player assignments, chat
  flavour, and d100 rolls.
- `GM Toolkit Importer` copies selected settings and content from GM Toolkit and reviews hotbar
  replacements before it is disabled.
- The Fear and XP Curve consoles have separate configurators. Operational consoles have launchers in
  `Drowsy’s WFRP4e Toolkit Macros`; every application has a public API operation.

The XP Curve Console owns its recipient, reason, and curve defaults under Drowsy’s settings. Its
configurator can restore the complete built-in baseline before saving.

The separate GM Toolkit Importer supports an explicit one-way copy of all 34 compatible settings,
customized Dark Whispers prompts, and all 20 active stock launcher replacements. After import,
Drowsy’s Toolkit owns the copied data. GM Toolkit settings remain read-only.

## Macro and API Access

As a GM, import any `Open … Console` launcher or standalone Scene action from the GM-only macro
compendium. The grid utility changes the active Scene's grid settings while preserving the rendered
size of its Ambient Lights and Token-emitted lights. Equivalent custom script macros can use:

```js
const api = game.modules.get("wfrp4e-enhanced-fear-terror")?.api;

await api.openFearConsole();
await api.openToolkitHome();
await api.openCombatConsole();
await api.openDamageConsole();
await api.openGroupTestConsole();
await api.openDarkWhispersConsole();
await api.openTokenToolsConsole();
await api.openAdministrationConsole();
await api.openGmToolkitMigration();
await api.openXpAwardConsole();
await api.openXpCurveConsole();
await api.openSessionManagementConsole();
await api.openSceneManagementConsole();
await api.openImperialCalendarCalculator();
await api.changeGridScalePreservingLighting();
```

## Compatibility

- Foundry VTT 13 minimum; Foundry VTT 14 verified.
- WFRP4e system required.
