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
        <div class="stories-container">
            <Story image={storiesStatic[0].image} title={storiesStatic[0].title}/>
            <Story image={storiesStatic[1].image} title={storiesStatic[1].title}/>
            <Story image={storiesStatic[2].image} title={storiesStatic[2].title}/>
            <Story image={storiesStatic[3].image} title={storiesStatic[3].title}/>
            <Story image={storiesStatic[4].image} title={storiesStatic[4].title}/>
            <Story image={storiesStatic[5].image} title={storiesStatic[5].title}/>
            <Story image={storiesStatic[6].image} title={storiesStatic[6].title}/>
            <Story image={storiesStatic[7].image} title={storiesStatic[7].title}/>
        </div>
    );
}