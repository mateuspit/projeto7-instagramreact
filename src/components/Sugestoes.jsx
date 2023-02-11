import TopSuggestions from "./TopSuggestions";
import Sugestao from "./Sugestao";

const followYouStatus = "Segue você";

const suggestionsStatic = [
    {
        image: "./assets/badvibesmemes 1.png",
        title: "bad.vibes.memes",
        followSatus: followYouStatus
    },
    {
        image: "./assets/chibirdart 1.png",
        title: "chibirdart",
        followSatus: followYouStatus
    },
    {
        image: "./assets/razoesparaacreditar 1.png",
        title: "razoesparaacreditar",
        followSatus: "Novo no Instragram"
    },
    {
        image: "./assets/adorableanimals 1.png",
        title: "adorableanimals",
        followSatus: followYouStatus
    },
    {
        image: "./assets/smallcutecats 1.png",
        title: "smallcutecats",
        followSatus: followYouStatus
    },
]

export default function Sugestoes() {
    return (
        <div className="suggestions">
            <TopSuggestions />
            {suggestionsStatic.map(elementSuggestionsStatic => (
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