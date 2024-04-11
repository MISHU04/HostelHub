import "./HeroStyles.css";

function Hero(props){
    return(
        <>
        <div className={props.cname}>
            <img src={props.heroImg} alt="HeroImg" />
            <div className="hero-text">
            <h1>{props.text}</h1>
            <p>{props.text}</p>
            </div>
        </div>
        </>
    )
}
export default Hero;