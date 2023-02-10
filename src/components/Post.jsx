import React from "react"

export default function Post(props){

    const [savePostButtonMode, setSavePostButtonMode] = React.useState("bookmark-outline");
    const [likePostButtonMode, setLikePostButtonMode] = React.useState("heart-outline");
    const [likePostButtonStyle, setLikePostButtonStyle] = React.useState("likeButtonOutlineHeart");
    let [likePostNumber, setLikePostNumber] = React.useState(props.likes);
    let [animationHeart, setAnimationHeart] = React.useState("none");

    //animationHeart

    // let savePostMode = "bookmark-outline";
    // let likePostMode = "heart-outline";

    function savePost(){
        //<ion-icon name="bookmark"></ion-icon>
        // alert("post");
        if(savePostButtonMode === "bookmark-outline"){
            setSavePostButtonMode("bookmark");
        }
        else if (savePostButtonMode === "bookmark"){
            setSavePostButtonMode("bookmark-outline");
        }
        // {savePostMode === "bookmark" ? "bookmark-outline" : "bookmark" }
    }

    function likePost(){
        //<ion-icon name="heart"></ion-icon>
        // alert("coração");
        if(likePostButtonMode === "heart-outline"){
            setLikePostButtonMode("heart");
            setLikePostButtonStyle("likeButtonFullHeart");
            likePostNumber = props.likes + 1;
            setLikePostNumber(likePostNumber);
        }
        else if (likePostButtonMode === "heart"){
            setLikePostButtonMode("heart-outline");
            setLikePostButtonStyle("likeButtonOutlineHeart");
            likePostNumber = props.likes;
            setLikePostNumber(likePostNumber);
        }
        // {likePostMode === "heart" ? "heart-outline" : "heart" }
    }

    function doubleClickLike(){
        if(likePostButtonMode === "heart-outline"){
            setLikePostButtonMode("heart");
            setLikePostButtonStyle("likeButtonFullHeart");
            likePostNumber = likePostNumber + 1;
            setLikePostNumber(likePostNumber);
        }             
        setAnimationHeart("like-heart");
        setTimeout(() => {setAnimationHeart("none")}, 1000);
    }
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
                <img onDoubleClick={doubleClickLike} src={props.photo} alt="" width="100px"/>
                <div class={animationHeart}>
                    <ion-icon name="heart"></ion-icon>                                        
                </div>
            </div>
            <div class="post-buttons">
                <div class="post-left-buttons">
                    <div class={likePostButtonStyle}><ion-icon onClick={likePost} name={likePostButtonMode}></ion-icon></div>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="post-right-button">
                    <ion-icon onClick={savePost} name={savePostButtonMode}></ion-icon>                   
                </div>
            </div>
            <div class="post-stats">
                <img src={props.whoLikeIcon}  alt="" width="100px"/>
                <p>Curtido por <span> {props.whoLikeUser}  </span> e <span> outras {likePostNumber}  pessoas </span></p>           
            </div>
        </div>
    );
}