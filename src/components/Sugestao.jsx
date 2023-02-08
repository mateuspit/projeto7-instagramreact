export default function Sugestao(props){
    return(
        // image : "./assets/smallcutecats 1.png",
        // title : "smallcutecats",
        // followSatus: "Segue você"
        <div class="suggestion">
            <div class="suggestion-infos">
                <div class="suggestion-img">
                    <img src={props.image} alt="" width="100px"/>
                </div>
                <div class="suggestion-stats">
                    <div class="suggestion-user">
                    {props.title} 
                    </div>
                    <div class="suggestion-status">
                    {props.followSatus} 
                    </div>
                </div>
            </div>
            <div class="suggestion-button">
                Seguir
            </div>
        </div>
    );
}