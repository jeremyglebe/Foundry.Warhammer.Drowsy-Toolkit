# User Guide

## Opening a Console

Current toolkit applications are GM-only. Their bundled macro pack and optional launchers are hidden
from Player and Trusted Player users. The Fear and XP Curve consoles are available from Token
Controls, their macros, and the module API; the Fear Console also appears in supported WFRP4e
actor-sheet headers. Open configurators and the GM Toolkit Importer from Foundry's Module Settings.
Every optional Foundry UI launcher is enabled by default; changing one requires a reload.

Open **Drowsy’s WFRP4e Toolkit** from Module Settings or its macro to reach every console from one
place. Each feature remains a separate window so combat, session, content, and administration work
do not share one oversized form.

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

## XP Curve Console

1. Open the XP Curve Configurator from Module Settings or the console cog when you need to change
   launcher preferences, the no-target recipient default, the award reason, or either XP curve.
2. Edit the curve number fields or drag their diamond and round graph handles; both controls stay
   synchronized. Numbered recipient markers preview the current actors on both graphs.
3. Use `Reset to defaults` to restore the built-in values in the form, or use `Save configuration`
   to persist the displayed settings. Neither action awards XP.
4. Target the character tokens that should seed an award, or leave all tokens untargeted to use the
   configured Party, Company, or World default, then open the XP Curve Console.
5. Review or adjust the recipients. Unassigned, player-owned actors display a `Companion rate`
   label. Review each actor's leader gap, initial catch-up, decay multiplier, final award, and new
   total.
6. Edit the experience-log reason for this batch, then use `Award XP`.

The actor with the highest selected total XP is the comparison point and receives no catch-up XP.
For every other recipient, the catch-up curve first converts the gap below that leader into an
initial XP value. The decay curve then multiplies that value according to the recipient's own total
XP; the leader's total is not part of decay. Recipients at or below `Decay start` keep full
strength. Above it, `Recipient decay exponent` weakens the result; set that exponent to zero to
disable decay. The companion rate is applied before rounding, and the hard limit is applied last.

The built-in defaults are Company recipients, `XP Curve %session% (%date%)` as the award reason, a
1,000 XP hard limit, a 5,000 XP reference gap, a 1.75 curve shape, a 7,500 XP decay start, decay
strength 1, and companion rate 0.5. Reset also enables the Token Controls launcher.

The reason supports `%session%` and `%date%`. XP Curve reads its recipient, reason, and curve values
only from Drowsy’s WFRP4e Toolkit settings. `%session%` uses Drowsy’s current session reference. The
GM Toolkit Importer can copy that reference once; XP Curve never reads GM Toolkit settings directly.

Foundry's Module Settings shows one button for each dedicated configurator instead of exposing the
underlying setting list. The same configurators are available from the cogs in their consoles.

## XP Award Console

Use the XP Award Console for a fixed award instead of catch-up calculation. Target eligible
character tokens before opening it, or leave all tokens untargeted to use the saved Party, Company,
or World default. Company companions receive half the entered change. Negative values remove XP, but
the preview prevents an actor's total from going below zero.

The reason accepts `%session%`, `%date%`, and `%datetime%`. Every completed batch stores its exact
UTC time, session reference, reason, and per-actor before/change/after values in Drowsy’s world
data. WFRP4e has no timestamp field in an experience-log entry. Enable the timestamp switch when the
same time should also appear as text in WFRP4e's reason.

## Import from GM Toolkit

Open `Import from GM Toolkit` in Module Settings. The importer can read saved world data while GM
Toolkit is active, disabled, or no longer installed.

Select any of the 34 compatible settings you want to keep, then choose `Import selected`. The
comparison shows the saved GM Toolkit value beside the current Drowsy value. Only selected values
are copied, and GM Toolkit settings are never changed or synchronized. Values marked superseded,
retired, or transient are explained and are not copied. A holding Scene name must resolve to exactly
one current Scene; otherwise choose its UUID in Session Management.

If the world contains a Dark Whispers RollTable, select the prompts to copy into Drowsy’s library.
New, unchanged, duplicate, and locally edited prompts are identified separately. Re-import keeps the
Drowsy version of an edited prompt unless you explicitly replace it. The source RollTable is never
changed or deleted.

The Hotbar Launchers section checks the current user's hotbars. All 20 active stock launchers have a
Drowsy equivalent and can be selected for remapping. The simple d100 launcher remains independent;
Foundry `/r 1d100` and the Administration Console both cover it. Customized macros and uncertain
matches are left untouched for manual review.

Before disabling GM Toolkit, review the final summary and save your acknowledgement. Changing source
data or import choices makes the earlier review stale. Finish any active combat first because
combat-specific state is not copied. Drowsy uses only its own saved data after the import.

## Session Management Console

Edit and save the current reference independently, or complete a session by selecting its best-known
date/time and the next reference. A turnover can pause the game, activate the configured holding
Scene, apply the fixed XP defaults, reset Fortune from Fate plus Luck, export chat, and record the
session. Each result is saved before the next step, so retrying after a failure skips work that
already completed. Whole-number references are suggested one number higher; descriptive references
are preserved for editing.

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

Expand **Prompt library** to add, edit, remove, and save Drowsy-owned prompts. Imported GM Toolkit
prompts become ordinary Drowsy content after the one-way copy.

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
