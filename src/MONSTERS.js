/*MONSTERS: A constant array that stores the name, group, and statline for various monsters. One object per monster.
This is a proof of concept app, but in a final version, this section would probably have a few hundred classic monsters and
more groups than the four below. But doing it this way, I don't have to enter all that information, and don't have to bother
with the Open Gaming License, since these are all fairly generic examples.*/

const MONSTERS = [
    {name: "Beetle, Giant", stats: "hd 2, spd 30, fly 20, bite 3d4", group: "Beast"},
    {name: "Bugbear", stats: "hd 3+1, spd 30, weapon 2d4; stealth", group: "Humanoid"},
    {name: "Ghoul", stats: "hd 2, spd 30, claws/bite 2d4/1d6; paralysis on hit (save negates)", group: "Undead"},
    {name: "Goblin", stats: "hd 1-1, spd 30, weapon 1d6", group: "Humanoid"},
    {name: "Imp", stats: "hd 1, spd 10, fly 30, bite 1d4", group: "Outsider"},
    {name: "Ooze, Red", stats: "hd 4, spd 20, tentacle 3d6; half damage from edged weapons, immune electricity", group: "Beast"},
    {name: "Rakshasa", stats: "hd 8, spd 40, weapon 1d8; immune to nonmagical weapons, spells", group: "Outsider"},
    {name: "Skeleton", stats: "hd 1, spd 30, weapon 1d6; half damage from edged weapons", group: "Undead"},
    {name: "Zombie", stats: "hd 2, spd 20, claw 1d8; always lose initiative", group: "Undead"}
]
    

export default MONSTERS
