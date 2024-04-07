import Navbarr from "../components/Navbarr";
// import Hero from "../components/Hero";
// import './HomeStyles.css';
// import ganga from "../components/ganga.jpg";
// import brahm from "../components/brahm.jpeg";
// import hostel from "../components/hostel.jpg";
import CarouselPage from "./CarouselPage";
function Home(){
    return(
        <>
        <Navbarr/>
        <div className="wrapper">
        <CarouselPage/>
            {/* <Hero cName="hero" heroImg={ganga} title="Exploring the hostels of NIT Patna :)"/> */}
        </div>
        
    
        </>
    )
}
export default Home;