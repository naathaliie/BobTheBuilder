
const BuilderCard = ({infoBoxObj, pickedBuilder}) => {
    console.log("pickedBuilder", infoBoxObj[1].firstname);
    

    const split = pickedBuilder.split(" ");
    const firstname = split[0];

    return <h1>BuilderCard {pickedBuilder}</h1>
};

export default BuilderCard;


/* infoBoxObj är ett object och inte en array. Det gör att jag varken
kan använda .map() eller .find().
Jag vill göra om infoBoxObj till en array...men hur..
kanske att jag skall skicka med eventet som jag får vid klick på en byggare istället? Kika på dropdownmenu3 */