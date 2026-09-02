# User Guide

## Opening a Console

All four current consoles are GM-only. Their bundled macro pack and optional launchers are hidden
from Player and Trusted Player users. The Fear and XP Curve consoles are available from Token
Controls, their macros, and the module API; the Fear Console also appears in supported WFRP4e
actor-sheet headers. Open a console's configurator from its cog button or from Foundry's Module
Settings. Every optional Foundry UI launcher is enabled by default; changing one requires a reload.

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
only from Drowsy’s WFRP4e Toolkit settings. `%session%` uses Drowsy’s current session reference;
Session Management can import that reference from GM Toolkit explicitly, but XP Curve does not
live-read GM Toolkit settings.

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

## Session Management Console

When migrating from GM Toolkit, open Session Management from Module Settings or its macro and review
the migration panel. It catalogues all 38 known GM Toolkit 9.2.0 settings and identifies values as
persisted, registered defaults, or known baseline values. The source module may be active, disabled,
or uninstalled as long as its world settings still exist.

Select the session reference and generic XP defaults you want to keep, then choose
`Import selected`. The panel identifies matching, new, and conflicting values before the import. The
operation copies only those selected values into Drowsy’s world settings, records a versioned
snapshot, and never changes or synchronizes GM Toolkit settings. Settings for replacement features
that have not been implemented yet remain visible in the inventory count as awaiting features.

If the world contains an imported Dark Whispers RollTable, the same screen also previews its prompt
rows. Select the prompts to copy into Drowsy’s library. New prompts are selected automatically;
unchanged, duplicate, and locally edited prompts are identified separately. Re-import keeps the
Drowsy version of an edited prompt unless you explicitly choose to replace it. The source RollTable
is never changed or deleted, and Drowsy does not need GM Toolkit to use the saved library later.

The Launcher Cutover section reviews all imported GM Toolkit macros and the current user's 50 hotbar
slots. It marks stock, customized, and name-only review matches and shows whether each Drowsy
replacement is complete, partial, or still pending. Only stock Add XP and Change Scene to Yards
slots can currently be selected for automatic remap. The action imports the canonical Drowsy macro
when needed and changes only the selected slots; it never edits or deletes a GM Toolkit macro.

Edit and save the current reference independently, or complete a session by selecting its best-known
date/time and the next reference. The turnover saves an exact session occurrence time and record
time, then makes the next reference current. Whole-number references are suggested one number
higher; descriptive references are preserved for editing.

This initial workflow keeps XP in its separate console. Automatic pause, holding-scene activation,
Fortune reset, and chat export are not yet part of Drowsy’s turnover action.

## Change Grid Scale Macro

Import `Change Grid Scale (Preserve Lighting)` from the toolkit's GM-only macro compendium, view the
Scene you want to change, and run the macro. Enter the new grid size in pixels, distance per space,
and units. The macro rescales Ambient Light and Token-emitted light radii before updating the grid,
so their rendered sizes stay unchanged.

The macro changes the active Scene and its embedded documents. Use a disposable copy when testing.
If an update fails, the toolkit attempts to restore each completed change and reports whether any
rollback also failed.
