# User Guide

## Opening a Console

Both consoles are available from Token Controls, their macros, and the module API. The Fear Console
also appears in supported WFRP4e actor-sheet headers. Open a console's configurator from its cog
button or from Foundry's Module Settings. Every optional Foundry UI launcher is enabled by default;
changing one requires a reload.

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
   launcher preferences, the no-target recipient default, GM Toolkit compatibility, or either XP
   curve.
2. Edit the curve number fields or drag their diamond and round graph handles; both controls stay
   synchronized. Numbered recipient markers preview the current actors on both graphs.
3. Use `Save configuration`. This persists the settings without awarding XP.
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

The reason supports `%session%` and `%date%`. When GM Toolkit compatibility is enabled and that
module is active, Drowsy’s WFRP4e Toolkit reads its session reference, default XP reason, and
default Party/Company group. Drowsy’s WFRP4e Toolkit does not overwrite GM Toolkit data.

Foundry's Module Settings shows one button for each dedicated configurator instead of exposing the
underlying setting list. The same configurators are available from the cogs in their consoles.
