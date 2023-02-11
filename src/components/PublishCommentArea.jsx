export default function PublishCommentArea() {
    return (
        <div className="publicarPosts">
            <div className="emojiPublicar">
                <ion-icon name="happy-outline"></ion-icon>
            </div>
            <div className="inputPublicar">
                <input type="text" placeholder="Adicione um comentário..." />
            </div>
            <div className="Button">
                <p className="textPublishButton">
                    Publicar
                </p>
            </div>
        </div>
    );
}