import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(props) {
  const [backIsDisplayed, setBackIsDisplayed] = useState(false)

  function handleCardDisplayClick() {
    setBackIsDisplayed(!backIsDisplayed)
  }

  return (
    <Card onClick={handleCardDisplayClick}>
      <div>
        <div className="image">
          <img src={backIsDisplayed ? props.sprites.back : props.sprites.front} alt={props.name} />
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {props.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
