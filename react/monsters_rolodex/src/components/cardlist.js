import React from 'react';
import './cardlist.css';
import {Card} from "./card";


export const CardList = props=>{
   return <div className="card-list">
       {props.monsters.map(monster=>(
        <Card monster={monster} key={monster.id}></Card>
      ))}
   </div>
}


