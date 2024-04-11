import { Component } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
// import hostel from "../components/hostel.jpg";
class Navbarr extends Component{
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <>
            <nav className="NavbarItems">
                {/* <img src={hostel} width="100%" height="100%"  /> */}
                <h1 className="navbar-logo"><b>HostelHub</b></h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cname} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                                
                                {/* <ul className="visi">
                                    <li type="none" className="visi1"><Link>Ganga</Link></li>
                                    <li type="none" className="visi1"><Link>Brahmaputra</Link></li>

                                </ul> */}
                            </li>
                        );
                    })}
                    
                </ul>
            </nav>
            
            </>
        );
    }
}
export default Navbarr;