import Content from "./Content";
import SideMenu from "./SideMenu";

export default function PrincipalContainer(){
    return(
        <div className="principal-container">
            <Content />
            <SideMenu />
        </div>
    );
}