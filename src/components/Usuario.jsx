export default function Usuario(){


    function chanceUserName(){
        let userName = prompt("Por favor, insira o nome de usuario");
        // let userName = "Mateus";
        while(userName === "" || userName === null || userName === undefined){
            userName = prompt("Por favor, insira um nome válido!");
        }        
    }

    function chanceUserIcon(){
        let userIcon = prompt("Por favor, insira uma URL de uma imagem");
        // let userName = "Mateus";
        while(userIcon === "" || userIcon === null || userIcon === undefined){
            userIcon = prompt("Por favor, insira uma URL valida!");
        }        
    }
    

    let userName = "catanacomics";
    let userIcon = "./assets/catanacomics 1.png";
            

    return(
        <div class="top-side-menu">
            <div class="top-side-menu-img">
                <img onClick={chanceUserIcon} src={userIcon} alt="" width="100px"/>
            </div>
            <div class="top-side-menu-user">
                {(userName !== false) && (userName !== "") ? userName : "catanacomics"}
            </div>
            <ion-icon class="chanceUserName" onClick={chanceUserName} name="pencil-outline"></ion-icon>
        </div>
    );
}