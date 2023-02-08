import NavBar from "./NavBar"
import PrincipalContainer from "./PrincipalContainer"

export default function App(){
    return(
        <div class="site">
            <NavBar/>
            <div class="top-container-bar"></div>
            <PrincipalContainer/>
        </div>
    );
}