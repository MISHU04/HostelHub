import Navbarr from "../components/Navbarr";
// import Hero from "../components/Hero";
// import './HomeStyles.css';
// import back2 from "./back2.avif";
// import brahm from "../components/brahm.jpeg";
// import hostel from "../components/hostel.jpg";
import CarouselPage from "./CarouselPage";
// import NoticeTicker from "./NoticeTicker";
function Home(){
    return(
        <>
        <div className="wrapper">
        <Navbarr/>
        
        <CarouselPage/>
        {/* <NoticeTicker/> */}
            {/* <Hero cName="hero" heroImg={ganga} title="Exploring the hostels of NIT Patna :)"/> */}
        </div>
        
    
        </>
    )
}
export default Home;