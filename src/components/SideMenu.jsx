import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import FooterSideMenu from "./FooterSideMenu";

export default function SideMenu() {
    return (
        <div className="side-menu-container">
            <div className="side-menu">
                <Usuario />
                <Sugestoes />
                <FooterSideMenu />
            </div>
        </div>
    );
}