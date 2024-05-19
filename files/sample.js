let playerLvl = 1;
let playerXp = 0;
let playerHealth = 100;
let playerGold = 50;

const requiredExpToLvlUp = 30;
     

let playerStr = 10;
let playerAgi = 10;
let playerDef = 30;
let playerLuck = 30;
let playerEnergy = 100;

let playerInv = [];
let playerWeaponInv = [];
let playerArmorInv = {};

let playerCurrentWeapon = playerWeaponInv[0];

const healthPotionHealAmount = 50;
const energyPotionRestoreAmount = 20;


const notifications = document.getElementById('notifications');
const notifContainer = document.getElementById('notif-container');
const mapNav = document.getElementById('map-nav');
const monsterStats = document.getElementById('monster-stats');
const monsterImg = document.getElementById('monster-img');


const weapons = {
  sword: {
    weaponDmg: 6
  },
  dagger: {
    weaponDmg: 8
  },
  crossbow: {
    weaponDmg: 7
  },
  katana: {
    weaponDmg: 10,
  },
  nunchuks: {
    weaponDmg: 8
  },
};

const armors = {
  breastplate: {
    armorDef: 15
  },
  gauntlet: {
    armorDef: 10,
    armorLuck: 10
  },
  armoredBoots: {
    armorDef: 15
  },
  geatHelm: {
    armorDef: 15,
    armorLuck: 10
  },
  shield: {
    armorDef:30
  }
};

const darkValleymonstersList = [
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
    chanceToFlee: 30
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
    monsterSkills: {
      bite: {
        skillDmg: 5,
        skillEnergyConsumption: 5
      }
    },
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
    monsterSkills: {
      slash: {
        skillDmg: 7,
        skillEnergyConsumption: 6
      }
    },
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
    monsterSkills: {
      bite: {
        skillDmg: 8,
        skillEnergyConsumption: 10
      },
      clawStrike: {
        skillDmg: 10,
        skillEnergyConsumption: 15
      }
    },
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
    monsterSkills: {
      bite: {
        skillDmg: 10,
        skillEnergyConsumption: 15
      },
      clawStrike: {
        skillDmg: 13,
        skillEnergyConsumption: 17
      }
    },
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
    monsterSkills: {
      bite: {
        skillDmg: 15,
        skillEnergyConsumption: 17
      },
      clawGrab: {
        skillDmg: 20,
        skillEnergyConsumption: 20
      },
      clawStrike: {
        skillDmg: 25,
        skillEnergyConsumption: 25
      }
    },
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
    monsterSkills: {
      peck: {
        skillDmg: 15,
        skillEnergyConsumption: 5
      },
      poopBomb: {
        skillDmg: 25,
        skillEnergyConsumption: 20
      },
      deathDive: {
        skillDmg: 40,
        skillEnergyConsumption: 30
      }
    },
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
    monsterEnergy: 90,
    monsterSkills: {
      tailWhip: {
        skillDmg: 25,
        skillEnergyConsumption: 20
      },
      stomp: {
        skillDmg: 40,
        skillEnergyConsumption: 25
      },
      stun: {
        skillDmg: 15,
        skillEnergyConsumption: 30,
        playerSkipTurn: true
      }
    },
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
    monsterEnergy: 100,
    monsterSkills: {
      earthSmash: {
        skillDmg: 40,
        skillEnergyConsumption: 20,
        playerSkipTurn: true
      },
      stomp: {
        skillDmg: 40,
        skillEnergyConsumption: 25
      },
      stun: {
        skillDmg: 50,
        skillEnergyConsumption: 30,
        playerSkipTurn: true
      },
      scaleHardening: {
        buff: true,
        skillEnergyConsumption:20
      },
      suplex: {
        skillDmg: 100,
        skillEnergyConsumption: 70
      }

    },
    monsterImg: '../images/monsters/valley-monsters/Lizardo.jpg'
  }
];

// Function to handle fighting valley monsters

const fightMonsterBtn = document.getElementById('fight-monster-btn');
const fleeMonsterBtn = document.getElementById('flee-monster-btn');

