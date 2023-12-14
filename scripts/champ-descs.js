const champDescs = {
  Aatrox:
    "A towering, muscular, and menacing figure with large, dark wings. Wields a massive, jagged greatsword.",
  Ahri: "An elegant and enchanting fox-like creature with nine flowing tails. She has a captivating and alluring presence.",
  Akali:
    "A skilled ninja adorned in sleek, modern attire. Carries kama blades and uses a combination of agility and stealth.",
  Alistar:
    "A massive minotaur covered in fur with powerful hooves and large horns. Wears minimal armor and is known for his strength and crowd control abilities.",
  Amumu:
    "A small, sad mummy wrapped in bandages. Expresses loneliness and sorrow, often accompanied by tears.",
  Anivia:
    "A majestic cryophoenix with ice-blue feathers and crystalline wings. Radiates an aura of cold and commands powerful ice magic.",
  Annie:
    "A young, mischievous girl with a teddy bear named Tibbers. Wields powerful fire magic, and her innocence contrasts with her destructive abilities.",
  Ashe: "regal and graceful, often seen in icy blue armor. She wields a bow and ice arrows and is known for her precision.",
  AurelionSol:
    "An enormous celestial dragon with shimmering scales and cosmic energy. He orbits a central star and commands the power of the cosmos.",
  Azir: "a grand and regal figure clad in golden armor. He manipulates sand and has control over his empire.",
  Bard: "A cosmic traveler in flowing blue and gold robes, Bard carries a mystical instrument and is associated with the essence of the universe.",
  Blitzcrank:
    "A hulking, steam-powered golem with a large metal fist. Known for his powerful grab ability and mechanical appearance.",
  Brand:
    "A fiery entity wrapped in burning robes. Channels the power of fire and brings destruction with his pyromantic abilities.",
  Braum:
    "A massive, muscular man with a heart of gold, often seen wielding a large door-shaped shield. Known for his protective abilities.",
  Caitlyn:
    "A sharpshooting sheriff in a steampunk-inspired outfit, equipped with a high-tech sniper rifle.",
  Camille:
    "A graceful, cybernetically enhanced aristocrat with sharp, hextech-powered legs. Known for her precision and deadly blade legs.",
  Cassiopeia:
    "A serpent-like creature with a woman's torso, cursed by her own ambition. Wields powerful poison and petrification abilities.",
  Chogath:
    "A massive void creature with multiple rows of teeth and spikes. Grows in size and power by consuming enemies.",
  Corki:
    "A Yordle pilot riding a customized flying machine. Wears aviator goggles and carries explosive projectiles.",
  Darius:
    "A hulking Noxian general in heavy armor, wields a massive axe and is known for his strength and dunking prowess.",
  Diana:
    "A lunar warrior with crescent-shaped blades, clad in silver armor. Embraces the power of the moon and excels in melee combat.",
  Draven:
    "A flamboyant and arrogant Noxian executioner and master of the spinning axes. Wears extravagant clothing and revels in his own showmanship.",
  DrMundo:
    "A hulking, purple-skinned madman wearing a lab coat and wielding a giant cleaver. Known for his insane strength and regenerative abilities.",
  Ekko: "A street-smart teenage inventor with a time-manipulating device. Wears a hoodie and carries a futuristic baton.",
  Elise:
    "A shape-shifting mistress of shadows and spiders. Transforms between a human and spider form, wielding dark magic and webs.",
  Evelynn:
    "A seductive and demonic assassin with a shrouded appearance. Thrives on stealth and temptation, dealing in dark magic.",
  Ezreal:
    "An adventurous and charismatic explorer with a futuristic, magical gauntlet. Wears explorer attire and is known for his skillshot abilities.",
  FiddleSticks:
    "A terrifying scarecrow brought to life, with a tattered cloak and an unsettling, demonic presence. Wields dark magic and instills fear in enemies.",
  Fiora:
    "A skilled duelist and noblewoman with a refined appearance. Wields a rapier and embodies precision and elegance in combat.",
  Fizz: "A mischievous Yordle in a fisherman's attire, armed with a trident. Leverages agility and water-themed abilities.",
  Galio:
    "A colossal gargoyle brought to life, wearing formidable stone armor. Protects allies and delivers powerful area-of-effect attacks..",
  Gangplank:
    "A rugged and ruthless pirate captain with a large hat and a missing arm. Wields a cutlass and revels in chaos.",
  Garen:
    "A stoic and powerful warrior clad in armor adorned with a spinning Demacian insignia. Wields a mighty sword and excels in close combat.",
  Gnar: "A playful Yordle with the ability to transform into a hulking, primal beast. Alternates between a small, agile form and a large, destructive form.",
  Gragas:
    "A jolly and robust brewmaster with a love for alcohol. Wears little clothing and throws explosive casks to disrupt enemies.",
  Graves:
    "A gritty and cigar-smoking outlaw with a shotgun. Dressed in rugged attire, Graves is a seasoned gunslinger.",
  Hecarim:
    "A spectral centaur with a mane of ghostly flames. Wields a large spear and charges into battle with incredible speed.",
  Heimerdinger:
    "A brilliant Yordle inventor with a large head and a mustache. Wears a lab coat and is often accompanied by his inventions, including turrets.",
  Illaoi:
    "A powerful priestess of the Kraken, with tattoos and tentacle-like appendages. Wields a massive idol and controls the battlefield with her god's power.",
  Irelia:
    "A highly skilled Ionian blade dancer with floating blades that she controls telekinetically. Known for her graceful and deadly movements.",
  Ivern:
    "A gentle and nature-loving Fae who walks barefoot and carries a magical staff. Connected to the natural world, he befriends jungle creatures.",
  Janna:
    "An elemental sorceress with control over the wind. Dressed in flowing blue and white robes, she is a protector and guardian.",
  JarvanIV:
    "The Crown Prince of Demacia, wearing ornate armor with the Demacian sigil. Wields a lance and is known for his leadership on the battlefield.",
  Jax: "A mysterious warrior in a hooded cloak, wielding a lamppost. Known for his exceptional combat skills and mastery of various weapons.",
  Jayce:
    "A versatile inventor and defender of Piltover, equipped with a transforming hammer and cannon. Wears futuristic armor.",
  Jhin: "A meticulous and artistic assassin, dressed in ornate, golden attire. Wields a specialized firearm and views murder as a form of art.",
  Jinx: "A manic and chaotic criminal with vibrant blue hair. Wields an array of explosive weapons and has a penchant for destruction.",
  Kalista:
    "A spectral warrior with a haunting appearance, bound to a massive, ornate spear. She seeks revenge against those who betrayed her.",
  Karma:
    "An enlightened Ionian leader, dressed in elegant robes and wielding magical fans. She embodies the dual nature of balance and harmony.",
  Karthus:
    "A lich-like, undead sorcerer with a floating, spectral appearance. Commands the power of death and channels destructive magic.",
  Kassadin:
    "A void-touched wanderer with dark armor and a glowing energy blade. Seeks to protect Runeterra from the dangers of the Void.",
  Katarina:
    "An agile and deadly Noxian assassin with crimson hair and dual blades. Known for her acrobatic combat style.",
  Kayle:
    "An ascended angelic warrior in golden armor, wielding a flaming sword. Evolves in appearance as she gains levels.",
  Kennen:
    "A Yordle ninja with shurikens and an electrical theme. Wears a ninja outfit and is known for his swift, lightning-infused attacks.",
  Khazix:
    "A void creature resembling a predatory insect, with evolved, adaptive features. Thrives on isolation and evolution.",
  Kindred:
    "A duo of ethereal, lamb, and wolf spirits. Lamb carries a bow, while Wolf is a fierce companion. Together, they represent life and death.",
  Kled: "Rides Skaarl, wears mismatched armor, fiery demeanor.",
  KogMaw: "Bloated, otherworldly creature, acidic maw.",
  Leblanc:
    "a powerful and mysterious sorceress with an air of elegance. Wears regal attire and wields illusions and deceptive magic.",
  LeeSin:
    "a martial artist who lost his sight but gained heightened senses. Wears martial arts attire and navigates with exceptional skill.",
  Leona:
    "a noble and armor-clad warrior of the Solari. Wields a sun-themed shield and sword, serving as a radiant protector.",
  Lissandra:
    "a formidable sorceress with a cold and regal demeanor. Commands ice magic and seeks to manipulate the fate of the world.",
  Lucian:
    "a determined gunslinger on a mission to eradicate the undead. Wields dual pistols with precision and speed.",
  Lulu: "a whimsical Yordle with a staff and the ability to manipulate reality. Known for her playful and mischievous nature.",
  Lux: "a mage with radiant powers and a commitment to justice. Wields light magic and shines as a symbol of hope.",
  Malphite:
    "a colossal rock creature with a sturdy and imposing appearance. Known for his tankiness and seismic abilities.",
  Malzahar:
    "a void-touched seer with a dark and mysterious presence. Channels the power of the Void in his abilities.",
  Maokai:
    "a massive tree animated by dark magic. Wields branches and roots, embodying the embodiment of nature's vengeance.",
  MasterYi:
    "a swift and skilled swordsman. Wears traditional martial arts attire and excels in duels.",
  MissFortune:
    " a charismatic and deadly pirate captain. Wields dual pistols and seeks revenge for a past betrayal.",
  MonkeyKing:
    "The Monkey King, a nimble and acrobatic warrior with a staff. Wears martial arts attire and excels in agile combat.",
  Mordekaiser:
    " a dark and imposing warlord clad in heavy armor. Wields a massive mace and commands the powers of the afterlife.",
  Morgana:
    "a fallen angel with dark wings and a brooding demeanor. Wields dark magic and is often in opposition to her sister, Kayle.",
  Nami: "Mermaid-like Vastaya, aquatic features, flowing attire.",
  Nasus:
    "a powerful Ascended being with an imposing, jackal-headed appearance. Wields a massive, enchanted staff.",
  Nautilus:
    "a colossal, heavily armored sea golem with an anchor. Commands the power of the ocean and serves as a tanky support.",
  Nidalee:
    "a fierce shapeshifter alternating between a human and cougar form. Excels in ranged and melee combat.",
  Nocturne:
    "a shadowy, spectral figure with a haunting presence. Thrives on darkness and fear, striking from the shadows.",
  Nunu: "a dynamic duo with Nunu riding atop the furry yeti Willump. Embark on adventures together, combining frost and magic.",
  Olaf: "A fierce Viking warrior with wild hair, minimal armor, and a massive two-handed axe. Known for his unstoppable berserker rage in battle.",
  Orianna:
    "A graceful clockwork automaton with floating, delicate parts and a central mechanical ball.",
  Pantheon:
    "a Spartan-like warrior with a helmet and a shield. Wields a spear and embodies the spirit of war.",
  Poppy:
    "a yordle warrior with a hammer larger than herself. Wears armor and is determined to fulfill her heroic duties.",
  Quinn:
    "a skilled ranger with a loyal bird companion, Valor. Wears Demacian armor and excels in ranged combat.",
  Rammus:
    "a spherical, heavily armored creature. Rolls in a ball and is covered in defensive spikes",
  RekSai:
    "a menacing void creature with a burrowing and predatory appearance. Has sharp claws and spikes.",
  Renekton:
    "a hulking, crocodile-headed warrior with a savage and ferocious presence. Wields a massive curved blade.",
  Rengar:
    "a predatory hunter with feline features. Wears primal armor and excels in tracking and ambushing foes.",
  Riven:
    "a swordmaster with a broken blade. Wears tattered clothing and carries a massive, rune-inscribed sword.",
  Rumble:
    "a Yordle inventor in a mechanical suit. Pilots a steam-powered mech with a flamethrower.",
  Ryze: "a spellcaster with a hooded appearance. Carries a scroll and has runes etched into his body.",
  Sejuani:
    "a fierce Freljordian warrior mounted on a boar. Wears heavy armor and commands the power of ice.",
  Shaco:
    "a malevolent and chaotic trickster. Wears a harlequin costume, wields a dagger, and delights in spreading mischief.",
  Shen: "a disciplined ninja with a mystical energy blade. Wears traditional ninja attire and is known for his defensive and supportive abilities.",
  Shyvana:
    "a fearsome dragon-hybrid warrior. Can transform into a dragon, wielding fire and fury in battle.",
  Singed:
    "a deranged scientist with a toxic potion trail. Wears a gas mask and carries a chemical-filled flask.",
  Sion: "a gigantic and reanimated war machine. Wears heavy armor and wields a massive axe.",
  Sivir:
    "a skilled mercenary and expert with a boomerang blade. Wears desert-themed armor and is a renowned weaponmaster.",
  Skarner:
    "a scorpion-like creature with a crystalline exoskeleton. Guards the powerful crystal spires of the Shuriman desert.",
  Sona: "a mute musician who channels magic through her enchanted instrument. Wears elegant and flowing attire.",
  Soraka:
    "a celestial healer with a gentle and ethereal appearance. Wears flowing robes and carries a healing staff.",
  Swain:
    "a commanding and strategic leader with demonic powers. Wears Noxian military attire and has a bird familiar, Beatrice.",
  Syndra:
    " a powerful mage with control over dark spheres. Embraces a regal and imposing appearance.",
  TahmKench:
    " a massive and amphibious demon with a penchant for making deals. Wears a top hat and carries a cane.",
  Taliyah:
    "a young Shuriman mage with control over earth and stone. Wears nomadic clothing and uses a floating stone disc.",
  Talon:
    "an agile Noxian assassin with dual blades. Wears dark, agile attire and excels in stealth and quick strikes.",
  Taric:
    " a radiant Demacian warrior with magical gem armor. Wields a giant, crystalline hammer and is known for his protective abilities.",
  Teemo:
    "a mischievous and yordle with a fondness for poison. Wears a hat and carries a blowgun.",
  Thresh:
    "a spectral warden from the Shadow Isles. Wields a lantern and chains, collecting the souls of the departed.",
  Tristana:
    "an adventurous yordle with a cannon. Wears a military-style uniform and excels in explosive, ranged attacks.",
  Trundle:
    "a hulking and mischievous troll with a massive club. Wears scraps of clothing and embraces a brutish appearance.",
  Tryndamere:
    "a hulking warrior from Freljord. Wields a massive sword and is known for his rage-fueled attacks.",
  TwistedFate:
    "a gambler and magician from Piltover. Wears a trench coat and hat, manipulating fate with magical cards.",
  Twitch:
    "a sneaky and toxic rat with a crossbow. Wears scavenged clothing and specializes in deadly, poisonous attacks.",
  Udyr: "a primal warrior with the ability to channel the spirits of various animals. Wears minimal clothing and is adorned with tribal markings.",
  Urgot:
    "a monstrous and heavily augmented Noxian executioner. Wields a massive drill and chain gun.",
  Varus:
    "a darkin-infested archer with a bow made of living corruption. Wears corrupted armor and seeks revenge.",
  Vayne:
    "a skilled and agile marksman. Wears a crossbow and hunts supernatural creatures with precision.",
  Veigar:
    "a diminutive yordle with dark magic. Wears wizard robes and wields immense magical power.",
  Velkoz:
    "a tentacled void creature with a singular, probing eye. Embraces a mysterious and cosmic appearance.",
  Vi: "a powerful and brash enforcer with giant gauntlets. Wears hextech-powered gloves and is known for her strong punches.",
  Viktor:
    "a brilliant inventor with cybernetic enhancements. Wields a staff and controls technology with potent augmentations.",
  Vladimir:
    "a vampiric mage with control over blood magic. Wears regal clothing and uses his own blood as a weapon.",
  Volibear:
    "a powerful Freljordian demigod in bear form. Wears tribal armor and embodies the fury of the storm.",
  Warwick:
    "a monstrous werewolf with cybernetic enhancements. Wears Zaunite war gear and hunts down his prey relentlessly.",
  Xerath:
    "an ancient and powerful Ascended being of pure energy. Appears as a floating, arcane entity with glowing runes.",
  XinZhao:
    "a disciplined warrior with a spear and a spearhead. Wears Demacian armor and is a loyal protector.",
  Yasuo:
    "a masterful swordsman, often seen in a nomadic and ronin-inspired outfit. He carries a wind technique-infused katana and wears a high-collared, hooded cape.",
  Yorick:
    "a gravedigger with a haunting appearance. He wears tattered burial robes, carries a spade, and is often accompanied by the spectral Maiden of the Mist.",
  Zac: "a blob-like creature composed of elastic, green goo. He can reshape his form into various appendages and wears goggles, giving him a playful and experimental appearance.",
  Zed: "a ninja with a dark and edgy aesthetic. Wearing a black, hooded outfit, Zed is known for his shadow techniques and wields a deadly set of shadow-infused blades.",
  Ziggs:
    "a manic yordle with a love for explosives. He wears a helmet and goggles, carrying a satchel filled with bombs. Ziggs embodies chaos and destruction.",
  Zilean:
    "an elderly mage with time-manipulating abilities. He wears long, flowing robes and carries a clock. His appearance reflects his mastery over time.",
  Zyra: "a deadly plant mage with a humanoid appearance. Her body is composed of vines and thorns, and she controls plants to attack her enemies. Zyra embodies the essence of nature's fury.",
};

export default champDescs;
