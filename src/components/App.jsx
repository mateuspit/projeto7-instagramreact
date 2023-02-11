import NavBar from "./NavBar";
import PrincipalContainer from "./PrincipalContainer";

export default function App(){
    return(
        <div className="site">
            <NavBar/>
            <div className="top-container-bar"></div>
            <PrincipalContainer/>
        </div>
    );
}