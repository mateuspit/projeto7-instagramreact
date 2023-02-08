export default function Story(props){
    
    return(
        <div class="story">
            <div class="story-img">
                <img src={props.image} alt=""/>                
            </div>
            <div class="story-title">
            {props.title}
            </div>
        </div>
    );
}