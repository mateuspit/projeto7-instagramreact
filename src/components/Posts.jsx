import Post from "./Post"
import Comentarios from "./Comentarios"

const postsStaticData = [
    {
        imageUser: "./assets/meowed 1.png",
        title: "meowed",
        photo: "./assets/gato-telefone 1.png",
        whoLikeIcon: "./assets/respondeai 1.png",
        whoLikeUser: "respondeai",
        likes: 101523,
        authorPost: "meowed",
        subtitle: "É verdade que Einstein era evangélico?",
        commentsNumber: "Veja todos os 1.506 comentários",
        authorComment1: "nabail.azhim",
        comment1: "I see no difference",
        authorComment2: "bennysedana",
        comment2: "Cinderella after eat junk food everyday",
        postTime: "Há 11 horas"
    },
    {
        imageUser: "./assets/barked 2.png",
        title: "barked",
        photo: "./assets/dog 1.png",
        whoLikeIcon: "./assets/adorableanimals 2.png",
        whoLikeUser: "adorableanimals",
        likes: 99159,
        authorPost: "barked",
        subtitle: "Esse vídeo é muito bom... É preciso imaginar Sísifo feliz!",
        commentsNumber: "Veja todos os 1.900 comentários",
        authorComment1: "shoptimaooficial",
        comment1: "ídolo demais CÁSSIO, VOCE É GIGANTE 🖤🤍🤩",
        authorComment2: "canalpremiere",
        comment2: "SEMPRE ELE! 🔥",
        postTime: "Há 1 dia"
    },
    {
        imageUser: "./assets/meowed 1.png",
        title: "meowed",
        photo: "./assets/gato-telefone 1.png",
        whoLikeIcon: "./assets/respondeai 1.png",
        whoLikeUser: "respondeai",
        likes: 101523,
        authorPost: "Socrates",
        subtitle: "Você matou a sua capacidade de pensar num nível que seu cérebro não consegue enxergar a contradição daquilo que sai da sua própria boca.",
        commentsNumber: "Veja todos os 69.666 comentários",
        authorComment1: "gifsgalerahumanas",
        comment1: "Como a filosofia explica o fracasso do webnamoro?",
        authorComment2: "Eu",
        comment2: "Se você leu isso manda '1' para mim no discord: Mateus Barcelos#3884",
        postTime: "Há 2 meses"
    }
]

export default function Posts() {
    return (
        <div class="posts">
            {postsStaticData.map(elementoPostStatic => (
                <div data-test="post" class="post">
                    <Post
                        imageUser={elementoPostStatic.imageUser}
                        title={elementoPostStatic.title}
                        photo={elementoPostStatic.photo}
                        whoLikeIcon={elementoPostStatic.whoLikeIcon}
                        whoLikeUser={elementoPostStatic.whoLikeUser}
                        likes={elementoPostStatic.likes}
                    />
                    <Comentarios
                        authorPost={elementoPostStatic.authorPost}
                        subtitle={elementoPostStatic.subtitle}
                        commentsNumber={elementoPostStatic.commentsNumber}
                        authorComment1={elementoPostStatic.authorComment1}
                        comment1={elementoPostStatic.comment1}
                        authorComment2={elementoPostStatic.authorComment2}
                        comment2={elementoPostStatic.comment2}
                        postTime={elementoPostStatic.postTime}
                    />
                    </div >
                ))}
                </div>
            );
}