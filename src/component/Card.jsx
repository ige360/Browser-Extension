import React from "react";
import "./Card.css"

function Card(props) {
    return (
                <div className="card"> 
                   <i class={props.emoji}></i>
                   <div className="num2">
                       <h4>{props.title}</h4>
                       <p>{props.info}</p>
                   </div>
                   <div className="num3">
                     <span><button>{props.btn}</button></span>
                     <span><button>{props.btn}</button></span>
                  </div> 
               </div>
    )
}

export default Card;