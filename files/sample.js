
let playerLvl = 1;
let playerXp = 0;
let playerHealth = 100;
let playerGold = 100;
     

let playerStr = 10;
let playerAgi = 10;
let playerDef = 10;
let playerLuck = 10;
let playerEnergy = 100;

let playerInv = [];
let playerWeaponInv = [];
let playerArmorInv = [];

let playerCurrentWeapon = null;
let playerCurrentHelmet = null;
let playerCurrentArmor = null;
let playerCurrentGauntlet = null;
let playerCurrentBoots = null;
let playerCurrentShield = null;


const notifications = document.getElementById('notifications');
const notifContainer = document.getElementById('notif-container');
const mapNav = document.getElementById('map-nav');
const monsterStats = document.getElementById('monster-stats');
const monsterImg = document.getElementById('monster-img');

const currentWeaponUI = document.getElementById('current-weapon');
const currentHelmetUI = document.getElementById('current-helmet');
const currentArmorUI = document.getElementById('current-armor');
const currentGauntletUI = document.getElementById('current-gauntlet');
const currentBootsUI = document.getElementById('current-boots');
const currentShieldUI = document.getElementById('current-shield');


const weapons = {
  sword:{
    weaponName: 'Sword',
    weaponDmg: 6,
    weaponBonusAtt: 2,
    weaponCost: 40
  },
  dagger: {
    weaponName: 'Dagger',
    weaponDmg: 8,
    weaponBonusAtt: 5,
    weaponCost: 60
  },
  crossbow: {
    weaponName: 'Crossbow',
    weaponDmg: 7,
    weaponBonusAtt: 7,
    weaponCost: 80
  },
  katana: {
    weaponName: 'Katana',
    weaponDmg: 10,
    weaponBonusAtt: 10,
    weaponCost: 100
  },
  nunchuks: {
    weaponName: 'Nun-Chuks',
    weaponDmg: 8,
    weaponBonusAtt: 15,
    weaponCost: 120
  },
};

const armors = {
  breastplate: {
    armorName: 'BreastPlate',
    armorDef: 15,
    armorLuck: 5,
    armorCost: 30
  },
  gauntlet: {
    armorName: 'Gauntlet',
    armorDef: 10,
    armorLuck: 15,
    armorCost: 70
  },
  armoredBoots: {
    armorName: 'Armored Boots',
    armorDef: 25,
    armorLuck: 10,
    armorCost: 70
  },
  greatHelm: {
    armorName: 'Great Helm',
    armorDef: 15,
    armorLuck: 20,
    armorCost: 70
  },
  shield: {
    armorName: 'Round Shield',
    armorDef:30,
    armorLuck: 25,
    armorCost: 100
  }
};

const items = {
  healthPotion: {
    itemName: 'Health Potion',
    itemCost: 10,
    potionEffectAmount: 40
  },
  energyPotion: {
    itemName: 'Energy Potion',
    itemCost: '10',
    potionEffectAmount: 30
  }
};

const darkValleyMonstersList = [
  {
    name: 'Ratooth',
    monsterLevel: 5,
    health: 35,
    monsterStr: 35,
    monsterAgi: 50,
    monsterDef: 5,
    monsterLuck: 20,
    monsterExpReward: 16,
    monsterGoldReward: 20,
    chanceToFlee: 40,
    monsterSkills: [
      {
        skillName: 'gnaw',
        skillDmg: 10,
        skillEnergyConsumption: 10
      },
      {
        skillName: 'quickStrike',
        skillDmg: 15,
        skillEnergyConsumption: 12
      }
    ]
  },
  {
    name: 'Lynkin',
    monsterLevel: 6,
    health: 40,
    monsterStr: 45,
    monsterAgi: 40,
    monsterDef: 15,
    monsterLuck: 12,
    monsterExpReward: 21,
    monsterGoldReward: 23,
    chanceToFlee: 35,
    monsterSkills: [
      {
        skillName: 'pounce',
        skillDmg: 12,
        skillEnergyConsumption: 10
      },
      {
        skillName: 'clawSwipe',
        skillDmg: 18,
        skillEnergyConsumption: 15
      }
    ]
  },
  {
    name: 'King',
    monsterLevel: 7,
    health: 45,
    monsterStr: 50,
    monsterAgi: 30,
    monsterDef: 30,
    monsterLuck: 20,
    monsterExpReward: 26,
    monsterGoldReward: 28,
    chanceToFlee: 30,
    monsterSkills: [
      {
        skillName: 'roar',
        skillDmg: 15,
        skillEnergyConsumption: 10
      },
      {
        skillName: 'kingStrike',
        skillDmg: 25,
        skillEnergyConsumption: 20
      }
    ]
  },
  {
    name: 'Bajj',
    monsterLevel: 8,
    health: 55,
    monsterStr: 70,
    monsterAgi: 30,
    monsterDef: 40,
    monsterLuck: 15,
    monsterExpReward: 30,
    monsterGoldReward: 32,
    chanceToFlee: 28,
    monsterSkills: [
      {
        skillName: 'smash',
        skillDmg: 20,
        skillEnergyConsumption: 15
      },
      {
        skillName: 'earthquake',
        skillDmg: 35,
        skillEnergyConsumption: 25
      }
    ]
  },
  {
    name: 'Mist Bob',
    monsterLevel: 9,
    health: 60,
    monsterStr: 60,
    monsterAgi: 80,
    monsterDef: 25,
    monsterLuck: 60,
    monsterExpReward: 33,
    monsterGoldReward: 36,
    chanceToFlee: 20,
    monsterSkills: [
      {
        skillName: 'mistyStrike',
        skillDmg: 30,
        skillEnergyConsumption: 20
      },
      {
        skillName: 'phantomBlow',
        skillDmg: 45,
        skillEnergyConsumption: 30
      }
    ]
  },
  {
    name: 'Ovladi',
    monsterLevel: 10,
    health: 70,
    monsterStr: 100,
    monsterAgi: 70,
    monsterDef: 60,
    monsterLuck: 30,
    monsterExpReward: 40,
    monsterGoldReward: 45,
    chanceToFlee: 10,
    monsterSkills: [
      {
        skillName: 'shadowStrike',
        skillDmg: 40,
        skillEnergyConsumption: 20
      },
      {
        skillName: 'darkPulse',
        skillDmg: 60,
        skillEnergyConsumption: 35
      }
    ]
  },
  {
    name: 'Wolf Knight',
    monsterLevel: 12,
    health: 100,
    monsterStr: 120,
    monsterAgi: 100,
    monsterDef: 80,
    monsterLuck: 45,
    monsterExpReward: 65,
    monsterGoldReward: 75,
    chanceToFlee: 5,
    monsterSkills: [
      {
        skillName: 'knightSlash',
        skillDmg: 50,
        skillEnergyConsumption: 25
      },
      {
        skillName: 'howlOfFury',
        skillDmg: 80,
        skillEnergyConsumption: 40
      },
      {
        skillName: 'lunarStrike',
        skillDmg: 100,
        skillEnergyConsumption: 50
      }
    ]
  }
];


const valleyMonstersList = [
  {
    name: 'Rabituzah',
    monsterLevel: 1,
    health: 10,
    monsterStr: 15,
    monsterAgi: 30,
    monsterDef: 7,
    monsterLuck: 15,
    monsterExpReward: 5,
    monsterGoldReward: 5,
    chanceToFlee: 90,
    monsterEnergy: 30,
    monsterSkills: [
      {
        skillName: 'bite',
        skillDmg: 5,
        skillEnergyConsumption: 5
      }
    ],
    monsterImg: '../images/monsters/valley-monsters/Rabituzah.jpg'
  },
  {
    name: 'Mantis',
    monsterLevel: 2,
    health: 15,
    monsterStr: 20,
    monsterAgi: 15,
    monsterDef: 20,
    monsterLuck: 10,
    monsterExpReward: 6,
    monsterGoldReward: 6,
    chanceToFlee: 85,
    monsterEnergy: 40,
    monsterSkills: [
      {
        skillName: 'slash',
        skillDmg: 7,
        skillEnergyConsumption: 6
      }
    ],
    monsterImg: '../images/monsters/valley-monsters/Mantis.jpg'
  },
  {
    name: 'Skunky',
    monsterLevel: 3,
    health: 20,
    monsterStr: 40,
    monsterAgi: 25,
    monsterDef: 20,
    monsterLuck: 17,
    monsterExpReward: 7,
    monsterGoldReward: 8,
    chanceToFlee: 70,
    monsterEnergy: 50,
    monsterSkills: [
      {
        skillName: 'bite',
        skillDmg: 8,
        skillEnergyConsumption: 10
      },
      {
        skillName: 'clawStrike',
        skillDmg: 10,
        skillEnergyConsumption: 15
      }
    ],
    monsterImg: '../images/monsters/valley-monsters/Skunky.jpg'
  },
  {
    name: 'Foxtrot',
    monsterLevel: 4,
    health: 25,
    monsterStr: 40,
    monsterAgi: 50,
    monsterDef: 25,
    monsterLuck: 30,
    monsterExpReward: 10,
    monsterGoldReward: 12,
    chanceToFlee: 60,
    monsterEnergy: 50,
    monsterSkills: [
      {
        skillName: 'bite',
        skillDmg: 10,
        skillEnergyConsumption: 15
      },
      {
        skillName: 'clawStrike',
        skillDmg: 13,
        skillEnergyConsumption: 17
      }
    ],
    monsterImg: '../images/monsters/valley-monsters/Foxtrot.jpg'
  },
  {
    name: 'Wild Bear',
    monsterLevel: 5,
    health: 30,
    monsterStr: 55,
    monsterAgi: 30,
    monsterDef: 35,
    monsterLuck: 20,
    monsterExpReward: 13,
    monsterGoldReward: 15,
    chanceToFlee: 50,
    monsterEnergy: 70,
    monsterSkills: [
      {
        skillName: 'bite',
        skillDmg: 15,
        skillEnergyConsumption: 17
      },
      {
        skillName: 'clawGrab',
        skillDmg: 20,
        skillEnergyConsumption: 20
      },
      {
        skillName: 'clawStrike',
        skillDmg: 25,
        skillEnergyConsumption: 25
      }
    ],
    monsterImg: '../images/monsters/valley-monsters/Wild-Bear.jpg'
  },
  {
    name: 'Giganto Vultura',
    monsterLevel: 6,
    health: 36,
    monsterStr: 40,
    monsterAgi: 60,
    monsterDef: 20,
    monsterLuck: 35,
    monsterExpReward: 16,
    monsterGoldReward: 18,
    chanceToFlee: 40,
    monsterEnergy: 80,
    monsterSkills: [
      {
        skillName: 'peck',
        skillDmg: 15,
        skillEnergyConsumption: 5
      },
      {
        skillName: 'poopBomb',
        skillDmg: 25,
        skillEnergyConsumption: 20
      },
      {
        skillName: 'deathDive',
        skillDmg: 40,
        skillEnergyConsumption: 30
      }
    ],
    monsterImg: '../images/monsters/valley-monsters/Giganto-Vultura.jpg'
  },
  {
    name: 'Swamp Lizard',
    monsterLevel: 7,
    health: 42,
    monsterStr: 80,
    monsterAgi: 20,
    monsterDef: 50,
    monsterLuck: 40,
    monsterExpReward: 19,
    monsterGoldReward: 21,
    chanceToFlee: 30,
    monsterEnergy: 1000,
    monsterSkills: [
      {
        skillName: 'tailWhip',
        skillDmg: 25,
        skillEnergyConsumption: 20
      },
      {
        skillName: 'stomp',
        skillDmg: 40,
        skillEnergyConsumption: 25
      },
      {
        skillName: 'stun',
        skillDmg: 15,
        skillEnergyConsumption: 30,
        playerSkipTurn: true
      }
    ],
    monsterImg: '../images/monsters/valley-monsters/Swamp-Lizard.jpg'
  },
  {
    name: 'Lizardo',
    monsterLevel: 10,
    health: 60,
    monsterStr: 90,
    monsterAgi: 50,
    monsterDef: 65,
    monsterLuck: 50,
    monsterExpReward: 30,
    monsterGoldReward: 35,
    chanceToFlee: 20,
    monsterEnergy: 1000,
    monsterSkills: [
      {
        skillName: 'earthSmash',
        skillDmg: 40,
        skillEnergyConsumption: 20,
        playerSkipTurn: true
      },
      {
        skillName: 'stomp',
        skillDmg: 40,
        skillEnergyConsumption: 25
      },
      {
        skillName: 'stun',
        skillDmg: 50,
        skillEnergyConsumption: 30,
        playerSkipTurn: true
      },
      {
        skillName: 'scale Hardening',
        buff: true,
        skillEnergyConsumption: 20
      },
      {
        skillName: 'suplex',
        skillDmg: 100,
        skillEnergyConsumption: 70
      }
    ],
    monsterImg: '../images/monsters/valley-monsters/Lizardo.jpg'
  }
];


