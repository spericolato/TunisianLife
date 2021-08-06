import * as alt from 'alt';
import * as chat from 'chat';

alt.on('playerConnect', (player) => {
    player.model = "a_m_y_hipster_02";
    //putting player in position 

    const position = {
        x:-365.425,
        y:-131.809,
        z:37.873,
    };

    const {x,y,z} = position;

    player.spawn(x,y,z,0)
    alt.emitClient(player,'Hello')
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


