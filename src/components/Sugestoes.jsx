import TopSuggestions from "./TopSuggestions"
import Sugestao from "./Sugestao"

const suggestionsStatic = [
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
        <div className="suggestions">
            <TopSuggestions/>
            {suggestionsStatic.map(elementSuggestionsStatic=>(
                <Sugestao 
                    key={elementSuggestionsStatic.title}
                    image={elementSuggestionsStatic.image}
                    title={elementSuggestionsStatic.title}
                    followSatus={elementSuggestionsStatic.followSatus}
                />
            ))};
            </div>
    );
}