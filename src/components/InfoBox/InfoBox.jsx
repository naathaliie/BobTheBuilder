import { useState } from "react";
import DropDown from "./DropDown/DropDown";
import "./InfoBox.css";
import BuilderCard from "./BuilderCard/BuilderCard";

const InfoBox = ({allTheBuilders}) => {


const [showBuilderCard, setShowBuilderCard] = useState(false);
const [pickedBuilder, setPickedBuilder] = useState("");

/* Collect only the firstname and the lastname. We will send ONLY them to the DropDown */
    const fullyNames = allTheBuilders.map((obj) => {
    return obj.firstname + " " + obj.lastname;
}); 

  return (
    <section className="infoBoxSection">
    <DropDown fullyNames={fullyNames} setShowBuilderCard={setShowBuilderCard} setPickedBuilder={setPickedBuilder}/>
    {showBuilderCard && <BuilderCard allTheBuilders={allTheBuilders} pickedBuilder={pickedBuilder}/>}
    </section>
  );
};

export default InfoBox;
