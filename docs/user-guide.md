# User Guide

## Opening a Console

Current toolkit applications are GM-only. Their bundled macro pack and optional launchers are hidden
from Player and Trusted Player users. Open consoles through their compendium macros or the module
API. Open configurators from Foundry's Module Settings.

All three optional launcher buttons are off by default. In **Fear Console Configurator**, enable the
Fear Console sidebar button, XP Curve sidebar button, or Fear Console actor-sheet button
independently, then save and reload Foundry. These are preferences for the current browser; existing
saved choices are preserved. The XP configurator's Token Controls switch changes the same XP
preference. Compendium macros remain available with every launcher button disabled.

Open **Drowsy’s WFRP4e Toolkit** from Module Settings or its macro to reach every console from one
place. Each feature remains a separate window so combat, session, content, and administration work
do not share one oversized form.

## Macro Folders

Open **Drowsy’s WFRP4e Toolkit Macros** in Compendium Packs. Its folders group the launchers by
task:

| Folder          | Macros                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| Sessions        | End Session, Reset Fortune, Imperial Calendar Calculator                                                     |
| XP              | Configure Party, Party XP, Target XP, Curve XP, Configure Curve XP                                           |
| Combat & Tests  | Combat, Damage, Fear, Secret Group Tests                                                                     |
| Scenes & Tokens | Scene Management, Token Vision & Light, Change Grid Scale, Pull Everyone, Use Token Vision, Use Global Light |
| GM Utilities    | Administration, Dark Whispers                                                                                |

The Toolkit Home launcher stays at the top level. Party XP and Target XP are new macros. The old
Award XP macro and its API have been removed; remove old imported copies and use the new macros. GM
Toolkit import and migration support have also been removed.

On startup, the active GM sees a small prompt if toolkit macros are missing or differ from the
bundled versions. Choose **Import Macros** or **Import / Update** to add missing macros and update
existing imports under a toolkit folder with the same task groups. Updates replace imported macro
code, names, and icons while retaining their IDs, permissions, and hotbar links. Nothing is
executed. Matching uses compendium provenance; unrelated macros with the same name are untouched.

**Ask Next Time** or closing the popup leaves everything as it is. **Don’t Ask Again** disables
startup macro reminders for every GM in this world. Uncheck **Ignore toolkit macro import prompts**
in Module Settings to resume them. Current macros produce no prompt; custom changes to imported
toolkit macros count as differences, so choose whether to replace those changes. For a personal
variant, create a new macro and paste the command into it, then name it as you like. Renaming the
managed original still produces an update offer.

## Fear Console

1. Open the console.
2. Choose `Fear` or `Terror`.
3. Set the rating and source name.
4. Review the affected actors.
5. Use `Post Card`, or open its adjacent menu to choose `Copy Link` or `Apply`.

Posted cards list the currently targeted actors when any are present. `Copy Link` puts the WFRP4e
inline `@Fear[...]` or `@Terror[...]` command on the clipboard without posting a chat message.

Only targeted token actors receive direct application. Controlled tokens and the current user's
assigned character are not added implicitly. WFRP4e tracks Fear sources by name, so use a shared
source such as `Ghouls` when a group should count as one source.

## Curve XP

Use the two macros in the **XP** folder:

- **Curve XP** runs a catch-up award. It shows the Party leader and small portraits with final
  bonuses. Hover or focus a portrait for the name, category rate, and before/after totals. Edit the
  reason, check the log preview, and submit.
- **Configure Curve XP** opens guided setup. It is also available in Module Settings. Each step
  handles one variable with plain-language guidance, a draggable curve handle, and an equivalent
  numeric field. Arrow keys work on focused handles. Back keeps your draft; Cancel or closing asks
  before discarding curve changes. Only the final **Save configuration** persists settings.

Curve XP always uses **Configure Party**. The highest-XP member of its Party zone sets the
benchmark. Companions and custom zones can catch up while below that leader, using their category
percentages; characters outside Party never raise the benchmark. Empty or broken rosters show a
repair message. Token targets and the former Party/Company/World selection do not affect this tool.
After repairing the roster, use **Refresh party** in setup to keep your curve draft, or reopen
**Curve XP** to get a fresh award preview.

The setup steps explain pace, gap weighting, when weakening begins, how strongly help weakens, and
an independent per-character ceiling. WFRP advances generally become more expensive as characters
progress, so a gap between 5,000 and 10,000 XP can matter less than 0 versus 2,000. Weakening
focuses help on early growth; set its strength to zero if your campaign does not want it.

Switch **My party / Example** to plot either roster on the curves. The first two steps show initial
help, the next two show the percentage of help remaining, and the ceiling/review steps show final
awards. The portrait bonuses below the graph always show the final calculation. The ceiling is
applied after category rates and rounding, and changing it does not change the initial pace.

Graph axes start at 5,000 XP horizontally and 1,000 bonus XP vertically. Larger parties or bonuses
can use a wider range. Each axis holds steady during a drag and doubles when a value reaches its
edge. It halves when the plotted values fit within the lower 40% of the range, down to the default.
The weakening graphs always show 0–100% vertically.

