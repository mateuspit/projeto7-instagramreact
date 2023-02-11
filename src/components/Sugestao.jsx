export default function Sugestao(props){
    return(
        // image : "./assets/smallcutecats 1.png",
        // title : "smallcutecats",
        // followSatus: "Segue você"
        <div className="suggestion">
            <div className="suggestion-infos">
                <div className="suggestion-img">
                    <img src={props.image} alt="" width="100px"/>
                </div>
                <div className="suggestion-stats">
                    <div className="suggestion-user">
                    {props.title} 
                    </div>
                    <div className="suggestion-status">
                    {props.followSatus} 
                    </div>
                </div>
            </div>
            <div className="suggestion-button">
                Seguir
            </div>
        </div>
    );
}