import "./BuilderCard.css";

const BuilderCard = ({ allTheBuilders, pickedBuilder }) => {
  const split = pickedBuilder.split(" ");
  const firstname = split[0];

  /* .find() is going to return a OBJECT of the ARRAY  */
  const pickedBuilderInfo = allTheBuilders.find(
    (char) => char.firstname === firstname
  );
  /* Collect all the values and keys from the object. Object.values(theObject)/Object.keys(theObject) will return a array, so we can use the .map() on it. */
  const pickedBuilderValues = Object.values(pickedBuilderInfo);
  const pickedBuilderKeys = Object.keys(pickedBuilderInfo);

  return (
    <section className="builderCardSection">
      <h1 className="builderH1"> Snabbfakta om {pickedBuilder}</h1>
      <ul className="builderUl">
        {pickedBuilderKeys.map((key, index) => {
          return (
            <li key={index} className={`key ${index}`}>
              {key}{" "}
              <ul><li className={`value ${index}`}>
                {Array.isArray(pickedBuilderValues[index])
                  ? pickedBuilderValues[index].join(", ")
                  : pickedBuilderValues[index]}
              </li></ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BuilderCard;

/* Rad 23. Man kan inte lägga en li-tagg innuti en li-tagg. Därav behöver jag sätta 
ännu en ul-tagg så att det blir en "inbäddad" lista
*/
