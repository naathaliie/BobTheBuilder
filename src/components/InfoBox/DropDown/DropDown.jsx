import { useState } from "react";
import BuilderCard from "../BuilderCard/BuilderCard";

const DropDown = ({ fullyNames, setShowBuilderCard, setPickedBuilder }) => {

  const handleOnChange = (event) => {
     console.log("klickad", event.target.value);

    setShowBuilderCard(true);
    setPickedBuilder(event.target.value);
};
    
  return (
    <>
      <div className="dropDownDiv">
        <label htmlFor="builder-select">Välj en byggare</label>

        <select name="builders" id="builder-select" onChange={handleOnChange}>
          <option value="">--Klicka på en byggare--</option>
          {fullyNames.map((builder, index) => {
            return (
              <option
                key={index}
                value={`${builder}`}
              >
                {builder}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default DropDown;
