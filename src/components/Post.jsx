export default function Post(props){
    return(
        // imageUser : "./assets/meowed 1.png",
        // title : "meowed",
        // photo: "./assets/gato-telefone 1.png",
        // whoLikeIcon: "./assets/respondeai 1.png",
        // whoLikeUser: "respondeai",
        // likes: "101523"
        <div class="post">
            <div class="post-header">
                <div class="post-user-data">
                    <img src={props.imageUser} alt="" width="100px"/>
                    {props.title}
                </div>  
                <div class="post-options">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>                    
                </div>             
            </div>
            <div class="post-photo">
                <img src={props.photo} alt="" width="100px"/>
            </div>
            <div class="post-buttons">
                <div class="post-left-buttons">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="post-right-button">
                    <ion-icon name="bookmark-outline"></ion-icon>                    
                </div>
            </div>
            <div class="post-stats">
                <img src={props.whoLikeIcon}  alt="" width="100px"/>
                <p>Curtido por <span> {props.whoLikeUser}  </span> e <span> outras {props.likes}  pessoas </span></p>           
            </div>
        </div>
    );
}