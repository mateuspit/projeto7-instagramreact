export default function Story(props){
    
    return(
        <div class="story">
            <div class="story-img">
                <img src={props.image} alt=""/>                
            </div>
            <div class="story-title">
                {(props.title.length > 9) ? props.title.slice(0,9)+"..." : props.title}
            </div>
        </div>
    );
}