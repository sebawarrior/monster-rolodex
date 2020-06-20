import React from 'react'
import './card-list.component.css'
import CardMediaNew from '../card/card.component'

export const CardList = (props) => { //Este es un function component
    //Antes del return puedo escribir código javascript
    return(
        <div className="card-list-container">
            <div className="card-list">  
                {props.monsters.map(mon => (<CardMediaNew className='root' monster={mon} key={mon.id}><p key={mon.id}> {mon.name} </p></CardMediaNew>))}
            </div> 
        </div>
    )
};