// Function to handle fighting valley monsters

const fightMonsterBtn = document.getElementById('fight-monster-btn');
const fleeMonsterBtn = document.getElementById('flee-monster-btn');

const fleeNotif = document.getElementById('valley-map-notif');
const fleeConfirmBtn = document.getElementById('valley-map-notif-btn');
const monsterFightNotif = document.getElementById('monster-fight-notif');
const fightStoryContainer = document.getElementById('fight-story-container');

const fightingDisplay = document.getElementById('fighting-display-container');
const fightingConfirmBtn = document.getElementById('fighting-confirm-btn');

const fightStory = document.getElementById('fight-story');

const fightingNotifContainer = document.getElementById('fighting-notif');
const fightingNotif = document.getElementById('fight-notifications');
const fightingNotifBtn = document.getElementById('fight-notif-back-button');




let selectedMonster = null;

    const deepCopyMonster = (monster) => {
      return JSON.parse(JSON.stringify(monster));
    };

    const monsterRandomPicker = () => {
      let minLevel = Math.max(1, playerLvl - 6); // Minimum monster level
      let maxLevel = playerLvl + 2; // Maximum monster level based on player's level

      // Filter monsters based on the level range
      let availableMonsters = valleyMonstersList.filter(monster => monster.monsterLevel >= minLevel && monster.monsterLevel <= maxLevel);

      // Randomly select a monster from the available monsters
      let randomIndex = Math.floor(Math.random() * availableMonsters.length);
      return deepCopyMonster(availableMonsters[randomIndex]); // Return a deep copy of the selected monster
    };

    

    // Function to calculate player damage
			const calculatePlayerDamage = (playerStr, playerAgi, playerCurrentWeapon, monsterDef) => {
				let totalPlayerStr = playerStr;
				let totalPlayerAgi = playerAgi;

				if (playerCurrentWeapon !== null) {
					// Add weapon damage if a weapon is equipped
					totalPlayerStr += playerCurrentWeapon.weaponDmg;
				}

				// Generate a random number to determine the divisor for playerStr and playerAgi
				const strDivisor = Math.random() < 0.5 ? 2 : 3;
				const agiDivisor = Math.random() < 0.5 ? 2 : 3;

        let damageOutput = parseInt((totalPlayerStr / strDivisor) + (totalPlayerAgi / agiDivisor) - (monsterDef / 4));

				// Calculate player damage considering monster defense
				return damageOutput <= 0 ? 1 : damageOutput;
			};

			// Function to calculate monster damage
			const calculateMonsterDamage = (monsterStrength, monsterAgility, playerDefense) => {
				// Generate a random number to determine the divisor for monsterStr and monsterAgi
				const strDivisor = Math.random() < 0.5 ? 2 : 3;
				const agiDivisor = Math.random() < 0.5 ? 2 : 3;

        let damageOutput = parseInt((monsterStrength / strDivisor) + (monsterAgility / agiDivisor) - (playerDefense / 4));

				// Calculate monster damage considering player defense
				return damageOutput <= 0 ? 1 : damageOutput; // if the monster is weaker than the current player stats it will only return 1 not the negative n
			};

		// Function to check evasion
		const checkEvasion = (agility, luck) => {
		  const evasionChance = Math.random() * 100;
		  return evasionChance < (agility + luck) / 2;
		};
    // function to check critical chance 
    
    const calculateMonsterCritChance = (monsterAgility, monsterLck, playerAgility, playerLck) => {
      
        const critChance = Math.floor(Math.random() * 100);
        const monsterCritChance = parseInt((monsterAgility + monsterLck) - ((playerAgility + playerLck) / 4) )
        if( monsterCritChance >= critChance){
          return true;
        }else{
          return false;
        }
    };


    // Function to update monster stats on the UI
    const updateMonsterStatsUI = (monster) => {

      //for the fight or flee UI
      const monsterName = document.getElementById('monsterName');
      const monsterHealth = document.getElementById('monsterHealth');
      const monsterLevel = document.getElementById('monsterLevel');
      const monsterImage = document.getElementById('monster-img');

      //for fighting UI
      const fightingMonsterName = document.getElementById('fighting-monster-name');
      const fightingMonsterHealth = document.getElementById('fighting-monster-health');
      const fightingMonsterLevel = document.getElementById('fighting-monster-level');
      const fightingMonsterImg = document.getElementById('fighting-monster-img');
      const fightingMonsterEnergy = document.getElementById('fighting-monster-energy');

      monsterName.textContent = monster.name;
      monsterHealth.textContent = monster.health;
      monsterLevel.textContent = monster.monsterLevel;

      fightingMonsterName.textContent = monster.name;
      fightingMonsterHealth.textContent = monster.health <= 0 ? 0 : monster.health; /*added ternary operator so it would display negative digits*/
      fightingMonsterLevel.textContent = monster.monsterLevel;
      fightingMonsterEnergy.textContent = monster.monsterEnergy;

      // Set the monster image src
      monsterImage.src = monster.monsterImg;
      fightingMonsterImg.src = monster.monsterImg;
    };
    // Function to update player stats on the UI
    const updatePlayerStatsUI = () => {
        const gold = document.getElementById('gold');
        const level = document.getElementById('level');
        const exp = document.getElementById('exp');
        const energy = document.getElementById('energy');
        const health = document.getElementById('health');

        gold.textContent = playerGold;
        level.textContent = playerLvl;
        exp.textContent = playerXp;
        energy.textContent = playerEnergy;
        health.textContent = playerHealth;

        currentWeaponUI.textContent = playerCurrentWeapon ? playerCurrentWeapon.weaponName : 'No Weapon Equipped';
        currentHelmetUI.textContent = playerCurrentHelmet ? playerCurrentHelmet.armorName : 'No Helmet Equipped';
        currentArmorUI.textContent = playerCurrentArmor ? playerCurrentArmor.armorName : 'No Armor Equipped';
        currentGauntletUI.textContent = playerCurrentGauntlet ? playerCurrentGauntlet.armorName : 'No Gauntlet Equipped';
        currentBootsUI.textContent = playerCurrentBoots ? playerCurrentBoots.armorName : 'No Boots Equipped';
        currentShieldUI.textContent = playerCurrentShield ? playerCurrentShield.armorName : 'No Shield Equipped';

        

        const fightingPlayerHealth = document.getElementById('player-health');
        const fightingPlayerLevel = document.getElementById('player-level');
        const fightingPlayerEnergy = document.getElementById('player-energy');

        fightingPlayerHealth.textContent = playerHealth; // Update with player's health during fight
        fightingPlayerLevel.textContent = playerLvl; // Update with player's level during fight
        fightingPlayerEnergy.textContent = playerEnergy; // Update with player's energy during fight
      };

      updatePlayerStatsUI();

    
    // Resets the fight story
    const resetFightStory = () => {
          fightStory.textContent = `You are fighting ${selectedMonster.name}\n`;
           
    };

    //resets the player health if the player is defeated
    const resetPlayerHealth = () => {
      playerHealth = 50;
      updatePlayerStatsUI();
    };

    //Global variables to handle player level up
    let requiredExpToLvlUp = 10;
    const rewardAttributes = 3;
  
    const checkAndHandleLevelUp = () => {
      
        if (playerXp >= requiredExpToLvlUp) {

          playerXp -= requiredExpToLvlUp;
          playerLvl += 1;
          requiredExpToLvlUp += 20;
          playerDef += rewardAttributes;
          playerAgi += rewardAttributes;
          playerLuck += rewardAttributes;
          playerStr += rewardAttributes;
          playerHealth += 100;

          fightingNotifContainer.style.display = "inline-block";
          fightingNotif.textContent = `
              You leveled up! \n
              You have gained \n
              ${rewardAttributes} Defense \n
              ${rewardAttributes} Agility \n
              ${rewardAttributes} Strength \n
              ${rewardAttributes} Luck \n
            `;
          
      }
    
      updatePlayerStatsUI();

    };

    //if monster is defeated notification 
    fightingNotifBtn.addEventListener('click',() => {
          if(fightingNotifContainer.style.display === 'inline-block'){
            fightingNotif.textContent = '';
            fightingNotifContainer.style.display = 'none';
            return;
          }
        });

  
  
      //Function to use an health potion
    const useHealthPotion = () => {
      
      const itemName = items.healthPotion.itemName;
			const healthPotionIndex = playerInv.indexOf(itemName);
      const healthPotionHealAmount = items.healthPotion.potionEffectAmount;
			
			if (healthPotionIndex !== -1) {
				
				playerHealth += healthPotionHealAmount;
				// Remove the health potion from player's inventory
				playerInv.splice(healthPotionIndex, 1);
				updatePlayerStatsUI();

        
				appendUseHPFightStory(`You used HP potion and Regenerated ${healthPotionHealAmount} HP`);
				
			} else {
      
				appendUseHPFightStory("You don't have any health potions.");
        
			}
		};

		// Function to use an energy potion
		const useEnergyPotion = () => {

      const itemName = items.energyPotion.itemName;
      const energyPotionRestoreAmount = items.energyPotion.potionEffectAmount;
      
			const energyPotionIndex = playerInv.indexOf(itemName);
			if (energyPotionIndex !== -1) {
				
				playerEnergy += energyPotionRestoreAmount;

				// Remove the energy potion from player's inventory
				playerInv.splice(energyPotionIndex, 1);
				updatePlayerStatsUI();

        appendUseEnergyFightStory(`You used Energy potion and Regenerated ${energyPotionRestoreAmount} Energy`);
				
			} else {

				appendUseEnergyFightStory("You don't have any energy potions.");

			}
		};

    //monster random skill function
    const getRandomSkill = (skills) => {
          const randomIndex = Math.floor(Math.random() * skills.length);
          return skills[randomIndex];
     };

  // disable buttons if the monster is defeated
     const disableAllButtons = () => {
			const buttons = document.querySelectorAll('#fighting-btns-container button');
			buttons.forEach(button => {
				button.disabled = true;
			});
		};
  //flee monster button function
    fleeMonsterBtn.addEventListener('click', () => {

        const playerChanceToFlee = selectedMonster.chanceToFlee;
        const chanceToFleeCalculation = Math.random() * 100;
        if (playerChanceToFlee >= chanceToFleeCalculation) {
          // Player successfully fled
          monsterStats.style.display = 'none';
          mapNav.style.display = 'none';
          valleyMap.style.display = 'none';
          valleyMapInner.style.display = 'inline-block';
          fleeNotif.style.display = 'inline-block';
          fleeConfirmBtn.style.display = 'inline-block';
          fleeNotif.textContent = 'You Succesfully fled';
          fleeConfirmBtn.addEventListener('click', () => {
            fleeNotif.style.display = 'none';
            fleeConfirmBtn.style.display = 'none';
          });
        } else {
          // Player failed to flee
          monsterFightNotif.textContent = 'You failed to flee!';
          fleeMonsterBtn.style.display = 'none';
        }
    });
  //fight monster button function
    fightMonsterBtn.addEventListener('click', () => {
			// Handle initiating the fight
			monsterStats.style.display = 'none';
			fightingDisplay.style.display = 'inline-block';
      const buttons = document.querySelectorAll('#fighting-btns-container button');
			buttons.forEach(button => {
				button.disabled = false;
			});
      valleyMonstersFightFunction();
      resetFightStory();

		});
  //for grassland area fight or flee
    const monsterAppear = () => {
      monsterStats.style.display = 'inline-block';
      mapNav.style.display = 'none';
      valleyMap.style.display = 'none';
      valleyMapInner.style.display = 'none';

      selectedMonster = monsterRandomPicker();
      updateMonsterStatsUI(selectedMonster);
      fightingConfirmBtn.style.display = "none";
      monsterFightNotif.textContent = 'Oh no! a Wild Monster Appears!';
      return selectedMonster;
    }


     
  //reset the gameState
     const fightEnded = () => {
        return gameState = "PlayerTurn";
      };


  //valley monsters fighting display
    const valleyMonstersFightFunction = () => {

       let gameState = "playerTurn"; // Initial state: player's turn before the fight button is clicked.

        
          const playerAction = () => {

            if (gameState !== "playerTurn") return;
         
              const playerDamage = calculatePlayerDamage(playerStr, playerAgi, playerCurrentWeapon, selectedMonster.monsterDef);
              const monsterEvade = checkEvasion(selectedMonster.monsterAgi, selectedMonster.monsterLuck);

          if (monsterEvade) {
               appendFightStoryPlayerMove(`${selectedMonster.name} evaded the attack!`);
          } else {
              selectedMonster.health -= playerDamage;
               appendFightStoryPlayerMove(`You used basic attack and hit ${selectedMonster.name} for ${playerDamage} damage!`);
              updateMonsterStatsUI(selectedMonster);
          }

          // Check if monster is defeated
          if (selectedMonster.health <= 0) {
              appendFightStoryPlayerMove(`${selectedMonster.name} is defeated!\n
               You have gained ${selectedMonster.monsterGoldReward} gold and ${selectedMonster.monsterExpReward} exp from defeating ${selectedMonster.name}`);
              disableAllButtons();
              fightingConfirmBtn.style.display = "inline-block";

              // Update player stats with rewards
              playerGold += selectedMonster.monsterGoldReward;
              playerXp += selectedMonster.monsterExpReward;


              fightingConfirmBtn.addEventListener('click', () => {
                  valleyMapInner.style.display = 'inline-block';
                  fightingDisplay.style.display = 'none';
                  checkAndHandleLevelUp();
                  gameState = "notFighting";
                  fleeMonsterBtn.style.display = 'inline-block';
                   monsterFightNotif.textContent = '';
              });

              
          } else {

              gameState = "monsterTurn";

               setTimeout(monsterAction, 500);
          
          }
          
      };

      const monsterAction = () => {
          if (gameState !== "monsterTurn") return; // Ensure it's monster's turn

          // Monster's attack logic
          const monsterDamage = calculateMonsterDamage(selectedMonster.monsterStr, selectedMonster.monsterAgi, playerDef);
          const playerEvade = checkEvasion(playerAgi, playerLuck);
          const monsterCriticalChance = calculateMonsterCritChance(selectedMonster.monsterAgi, selectedMonster.monsterLuck, playerAgi, playerLuck);
          const skill = getRandomSkill(selectedMonster.monsterSkills);

          if (playerEvade) {
              appendFightStoryMonsterMove(`You evaded ${selectedMonster.name}'s attack!`);
          } else {
              if (monsterCriticalChance) {

                  handleCriticalAttack(skill, monsterDamage);
                  
              } else {

                  handleNormalAttack(skill, monsterDamage);

              }
          }

          // Check if player is defeated
          if (playerHealth <= 0) {

              handlePlayerDefeat();

          } else {

              gameState = "playerTurn";
          }

              updatePlayerStatsUI();
        };


        const handleCriticalAttack = (skill, monsterDamage) => {

          if (selectedMonster.monsterEnergy >= skill.skillEnergyConsumption) {

                    if (skill.skillName === 'stun' || skill.skillName === 'earthSmash'){

                      const monsterSkillDamage = parseInt((skill.skillDmg * 2) <= 0 ? 2 : (skill.skillDmg * 2));

                     appendCritDmgFightStory(`${selectedMonster.name} uses ${skill.skillName} CRITICAL!! It deals ${monsterSkillDamage} damage! ${selectedMonster.name} takes another turn!`);
                     
                      selectedMonster.monsterEnergy -= skill.skillEnergyConsumption;
                     
                      playerHealth -= monsterSkillDamage;

                      
                        gameState = "monsterTurn"; // Monster gets another turn
                        monsterAction();
                     
 
                    }else if(skill.skillName === 'scale Hardening'){

                          const additionalDef = 10;
                          appendFightStoryMonsterMove(`${selectedMonster.name} uses ${skill.skillName} and gained ${additionalDef} additional Defense!`);

                          selectedMonster.monsterDef += additionalDef;
                          console.log(selectedMonster.monsterDef);

                          playerHealth = playerHealth;
                      }else{

                       const monsterSkillDamage = parseInt((skill.skillDmg * 2) <= 0 ? 2 : (skill.skillDmg * 2));

                       appendCritDmgFightStory(`${selectedMonster.name} uses ${skill.skillName} CRITICAL!! It deals ${monsterSkillDamage} damage!`);
                      selectedMonster.monsterEnergy -= skill.skillEnergyConsumption;
                     
                      playerHealth -= monsterSkillDamage;

                    }

                    
                  } else {
                    const monsterCritDmg = parseInt((monsterDamage * 2) <= 0 ? 2 : (monsterDamage * 2));
                      playerHealth -= monsterCritDmg;
                      appendCritDmgFightStory(`${selectedMonster.name} doesn't have enough energy left, uses basic attack CRITICAL!! Deals ${monsterCritDmg} damage!`);
                      
                  }

                   updateMonsterStatsUI(selectedMonster);
                    updatePlayerStatsUI();

        };

        const handleNormalAttack = (skill, monsterDamage) => {

            if (selectedMonster.monsterEnergy >= skill.skillEnergyConsumption) {

                    if (skill.skillName === 'stun' || skill.skillName === 'earthSmash') {

                      const monsterSkillDamage = parseInt((skill.skillDmg - (playerDef / 3)) < 0 ? 1 : (skill.skillDmg - (playerDef / 3)));

                      appendFightStoryMonsterMove(`${selectedMonster.name} uses ${skill.skillName} for ${skill.skillEnergyConsumption} energy! It deals ${monsterSkillDamage} damage!\n you missed your turn!`);
                      selectedMonster.monsterEnergy -= skill.skillEnergyConsumption;


                     
                      playerHealth -= monsterSkillDamage;

                      updateMonsterStatsUI(selectedMonster);
                      updatePlayerStatsUI();

                     
                        gameState = "monsterTurn"; // Monster gets another turn
                        monsterAction();
                     
                        
                      }else if(skill.skillName === 'scale Hardening'){
                          const additionalDef = 10;
                          appendFightStoryMonsterMove(`${selectedMonster.name} uses ${skill.skillName} and gained ${additionalDef} additional Defense!`);

                          selectedMonster.monsterDef += additionalDef;

                          playerHealth = playerHealth;
                      }else{

                       const monsterSkillDamage = parseInt((skill.skillDmg - (playerDef / 3)) < 0 ? 1 : (skill.skillDmg - (playerDef / 3)));

                      appendFightStoryMonsterMove(`${selectedMonster.name} uses ${skill.skillName} for ${skill.skillEnergyConsumption} energy! It deals ${monsterSkillDamage} damage!`);
                      selectedMonster.monsterEnergy -= skill.skillEnergyConsumption;
                     
                      playerHealth -= monsterSkillDamage;

                      }

                     

                    updateMonsterStatsUI(selectedMonster);
                    updatePlayerStatsUI();
                      
                      
                  } else {

                      playerHealth -= monsterDamage;
                     appendFightStoryMonsterMove(`${selectedMonster.name} doesn't have enough energy left, uses basic attack and hits you for ${monsterDamage} damage!`);
                  }
        };

        const handlePlayerDefeat = () => {

          appendFightStoryMonsterMove("Player is defeated!");
              disableAllButtons();

              setTimeout(function playerDefeated() {
                  mapNav.style.display = 'inline-block';
                  notifContainer.style.display = 'block';
                  fightingDisplay.style.display = 'none';
                  notifications.textContent = `You have been defeated. A stranger saw you and brought you to the hospital.`;
                  resetPlayerHealth();
                  fightEnded();
              }, 2000);
        };


      // Attach event listeners to health and energy potion buttons
          const useHPPotionBtn = document.getElementById('use-hpotion-btn');
          useHPPotionBtn.addEventListener('click', useHealthPotion);

          const useEnergyPotionBtn = document.getElementById('use-epotion-btn');
          useEnergyPotionBtn.addEventListener('click', useEnergyPotion);


      // Bind player action to the button click
      const basicAttackBtn = document.getElementById('basic-attack-btn');
      basicAttackBtn.addEventListener('click', playerAction);



    // Update monster stats on the UI
    updateMonsterStatsUI(selectedMonster);
    updatePlayerStatsUI();
};  
     const appendUseEnergyFightStory = (text) => {
        const fightStory = document.getElementById('fight-story');
        const newEntry = document.createElement('div');
        newEntry.className = 'use-energy-potion-fight-story';
        newEntry.textContent = text;
        fightStory.appendChild(newEntry);
        fightStory.scrollTop = fightStory.scrollHeight; // Auto-scroll to the bottom
    };

    const appendUseHPFightStory = (text) => {
        const fightStory = document.getElementById('fight-story');
        const newEntry = document.createElement('div');
        newEntry.className = 'use-hp-potion-fight-story';
        newEntry.textContent = text;
        fightStory.appendChild(newEntry);
        fightStory.scrollTop = fightStory.scrollHeight; // Auto-scroll to the bottom
    };

    const appendCritDmgFightStory = (text) => {
        const fightStory = document.getElementById('fight-story');
        const newEntry = document.createElement('div');
        newEntry.className = 'crit-dmg-fight-story';
        newEntry.textContent = text;
        fightStory.appendChild(newEntry);
        fightStory.scrollTop = fightStory.scrollHeight; // Auto-scroll to the bottom
    };

    const appendFightStoryPlayerMove = (text) => {
        const fightStory = document.getElementById('fight-story');
        const newEntry = document.createElement('div');
        newEntry.className = 'fight-story-player-entry';
        newEntry.textContent = text;
        fightStory.appendChild(newEntry);
        fightStory.scrollTop = fightStory.scrollHeight; // Auto-scroll to the bottom
    };

    const appendFightStoryMonsterMove = (text) => {
        const fightStory = document.getElementById('fight-story');
        const newEntry = document.createElement('div');
        newEntry.className = 'fight-story-monster-entry';
        newEntry.textContent = text;
        fightStory.appendChild(newEntry);
        fightStory.scrollTop = fightStory.scrollHeight; // Auto-scroll to the bottom
    };

