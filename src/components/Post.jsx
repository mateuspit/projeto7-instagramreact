import React from "react";

export default function Post(props) {
    const bookmarkOutline = "bookmark-outline";
    const heartOutline = "heart-outline";
    const animationClearTime = 1000;

    const [savePostButtonMode, setSavePostButtonMode] = React.useState(bookmarkOutline);
    const [likePostButtonMode, setLikePostButtonMode] = React.useState(heartOutline);
    const [likePostButtonStyle, setLikePostButtonStyle] = React.useState("likeButtonOutlineHeart");
    let [likePostNumber, setLikePostNumber] = React.useState(props.likes);
    const [animationHeart, setAnimationHeart] = React.useState("none");

    function savePost() {
        if (savePostButtonMode === bookmarkOutline) {
            setSavePostButtonMode("bookmark");
        } else if (savePostButtonMode === "bookmark") {
            setSavePostButtonMode(bookmarkOutline);
        }
    }

    function likePost() {
        if (likePostButtonMode === heartOutline) {
            setLikePostButtonMode("heart");
            setLikePostButtonStyle("likeButtonFullHeart");
            likePostNumber = props.likes + 1;
            setLikePostNumber(likePostNumber);
        } else if (likePostButtonMode === "heart") {
            setLikePostButtonMode(heartOutline);
            setLikePostButtonStyle("likeButtonOutlineHeart");
            likePostNumber = props.likes;
            setLikePostNumber(likePostNumber);
        }
    }

    function doubleClickLike() {
        if (likePostButtonMode === heartOutline) {
            setLikePostButtonMode("heart");
            setLikePostButtonStyle("likeButtonFullHeart");
            likePostNumber = likePostNumber + 1;
            setLikePostNumber(likePostNumber);
        }
        setAnimationHeart("like-heart");
        setTimeout(() => { setAnimationHeart("none") }, animationClearTime);
    }
    if (props.photo.includes("mp4")) {
        return (
            <>
                <div className="post-header">
                    <div className="post-user-data">
                        <img src={props.imageUser} alt="" width="100px" />
                        {props.title}
                    </div>
                    <div className="post-options">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <div className="post-photo">
                    <video
                        id="ludoviajante"
                        controls
                        autoPlay
                        muted>
                        <source src={props.photo} type="video/mp4" />
                    </video>
                    <div className={animationHeart}>
                        <ion-icon name="heart"></ion-icon>
                    </div>
                </div>
                <div className="post-buttons">
                    <div className="post-left-buttons">
                        <div className={likePostButtonStyle}><ion-icon data-test="like-post" onClick={likePost} name={likePostButtonMode}></ion-icon></div>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div className="post-right-button">
                        <ion-icon data-test="save-post" onClick={savePost} name={savePostButtonMode}></ion-icon>
                    </div>
                </div>
                <div className="post-stats">
                    <img src={props.whoLikeIcon} alt="" width="100px" />
                    <p  >Curtido por <span> {props.whoLikeUser}  </span> e <span data-test="likes-number"> outras {likePostNumber}  pessoas </span></p>
                </div>

            </>

        );
    } else {
        return (
            <>
                <div className="post-header">
                    <div className="post-user-data">
                        <img src={props.imageUser} alt="" width="100px" />
                        {props.title}
                    </div>
                    <div className="post-options">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <div className="post-photo">
                    <img data-test="post-image" onDoubleClick={doubleClickLike} src={props.photo} alt="" width="100px" />
                    <div className={animationHeart}>
                        <ion-icon name="heart"></ion-icon>
                    </div>
                </div>
                <div className="post-buttons">
                    <div className="post-left-buttons">
                        <div className={likePostButtonStyle}><ion-icon data-test="like-post" onClick={likePost} name={likePostButtonMode}></ion-icon></div>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div className="post-right-button">
                        <ion-icon data-test="save-post" onClick={savePost} name={savePostButtonMode}></ion-icon>
                    </div>
                </div>
                <div className="post-stats">
                    <img src={props.whoLikeIcon} alt="" width="100px" />
                    <p  >Curtido por <span> {props.whoLikeUser}  </span> e <span data-test="likes-number"> outras {likePostNumber}  pessoas </span></p>
                </div>

            </>

        );
    }

}