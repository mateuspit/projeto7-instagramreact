import React from "react";

export default function Comentarios(props) {
    // console.log(props);
    return (
        
        <div class="comentariosPosts">
            <div class="comentarios">
                <p class="legenda">
                    <span>{props.authorPost}</span> {props.subtitle}
                </p>
                <p class="seeComments">
                    {props.commentsNumber}
                </p>
                <p class="legenda">
                    <span>{props.authorComment1}</span> {props.comment1}
                </p>
                <p class="legenda">
                    <span>{props.authorComment2}</span> {props.comment2}
                </p>
            </div>
            <div class="tempo">
                <p class="postTime">
                    {props.postTime}
                </p>
            </div>
        </div>
    );
}