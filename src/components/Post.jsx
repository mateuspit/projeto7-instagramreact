import React from "react"
import Comentarios from "./Comentarios"

export default function Post(props){

    // const staticCommentsData = [
    //     {
    //         authorPost: "meowed",
    //         subtitle: "É verdade que Einstein era evangélico?",
    //         commentsNumber: "Veja todos os 1.506 comentários",
    //         authorComment1: "nabail.azhim",
    //         comment1: "I see no difference",
    //         authorComment2: "bennysedana",
    //         comment2: "Cinderella after eat junk food everyday",
    //         postTime: "Há 11 horas"
    //     },
    //     {
    //         authorPost: "barked",
    //         subtitle: "Esse vídeo é muito bom... É preciso imaginar Sísifo feliz!",
    //         commentsNumber: "Veja todos os 1.900 comentários",
    //         authorComment1: "shoptimaooficial",
    //         comment1: "ídolo demais CÁSSIO, VOCE É GIGANTE 🖤🤍🤩",
    //         authorComment2: "canalpremiere",
    //         comment2: "SEMPRE ELE! 🔥",
    //         postTime: "Há 1 dia"
    //     },
    //     {
    //         authorPost: "Socrates",
    //         subtitle: "Você matou a sua capacidade de pensar num nível que seu cérebro não consegue enxergar a contradição daquilo que sai da sua própria boca.",
    //         commentsNumber: "Veja todos os 69.666 comentários",
    //         authorComment1: "gifsgalerahumanas",
    //         comment1: "Como a filosofia explica o fracasso do webnamoro?",
    //         authorComment2: "Eu",
    //         comment2: "Se você leu isso manda '1' para mim no discord: Mateus Barcelos#3884",
    //         postTime: "Há 2 meses"
    //     }
    // ];

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
        // <div data-test="post" class="post">
        <>
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
                <img data-test="post-image" onDoubleClick={doubleClickLike} src={props.photo} alt="" width="100px"/>
                <div class={animationHeart}>
                    <ion-icon name="heart"></ion-icon>                                        
                </div>
            </div>
            <div class="post-buttons">
                <div class="post-left-buttons">
                    <div  class={likePostButtonStyle}><ion-icon data-test="like-post" onClick={likePost} name={likePostButtonMode}></ion-icon></div>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="post-right-button">
                    <ion-icon data-test="save-post" onClick={savePost} name={savePostButtonMode}></ion-icon>                   
                </div>
            </div>
            <div class="post-stats">
                <img src={props.whoLikeIcon}  alt="" width="100px"/>
                <p  >Curtido por <span> {props.whoLikeUser}  </span> e <span data-test="likes-number"> outras {likePostNumber}  pessoas </span></p>           
            </div>
            {/* <Comentarios 
                authorPost={staticCommentsData[0].authorPost}
                subtitle={staticCommentsData[0].subtitle}
                commentsNumber={staticCommentsData[0].commentsNumber}
                authorComment1={staticCommentsData[0].authorComment1}
                comment1={staticCommentsData[0].comment1}
                authorComment2={staticCommentsData[0].authorComment2}
                comment2={staticCommentsData[0].comment2}
                postTime={staticCommentsData[0].postTime}
            /> */}
            
        </>
        
    );
    
}