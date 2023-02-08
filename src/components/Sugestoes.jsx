import TopSuggestions from "./TopSuggestions"
import Sugestao from "./Sugestao"

const storiesStatic = [
    {
        image : "./assets/badvibesmemes 1.png",
        title : "bad.vibes.memes",
        followSatus: "Segue você"
    },
    {
        image : "./assets/chibirdart 1.png",
        title : "chibirdart",
        followSatus: "Segue você"
    },
    {
        image : "./assets/razoesparaacreditar 1.png",
        title : "razoesparaacreditar",
        followSatus: "Novo no Instragram"
    },
    {
        image : "./assets/adorableanimals 1.png",
        title : "adorableanimals",
        followSatus: "Segue você"
    },
    {
        image : "./assets/smallcutecats 1.png",
        title : "smallcutecats",
        followSatus: "Segue você"
    },
]

export default function Sugestoes(){
    return(
        <div class="suggestions">
            <TopSuggestions/>
            <Sugestao image={storiesStatic[0].image} title={storiesStatic[0].title} followSatus={storiesStatic[0].followSatus}/>
            <Sugestao image={storiesStatic[1].image} title={storiesStatic[1].title} followSatus={storiesStatic[1].followSatus}/>
            <Sugestao image={storiesStatic[2].image} title={storiesStatic[2].title} followSatus={storiesStatic[2].followSatus}/>
            <Sugestao image={storiesStatic[3].image} title={storiesStatic[3].title} followSatus={storiesStatic[3].followSatus}/>
            <Sugestao image={storiesStatic[4].image} title={storiesStatic[4].title} followSatus={storiesStatic[4].followSatus}/>
        </div>
    );
}