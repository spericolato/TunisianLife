import * as alt from 'alt';
import * as native from 'natives';

alt.onServer('Hello',()=>{
    alt.log('Nej7et')
})

alt.on('connectionComplete',()=>{
    alt.emitServer('Weslet')
})

alt.onServer('veh:cmd',(veh)=>{
    const localPlayer = alt.Player.local.scriptID;
    alt.setTimeout(() => {
        native.setPedIntoVehicle(localPlayer, veh.scriptID, -1);
    }, 300);
})