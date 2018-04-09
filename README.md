# HSData

An API server and client for analyzing Hearthstone card data.

Discord: https://discord.gg/NrMHggP
Slack: https://hsdata.slack.com

Roadmap:
  Phase 1:
  Build out an api server that serves the following data in a structured form. Types are included for clarity.
    This notation denotes an enum: 
      (Only, These, Strings, Are, Legal)
  
    Card: {
      Name: String
      CardType: (Minion, Spell)
      Class: (Neutral, Druid, Warlock, Rogue, Mage, Warrior, Priest, Hunter, Shaman, Paladin)
      Set: (Classic, Whispers of the Old Gods, One Night in Karazhan, Mean Streets of Gadgetzan
            Journey to Un'Goro, Knights of the Frozen Throne, Kobolds & Catacombs, The Witchwood
            Naxxramas, Goblins vs Gnomes, Blackrock Mountain, The Grand Tournament, League of Explorers)
      Hall of Fame: Boolean
      ManaCost: Integer
      Rarity: (Common, Rare, Epic, Legendary)
       
      IF MINION: 
      Attack: Integer
      Health: Integer
      CreatureType: (None, Beast, Mech, Totem, Merlock, Dragon)
      Keywords: [(Ability, Adapt, Battlecry, Charge, Choose One, Combo, Deathrattle, Discover, Divine Shield, Echo, 
                  Inspire, Lifesteal, Mega-Windfury, Overload, Poisonous, Recruit, Rush, Silence, Start of Game, 
                  Stealth, Spell Damage, Taunt, Windfury)]
     
        IF BATTLECRY
        BattlecryText: String
        
        IF DEATHRATTLE
        DeathrattleText: String   
        
        IF COMBO
        ComboText: String   
        
        IF ABILITY
        AbilityText: String  
      }
      
    The expectation is that we will be able to query on class, card type, set, mana cost, attack, health, rarity, creatureType, and keywords
   
    While this api server is being build a corrosponding front end will be built. Rather than most tools on the market this front end is 
    not prodomently concerned with the reading of card text and seeing of card. Instead this front end is designed to perform data analysis.
    As a result it will feature the ability for people to pipe data into graphing functions and look at how the data has changed over releases,
    display and visualize trends, and then present this data to others, potentially by URL. 
   
    Known dependencies:
      ESLint AirBnB Config. 
      React (front end)
      Node.js (back end)
      Prefered back end database language
      GraphQL or REST API endpoint
        If graphQL then Apollo
      Prettier HIGHLY RECOMENDED
      
    Deployment:
      We will deploy to a digital ocean instance and likely use nginx to point the URL at the server port.
    
    