// check inventory function
// Define the event listener for the "check-inv" button
const checkInventoryBtn = document.getElementById('check-inv');
const displayWeaponInvBtn = document.getElementById('check-weapon-inv')
const currentWeaponContainer = document.getElementById('current-weapon-container');
const townInventoryContainer = document.getElementById('town-inventory-container');
const townNotifContainer = document.getElementById('town-notif-container');
const townNotifTxt = document.getElementById('town-notif');
const townNotifBackBtn = document.getElementById('town-notif-bck-btn');


const displayArmorInvBtn = document.getElementById('check-armor-inv')
const inventoryContainer = document.getElementById('inventory-container');
const townInventoryBtn = document.getElementById('town-check-inv-btn');
const weaponInvContainer = document.getElementById('weapon-inv-container');
const armorInvContainer = document.getElementById('armor-inv-container');

const equipmentsContainer = document.getElementById('equipments-container');
const playerEquipmentBtn = document.getElementById('player-equipment');
let isWeaponEquipped = false;


let isInvUIActive = false;
let isTownInvUIActive = false;
let isWeaponInvUIActive = false;
let isArmorInvUIActive = false;
let isPlayerEquipmentUIActive = false;

    const toggleInventoryUI = () => {
        // Check if the inventory container is displayed
        if (window.getComputedStyle(inventoryContainer).display !== 'none') {
            // If it's displayed, hide it
            inventoryContainer.style.display = 'none';
            checkInventoryBtn.textContent = 'Inventory'; // Change button text back
        } else{
            // If it's not displayed, show it
            closeAllUIs();
            displayInventoryUI();
            checkInventoryBtn.textContent = 'Close Inventory'; // Change button text
        }
    };

    const toggleTownInventoryUI = () => {
        // Check if the inventory container is displayed
        if (window.getComputedStyle(townInventoryContainer).display !== 'none') {
            // If it's displayed, hide it
            townInventoryContainer.style.display = 'none';
            townInventoryBtn.textContent = 'Inventory'; // Change button text back
            isTownInvUIActive = false;
        } else {
            // If it's not displayed, show it
            closeAllUIs();
            displayTownInventoryUI();
            townInventoryBtn.textContent = 'Close Inventory'; // Change button text
            isTownInvUIActive = true;
        }
    };

    const toggleWeaponInvUI = () => {
        // Check if the inventory container is displayed
        if (window.getComputedStyle(weaponInvContainer).display !== 'none') {
            // If it's displayed, hide it
            weaponInvContainer.style.display = 'none';
            displayWeaponInvBtn.textContent = 'Weaponry'; // Change button text back
            
              isWeaponInvUIActive = false;
        } else {
            // If it's not displayed, show it
            closeAllUIs();
            displayWeaponInventoryUI();
            displayWeaponInvBtn.textContent = 'Close Weaponry'; // Change button text
            isWeaponInvUIActive = true;
            
        }
    };

    const toggleArmorInvUI = () => {
        // Check if the inventory container is displayed
        if (window.getComputedStyle(armorInvContainer).display !== 'none') {
            // If it's displayed, hide it
            armorInvContainer.style.display = 'none';
            displayArmorInvBtn.textContent = 'Armory'; // Change button text back
            isArmorInvUIActive = false;
        } else {
            // If it's not displayed, show it
            closeAllUIs();
            displayArmorInventoryUI();
            displayArmorInvBtn.textContent = 'Close Armory'; // Change button text
            isArmorInvUIActive = true;
        }
    };

    const togglePlayerEquipment = () => {
        if (window.getComputedStyle(equipmentsContainer).display !== 'none') {
            // If it's displayed, hide it
            equipmentsContainer.style.display = 'none';
            playerEquipmentBtn.textContent = 'Equipments'; // Change button text back
            isPlayerEquipmentUIActive = false;
        } else {
            // If it's not displayed, show it
             closeAllUIs();
            playerEquipment();
            playerEquipmentBtn.textContent = 'Close Equipments'; // Change button text
            isPlayerEquipmentUIActive = true;
        }
    };

    const closeAllUIs = () => {

        if (isInvUIActive) {
            inventoryContainer.style.display = 'none';
            checkInventoryBtn.textContent = 'Inventory';
            isInvUIActive = false;
        }
        if (isTownInvUIActive) {
            townInventoryContainer.style.display = 'none';
            townInventoryBtn.textContent = 'Inventory';
            isTownInvUIActive = false;
        }
        if (isWeaponInvUIActive) {
            weaponInvContainer.style.display = 'none';
            displayWeaponInvBtn.textContent = 'Weaponry';
            isWeaponInvUIActive = false;
        }
        if (isArmorInvUIActive) {
            armorInvContainer.style.display = 'none';
            displayArmorInvBtn.textContent = 'Armory';
            isArmorInvUIActive = false;
        }
        if (isPlayerEquipmentUIActive) {
            equipmentsContainer.style.display = 'none';
            playerEquipmentBtn.textContent = 'Equipments';
            isPlayerEquipmentUIActive = false;
        }
    };

    const playerEquipment = () => {
        equipmentsContainer.style.display = 'block';
    };

    playerEquipmentBtn.addEventListener('click',togglePlayerEquipment);


        // Function to display the inventory UI
        const displayInventoryUI = () => {
          inventoryContainer.innerHTML = '';

          if (playerInv.length === 0) {
              inventoryContainer.style.display = 'block';
              inventoryContainer.textContent = 'There is no item in your inventory';
          } else {
              inventoryContainer.style.display = 'block';

              playerInv.forEach(item => {
                  const itemContainer = document.createElement('div');
                  itemContainer.classList.add('item-container');

                  const itemElement = document.createElement('p');
                  itemElement.textContent = item;

                  const itemBtn = document.createElement('button');
                  itemBtn.innerHTML = 'Use Item';

                  itemBtn.addEventListener('click', () => {
                      if (item === items.healthPotion.itemName) {
                          useHealthPotion();
                          removeItemFromInventory(item);
                      } else if (item === items.energyPotion.itemName) {
                          useEnergyPotion();
                          removeItemFromInventory(item);
                      }
                  });

                  

                  itemContainer.appendChild(itemElement);
                  itemContainer.appendChild(itemBtn);
                 
                  inventoryContainer.appendChild(itemContainer);
              });
          }
      };

      


    checkInventoryBtn.addEventListener('click', () => {
       toggleInventoryUI()
    });

    const displayTownInventoryUI = () => {
      
        townInventoryContainer.innerHTML = '';

        if(playerInv.length === 0){
            townInventoryContainer.style.display = 'block';
            townInventoryContainer.textContent = 'There is no item in your inventory';
        }else{
            // Show the inventory UI
            townInventoryContainer.style.display = 'block';

            playerInv.forEach(item => {
            // Create a container for the item and the button
            const townItemContainer = document.createElement('div');
            townItemContainer.classList.add('town-item-container');

            // Create a new paragraph element to display the item
            const townItemElement = document.createElement('p');
            townItemElement.textContent = item.itemName;


            // Create a button to use the item
            const townItemBtn = document.createElement('button');
            townItemBtn.innerHTML = 'Use Item';

            // Add an event listener to the button
            townItemBtn.addEventListener('click', () => {
                if (item === items.healthPotion.itemName) {

                    useHealthPotion();
                    removeItemFromInventory(item);

                } else if (item === items.energyPotion.itemName) {

                    useEnergyPotion();
                    removeItemFromInventory(item);
                }
            });

                   const sellItemBtn = document.createElement('button');
                  sellItemBtn.innerHTML = 'Sell Item';

                  sellItemBtn.addEventListener('click', () => {

                      removeItemFromInventory(item);
                      sellItem(item);
                      
                  });



                    

            // Append the item element and button to the container
            townItemContainer.appendChild(townItemElement);
            townItemContainer.appendChild(townItemBtn);
             townItemContainer.appendChild(sellItemBtn);

            // Append the item container to the inventory container
            townInventoryContainer.appendChild(townItemContainer);
        });

            
        }
    };

    const removeItemFromInventory = (item) => {
          const itemIndex = playerInv.indexOf(item);
          if (itemIndex > -1) {
              playerInv.splice(itemIndex, 1);
              displayTownInventoryUI();
          }
      };

    townInventoryBtn.addEventListener('click', () => {
      toggleTownInventoryUI();
    });
      
            const displayWeaponInventoryUI = () => {
            weaponInvContainer.innerHTML = '';

            if (playerWeaponInv.length === 0) {
                weaponInvContainer.style.display = 'block';
                weaponInvContainer.textContent = 'There are no weapons in your inventory';
            } else {
                weaponInvContainer.style.display = 'block';

                playerWeaponInv.forEach(weapon => {
                    const weaponContainer = document.createElement('div');
                    weaponContainer.classList.add('weapon-container');

                    const weaponElement = document.createElement('p');
                    weaponElement.style.display = 'inline-block';
                    weaponElement.textContent = weapon.weaponName;

                    const equipBtn = document.createElement('button');
                    equipBtn.style.display = 'inline-block';
                    equipBtn.innerHTML = 'Equip Weapon';

                    let isEquipped = playerCurrentWeapon && playerCurrentWeapon.weaponName === weapon.weaponName;

                    if (isEquipped) {
                        equipBtn.innerHTML = 'Unequip Weapon';
                        equipBtn.style.backgroundColor = 'red';
                    }

                    equipBtn.addEventListener('click', () => {
                        if (isEquipped) {
                            unequipWeapon();
                        } else {
                            equipWeapon(weapon.weaponName);
                        }
                    });

                    const sellWeaponBtn = document.createElement('button');
                    sellWeaponBtn.innerHTML = 'Sell Weapon';
                    sellWeaponBtn.style.display = isEquipped ? 'none' : 'inline-block';

                    sellWeaponBtn.addEventListener('click', () => {

                        weaponContainer.remove();
                        sellWeapon(weapon.weaponName);
                        
                    });

                    weaponContainer.appendChild(weaponElement);
                    weaponContainer.appendChild(equipBtn);
                    weaponContainer.appendChild(sellWeaponBtn);

                    weaponInvContainer.appendChild(weaponContainer);
                });
            }
        };

        const removeWeaponFromInventory = (weaponName) => {
            const weaponIndex = playerWeaponInv.findIndex(w => w.weaponName === weaponName);
            if (weaponIndex > -1) {
                playerWeaponInv.splice(weaponIndex, 1);
                displayWeaponInventoryUI();
            }
        };

    

    displayWeaponInvBtn.addEventListener('click', () => {
      toggleWeaponInvUI();
    });

            const displayArmorInventoryUI = () => {
              armorInvContainer.innerHTML = '';

              if (playerArmorInv.length === 0) {
                  armorInvContainer.style.display = 'block';
                  armorInvContainer.textContent = 'There are no armors in your inventory';
              } else {
                  armorInvContainer.style.display = 'block';

                  playerArmorInv.forEach(armor => {
                      const armorContainer = document.createElement('div');
                      armorContainer.classList.add('armor-container');

                      const armorElement = document.createElement('p');
                      armorElement.style.display = 'inline-block';
                      armorElement.textContent = armor.armorName;

                      const equipBtn = document.createElement('button');
                      equipBtn.innerHTML = 'Equip Armor';

                      let isEquipped = false;
                      switch (armor.armorName) {
                          case 'BreastPlate':
                              isEquipped = playerCurrentArmor && playerCurrentArmor.armorName === armor.armorName;
                              break;
                          case 'Gauntlet':
                              isEquipped = playerCurrentGauntlet && playerCurrentGauntlet.armorName === armor.armorName;
                              break;
                          case 'Armored Boots':
                              isEquipped = playerCurrentBoots && playerCurrentBoots.armorName === armor.armorName;
                              break;
                          case 'Great Helm':
                              isEquipped = playerCurrentHelmet && playerCurrentHelmet.armorName === armor.armorName;
                              break;
                          case 'Round Shield':
                              isEquipped = playerCurrentShield && playerCurrentShield.armorName === armor.armorName;
                              break;
                      }

                      if (isEquipped) {
                          equipBtn.innerHTML = 'Unequip Armor';
                      }

                      equipBtn.addEventListener('click', () => {
                          if (isEquipped) {
                              unequipArmor(armor.armorName);
                          } else {
                              equipArmor(armor.armorName);
                          }
                      });

                      const sellArmorBtn = document.createElement('button');
                      sellArmorBtn.innerHTML = 'Sell Armor';
                      sellArmorBtn.style.display = isEquipped ? 'none' : 'inline-block';

                      sellArmorBtn.addEventListener('click', () => {

                          armorContainer.remove();
                          sellArmor(armor.armorName);
                          
                      });

                      armorContainer.appendChild(armorElement);
                      armorContainer.appendChild(equipBtn);
                      armorContainer.appendChild(sellArmorBtn);

                      armorInvContainer.appendChild(armorContainer);
                  });
              }
          };

          const removeArmorFromInventory = (armorName) => {
              const armorIndex = playerArmorInv.findIndex(a => a.armorName === armorName);
              if (armorIndex > -1) {
                  playerArmorInv.splice(armorIndex, 1);
                  displayArmorInventoryUI();
              }
          };


    displayArmorInvBtn.addEventListener('click', () => {
      toggleArmorInvUI();
    });

    const equipWeapon = (weaponName) => {

        const weapon = playerWeaponInv.find(w => w.weaponName === weaponName);

        if (weapon) {
            playerCurrentWeapon = weapon;
            swordsmithStoreNotifTxt.style.display = 'inline-block';
            swordsmithStoreNotifTxt.textContent = `You equipped a ${weaponName}`;
            isWeaponEquipped = true;
            playerStr += weapon.weaponBonusAtt;
            playerStr += weapon.weaponDmg;
            updatePlayerStatsUI();
            displayWeaponInventoryUI(); 
            
        }
      };

      const unequipWeapon = () => {
          if (playerCurrentWeapon) {
              swordsmithStoreNotifTxt.style.display = 'inline-block';
              swordsmithStoreNotifTxt.textContent = `You unequipped a ${playerCurrentWeapon.weaponName}`;
              playerStr -= playerCurrentWeapon.weaponBonusAtt;
              playerStr -= playerCurrentWeapon.weaponDmg;
              playerCurrentWeapon = null;
             
              isWeaponEquipped = false;
              updatePlayerStatsUI();
              displayWeaponInventoryUI();
              
          }
      };

    const equipArmor = (armorName) => {
    const armor = playerArmorInv.find(a => a.armorName === armorName);
    if (armor) {
        switch (armorName) {
            case 'BreastPlate':
                playerCurrentArmor = armor;
                playerDef += armor.armorDef;
                playerLuck += armor.armorLuck;
                break;
            case 'Gauntlet':
                playerCurrentGauntlet = armor;
                playerDef += armor.armorDef;
                playerLuck += armor.armorLuck;
                break;
            case 'Armored Boots':
                playerCurrentBoots = armor;
                playerDef += armor.armorDef;
                playerLuck += armor.armorLuck;
                break;
            case 'Great Helm':
                playerCurrentHelmet = armor;
                playerDef += armor.armorDef;
                playerLuck += armor.armorLuck;
                break;
            case 'Round Shield':
                playerCurrentShield = armor;
                playerDef += armor.armorDef;
                playerLuck += armor.armorLuck;
                break;
        }

        
        updatePlayerStatsUI();
        displayArmorInventoryUI(); // Update the UI to reflect the equipped armor
    }

    };

    const unequipArmor = (armorName) => {
        switch (armorName) {
            case 'BreastPlate':
                playerDef -= playerCurrentArmor.armorDef;
                playerLuck -= playerCurrentArmor.armorLuck;
                playerCurrentArmor = null;
                break;
            case 'Gauntlet':
                playerDef -= playerCurrentGauntlet.armorDef;
                playerLuck -= playerCurrentGauntlet.armorLuck;
                playerCurrentGauntlet = null;
                break;
            case 'Armored Boots':
                playerDef -= playerCurrentBoots.armorDef;
                playerLuck -= playerCurrentBoots.armorLuck;
                playerCurrentBoots = null;
                break;
            case 'Great Helm':
                playerDef -= playerCurrentHelmet.armorDef;
                playerLuck -= playerCurrentHelmet.armorLuck;
                playerCurrentHelmet = null;
                break;
            case 'Round Shield':
                playerDef -= playerCurrentShield.armorDef;
                playerLuck -= playerCurrentShield.armorLuck;
                playerCurrentShield = null;
                break;
        }

        blacksmithStoreNotif.textContent = `You unequipped ${armorName}`;
        updatePlayerStatsUI();
        displayArmorInventoryUI(); // Update the UI to reflect the unequipped armor
    };

    const sellItem = (item) => {
          const itemValue = getItemValue(item);
          playerGold += itemValue;
          townNotifContainer.style.display = 'inline-block';
          townNotifTxt.textContent = `You sold a ${item.itemName} for ${item.itemCost} gold`;
          updatePlayerStatsUI();
      };

      const getItemValue = (item) => {
          return item.itemCost || 0;
      };

      const sellWeapon = (weaponName) => {
          const weapon = playerWeaponInv.find(w => w.weaponName === weaponName);
          if (weapon) {
              const weaponValue = getWeaponValue(weapon); // Define this function based on your game logic
              playerGold += weaponValue;
              gold.textContent = playerGold;
              townNotifContainer.style.display = 'inline-block';
              townNotifTxt.textContent = `You sold a ${weaponName} for ${weaponValue} gold`;
              removeWeaponFromInventory(weaponName);
          }
      };

      const getWeaponValue = (weapon) => {
          // Return the value of the weapon based on your game logic
          return weapon.weaponCost;
      };

      const sellArmor = (armorName) => {
          const armor = playerArmorInv.find(a => a.armorName === armorName);
          if (armor) {
              const armorValue = getArmorValue(armor);
              playerGold += armorValue;
              townNotifContainer.style.display = 'inline-block';
              townNotifTxt.textContent = `You sold a ${armorName} for ${armorValue} gold`;
              removeArmorFromInventory(armorName);
              updatePlayerStatsUI();
          }
      };

      const getArmorValue = (armor) => {
          return armor.armorCost;
      };

      townNotifBackBtn.addEventListener('click', () => {
           townNotifContainer.style.display = 'none';
      });






