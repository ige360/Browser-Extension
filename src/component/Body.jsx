import React from "react";
import Title from "./Title";
import Card from "./Card";
import "./Body.css"
import Data from "../Data";
import "./Card.css"

function entry(emojiData) {
    return (
         <Card
            key={emojiData.id}
            emoji={emojiData.icon}
            title={emojiData.title}
            info={emojiData.description}
            btn={"Remove"}
          />
    )
  }

function Body() {
    return(
        <div className="body-container">
            <Title/>
            <dl className="card-content">{Data.map(entry)}</dl>
        
        </div>
    )
}

export default Body;