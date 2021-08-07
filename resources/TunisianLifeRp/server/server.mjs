import * as alt from 'alt';
import * as chat from 'chat';

const position = {
    x:-365.425,
    y:-131.809,
    z:37.873,
};

const weapons = [
    "dagger",
    "bat",
    "bottle",
    "crowbar",
    "flashlight",
    "golfclub",
    "hammer",
    "hatchet",
    "knuckle",
    "knife",
    "machete",
    "switchblade",
    "nightstick",
    "wrench",
    "battleaxe",
    "poolcue",
    "stone_hatchet",
    "pistol",
    "pistol_mk2",
    "combatpistol",
    "appistol",
    "stungun",
    "pistol50",
    "snspistol",
    "snspistol_mk2",
    "heavypistol",
    "vintagepistol",
    "flaregun",
    "marksmanpistol",
    "revolver",
    "revolver_mk2",
    "doubleaction",
    "raypistol",
    "microsmg",
    "smg",
    "smg_mk2",
    "assaultsmg",
    "combatpdw",
    "machinepistol",
    "minismg",
    "raycarbine",
    "pumpshotgun",
    "pumpshotgun_mk2",
    "sawnoffshotgun",
    "assaultshotgun",
    "bullpupshotgun",
    "musket",
    "heavyshotgun",
    "dbshotgun",
    "autoshotgun",
    "assaultrifle",
    "assaultrifle_mk2",
    "carbinerifle",
    "carbinerifle_mk2",
    "advancedrifle",
    "specialcarbine",
    "specialcarbine_mk2",
    "bullpuprifle",
    "bullpuprifle_mk2",
    "compactrifle",
    "mg",
    "combatmg",
    "combatmg_mk2",
    "gusenberg",
    "sniperrifle",
    "heavysniper",
    "heavysniper_mk2",
    "marksmanrifle",
    "marksmanrifle_mk2",
    "rpg",
    "grenadelauncher",
    "grenadelauncher_smoke",
    "minigun",
    "firework",
    "railgun",
    "hominglauncher",
    "compactlauncher",
    "rayminigun",
    "grenade",
    "bzgas",
    "smokegrenade",
    "flare",
    "molotov",
    "stickybomb",
    "proxmine",
    "snowball",
    "pipebomb",
    "ball",
  ];

const {x,y,z} = position;

alt.on('playerConnect', (player) => {
    player.model = "a_m_y_hipster_02";
    //putting player in position 
    player.spawn(x,y,z,0)
    alt.emitClient(player,'Hello')
});

alt.on('playerDeath', (player) =>{
    player.spawn(x,y,z,5000)
    alt.log(`${player} raw met hahaha`)

});

alt.onClient('Weslet',(player)=>{
    alt.log('jowna behi')
})


chat.registerCmd('skin',(player,arg)=>{
    if(!arg || arg.length <= 0){
        chat.send(player,'{FF0000} skin (valu)')
    };
    try{
        player.model = arg[0];
    }catch(err){
        chat.send(player,'that model was uncorrect')
    }
})

chat.registerCmd("weapon", (player, args) => {
    if (args.length === 0) {
      chat.send(player, "Usage: /weapon (modelName)");
      return;
    }
    player.giveWeapon(alt.hash(args[0]), 500, true);
});

/*chat.registerCmd("allweapons", (player, args) => 
    for (let weapon of weapons) {
      player.giveWeapon(alt.hash("weapon_" + weapon), 500, true);
    }
  });
*/
chat.registerCmd("allweapons",(player,arg)=>{
    weapons.map((weapon)=>{
        player.giveWeapon(alt.hash("weapon_"+weapon),500,true)
    })
})

chat.registerCmd("veh",(player,arg)=>{    
    if(!arg || arg.length <=0){
        chat.send(player,'{FF0000}veg (model)')
    }
    try{
        const veh = new alt.Vehicle(
            arg[0],
            player.pos.x,
            player.pos.y,
            player.pos.z,
            0,0,0);
            alt.emitClient(player,'veh:cmd', veh);
    }catch(err){
        chat.send(player,'{66FF33} error')
    }
})