const fleeNotif = document.getElementById('valley-map-notif');
const fleeConfirmBtn = document.getElementById('valley-map-notif-btn');
const fightStory = document.getElementById('fight-story');

const fightingDisplay = document.getElementById('fighting-display-container');
const fightingConfirmBtn = document.getElementById('fighting-confirm-btn');


let selectedMonster = null;

const deepCopyMonster = (monster) => {
  return JSON.parse(JSON.stringify(monster));
};

const monsterRandomPicker = () => {
  let minLevel = 1; // Minimum monster level
  let maxLevel = Math.min(playerLvl + 1, valleyMonstersList.length); // Maximum monster level based on player's level

  // Filter monsters based on the level range
  let availableMonsters = valleyMonstersList.filter(monster => monster.monsterLevel >= minLevel && monster.monsterLevel <= maxLevel);

  // Randomly select a monster from the available monsters
  let randomIndex = Math.floor(Math.random() * availableMonsters.length);
  return deepCopyMonster(availableMonsters[randomIndex]); // Return a deep copy of the selected monster
};




//Fighting Monster Functions
// Function to update monster stats on the UI
const updateMonsterStatsUI = (monster) => {
  const monsterName = document.getElementById('monsterName');
  const monsterHealth = document.getElementById('monsterHealth');
  const monsterLevel = document.getElementById('monsterLevel');
  const monsterImage = document.getElementById('monster-img');

  const fightingMonsterName = document.getElementById('fighting-monster-name');
  const fightingMonsterHealth = document.getElementById('fighting-monster-health');
  const fightingMonsterLevel = document.getElementById('fighting-monster-level');
  const fightingMonsterImg = document.getElementById('fighting-monster-img');
  const fightingMonsterEnergy = document.getElementById('fighting-monster-energy');

  monsterName.textContent = monster.name;
  monsterHealth.textContent = monster.health;
  monsterLevel.textContent = monster.monsterLevel;

  fightingMonsterName.textContent = monster.name;
  fightingMonsterHealth.textContent = monster.health;
  fightingMonsterLevel.textContent = monster.monsterLevel;
  fightingMonsterEnergy.textContent = monster.monsterEnergy;

  // Set the monster image src
  monsterImage.src = monster.monsterImg;
  fightingMonsterImg.src = monster.monsterImg;
};

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

		  const fightingPlayerHealth = document.getElementById('player-health');
		  const fightingPlayerLevel = document.getElementById('player-level');
		  const fightingPlayerEnergy = document.getElementById('player-energy');

		  fightingPlayerHealth.textContent = playerHealth; // Update with player's health during fight
		  fightingPlayerLevel.textContent = playerLvl; // Update with player's level during fight
		  fightingPlayerEnergy.textContent = playerEnergy; // Update with player's energy during fight
		};

    const resetFightStory = () => {
          fightStory.textContent = `You are fighting ${selectedMonster.name}\n`;
    };

    const resetPlayerHealth = () => {
      
        playerHealth = 50;
      
    };