On the final step, set **After [sessions], at [ordinary XP] per session** to inspect a table for
every simulated session: ordinary XP, curve XP, new total, and remaining gap for each character.
Ordinary XP is applied first at each category’s percentage, then catch-up once, recalculating the
Party leader each session. These assumptions affect only the forecast. XP gaps are a progression
guide, not a promise of equal character effectiveness or an exact deadline for parity.

**Reset to defaults** asks for confirmation and restores the curve draft: 10% pace, linear gap
weighting (1), weakening above 1,000 total XP at strength 1, and a 500 XP ceiling. Finish setup and
save to apply the reset. It does not change party membership or launcher preferences. At 100%
category rate, the default gives 100 XP for 0 versus 1,000 XP, and 67 XP for 6,000 versus 10,000.
Use it each session alongside ordinary XP. Older saved curve strength remains in effect until you
deliberately change it.

The reason supports `%session%` and `%date%`. Applying Curve XP never saves configuration. If XP,
roster membership/rates, or settings change after a preview opens, submission stops before any
writes; reopen to review fresh amounts. Check actor logs after a partial failure before making a new
award. A failed chat summary does not turn a successful award into one to retry.

Optional sidebar buttons remain in the **Fear Console Configurator**; they default off.

## Configure Party

Open **Configure Party** from the XP macro folder or Module Settings. Each zone is a gallery of
actor portraits. Drag world character actors into **Party**, **Companions**, or your own zones, and
drag portraits between zones to move them. Hover a portrait for its name. Right-click it to open the
character sheet, move it to another zone, or remove it from the roster. Clicking a portrait or
pressing Enter also opens that menu; arrow keys navigate it and Escape closes it. The **+** tile
opens an actor picker as an alternative to dragging. Each actor belongs to one zone. NPCs using
WFRP4e's character actor type can receive XP; creature actors cannot.

The **settings cog** opens **Party Zones**, where you can adjust XP percentages, add named zones,
and remove custom zones. Removing a populated zone asks for confirmation and keeps the actors
themselves. **Apply zones** returns those changes to the gallery draft. Closing the zone editor with
unapplied changes offers **Apply**, **Discard**, or **Keep editing**.

First setup seeds Party only from characters assigned to non-GM players, including offline players.
Companions starts empty. Saved membership stays explicit when assignments or ownership change. Party
starts at **100%** and Companions at **50%**. Custom zones can use any nonnegative rate, such as
Background at 25%. Zero percent excludes a zone from Party XP; rates above 100% are allowed.

**Save party** persists the whole draft. Closing the window, pressing Escape, or choosing Cancel
with unsaved changes offers **Save**, **Discard**, or **Keep editing**. Save writes the draft before
closing; a failed save keeps the window and edits open. Unchanged windows close without a prompt.
**Reset party…** in the zone editor asks for confirmation, then rebuilds the draft from current
player assignments, restores default rates, and clears companion membership and custom zones. Apply
zones and Save party to keep the reset. Canceling the confirmation changes nothing. Missing actor
references remain visible with a warning marker so you can remove or replace them.

## Party XP and Target XP

**Party XP** awards to every configured category using its percentage. **Target XP** uses only the
currently targeted character tokens and grants each the entered amount, independently of category.
Controlled tokens do not count, and an empty target set never falls back to the party.

Enter an XP amount and a reason, check the exact log preview and small portraits, then **Submit**.
Hover or keyboard-focus a portrait to see its name and actual change. There are no recipient
checkboxes or settings in this dialog. **Cancel** changes nothing.

Category amounts round down to whole XP. Negative changes remove XP without taking totals below
zero. For example, Party XP of 75 at 50% grants 37 XP; Target XP of 75 grants 75 XP to each target.
Recipients and percentages are captured when the dialog opens. Targeting another token afterward
does not redirect the award. If any recipient's XP changed meanwhile, reopen and review a fresh
preview; the stale submission changes nothing.

**XP Award Defaults** in Module Settings controls the initial amount, reason, and timestamp suffix.
Reasons support `%session%`, `%date%`, and `%datetime%`. The dialog captures its time on opening so
the preview and written reason match exactly. Individual awards never change saved defaults.
Completed batches store that time, reason, session, and per-actor before/change/after amounts.

If an actor write fails partway through, the error names prior recipients whose XP already changed.
The same preview cannot award them twice. Check their logs before starting a new award. Reporting
failures after all actor changes warn that XP was applied and must not be granted again. Durable
recovery across interrupted sessions and reloads remains under review.

## Session Turnover Console

Open **End Session**, select **End of Session**, check the date/time, Session XP, session number,
and recipients, then select **Confirm**. The number starts at the current session. Completing
session 12 automatically sets the current session to 13; editing the submission to 20 advances it
to 21. Enter 0 XP when no award is needed. Recipient percentages come from Configure Party; changes
round down.

**Preview** shows the session log entry and XP reason; individual XP amounts appear next to selected
recipients. The recipient list scrolls independently. **Log** displays recorded sessions.