/* Dark Valley Map Functions*/

const darkValleyBtn = document.getElementById('dark-valley-btn').addEventListener('click', () => {
  if(playerLvl < 5){
    notifContainer.style.display = 'block';
    notifications.textContent = `You can't go here, you're too weak, required Level 5`;
  } else {
    darkValleyMapFunction(); 
  }
});

const backButton = document.getElementById('notif-back-button').addEventListener('click',() => {
  if(notifContainer.style.display === 'block'){
    notifications.textContent = '';
    notifContainer.style.display = 'none';
    return;
  }
});

//for Dark Valley Map Functions//
    const darkValleyMap = document.getElementById('dark-valley-map');
    const dvEnterBtn = document.getElementById('dv-enter-btn');
    const dvBackBtn = document.getElementById('dv-back-btn');
    const dvInnerMap = document.getElementById('dark-valley-map-inner');
    const dvInnerMapBackBtn = document.getElementById('dv-inner-back-btn');
    const dvInnerMapRightBtn = document.getElementById('dv-go-right');
    const dvInnerMapMiddleBtn = document.getElementById('dv-go-middle');
    const dvInnerMapLeftBtn = document.getElementById('dv-go-left');


    const darkValleyMapFunction = () => { 
      mapNav.style.display = 'none';
      darkValleyMap.style.display = 'inline-block';

      dvBackBtn.addEventListener('click', () => {
        darkValleyMap.style.display = 'none';
        mapNav.style.display = 'inline-block';
      });

      dvEnterBtn.addEventListener('click', () => {
        
        darkValleyMap.style.display = 'none';
        mapNav.style.display = 'none';
        
        dvInnerMap.style.display = 'inline-block';

        dvInnerMapBackBtn.addEventListener('click', () => {
          darkValleyMap.style.display = 'inline-block';
          dvInnerMap.style.display = 'none';

          mapNav.style.display = 'none';
        });

        dvInnerMapLeftBtn.addEventListener('click',function(){
          darkValleyMap.style.display = 'none';
          dvInnerMap.style.display = 'none';
          mapNav.style.display = 'none';

          //dvMonstersFightFunction();
        });
        
        });

        
    };