const valleyMonstersFightFunction = () => {
  monsterStats.style.display = 'inline-block';
  mapNav.style.display = 'none';
  valleyMap.style.display = 'none';
  valleyMapInner.style.display = 'none';

  selectedMonster = monsterRandomPicker();
  updateMonsterStatsUI(selectedMonster);
  resetFightStory();
  fightingConfirmBtn.style.display = "none";


		// Function to calculate player damage
			const calculatePlayerDamage = (playerStr, playerAgi, playerCurrentWeapon, monsterDef) => {
				let totalPlayerStr = playerStr;
				let totalPlayerAgi = playerAgi;

				if (playerCurrentWeapon !== undefined) {
					// Add weapon damage if a weapon is equipped
					totalPlayerStr += weapons[playerCurrentWeapon].weaponDmg;
				}

				// Generate a random number to determine the divisor for playerStr and playerAgi
				const strDivisor = Math.random() < 0.5 ? 2 : 3;
				const agiDivisor = Math.random() < 0.5 ? 2 : 3;

				// Calculate player damage considering monster defense
				return parseInt((totalPlayerStr / strDivisor) + (totalPlayerAgi / agiDivisor) - (monsterDef / 4));
			};

			// Function to calculate monster damage
			const calculateMonsterDamage = (monsterStr, monsterAgi, playerDef) => {
				// Generate a random number to determine the divisor for monsterStr and monsterAgi
				const strDivisor = Math.random() < 0.5 ? 2 : 3;
				const agiDivisor = Math.random() < 0.5 ? 2 : 3;

				// Calculate monster damage considering player defense
				return parseInt((monsterStr / strDivisor) + (monsterAgi / agiDivisor) - (playerDef / 4));
			};

		// Function to check evasion
		const checkEvasion = (agility, luck) => {
		  const evasionChance = Math.random() * 100;
		  return evasionChance < (agility + luck) / 2; // Adjust as needed based on your game mechanics
		};
		
		const disableAllButtons = () => {
			const buttons = document.querySelectorAll('#fighting-btns-container button');
			buttons.forEach(button => {
				button.disabled = true;
			});
		};

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
      const monsterFightNotif = document.getElementById('monster-fight-notif').textContent = 'You failed to flee!';
      fleeMonsterBtn.style.display = 'none';
    }
  });

		  fightMonsterBtn.addEventListener('click', () => {
			// Handle initiating the fight
			monsterStats.style.display = 'none';
			fightingDisplay.style.display = 'inline-block';
      const buttons = document.querySelectorAll('#fighting-btns-container button');
			buttons.forEach(button => {
				button.disabled = false;
			});

      document.getElementById('fight-story').textContent += `You are fighting ${selectedMonster.name}`;

      resetFightStory();
			// You can use selectedMonster here if needed
		  });
		  

    
		
		const useHealthPotion = () => {
			const healthPotionIndex = playerInv.indexOf('health_potion');
			
			if (healthPotionIndex !== -1) {
				// Assuming using a health potion increases player's health by a certain amount
				playerHealth += healthPotionHealAmount;
				// Remove the health potion from player's inventory
				playerInv.splice(healthPotionIndex, 1);
				updatePlayerStatsUI();
				fightStory.textContent += `You used HP potion and Regenerated ${healthPotionHealAmount} HP`;
				// Update UI or any other relevant game logic
			} else {
				// Handle the case where the player does not have any health potions
				console.log("You don't have any health potions.");
			}
		};

		// Function to use an energy potion
		const useEnergyPotion = () => {
			const energyPotionIndex = playerInv.indexOf('energy_potion');
			if (energyPotionIndex !== -1) {
				// Assuming using an energy potion restores player's energy by a certain amount
				playerEnergy += energyPotionRestoreAmount;
				// Remove the energy potion from player's inventory
				playerInv.splice(energyPotionIndex, 1);
				updatePlayerStatsUI();
				// Update UI or any other relevant game logic
			} else {
				// Handle the case where the player does not have any energy potions
				console.log("You don't have any energy potions.");
			}
		};

		// Function to handle the fight between player and monster
		const fight = () => {
  // Calculate player damage
  const playerDamage = calculatePlayerDamage(playerStr, playerAgi, playerCurrentWeapon, selectedMonster.monsterDef);

  // Calculate monster damage
  const monsterDamage = calculateMonsterDamage(selectedMonster.monsterStr, selectedMonster.monsterAgi, playerDef);

  // Check evasion for player and monster
  const playerEvade = checkEvasion(playerAgi, playerLuck);
  const monsterEvade = checkEvasion(selectedMonster.monsterAgi, selectedMonster.monsterLuck);

  // Update UI with fight results
  if (playerEvade) {
    // Player evaded the attack
    fightStory.textContent += "Player evaded the attack!\n";
  } else {
    // Player got hit
    playerHealth -= monsterDamage;
    fightStory.textContent += `Monster hit the player for ${monsterDamage} damage!\n`;
  }

  if (monsterEvade) {
    // Monster evaded the attack
    fightStory.textContent += "Monster evaded the attack!\n";
  } else {
    // Monster got hit
    selectedMonster.health -= playerDamage;
   fightStory.textContent += `Player hit the monster for ${playerDamage} damage!\n`;
  }

  // Update UI with current health of player and monster
  document.getElementById('player-health').textContent = playerHealth;
  document.getElementById('fighting-monster-health').textContent = selectedMonster.health;

  // Check if player or monster is defeated
  if (playerHealth <= 0) {
    // Player is defeated
    fightStory.textContent += "Player is defeated!\n";
    disableAllButtons();
    resetPlayerHealth();
    
    fightingConfirmBtn.style.display = "inline-block";

    fightingConfirmBtn.addEventListener('click', () => {
      valleyMapInner.style.display = 'inline-block';
      fightingDisplay.style.display = 'none';
      
    });



  } else if (selectedMonster.health <= 0) {
    // Monster is defeated
    fightStory.textContent += `Monster ${selectedMonster.name} is defeated!\n`;
    fightStory.textContent += `You have gained ${selectedMonster.monsterGoldReward} gold and ${selectedMonster.monsterExpReward} exp from defeating ${selectedMonster.name}`;

    disableAllButtons();
    
    fightingConfirmBtn.style.display = "inline-block";

    // Update player stats with rewards
    playerGold += selectedMonster.monsterGoldReward;
    playerXp += selectedMonster.monsterExpReward;

    fightingConfirmBtn.addEventListener('click', () => {
      valleyMapInner.style.display = 'inline-block';
      fightingDisplay.style.display = 'none';
      
    });

    

  } else {
    // Neither player nor monster is defeated, continue the fight
    // You can add more game logic here like additional rounds of combat
  }

  // Attach event listeners to health and energy potion buttons
  const useHPPotionBtn = document.getElementById('use-hpotion-btn');
  useHPPotionBtn.addEventListener('click', useHealthPotion);

  const useEnergyPotionBtn = document.getElementById('use-epotion-btn');
  useEnergyPotionBtn.addEventListener('click', useEnergyPotion);

  // Update player stats UI
  updatePlayerStatsUI();
};


		
		
		
		

		// Event listener for basic attack button
		const basicAttackBtn = document.getElementById('basic-attack-btn');
		basicAttackBtn.addEventListener('click', fight);
		
		// Update monster stats on the UI
		  updateMonsterStatsUI(selectedMonster);
		  updatePlayerStatsUI();

};

