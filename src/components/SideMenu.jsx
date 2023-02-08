import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"
import FooterSideMenu from "./FooterSideMenu"

export default function SideMenu(){
    return(
        <div class="side-menu-container">
            <div class="side-menu">
                <Usuario/>
                <Sugestoes/>
                <FooterSideMenu/>
            </div>
        </div>        
    );
}