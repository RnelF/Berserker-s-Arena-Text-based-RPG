
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
    armorDef: 25
  },
  geatHelm: {
    armorDef: 15,
    armorLuck: 10
  },
  shield: {
    armorDef:30
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

				if (playerCurrentWeapon !== undefined) {
					// Add weapon damage if a weapon is equipped
					totalPlayerStr += weapons[playerCurrentWeapon].weaponDmg;
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
      
			const healthPotionIndex = playerInv.indexOf('health_potion');
			
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
      
			const energyPotionIndex = playerInv.indexOf('energy_potion');
			if (energyPotionIndex !== -1) {
				
				playerEnergy += energyPotionRestoreAmount;

				// Remove the energy potion from player's inventory
				playerInv.splice(energyPotionIndex, 1);
				updatePlayerStatsUI();

        appendUseEnergyFightStory(`You used Energy potion and Regenerated ${energyPotionRestoreAmount} Energy`);

        fightStory.appendChild(useEPotion);
				
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
      
        inventoryContainer.innerHTML = '';

        if(playerInv.length === 0){
            inventoryContainer.style.display = 'block';
            inventoryContainer.textContent = 'There is no item in your inventory';
        }else{
            // Show the inventory UI
            inventoryContainer.style.display = 'block';

            playerInv.forEach(item => {
            // Create a container for the item and the button
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('item-container');

            // Create a new paragraph element to display the item
            const itemElement = document.createElement('p');
            itemElement.textContent = item;


            // Create a button to use the item
            const itemBtn = document.createElement('button');
            itemBtn.innerHTML = 'Use Item';

            // Add an event listener to the button
            itemBtn.addEventListener('click', () => {
                if (item === 'health_potion') {

                    useHealthPotion();
                    itemContainer.style.display = 'none';
                    itemElement.style.display = 'none';
                    itemBtn.style.display = 'none';

                } else if (item === 'energy_potion') {

                    useEnergyPotion();
                    itemContainer.style.display = 'none';
                    itemElement.style.display = 'none';
                    itemBtn.style.display = 'none';
                }
            });

                    

            // Append the item element and button to the container
            itemContainer.appendChild(itemElement);
            itemContainer.appendChild(itemBtn);

            // Append the item container to the inventory container
            inventoryContainer.appendChild(itemContainer);
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

    const swordsmithStoreNotif = document.getElementById('swordsmith-store-notif-container');
    const swordsmithStoreNotifTxt = document.getElementById('swordsmith-store-notif');
    const swordsmithStoreNotifBckBtn = document.getElementById('swordsmith-store-notif-bck-btn');

    const buySwordBtn = document.getElementById('buy-sword');
    const buyDaggerBtn = document.getElementById('buy-dagger');
    const buyCrossbowBtn = document.getElementById('buy-crossbow');
    const buyKatanaBtn = document.getElementById('buy-katana');
    const buyNunchuksBtn = document.getElementById('buy-nunchuks');

    const townBackBtn = document.getElementById('town-back-btn');


      const townBtnFunction = () => {

        mapNav.style.display = 'none';
        townMap.style.display = 'inline-block';

        //alchemist store function
        alchemistStoreBtn.addEventListener('click',() => {

              mapNav.style.display = 'none';
              townMap.style.display = 'none';
              alchemistStore.style.display = 'inline-block';

               let quantity = parseInt(healthPotionQuantityInput.value);

              alchemistStoreBackBtn.addEventListener('click',() => {

                  alchemistStore.style.display = 'none';
                  mapNav.style.display = 'none';
                  townMap.style.display = 'inline-block';   

              });

              hpCancelBtn.addEventListener('click', () => {
                buyHealthPotionBtns.style.display = 'none';
                healthPotionQuantityInput.value = 0;
              });

              energyCancelBtn.addEventListener('click', () => {
                buyEnergyPotionBtns.style.display = 'none';
                energyPotionQuantityInput.value = 0;

              })

              alchemyStoreNotifBckBtn.addEventListener('click', () => {
                  alchemyStoreNotif.style.display = 'none';
                  healthPotionQuantityInput.value = 0;
              });

             

            
              // Event listener for "Buy Health Potion" button
            buyHealthPotionBtn.addEventListener('click', () => {
                buyHealthPotionBtns.style.display = 'block'; // Display the buttons for adjusting quantity
            });

            
          // Event listener for "Confirm" button for buying health potion
            healthPotionConfirmBtn.addEventListener('click', () => {
                const healthPotionCost = 10;
                

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
                        healthPotionQuantityInput.value = 0;
                    } else {
                        alchemyStoreNotif.style.display = 'inline-block';
                        alchemyStoreNotifTxt.textContent = 'You don\'t have enough gold to buy ' + quantity + ' Health Potion(s)';
                        healthPotionQuantityInput.value = 0;
                    }
                } else {
                    alchemyStoreNotif.style.display = 'inline-block';
                    alchemyStoreNotifTxt.textContent = 'Please enter a valid quantity.';
                }
            });



            // Event listener for minus button for adjusting quantity
            buyHealthPotionMinusBtn.addEventListener('click', () => {
                
                if (quantity > 0) {
                    quantity--;
                    healthPotionQuantityInput.value = quantity;
                }
            });

            // Event listener for plus button for adjusting quantity
            buyHealthPotionPlusBtn.addEventListener('click', () => {
                
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
                        energyPotionQuantityInput.value = 0;
                        
                    } else {
                        alchemyStoreNotif.style.display = 'inline-block';
                        alchemyStoreNotifTxt.textContent = 'You don\'t have enough gold to buy ' + quantity + ' Energy Potion(s)';
                        energyPotionQuantityInput.value = 0;
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

          //blacksmith store function
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

            const buyGauntlet = () => {
          
                  const gauntletCost = 70;

                  if (playerGold >= gauntletCost) {

                      playerGold -= gauntletCost;

                      blacksmithStoreNotif.style.display = 'inline-block';
                      playerArmorInv.gauntlet = armors.gauntlet;

                      gold.textContent = playerGold;

                      blacksmithStoreNotifTxt.textContent = 'You successfully bought a Gauntlet';

                      updatePlayerStatsUI();

                  } else {

                      blacksmithStoreNotif.style.display = 'inline-block';

                      blacksmithStoreNotifTxt.textContent = 'You don\'t have enough gold to buy a Gauntlet';

                  }
              };

            const buyArmoredBoots = () => {
          
                  const armoredBootsCost = 70;

                  if (playerGold >= armoredBootsCost) {

                      playerGold -= armoredBootsCost;

                      blacksmithStoreNotif.style.display = 'inline-block';
                      playerArmorInv.armoredBoots = armors.armoredBoots;

                      gold.textContent = playerGold;

                      blacksmithStoreNotifTxt.textContent = 'You successfully bought Armored Boots';

                      updatePlayerStatsUI();

                  } else {

                      blacksmithStoreNotif.style.display = 'inline-block';

                      blacksmithStoreNotifTxt.textContent = 'You don\'t have enough gold to buy Armored Boots';

                  }
              };

            const buyGreatHelm = () => {
          
                  const greatHelmCost = 70;

                  if (playerGold >= greatHelmCost) {

                      playerGold -= greatHelmCost;

                      blacksmithStoreNotif.style.display = 'inline-block';
                      playerArmorInv.greatHelm = armors.greatHelm;

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
                      playerArmorInv.shield = armors.shield;

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
                      playerWeaponInv.sword = weapons.sword;

                      gold.textContent = playerGold;

                      swordsmithStoreNotifTxt.textContent = 'You successfully bought a Sword';

                      updatePlayerStatsUI();

                  } else {

                     swordsmithStoreNotif.style.display = 'inline-block';

                      swordsmithStoreNotifTxt.textContent = 'You don\'t have enough gold to buy a Sword';

                  }
              };

           const buyDagger = () => {
          
                  const daggerCost = 60;

                  if (playerGold >= daggerCost) {

                      playerGold -= daggerCost;

                      swordsmithStoreNotif.style.display = 'inline-block';
                      playerWeaponInv.dagger = weapons.dagger;

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
                      playerWeaponInv.crossbow = weapons.crossbow;

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
                      playerWeaponInv.katana = weapons.katana;

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
                      playerWeaponInv.nunchuks = weapons.nunchuks;

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

          townBackBtn.addEventListener('click', () => {
              mapNav.style.display = 'inline-block';
              townMap.style.display = 'none';
          })
        
      };


      const townBtn = document.getElementById('town-btn').addEventListener('click',townBtnFunction);