//The valley Functions
const valleyMap = document.getElementById('valley-map');
const valleyMapEnterBtn = document.getElementById('enter-valley');
const valleyMapBackBtn = document.getElementById('valley-go-back-btn');


const valleyMapInner = document.getElementById('valley-map-inner');
const valleyGoSwampBtn = document.getElementById('go-swamp-btn');
const valleyGoGrasslandBtn = document.getElementById('go-grassland-btn');
const valleyInnerBackBtn = document.getElementById('valley-inner-back-btn');



const valleyFunction = () => {

  mapNav.style.display = 'none';
  valleyMap.style.display = 'inline-block';

  valleyMapEnterBtn.addEventListener('click', () => {
    mapNav.style.display = 'none';
    valleyMap.style.display = 'none';

    valleyMapInner.style.display = 'inline-block';

    valleyInnerBackBtn.addEventListener('click', () => {
        mapNav.style.display = 'none';
        valleyMap.style.display = 'inline-block';

        valleyMapInner.style.display = 'none';
    });

    valleyGoGrasslandBtn.addEventListener('click',monsterAppear);

    
  });

  valleyMapBackBtn.addEventListener('click',() => {
    mapNav.style.display = 'inline-block';
    valleyMap.style.display = 'none';
  })
};

const valleyBtn = document.getElementById('valley-btn').addEventListener('click', valleyFunction); 


