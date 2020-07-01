import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome='Kakaroto' idade={20} nerd={true} />

      <DiretaFilho nome='Caitlyn' idade={15} nerd={false} />
    </div>
  );
};