The **cog** opens **Session Management Settings** for default XP, recipient selection, XP entry
text, pause, Fortune reset, holding-scene movement, chat export, and Pull Everyone behavior. Correct
the current session number there without recording a session or awarding XP. Session defaults are
saved separately from the Party XP/Target XP defaults.

Confirm runs the configured steps and records the session. Fortune is restored for the selected
recipients. If a later step fails, **Retry** uses the saved submission and skips completed steps.

The holding Scene is stored by UUID. Non-GMs cannot move tokens on that Scene while the policy is
configured. **Pull Everyone to Scene** follows the saved activate, pull-only, or prompt behavior and
is also available as a standalone macro. **Reset Fortune** uses the fixed-XP Party/Company/World
recipient default and is likewise available independently.

## Imperial Calendar Calculator

Open **Imperial Calendar Calculator** from Toolkit Home or import its macro from the toolkit pack.
Choose each date's month or festival, day, and I.C. year. Time is optional: use `HH:MM` or
`HH:MM:SS` on a 24-hour clock, or leave it blank for midnight. Results update as you type.

The result counts elapsed time: the same date and time is zero; midnight to the next midnight is one
day. The six festivals each count as a full day. For example, Jahrdrung 33 at 23:00 to Pflugzeit 1
at 01:00 is **1 day, 2 hours**, because Mitterfruhl falls between them. Longer durations also show
400-day years and remaining days. An earlier end date is clearly marked; **Swap dates** reverses the
calculation.

The fixed calendar matches Simple Calendar Reborn's default Warhammer preset: Nachexen and
Nachgeheim have 32 days, the other ten months have 33, and there are six festival days, with no leap
years. Supported years are 1–99,999 I.C. Invalid entries display a correction message. This helper
uses manually entered dates, requires neither calendar module, does not read customized calendars,
and never advances or synchronizes game time.

## Combat Console

Select actors, enter an amount, and add, reduce, or clear Advantage. Add and reduce require combat;
clear remains available outside combat. The automation section controls opposed-test results,
qualifying unopposed damage, condition loss, combat join/leave, round-end momentum loss, and whether
notices remain visible. WFRP4e still owns personal maximums and group Advantage.

Condition checks support Surprised, Ablaze, Poisoned, and Broken. Keep **Require end of round** on
for the normal round-end workflow, and decide explicitly whether assigned player characters should
be skipped.

## Damage Console

Select characters, creatures, or vehicles, enter a number or dice formula, and choose whether the
damage and rolled hit location are shared or rolled per actor. A fixed hit location ignores the
per-actor roll switch. Choose normal protection, ignore armour, ignore Toughness, or ignore both,
then apply. WFRP4e calculates the damage and a private GM summary reports successes and failures.

## Secret Group Tests

Select actors and choose an indexed skill or enter its exact name. Configure difficulty, modifier,
roll mode, dialog bypass, advanced-skill fallback, and fallback difficulty. The saved defaults also
include the initial Party/Company group, four quick-test buttons, default skill, and the private
summary threshold. When a visible dialog belongs to an active assigned player, that player rolls;
otherwise the GM performs the test. Results are accepted only for the requested actor and batch.

## Dark Whispers

Eligible Party or Company characters with Corruption appear with their assigned player and owner
information. Choose recipients, edit or randomize the whisper, select its presentation, and send to
the assigned player or all owners. Players can Accept or Reject once from the Drowsy card; their
response is whispered to GMs. Corruption is not changed automatically.

Expand **Prompt library** to add, edit, remove, and save Drowsy-owned prompts. The prompt library
belongs to this toolkit.

## Token Vision & Light

Control the tokens to change, then choose normal, blinded, Night Vision, Dark Vision, or no vision
and one of fourteen light choices. Expand **Vision defaults** to set normal/Dark Vision ranges and
the two trait overrides. Night Vision accounts for its advances, emitted light, and current Scene
lighting; changes affect only controlled tokens.

## Scene Management Console

Use this launcher when working on a Scene to reach **Change Grid Scale**, **Pull Everyone to
Scene**, **Use Token Vision**, **Use Global Light**, and **Open Token Vision & Light** from one
window. Each action remains available as its own macro in the toolkit compendium; the console is an
additional grouped entrypoint rather than a replacement.

## Administration Console

Use explicit buttons to switch the viewed Scene between Token Vision and global illumination. Select
compendium packs and make them visible to players or hidden, review players without assigned
characters and the startup warning preference, or roll d100. A chat-message context action also
edits message flavour with escaped text.

## Change Grid Scale Macro

Import `Change Grid Scale (Preserve Lighting)` from the toolkit's GM-only macro compendium, view the
Scene you want to change, and run the macro. Enter the new grid size in pixels, distance per space,
and units. The macro rescales Ambient Light and Token-emitted light radii before updating the grid,
so their rendered sizes stay unchanged.

The macro changes the active Scene and its embedded documents. Use a disposable copy when testing.
If an update fails, the toolkit attempts to restore each completed change and reports whether any
rollback also failed.
