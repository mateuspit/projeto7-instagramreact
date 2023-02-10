import Post from "./Post"

const postsStatic = [
    {
        imageUser : "./assets/meowed 1.png",
        title : "meowed",
        photo: "./assets/gato-telefone 1.png",
        whoLikeIcon: "./assets/respondeai 1.png",
        whoLikeUser: "respondeai",
        likes: 101523
    },
    {
        imageUser : "./assets/barked 2.png",
        title : "barked",
        photo: "./assets/dog 1.png",
        whoLikeIcon: "./assets/adorableanimals 2.png",
        whoLikeUser: "adorableanimals",
        likes: 99159
    },
    {
        imageUser : "./assets/meowed 1.png",
        title : "meowed",
        photo: "./assets/gato-telefone 1.png",
        whoLikeIcon: "./assets/respondeai 1.png",
        whoLikeUser: "respondeai",
        likes: 101523
    }
]

export default function Posts(){
    return(
        <div class="posts">
            {postsStatic.map(elementoPostStatic => (
                <Post 
                    imageUser={elementoPostStatic.imageUser}
                    title={elementoPostStatic.title}
                    photo={elementoPostStatic.photo}
                    whoLikeIcon={elementoPostStatic.whoLikeIcon}
                    whoLikeUser={elementoPostStatic.whoLikeUser}
                    likes={elementoPostStatic.likes}                
                />      
            ))}        
        </div>
    );
}