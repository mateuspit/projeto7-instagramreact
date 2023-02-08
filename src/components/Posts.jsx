import Post from "./Post"

const postsStatic = [
    {
        imageUser : "./assets/meowed 1.png",
        title : "meowed",
        photo: "./assets/gato-telefone 1.png",
        whoLikeIcon: "./assets/respondeai 1.png",
        whoLikeUser: "respondeai",
        likes: "101523"
    },
    {
        imageUser : "./assets/barked 2.png",
        title : "barked",
        photo: "./assets/dog 1.png",
        whoLikeIcon: "./assets/adorableanimals 2.png",
        whoLikeUser: "adorableanimals",
        likes: "99159"
    },
    {
        imageUser : "./assets/meowed 1.png",
        title : "meowed",
        photo: "./assets/gato-telefone 1.png",
        whoLikeIcon: "./assets/respondeai 1.png",
        whoLikeUser: "respondeai",
        likes: "101523"
    }
]

export default function Posts(){
    return(
        <div class="posts">
            <Post imageUser={postsStatic[0].imageUser} title={postsStatic[0].title}
            photo={postsStatic[0].photo} whoLikeIcon={postsStatic[0].whoLikeIcon}
            whoLikeUser={postsStatic[0].whoLikeUser} likes={postsStatic[0].likes}  />
            <Post imageUser={postsStatic[1].imageUser} title={postsStatic[1].title}
            photo={postsStatic[1].photo} whoLikeIcon={postsStatic[1].whoLikeIcon}
            whoLikeUser={postsStatic[1].whoLikeUser} likes={postsStatic[1].likes}  />
            <Post imageUser={postsStatic[0].imageUser} title={postsStatic[0].title}
            photo={postsStatic[0].photo} whoLikeIcon={postsStatic[0].whoLikeIcon}
            whoLikeUser={postsStatic[0].whoLikeUser} likes={postsStatic[0].likes}  />
        </div>
    );
}