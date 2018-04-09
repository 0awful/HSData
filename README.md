# HSData

An API server and client for analyzing Hearthstone card data.

Discord: https://discord.gg/NrMHggP

Slack: https://hsdata.slack.com

## Participation:

Paticipation is open to everyone for as little or as long as you desire. 

The only requirements are: 
 - ES-Lint with the AirBnb Config
 - Prettier
 
From this we can easily maintain a clear and consistent style. 

## Roadmap:

  ### Phase 1:
  
  Build out an api server that serves the following data in a structured form. 
  
  Types are included for clarity.
  
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
not prodomently concerned with the reading of card text and seeing of card image. Instead this front end is designed to perform data analysis.
As a result it will feature the ability for people to pipe data into graphing functions and look at how the data has changed over releases,
display and visualize trends, and then present this data to others, potentially by URL. 

### Phase 2:

  After Phase 1 we will iterate. 
   - Expanding to the point where we can now fetch or serve images (my preference is to not serve, but to serve a URL).
   - If we do not have graphQL we will get that up now.
   - We will then start doing text parsing. 
      - Draw is not a keyword, but is important, we'll build things that allow for users to query that and similar info.
   - Front end will start to create infographic styled pages to advertise findings as a way to increase the popularity of the project.

### Phase 3: 

  As we leave phase 2 the project will approach a point where little is needed in terms of continous development. It has reached the end of my vision. There is no reason for me to expect we would need keep launching features, and I can't think of any I would want to launch. Updates would only need to occur when new sets are released, and these would only be changes to the underlying data. These minor changes make me believe that this is where the project will reach a holding pattern. If, after we reach this point, anyone is interested in taking over the project I will pass off the domain, server, and github repo to anyone who is interested. I reserve my right to change this position, but once we make it here I am comfortable passing this on. 
  
## Dependencies:
 - Yarn is the prefered package manager
 - ESLint AirBnB Config. 
 - React (front end)
 - Node.js (back end)
 - Prefered back end database language
 - GraphQL or REST API endpoint (If graphQL then Apollo)
 - Prettier HIGHLY RECOMENDED

## Deployment:
 - We will deploy to a digital ocean instance and likely use nginx to point the URL at the server port.
    
    
