// This file contains all of Humpik's personal quests.
export const HUMPIK_QUESTS = {
    'humpik_honor_quest': {
        id: 'humpik_honor_quest',
        title: "The Honor of the Shell",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "The Iron Legion's elite mock Humpik for his 'barbaric' refusal of a duel, tarnishing the Koopa Troop's name. To restore his and the Koopa Troop's honor, Humpik must seek out a renowned Legion champion and defeat them in a formal, sanctioned duel.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik's identity is tied to his strength and the reputation of the Koopa Troop. The Legion's insults are not just personal; they are an attack on his ally and his people. He feels compelled to prove, in their own rigid way, that Koopa might is disciplined and honorable.",
        steps: [
            { id: 'step1', title: "Identify a Worthy Champion", status: 'active', description: "The most respected duelist among the Legion's progressive 'War-Forged' faction is Colonel Vera Steelstorm. Use underworld contacts or military intelligence to pinpoint her current location on the Midlands front." },
            { id: 'step2', title: "Issue a Formal Challenge", status: 'locked', description: "The Legion follows strict protocols for challenges of honor. Humpik must present a formal, written challenge to Colonel Steelstorm, adhering to their traditions to prove he is not a mere savage.", options: ["Consult with Markop on the proper etiquette.", "Bribe a Freelancer to draft the challenge.", "Just roar really loud and hope for the best."] },
            { id: 'step3', title: "The Gauntlet of Cinders", status: 'locked', description: "Steelstorm agrees to the duel, but only if Humpik can first prove his mettle by surviving the Legion's infamous training ground—a field of deadly traps, automated war machines, and scorching hazards." },
            { id: 'step4', title: "Duel of Fates", status: 'locked', description: "Face Colonel Vera Steelstorm in a one-on-one, sanctioned duel. The outcome will dramatically shift the Iron Legion's perception of the Koopa Troop and their new allies." }
        ]
    },
    'humpik_great_feast': {
        id: 'humpik_great_feast',
        title: "The Great Feast",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Hunt the legendary Titan-Turtle of the Whispering Marshes, whose shell is said to be impenetrable and whose meat, when cooked, grants temporary invincibility.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "For Humpik, this is the ultimate challenge. It's a test of strength against a legendary beast, and the reward is not just a trophy, but a feast that will be sung about in the Koopa war chants for generations.",
        steps: [
            { id: 'step1', title: "Find the Lair", status: 'active', description: "Track the Titan-Turtle to its hidden lair deep within the treacherous Whispering Marshes, a place known for its toxic fumes and aggressive flora." },
            { id: 'step2', title: "The Unbreakable Shell", status: 'locked', description: "The Titan-Turtle's shell is immune to all normal attacks. Humpik must find a weak point or an environmental hazard to crack it." },
            { id: 'step3', title: "The Feast of Champions", status: 'locked', description: "With the beast slain, Humpik must transport the massive carcass back to the Koopa Troop remnants and hold a feast to boost their morale and grant them its power for the next battle." }
        ]
    },
    'humpik_proper_waaagh': {
        id: 'humpik_proper_waaagh',
        title: "A Proper WAAAGH!",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "The Koopa remnants are demoralized. Humpik decides the only cure is a good, old-fashioned, large-scale assault on a well-defended enemy position to remind them of their strength.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik believes that the soul of an army is found in battle. He wants to reignite the Koopa Troop's fighting spirit with a glorious, head-on charge against an impossible-looking target.",
        steps: [
            { id: 'step1', title: "Pick a Target", status: 'active', description: "Identify a suitable target for the assault, such as a fortified Peach Loyalist forward base or a major Toad Gang fortress." },
            { id: 'step2', title: "Rally the Troops", status: 'locked', description: "Give a series of loud, inspiring speeches, and lead by example in a few smaller skirmishes to get the Koopa Troop's blood pumping." },
            { id: 'step3', title: "Unleash the WAAAGH!", status: 'locked', description: "Lead the full-scale assault, focusing on overwhelming force and pure aggression to shatter the enemy's morale and claim victory." }
        ]
    },
    'humpik_biggest_axe': {
        id: 'humpik_biggest_axe',
        title: "The Biggest Axe",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik's axe is big, but it could be bigger. He seeks out a legendary, slightly unhinged Orc Mekboy from 'Da Krumperz' guild, who is said to be able to forge an ultimate weapon from the hull of the crashed Vigilance.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "A bigger axe means bigger hitting. The logic is simple and beautiful to Humpik. He desires a weapon that is as strong and indomitable as he is.",
        steps: [
            { id: 'step1', title: "Find the Mekboy", status: 'active', description: "Locate the reclusive Orc Mekboy, 'Grimgutz Rivet-Head', in his scrap-heap workshop in the Midlands borderlands." },
            { id: 'step2', title: "A Worthy Payment", status: 'locked', description: "Grimgutz doesn't work for coin. Humpik must pay him with something he desires: the still-glowing power core from an Imperial war-walker." },
            { id: 'step3', title: "The Forging", status: 'locked', description: "Assist Grimgutz in the chaotic and dangerous forging process, which involves a lot of shouting, hitting things with hammers, and experimental explosions." }
        ]
    },
    'humpik_rivals_respect': {
        id: 'humpik_rivals_respect',
        title: "A Rival's Respect",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "During a battle, Humpik clashes with Embercap, a particularly tough and resilient Toad soldier from the Peach Loyalists. Impressed by his courage, Humpik seeks him out for a non-lethal sparring match to test his mettle.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik respects strength and courage, regardless of the uniform. He sees a fellow warrior in Embercap and wishes to test his skills against him in a battle of pure strength, free from the politics of the war.",
        steps: [
            { id: 'step1', title: "The Challenge", status: 'active', description: "Find Embercap and issue a challenge for a duel of honor during a lull in the fighting, with the condition that it is a non-lethal match to first blood." },
            { id: 'step2', title: "The Duel", status: 'locked', description: "Meet Embercap at the agreed-upon location and engage in a one-on-one sparring match." },
            { id: 'step3', title: "A Moment of Understanding", status: 'locked', description: "Regardless of the outcome, the duel fosters a grudging respect between the two warriors, potentially opening a new, unofficial line of communication between the Koopa remnants and the Loyalists." }
        ]
    },
    'humpik_training_day': {
        id: 'humpik_training_day',
        title: "Training Day",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik notices the Liberated Toads are brave but undisciplined. He takes it upon himself to teach them the 'Koopa Way' of fighting: head down, charge hard.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik sees potential in the little guys and wants to help his allies. He believes his direct, no-nonsense training methods are exactly what they need to survive.",
        steps: [
            { id: 'step1', title: "The 'Lecture'", status: 'active', description: "Gather the toads for a 'lecture' which is mostly just Humpik shouting encouragement and demonstrating how to properly smash a training dummy." },
            { id: 'step2', title: "Live Fire Exercise", status: 'locked', description: "Take the trained toads on a mission to clear out a den of weak but numerous monsters to test their new skills." }
        ]
    },
    'humpik_loudest_roar': {
        id: 'humpik_loudest_roar',
        title: "The Loudest Roar",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik hears of the 'Roaring Peaks,' mountains that are said to echo a warrior's shout with the force of a landslide. He goes there to prove he has the loudest, most powerful roar in the world.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "A simple, pure test of power. For Humpik, this is a spiritual journey to prove his own might against the very mountains themselves.",
        steps: [
            { id: 'step1', title: "The Climb", status: 'active', description: "Ascend the treacherous Roaring Peaks." },
            { id: 'step2', title: "The Echo", status: 'locked', description: "Unleash a roar so powerful it causes a minor avalanche, which conveniently blocks the path of a pursuing Iron Legion patrol." }
        ]
    },
    'humpik_smash_club': {
        id: 'humpik_smash_club',
        title: "The Smash Club",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik learns of an underground fighting ring run by the Iron Fists. He decides to enter, not for money, but for the sheer joy of a good fight.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik is a warrior who feels most alive in battle. The idea of a place with an endless supply of opponents to smash is his version of paradise.",
        steps: [
            { id: 'step1', title: "Find the Arena", status: 'active', description: "Get information on the location of the Iron Fists' secret fighting arena, 'The Grinder'." },
            { id: 'step2', title: "The Main Event", status: 'locked', description: "Fight his way through the ranks of the Smash Club, culminating in a battle against their current champion, 'Iron Mike'." }
        ]
    },
    'humpik_no_more_talk': {
        id: 'humpik_no_more_talk',
        title: "No More Talk!",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik grows tired of a preening Imperial diplomat who has been stalling negotiations with Bowser. He decides to solve the diplomatic impasse his own way.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik sees the diplomat's endless talking as a sign of weakness and disrespect. He believes a direct, physical demonstration of Koopa strength is the best way to speed things up.",
        steps: [
            { id: 'step1', title: "The 'Negotiation'", status: 'active', description: "Crash the diplomatic meeting." },
            { id: 'step2', title: "The 'Counter-Offer'", status: 'locked', description: "Smash the negotiating table in half. The diplomat will suddenly become much more agreeable." }
        ]
    },
    'humpik_chef_challenge': {
        id: 'humpik_chef_challenge',
        title: "The Chef's Challenge",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "A famously arrogant chef in a neutral city claims he can cook any ingredient in the world. Humpik takes this as a personal challenge and decides to bring him the most dangerous, hard-to-acquire meat he can find.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik appreciates a good meal and respects skill. This is a quest born of a love for food and a desire to see if the fancy chef can back up his big talk.",
        steps: [
            { id: 'step1', title: "The Ingredient", status: 'active', description: "Hunt and kill a Basilisk from the petrified forests, a creature whose gaze can turn you to stone." },
            { id: 'step2', title: "The Presentation", status: 'locked', description: "Deliver the Basilisk carcass to the chef and challenge him to cook it." }
        ]
    },
    'humpik_rescue_mission': {
        id: 'humpik_rescue_mission',
        title: "Koopa Rescue Mission",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik learns a small squad of Koopa Troopas has been captured by the Peach Loyalists. He decides to launch a solo rescue mission to get them back.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Loyalty. The Koopa Troop leaves no one behind. Humpik feels a personal duty to rescue his captured comrades.",
        steps: [
            { id: 'step1', title: "Locate the Prison", status: 'active', description: "Find the Loyalist-controlled prison camp where the troopas are being held." },
            { id: 'step2', title: "The Breakout", status: 'locked', description: "Create a massive diversion (likely involving smashing a wall) and free the captured Koopas." }
        ]
    },
    'humpik_lost_helmet': {
        id: 'humpik_lost_helmet',
        title: "The Lost Helmet",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "During a battle, Humpik lost his favorite horned helmet. It has sentimental value. He wants it back.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "It's his favorite helmet. Simple as that.",
        steps: [
            { id: 'step1', title: "Retrace Your Steps", status: 'active', description: "Return to the last battlefield and search for the helmet." },
            { id: 'step2', title: "The New Owner", status: 'locked', description: "Discover that a particularly smug Goomba has found the helmet and is now wearing it, declaring himself 'King Goomba'. Convince him to return it." }
        ]
    },
    'humpik_pet_rock': {
        id: 'humpik_pet_rock',
        title: "Humpik's Pet",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik finds a very large, nicely shaped rock. He decides it's his new pet, 'Rocky'. He now needs to build a suitable home for it on the Vigilance.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik is a simple soul who has found a simple friend. He wants to care for it.",
        steps: [
            { id: 'step1', title: "The Rock", status: 'active', description: "Find the perfect rock." },
            { id: 'step2', title: "The Nest", status: 'locked', description: "Build a comfortable nest for Rocky in the corner of the cargo bay, using soft materials like captured enemy uniforms." }
        ]
    },
    'humpik_mighty_thirst': {
        id: 'humpik_mighty_thirst',
        title: "A Mighty Thirst",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik hears tales of a Dwarven ale so strong it can dissolve steel. He must have some.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "The pursuit of the ultimate drinking experience.",
        steps: [
            { id: 'step1', title: "Find the Brewery", status: 'active', description: "Travel to the Dwarven capital and find the legendary 'Anvil-Gut Brewery'." },
            { id: 'step2', title: "Prove Your Worth", status: 'locked', description: "The Dwarves don't serve their strongest ale to just anyone. Humpik must prove his worth by winning a drinking contest against their champion." }
        ]
    },
    'humpik_no_like_spiders': {
        id: 'humpik_no_like_spiders',
        title: "Humpik No Like Spiders",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik discovers a nest of giant spiders in the lower decks of the Vigilance. He does not like them. They must go.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "A deep-seated, personal dislike of spiders.",
        steps: [
            { id: 'step1', title: "Find Nest", status: 'active', description: "Track the spiders to their nest in the ventilation system." },
            { id: 'step2', title: "Smash Nest", status: 'locked', description: "Apply axe liberally to the nest and its inhabitants." }
        ]
    }
};