// check inventory function
// Define the event listener for the "check-inv" button
const checkInventoryBtn = document.getElementById('check-inv');
const inventoryContainer = document.getElementById('inventory-container');

const toggleInventoryUI = () => {
    // Check if the inventory container is displayed
    if (window.getComputedStyle(inventoryContainer).display !== 'none') {
        // If it's displayed, hide it
        inventoryContainer.style.display = 'none';
        checkInventoryBtn.textContent = 'Check Inventory'; // Change button text back
    } else {
        // If it's not displayed, show it
        displayInventoryUI();
        checkInventoryBtn.textContent = 'Close Inventory'; // Change button text
    }
};



// Function to display the inventory UI
    const displayInventoryUI = () => {
        // Assuming you have a div element with the ID "inventory-container" to display the inventory UI

        inventoryContainer.innerHTML = '';

        if(playerInv.length === 0){
            inventoryContainer.style.display = 'block';
            inventoryContainer.textContent = 'There is no item in your inventory';
        }else{
            // Show the inventory UI
            inventoryContainer.style.display = 'block';

            playerInv.forEach(item => {
                // Create a new paragraph element to display the item
                const itemElement = document.createElement('p');
                itemElement.textContent = item; // Assuming each item is a string

                // Append the item element to the inventory container
                inventoryContainer.appendChild(itemElement);
          
        });
        }
    };

    checkInventoryBtn.addEventListener('click', () => {
        toggleInventoryUI();
    });




/* Dark Valley Map Functions*/

