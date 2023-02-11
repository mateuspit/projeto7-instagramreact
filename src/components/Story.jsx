export default function Story(props){
    
    return(
        <div className="story">
            <div className="story-img">
                <img src={props.image} alt=""/>                
            </div>
            <div className="story-title">
                {(props.title.length > 9) ? props.title.slice(0,9)+"..." : props.title}
            </div>
        </div>
    );
}