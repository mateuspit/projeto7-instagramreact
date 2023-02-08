export default function Post(){
    return(
        <div class="post">
            <div class="post-header">
                <div class="post-user-data">
                    <img src="./assets/meowed 1.png" alt="" width="100px"/>
                    meowed
                </div>  
                <div class="post-options">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>                    
                </div>             
            </div>
            <div class="post-photo">
                <img src="./assets/gato-telefone 1.png" alt="" width="100px"/>
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
                <img src="./assets/respondeai 1.png" alt="" width="100px"/>
                <p>Curtido por <span> respondeai </span> e <span> outras 9999 pessoas </span></p>           
            </div>
        </div>
    );
}