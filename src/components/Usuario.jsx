export default function Usuario(){
    let userName = prompt("Por favor, insira o nome de usuario");
    // let userName = "Mateus";
    while(userName === "" || userName === null || userName === undefined){
        userName = prompt("Por favor, insira um nome válido!");
    }
            

    return(
        

        <div class="top-side-menu">
            <div class="top-side-menu-img">
                <img src="./assets/catanacomics 1.png" alt="" width="100px"/>
            </div>
            <div class="top-side-menu-user">
                {(userName !== false) && (userName !== "") ? userName : "catanacomics"}
                {/* Beto */}
            </div>
            <ion-icon name="pencil-outline"></ion-icon>
        </div>
    );
}