const darkValleyBtn = document.getElementById('dark-valley-btn').addEventListener('click', () => {
  if(playerLvl < 5){
    notifContainer.style.display = 'block';
    notifications.textContent = `You can't go here, you're too weak, required Level 5`;
    backButton();
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

    valleyGoGrasslandBtn.addEventListener('click',valleyMonstersFightFunction);

    
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


const blacksmitStoreBtn = document.getElementById('blacksmith-store-btn');
const blacksmithStore = document.getElementById('blacksmith-store');
const blacksmithStoreBackBtn = document.getElementById('blacksmith-store-back-btn');
const blacksmithStoreNotif = document.getElementById('blacksmith-store-notif-container');
const blacksmithStoreNotifTxt = document.getElementById('blacksmith-store-notif');
const blacksmithStoreNotifBckBtn = document.getElementById('blacksmith-store-notif-bck-btn');
const buyBreastplateBtn = document.getElementById('buy-breastplate');
const buyGauntletBtn = document.getElementById('buy-gauntlet');
const buyArmoredBootsBtn = document.getElementById('buy-armored-boots');
const buyGreatHelmBtn = document.getElementById('buy-great-helm');
const buyShieldBtn = document.getElementById('buy-shield');

const swordsmithStoreBtn = document.getElementById('swordsmith-store-btn');
const swordsmithStore = document.getElementById('swordsmith-store');
const swordsmithStoreBackBtn = document.getElementById('swordsmith-store-back-btn');

const townBackBtn = document.getElementById('town-back-btn');


const townBtnFunction = () => {

  mapNav.style.display = 'none';
  townMap.style.display = 'inline-block';

  alchemistStoreBtn.addEventListener('click',() => {

        mapNav.style.display = 'none';
        townMap.style.display = 'none';
        alchemistStore.style.display = 'inline-block';

         alchemistStoreBackBtn.addEventListener('click',() => {

            alchemistStore.style.display = 'none';
            mapNav.style.display = 'none';
            townMap.style.display = 'inline-block';   

        });

        hpCancelBtn.addEventListener('click', () => {
          buyHealthPotionBtns.style.display = 'none';
        });

        energyCancelBtn.addEventListener('click', () => {
          buyEnergyPotionBtns.style.display = 'none';
        })

        alchemyStoreNotifBckBtn.addEventListener('click', () => {
            alchemyStoreNotif.style.display = 'none';
        });

       
        // Event listener for "Buy Health Potion" button
      buyHealthPotionBtn.addEventListener('click', () => {
          buyHealthPotionBtns.style.display = 'block'; // Display the buttons for adjusting quantity
      });

      
     // Event listener for "Confirm" button for buying health potion
      healthPotionConfirmBtn.addEventListener('click', () => {
          const healthPotionCost = 10;
          const quantity = parseInt(healthPotionQuantityInput.value);

          if (quantity > 0) {
              if (playerGold >= healthPotionCost * quantity) {
                  playerGold -= healthPotionCost * quantity;
                  for (let i = 0; i < quantity; i++) {
                      playerInv.push('health_potion');
                  }
                  gold.textContent = playerGold;
                  alchemyStoreNotif.style.display = 'inline-block';
                  alchemyStoreNotifTxt.textContent = 'You successfully bought ' + quantity + ' Health Potion(s)';
                  buyHealthPotionBtns.style.display = 'none'; // Hide the quantity adjustment buttons
                  buyEnergyPotionBtns.style.display = 'none'; // Hide the quantity adjustment buttons for energy potion
              } else {
                  alchemyStoreNotif.style.display = 'inline-block';
                  alchemyStoreNotifTxt.textContent = 'You don\'t have enough gold to buy ' + quantity + ' Health Potion(s)';
              }
          } else {
              alchemyStoreNotif.style.display = 'inline-block';
              alchemyStoreNotifTxt.textContent = 'Please enter a valid quantity.';
          }
      });



      // Event listener for minus button for adjusting quantity
      buyHealthPotionMinusBtn.addEventListener('click', () => {
          let quantity = parseInt(healthPotionQuantityInput.value);
          if (quantity > 0) {
              quantity--;
              healthPotionQuantityInput.value = quantity;
          }
      });

      // Event listener for plus button for adjusting quantity
      buyHealthPotionPlusBtn.addEventListener('click', () => {
          let quantity = parseInt(healthPotionQuantityInput.value);
          quantity++;
          healthPotionQuantityInput.value = quantity;
      });




        // Event listener for "Buy Energy Potion" button
      buyEnergyPotionBtn.addEventListener('click', () => {
          buyEnergyPotionBtns.style.display = 'block'; // Display the buttons for adjusting quantity
      });

      
     // Event listener for "Confirm" button for buying health potion
      energyPotionConfirmBtn.addEventListener('click', () => {
          const energyPotionCost = 10;
          const quantity = parseInt(energyPotionQuantityInput.value);

          if (quantity > 0) {
              if (playerGold >= energyPotionCost * quantity) {
                  playerGold -= energyPotionCost * quantity;
                  for (let i = 0; i < quantity; i++) {
                      playerInv.push('energy_potion');
                  }
                  gold.textContent = playerGold;
                  alchemyStoreNotif.style.display = 'inline-block';
                  alchemyStoreNotifTxt.textContent = 'You successfully bought ' + quantity + ' Energy Potion(s)';
                  buyEnergyPotionBtns.style.display = 'none'; // Hide the quantity adjustment buttons
                  
              } else {
                  alchemyStoreNotif.style.display = 'inline-block';
                  alchemyStoreNotifTxt.textContent = 'You don\'t have enough gold to buy ' + quantity + ' Energy Potion(s)';
              }
          } else {
              alchemyStoreNotif.style.display = 'inline-block';
              alchemyStoreNotifTxt.textContent = 'Please enter a valid quantity.';
          }
      });



      // Event listener for minus button for adjusting quantity
      buyEnergyPotionMinusBtn.addEventListener('click', () => {
          let quantity = parseInt(energyPotionQuantityInput.value);
          if (quantity > 0) {
              quantity--;
              energyPotionQuantityInput.value = quantity;
          }
      });

      // Event listener for plus button for adjusting quantity
      buyEnergyPotionPlusBtn.addEventListener('click', () => {
          let quantity = parseInt(energyPotionQuantityInput.value);
          quantity++;
          energyPotionQuantityInput.value = quantity;
      });

    });

    blacksmitStoreBtn.addEventListener('click',() => {

      mapNav.style.display = 'none';
      townMap.style.display = 'none';
      blacksmithStore.style.display = 'inline-block';

      blacksmithStoreBackBtn.addEventListener('click', () => {
        mapNav.style.display = 'none';
        townMap.style.display = 'inline-block';
        blacksmithStore.style.display = 'none';
      })

      blacksmithStoreNotifBckBtn.addEventListener('click', () => {
            blacksmithStoreNotif.style.display = 'none';
        });

      const buyBreastplate = () => {
    
            const breastplateCost = 30;

            if (playerGold >= breastplateCost) {

                playerGold -= breastplateCost;

                blacksmithStoreNotif.style.display = 'inline-block';
                playerArmorInv.breastplate = armors.breastplate;

                gold.textContent = playerGold;

                blacksmithStoreNotifTxt.textContent = 'You successfully bought a Breastplate';

                updatePlayerStatsUI();

            } else {

                blacksmithStoreNotif.style.display = 'inline-block';

                blacksmithStoreNotifTxt.textContent = 'You don\'t have enough gold to buy a Breastplate';

            }
        };
        
        buyBreastplateBtn.addEventListener('click', buyBreastplate);

    });

    swordsmithStoreBtn.addEventListener('click',() => {

      mapNav.style.display = 'none';
      townMap.style.display = 'none';
      swordsmithStore.style.display = 'inline-block';

      swordsmithStoreBackBtn.addEventListener('click', () => {
        mapNav.style.display = 'none';
      townMap.style.display = 'inline-block';
      swordsmithStore.style.display = 'none';
      })
    });

    townBackBtn.addEventListener('click', () => {
        mapNav.style.display = 'inline-block';
        townMap.style.display = 'none';
    })
  
};


const townBtn = document.getElementById('town-btn').addEventListener('click',townBtnFunction);


 if(playerXp >= requiredExpToLvlUp){
          playerLvl++;
          requiredExpToLvlUp + 30;
      }