import Stories from "./Stories"
import Posts from "./Posts"

export default function Content(){
    return(
        <div className="content">
            <Stories/>
            <Posts/>
        </div>        
    );
}