//Go to Town Functions

    
    const townMap = document.getElementById('town-map');

    //alchemist 
    const alchemistStore = document.getElementById('alchemist-store');
    const alchemistStoreBtn = document.getElementById('alchemist-store-btn');
    const alchemistStoreBackBtn = document.getElementById('alchemist-store-back-btn');
    const buyHealthPotionBtn = document.getElementById('buy-health-potion');
    const buyEnergyPotionBtn = document.getElementById('buy-energy-potion');
    const alchemyStoreNotif = document.getElementById('alchemy-store-notif-container');
    const alchemyStoreNotifTxt = document.getElementById('alchemy-store-notif');
    const alchemyStoreNotifBckBtn = document.getElementById('alchemy-store-notif-bck-btn');
    const hpCancelBtn = document.getElementById('hp-cancel-btn');
    const energyCancelBtn = document.getElementById('energy-cancel-btn');

    const buyHealthPotionBtns = document.getElementById('buy-health-potion-btns');
    const buyEnergyPotionBtns = document.getElementById('buy-energy-potion-btns');

    const buyHealthPotionMinusBtn = document.getElementById('buy-health-potion-minus');
    const healthPotionQuantityInput = document.getElementById('health-potion-quantity');
    const buyHealthPotionPlusBtn = document.getElementById('buy-health-potion-plus');
    const healthPotionConfirmBtn = document.getElementById('hp-confirm-btn');

    const buyEnergyPotionMinusBtn = document.getElementById('buy-energy-potion-minus');
    const energyPotionQuantityInput = document.getElementById('energy-potion-quantity');
    const buyEnergyPotionPlusBtn = document.getElementById('buy-energy-potion-plus');
    const energyPotionConfirmBtn = document.getElementById('energy-confirm-btn');

    //blacksmith
    const blacksmitStoreBtn = document.getElementById('blacksmith-store-btn');
    const blacksmithStore = document.getElementById('blacksmith-store');
    const blacksmithStoreBackBtn = document.getElementById('blacksmith-store-back-btn');
    const blacksmithStoreNotif = document.getElementById('blacksmith-store-notif-container');
    const blacksmithStoreNotifTxt = document.getElementById('blacksmith-store-notif');
    const blacksmithStoreNotifBckBtn = document.getElementById('blacksmith-store-notif-bck-btn');

    const bsBuyConfirmation = document.getElementById('blacksmith-store-confirmation-container');
     const bsConfirmationTxt = document.getElementById('blacksmith-store-confirmation-txt');
     const bsConfirmationYesBtn = document.getElementById('blacksmith-confirm-yes-btn');
      const bsConfirmationNoBtn = document.getElementById('blacksmith-confirm-no-btn');
    
    //breastplate dom
    const buyBreastplateBtn = document.getElementById('buy-breastplate');
    const breastplateContainer = document.getElementById('breastplate-container');
    const breastplateBuyBtn = document.getElementById('breastplate-buy-btn');
    const breastplateCancelBtn = document.getElementById('breastplate-cancel-btn');
    const breastplateInfoBtn = document.getElementById('breastplate-info-btn');
    const breastplateCloseInfoBtn = document.getElementById('breastplate-close-info');
    const breastplateInfoContainer = document.getElementById('breastplate-info-container');

    //gauntlet dom
    const buyGauntletBtn = document.getElementById('buy-gauntlet');
    const gauntletContainer = document.getElementById('gauntlet-container');
    const gauntletBuyBtn = document.getElementById('gauntlet-buy-btn');
    const gauntletCancelBtn = document.getElementById('gauntlet-cancel-btn');
    const gauntletInfoBtn = document.getElementById('gauntlet-info-btn');
    const gauntletCloseInfoBtn = document.getElementById('gauntlet-close-info');
    const gauntletInfoContainer = document.getElementById('gauntlet-info-container');

  //armored boots dom
    const buyArmoredBootsBtn = document.getElementById('buy-armored-boots');
    const bootsContainer = document.getElementById('boots-container');
    const bootsBuyBtn = document.getElementById('boots-buy-btn');
    const bootsCancelBtn = document.getElementById('boots-cancel-btn');
    const bootsInfoBtn = document.getElementById('boots-info-btn');
    const bootsCloseInfoBtn = document.getElementById('boots-close-info');
    const bootsInfoContainer = document.getElementById('boots-info-container');

    const buyGreatHelmBtn = document.getElementById('buy-great-helm');
    const buyShieldBtn = document.getElementById('buy-shield');

    //swordsmith
    const swordsmithStoreBtn = document.getElementById('swordsmith-store-btn');
    const swordsmithStore = document.getElementById('swordsmith-store');
    const swordsmithStoreBackBtn = document.getElementById('swordsmith-store-back-btn');

    const swordsmithStoreNotif = document.getElementById('swordsmith-store-notif-container');
    const swordsmithStoreNotifTxt = document.getElementById('swordsmith-store-notif');
    const swordsmithStoreNotifBckBtn = document.getElementById('swordsmith-store-notif-bck-btn');

    const buySwordBtn = document.getElementById('buy-sword');
    const buyDaggerBtn = document.getElementById('buy-dagger');
    const buyCrossbowBtn = document.getElementById('buy-crossbow');
    const buyKatanaBtn = document.getElementById('buy-katana');
    const buyNunchuksBtn = document.getElementById('buy-nunchuks');

    //temple
    const temple = document.getElementById('temple');
    const templeBtn = document.getElementById('temple-btn');
    const templeBackBtn = document.getElementById('temple-back-btn');

    const townBackBtn = document.getElementById('town-back-btn');

    


      const townBtnFunction = () => {

        mapNav.style.display = 'none';
        townMap.style.display = 'inline-block';
      

        //alchemist store function
        alchemistStoreBtn.addEventListener('click', () => {
          const buyConfirmation = document.getElementById('alchemist-store-confirmation-container');
          const confirmationTxt = document.getElementById('alchemy-store-confirmation-txt');
          const confirmationYesBtn = document.getElementById('confirm-yes-btn');
          const confirmationNoBtn = document.getElementById('confirm-no-btn');

          mapNav.style.display = 'none';
          townMap.style.display = 'none';
          alchemistStore.style.display = 'inline-block';
          let hpBtnsActive = false;
          let energyBtnsActive = false;
          let hpQuantity = parseInt(healthPotionQuantityInput.value);
          let eQuantity = parseInt(energyPotionQuantityInput.value);

   

    alchemistStoreBackBtn.addEventListener('click', () => {
        alchemistStore.style.display = 'none';
        mapNav.style.display = 'none';
        buyHealthPotionBtns.style.display = 'none'; //make sure the btns will also close
        buyEnergyPotionBtns.style.display = 'none'; //make sure the btns will also close
        townMap.style.display = 'inline-block';
    });

    hpCancelBtn.addEventListener('click', () => {
        buyHealthPotionBtns.style.display = 'none';
        healthPotionQuantityInput.value = 0;
    });

    energyCancelBtn.addEventListener('click', () => {
        buyEnergyPotionBtns.style.display = 'none';
        energyPotionQuantityInput.value = 0;
    });

    alchemyStoreNotifBckBtn.addEventListener('click', () => {
        alchemyStoreNotif.style.display = 'none';
        healthPotionQuantityInput.value = 0;
        energyPotionQuantityInput.value = 0;

        healthPotionConfirmBtn.disabled = false;
        hpCancelBtn.disabled = false;
        buyHealthPotionMinusBtn.disabled = false;
        buyHealthPotionPlusBtn.disabled = false;
        healthPotionQuantityInput.disabled = false;

        energyPotionConfirmBtn.disabled = false;
        energyCancelBtn.disabled = false;
        buyEnergyPotionMinusBtn.disabled = false;
        buyEnergyPotionPlusBtn.disabled = false;
        energyPotionQuantityInput.disabled = false;
    });

    // Event listener for "Buy Health Potion" button
    buyHealthPotionBtn.addEventListener('click', () => {
        if (energyBtnsActive) {
            buyEnergyPotionBtns.style.display = 'none';
            energyBtnsActive = false;
            energyPotionQuantityInput.value = 0;
            buyHealthPotionBtns.style.display = 'flex';
            hpBtnsActive = true;
        }else{
            buyHealthPotionBtns.style.display = 'flex';
            hpBtnsActive = true;
        }
        
    });

    // Event listener for minus button for adjusting quantity
    buyHealthPotionMinusBtn.addEventListener('click', () => {
       
        if (hpQuantity > 0) {
            hpQuantity--;
            healthPotionQuantityInput.value = hpQuantity;
        }
    });

    // Event listener for plus button for adjusting quantity
    buyHealthPotionPlusBtn.addEventListener('click', () => {
       
        hpQuantity ++;
        healthPotionQuantityInput.value = hpQuantity;
    });

    // Event listener for "Buy Energy Potion" button
    buyEnergyPotionBtn.addEventListener('click', () => {

        if (hpBtnsActive) {
            buyHealthPotionBtns.style.display = 'none';
            hpBtnsActive = false;
            healthPotionQuantityInput.value = 0;
            buyEnergyPotionBtns.style.display = 'flex';
             energyBtnsActive = true;
        }else{
            buyEnergyPotionBtns.style.display = 'flex';
             energyBtnsActive = true;
        }
        
    });

    // Event listener for minus button for adjusting quantity
    buyEnergyPotionMinusBtn.addEventListener('click', () => {
        
        if (eQuantity > 0) {
            eQuantity--;
            energyPotionQuantityInput.value = eQuantity;
        }
    });

    // Event listener for plus button for adjusting quantity
    buyEnergyPotionPlusBtn.addEventListener('click', () => {
        
        eQuantity++;
        energyPotionQuantityInput.value = eQuantity;
    });

    // Confirmation dialog function
    function showConfirmationDialog(quantity, potionType, potionCost, onConfirm) {
        buyConfirmation.style.display = 'inline-block';
        confirmationTxt.textContent = `Are you sure you want to buy ${quantity} ${potionType} Potion(s) for ${potionCost * quantity} gold?`;
               
                energyPotionConfirmBtn.disabled = true;
                energyCancelBtn.disabled = true;
                buyEnergyPotionMinusBtn.disabled = true;
                buyEnergyPotionPlusBtn.disabled = true;
                energyPotionQuantityInput.disabled = true;

        const confirmHandler = () => {
            buyConfirmation.style.display = 'none';
            confirmationYesBtn.removeEventListener('click', confirmHandler);
            confirmationNoBtn.removeEventListener('click', cancelHandler);
            energyPotionQuantityInput.value = 0;
            healthPotionQuantityInput.value = 0;
            onConfirm();
            updatePlayerStatsUI();
        };

        const cancelHandler = () => {
            buyConfirmation.style.display = 'none';
            confirmationYesBtn.removeEventListener('click', confirmHandler);
            confirmationNoBtn.removeEventListener('click', cancelHandler);
            energyPotionQuantityInput.value = 0;
            healthPotionQuantityInput.value = 0;
                
                energyPotionConfirmBtn.disabled = false;
                energyCancelBtn.disabled = false;
                buyEnergyPotionMinusBtn.disabled = false;
                buyEnergyPotionPlusBtn.disabled = false;
                energyPotionQuantityInput.disabled = false;
        };

        confirmationYesBtn.addEventListener('click', confirmHandler);
        confirmationNoBtn.addEventListener('click', cancelHandler);
        
    }

    // Event listener for "Confirm" button for buying health potion
        healthPotionConfirmBtn.addEventListener('click', () => {

            const healthPotionCost = items.healthPotion.itemCost;

            if (hpQuantity > 0) {

                if (playerGold >= healthPotionCost * hpQuantity) {
                    showConfirmationDialog(hpQuantity, 'Health', healthPotionCost, () => {
                        playerGold -= healthPotionCost * hpQuantity;
                        for (let i = 0; i < hpQuantity; i++) {
                            playerInv.push(items.healthPotion);
                        }
                        gold.textContent = playerGold;
                        alchemyStoreNotif.style.display = 'inline-block';
                        alchemyStoreNotifTxt.textContent = `You successfully bought ${hpQuantity} Health Potion(s)`;
                        buyHealthPotionBtns.style.display = 'none'; // Hide the quantity adjustment buttons
                        healthPotionQuantityInput.value = 0;
                    });
                } else {
                    alchemyStoreNotif.style.display = 'inline-block';
                    alchemyStoreNotifTxt.textContent = `You don't have enough gold to buy ${hpQuantity} Health Potion(s)`;
                    healthPotionQuantityInput.value = 0;
                    healthPotionConfirmBtn.disabled = true;
                    hpCancelBtn.disabled = true;
                    buyHealthPotionMinusBtn.disabled = true;
                    buyHealthPotionPlusBtn.disabled = true;
                    healthPotionQuantityInput.disabled = true;
                    }
                
            } else {
                alchemyStoreNotif.style.display = 'inline-block';
                alchemyStoreNotifTxt.textContent = 'Please enter a valid quantity.';
                healthPotionConfirmBtn.disabled = true;
                hpCancelBtn.disabled = true;
                buyHealthPotionMinusBtn.disabled = true;
                buyHealthPotionPlusBtn.disabled = true;
                healthPotionQuantityInput.disabled = true;
            }

            updatePlayerStatsUI();
        });

    // Event listener for "Confirm" button for buying energy potion
    energyPotionConfirmBtn.addEventListener('click', () => {
        const energyPotionCost = items.energyPotion.itemCost;

        if (eQuantity > 0) {
            if (playerGold >= energyPotionCost * eQuantity) {
                showConfirmationDialog(eQuantity, 'Energy', energyPotionCost, () => {
                    playerGold -= energyPotionCost * eQuantity;
                    for (let i = 0; i < eQuantity; i++) {
                        playerInv.push(items.energyPotion);
                    }
                    gold.textContent = playerGold;
                    alchemyStoreNotif.style.display = 'inline-block';
                    alchemyStoreNotifTxt.textContent = `You successfully bought ${eQuantity} Energy Potion(s)`;
                    buyEnergyPotionBtns.style.display = 'none'; // Hide the quantity adjustment buttons
                    energyPotionQuantityInput.value = 0;
                });
            } else {
                alchemyStoreNotif.style.display = 'inline-block';
                alchemyStoreNotifTxt.textContent = `You don't have enough gold to buy ${eQuantity} Energy Potion(s)`;
                energyPotionQuantityInput.value = 0;
                energyPotionConfirmBtn.disabled = true;
                energyCancelBtn.disabled = true;
                buyEnergyPotionMinusBtn.disabled = true;
                buyEnergyPotionPlusBtn.disabled = true;
                energyPotionQuantityInput.disabled = true;
            }
        } else {
            alchemyStoreNotif.style.display = 'inline-block';
            alchemyStoreNotifTxt.textContent = 'Please enter a valid quantity.';
            energyPotionConfirmBtn.disabled = true;
            energyCancelBtn.disabled = true;
            buyEnergyPotionMinusBtn.disabled = true;
            buyEnergyPotionPlusBtn.disabled = true;
            energyPotionQuantityInput.disabled = true;
        }
        updatePlayerStatsUI();
    });

    updatePlayerStatsUI();
});


          //blacksmith store function
          blacksmitStoreBtn.addEventListener('click',() => {

            mapNav.style.display = 'none';
            townMap.style.display = 'none';
            blacksmithStore.style.display = 'inline-block';

            blacksmithStoreBackBtn.addEventListener('click', () => {
              mapNav.style.display = 'none';
              townMap.style.display = 'inline-block';
              blacksmithStore.style.display = 'none';
              breastplateContainer.style.display = 'none';
            })

            blacksmithStoreNotifBckBtn.addEventListener('click', () => {
                  blacksmithStoreNotif.style.display = 'none';
              });
               

          
            const buyGreatHelm = () => {
          
                  const greatHelmCost = 70;

                  if (playerGold >= greatHelmCost) {

                      playerGold -= greatHelmCost;

                      blacksmithStoreNotif.style.display = 'inline-block';
                      playerArmorInv.push(armors.greatHelm);

                      gold.textContent = playerGold;

                      blacksmithStoreNotifTxt.textContent = 'You successfully bought Great Helm';

                      updatePlayerStatsUI();

                  } else {

                      blacksmithStoreNotif.style.display = 'inline-block';

                      blacksmithStoreNotifTxt.textContent = 'You don\'t have enough gold to buy Great Helm';

                  }
              }; 

            const buyShield = () => {
          
                  const shieldCost = 100;

                  if (playerGold >= shieldCost) {

                      playerGold -= shieldCost;

                      blacksmithStoreNotif.style.display = 'inline-block';
                      playerArmorInv.push(armors.shield);

                      gold.textContent = playerGold;

                      blacksmithStoreNotifTxt.textContent = 'You successfully bought a Shield';

                      updatePlayerStatsUI();

                  } else {

                      blacksmithStoreNotif.style.display = 'inline-block';

                      blacksmithStoreNotifTxt.textContent = 'You don\'t have enough gold to buy a Shield';

                  }
              };   

                  
                  buyBreastplateBtn.addEventListener('click', buyBreastplate);
                  buyGauntletBtn.addEventListener('click', buyGauntlet);
                  buyArmoredBootsBtn.addEventListener('click', buyArmoredBoots);
                  buyGreatHelmBtn.addEventListener('click', buyGreatHelm);
                  buyShieldBtn.addEventListener('click', buyShield);
              });

          //swordsmith store function
          swordsmithStoreBtn.addEventListener('click',() => {

            mapNav.style.display = 'none';
            townMap.style.display = 'none';
            swordsmithStore.style.display = 'inline-block';

            swordsmithStoreBackBtn.addEventListener('click', () => {
              mapNav.style.display = 'none';
              townMap.style.display = 'inline-block';
              swordsmithStore.style.display = 'none';
            })

            swordsmithStoreNotifBckBtn.addEventListener('click', () => {
                 swordsmithStoreNotif.style.display = 'none';
              });

          const buySword = () => {
          
                  const SwordCost = 40;

                  if (playerGold >= SwordCost) {

                      playerGold -= SwordCost;

                      swordsmithStoreNotif.style.display = 'inline-block';
                      playerWeaponInv.push(weapons.sword);

                      gold.textContent = playerGold;

                      swordsmithStoreNotifTxt.textContent = 'You successfully bought a Sword';

                      updatePlayerStatsUI();

                  } else {

                     swordsmithStoreNotif.style.display = 'inline-block';

                      swordsmithStoreNotifTxt.textContent = 'You don\'t have enough gold to buy a Sword';

                  }

                  console.log(playerWeaponInv);
                  
              };

           const buyDagger = () => {
          
                  const daggerCost = 60;

                  if (playerGold >= daggerCost) {

                      playerGold -= daggerCost;

                      swordsmithStoreNotif.style.display = 'inline-block';
                      playerWeaponInv.push(weapons.dagger);

                      gold.textContent = playerGold;

                      swordsmithStoreNotifTxt.textContent = 'You successfully bought a Dagger';

                      updatePlayerStatsUI();

                  } else {

                     swordsmithStoreNotif.style.display = 'inline-block';

                      swordsmithStoreNotifTxt.textContent = 'You don\'t have enough gold to buy a Dagger';

                  }
              };

            const buyCrossbow = () => {
          
                  const crossbowCost = 80;

                  if (playerGold >= crossbowCost) {

                      playerGold -= crossbowCost;

                      swordsmithStoreNotif.style.display = 'inline-block';
                      playerWeaponInv.push(weapons.crossbow);

                      gold.textContent = playerGold;

                      swordsmithStoreNotifTxt.textContent = 'You successfully bought a Crossbow';

                      updatePlayerStatsUI();

                  } else {

                     swordsmithStoreNotif.style.display = 'inline-block';

                      swordsmithStoreNotifTxt.textContent = 'You don\'t have enough gold to buy a Crossbow';

                  }
              };

            const buyKatana = () => {
          
                  const katanaCost = 100;

                  if (playerGold >= katanaCost) {

                      playerGold -= katanaCost;

                      swordsmithStoreNotif.style.display = 'inline-block';
                      playerWeaponInv.push(weapons.katana);

                      gold.textContent = playerGold;

                      swordsmithStoreNotifTxt.textContent = 'You successfully bought a Katana';

                      updatePlayerStatsUI();

                  } else {

                     swordsmithStoreNotif.style.display = 'inline-block';

                      swordsmithStoreNotifTxt.textContent = 'You don\'t have enough gold to buy a Katana';

                  }
              };  

            const buyNunchuks = () => {
          
                  const NunchuksCost = 120;

                  if (playerGold >= NunchuksCost) {

                      playerGold -= NunchuksCost;

                      swordsmithStoreNotif.style.display = 'inline-block';
                      playerWeaponInv.push(weapons.nunchuks);

                      gold.textContent = playerGold;

                      swordsmithStoreNotifTxt.textContent = 'You successfully bought a Nunchuks';

                      updatePlayerStatsUI();

                  } else {

                     swordsmithStoreNotif.style.display = 'inline-block';

                      swordsmithStoreNotifTxt.textContent = 'You don\'t have enough gold to buy a Nunchuks';

                  }
              };    

              buySwordBtn.addEventListener('click',buySword);
              buyDaggerBtn.addEventListener('click',buyDagger);
              buyCrossbowBtn.addEventListener('click',buyCrossbow);
              buyKatanaBtn.addEventListener('click',buyKatana);
              buyNunchuksBtn.addEventListener('click',buyNunchuks);
          });

          templeBtn.addEventListener('click', () => {
            mapNav.style.display = 'none';
            townMap.style.display = 'none';
            temple.style.display = 'inline-block';

            templeBackBtn.addEventListener('click', () => {
              mapNav.style.display = 'none';
              townMap.style.display = 'inline-block';
              temple.style.display = 'none';
            })
          })

          townBackBtn.addEventListener('click', () => {
              mapNav.style.display = 'inline-block';
              townMap.style.display = 'none';
              bootsContainer.style.display = 'none';
               
          })

          updatePlayerStatsUI();
        
      };

      //buy breastplate functions
       const buyBreastplate = () => {
                  breastplateContainer.style.display = 'flex';
                  gauntletContainer.style.display = 'none';
                  bootsContainer.style.display = 'none';
              };

              breastplateBuyBtn.addEventListener('click', () => {

                      showBsConfirmationDialog(armors.breastplate.armorName, armors.breastplate.armorCost, () => {
                          if (playerGold >= armors.breastplate.armorCost) {

                              playerGold -= armors.breastplate.armorCost;

                              blacksmithStoreNotif.style.display = 'inline-block';
                              playerArmorInv.push(armors.breastplate);

                              blacksmithStoreNotifTxt.textContent = 'You successfully bought a Breastplate';

                              updatePlayerStatsUI();
                          } else {
                              blacksmithStoreNotif.style.display = 'inline-block';
                              blacksmithStoreNotifTxt.textContent = 'You don\'t have enough gold to buy a Breastplate';
                          }
                      });
                  });

                  breastplateCancelBtn.addEventListener('click', () => {
                      breastplateContainer.style.display = 'none';
                  });

                  breastplateInfoBtn.addEventListener('click', () => {
                      breastplateInfoContainer.style.height = '100%';
                      breastplateInfoBtn.style.display = 'none';
                  });

                  breastplateCloseInfoBtn.addEventListener('click', () => {
                      breastplateInfoContainer.style.height = '0'; // Collapse info container
                      breastplateInfoBtn.style.display = 'inline-block';
                  });

      // buy gauntlet functions
       const buyGauntlet = () => {
               gauntletContainer.style.display = 'flex';
               breastplateContainer.style.display = 'none';
               bootsContainer.style.display = 'none';
              };

      gauntletBuyBtn.addEventListener('click', () => {

              showBsConfirmationDialog(armors.gauntlet.armorName, armors.gauntlet.armorCost, () => {
                  if (playerGold >= armors.gauntlet.armorCost) {
                      playerGold -= armors.gauntlet.armorCost;

                      blacksmithStoreNotif.style.display = 'inline-block';
                      playerArmorInv.push(armors.gauntlet);

                      blacksmithStoreNotifTxt.textContent = 'You successfully bought a Gauntlet';

                      updatePlayerStatsUI();
                  } else {
                      blacksmithStoreNotif.style.display = 'inline-block';
                      blacksmithStoreNotifTxt.textContent = 'You don\'t have enough gold to buy a Gauntlet';
                  }
              });
          });

            gauntletCancelBtn.addEventListener('click', () => {
                gauntletContainer.style.display = 'none';
            });

            gauntletInfoBtn.addEventListener('click', () => {
                gauntletInfoContainer.style.height = '100%';
                gauntletInfoBtn.style.display = 'none';
            });

            gauntletCloseInfoBtn.addEventListener('click', () => {
                gauntletInfoContainer.style.height = '0'; // Collapse info container
                gauntletInfoBtn.style.display = 'inline-block';
            });

      //armored boots functions

       const buyArmoredBoots = () => {
                gauntletContainer.style.display = 'none';
               breastplateContainer.style.display = 'none';
               bootsContainer.style.display = 'flex';
              };

      bootsBuyBtn.addEventListener('click', () => {

              showBsConfirmationDialog(armors.armoredBoots.armorName, armors.armoredBoots.armorCost, () => {
                  if (playerGold >= armors.armoredBoots.armorCost) {
                      playerGold -= armors.armoredBoots.armorCost;

                      blacksmithStoreNotif.style.display = 'inline-block';
                      playerArmorInv.push(armors.armoredBoots);

                      blacksmithStoreNotifTxt.textContent = 'You successfully bought a Armored Boots';

                      updatePlayerStatsUI();
                  } else {
                      blacksmithStoreNotif.style.display = 'inline-block';
                      blacksmithStoreNotifTxt.textContent = 'You don\'t have enough gold to buy a Armored Boots';
                  }
              });
          });

            bootsCancelBtn.addEventListener('click', () => {
                bootsContainer.style.display = 'none';
            });

            bootsInfoBtn.addEventListener('click', () => {
                bootsInfoContainer.style.height = '100%';
                bootsInfoBtn.style.display = 'none';
            });

            bootsCloseInfoBtn.addEventListener('click', () => {
                bootsInfoContainer.style.height = '0'; // Collapse info container
                bootsInfoBtn.style.display = 'inline-block';
            });
      
                    

      //confirmation functions
      function showBsConfirmationDialog(armorType, armorCost, onConfirm) {
                  bsBuyConfirmation.style.display = 'inline-block';
                  bsConfirmationTxt.textContent = `Are you sure you want to buy ${armorType} for ${armorCost} gold?`;
                        

                  const confirmHandler = () => {
                      bsBuyConfirmation.style.display = 'none';
                      bsConfirmationYesBtn.removeEventListener('click', confirmHandler);
                      bsConfirmationNoBtn.removeEventListener('click', cancelHandler);
                      onConfirm();
                  };

                  const cancelHandler = () => {
                      bsBuyConfirmation.style.display = 'none';
                      bsConfirmationYesBtn.removeEventListener('click', confirmHandler);
                      bsConfirmationNoBtn.removeEventListener('click', cancelHandler);
                  };

                  bsConfirmationYesBtn.addEventListener('click', confirmHandler);
                  bsConfirmationNoBtn.addEventListener('click', cancelHandler);
              }


      const townBtn = document.getElementById('town-btn').addEventListener('click',townBtnFunction);


