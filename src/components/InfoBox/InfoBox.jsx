import { useState } from "react";
import DropDown from "./DropDown/DropDown";
import "./InfoBox.css";
import BuilderCard from "./BuilderCard/BuilderCard";

const InfoBox = ({infoBoxObj}) => {
  console.log("infobox", infoBoxObj);
const [showBuilderCard, setShowBuilderCard] = useState(false);
const [pickedBuilder, setPickedBuilder] = useState("");

/* Collect only the firstname and the lastname. We will send ONLY them to the DropDown */
    const fullyNames = infoBoxObj.map((obj) => {
    return obj.firstname + " " + obj.lastname;
}); 

  return (
    <section className="infoBoxSection">
      <h1>InfoBox</h1>
    <DropDown fullyNames={fullyNames} setShowBuilderCard={setShowBuilderCard} setPickedBuilder={setPickedBuilder}/>
    {showBuilderCard && <BuilderCard infoBoxObj={infoBoxObj} pickedBuilder={pickedBuilder}/>}
    </section>
  );
};

export default InfoBox;
