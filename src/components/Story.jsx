export default function Story(props) {
    const maxNumberCharacterUserName = 9;

    return (
        <div className="story">
            <div className="story-img">
                <img src={props.image} alt="" />
            </div>
            <div className="story-title">
                {(props.title.length > maxNumberCharacterUserName) ? props.title.slice(0, maxNumberCharacterUserName) + "..." : props.title}
            </div>
        </div>
    );
}