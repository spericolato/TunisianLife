import * as alt from 'alt';
import * as native from 'natives';

alt.onServer('Hello',()=>{
    alt.log('Nej7et')
})

alt.on('connectionComplete',()=>{
    alt.emitServer('Weslet')
})