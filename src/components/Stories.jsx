import Story from "./Story"

const storiesStatic = [
    {
        image : "./assets/9gag 1.png",
        title : "9 gag"
    },
    {
        image : "./assets/meowed 1.png",
        title : "meowed"
    },
    {
        image : "./assets/barked 1.png",
        title : "barked"
    },
    {
        image : "./assets/nathanwpylestrangeplanet 1.png",
        title : "nathanwpylestrangeplanet"
    },
    {
        image : "./assets/wawawiwacomicsa 1.png",
        title : "wawawiwacomicsa"
    },
    {
        image : "./assets/respondeai 1.png",
        title : "respondeai"
    },
    {
        image : "./assets/filomoderna 1.png",
        title : "filomoderna"
    },
    {
        image : "./assets/memeriagourmet 1.png",
        title : "memeriagourmet"
    }
]

export default function Stories(){
    return(
        <div className="stories-container">
            <img id="malditaSeta"src="./assets/chevron-forward-circle 1.png" alt="Maldita Seta"></img>
            {storiesStatic.map(elementoStoriesStatic => (
                <Story
                    key={elementoStoriesStatic.title} 
                    image={elementoStoriesStatic.image}
                    title={elementoStoriesStatic.title}                
                />
            ))}
        </div>
    );
}