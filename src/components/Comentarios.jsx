import React from "react";

export default function Comentarios(props) {
    // console.log(props);
    return (
        
        <div className="comentariosPosts">
            <div className="comentarios">
                <p className="legenda">
                    <span>{props.authorPost}</span> {props.subtitle}
                </p>
                <p className="seeComments">
                    {props.commentsNumber}
                </p>
                <p className="legenda">
                    <span>{props.authorComment1}</span> {props.comment1}
                </p>
                <p className="legenda">
                    <span>{props.authorComment2}</span> {props.comment2}
                </p>
            </div>
            <div className="tempo">
                <p className="postTime">
                    {props.postTime}
                </p>
            </div>
        </div>
    );
}