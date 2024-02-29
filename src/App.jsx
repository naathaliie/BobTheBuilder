import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import InfoBox from "./components/InfoBox/InfoBox";
import NavBar from "./components/NavBar/NavBar";
import bobTheBuilderJson from "./json/bobTheBuilderInfo.json";


function App() {
  //Gather only the relevant info for the AboutUs, as a object
const aboutUsObj = {
  backstory: bobTheBuilderJson.backstory,
  construction_company: bobTheBuilderJson.construction_company,
  past_projects: bobTheBuilderJson.past_projects
};

//Gather only the relevant info for the InfoBox, as a object
const infoBoxObj = {
  construction_workers: bobTheBuilderJson.construction_workers
};


  return (
    <>
      <NavBar />
      <section className="mainSectionApp">
        <AboutUs aboutUsObj={aboutUsObj} />
        <InfoBox infoBoxObj={infoBoxObj}/>
      </section>
    </>
  );
}

export default App;
