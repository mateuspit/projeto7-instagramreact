import React from "react"

export default function Usuario(){

    const [userName ,setUserName] = React.useState("catanacomics")


    function chanceUserName(){
        let userNameFunction = prompt("Por favor, insira o nome de usuario");
        while(userNameFunction === "" || userNameFunction === null || userNameFunction === undefined){
            userNameFunction = prompt("Por favor, insira um nome válido!");
        }
        setUserName(userNameFunction);
    }

    function chanceUserIcon(){
        let userIcon = prompt("Por favor, insira uma URL de uma imagem");
        while(userIcon === "" || userIcon === null || userIcon === undefined){
            userIcon = prompt("Por favor, insira uma URL valida!");
        }        
    }
    

    let userIcon = "./assets/catanacomics 1.png";
            

    return(
        <div class="top-side-menu">
            <div class="top-side-menu-img">
                <img onClick={chanceUserIcon} src={userIcon} alt="" width="100px"/>
            </div>
            <div class="top-side-menu-user">
                {userName}
            </div>
            <ion-icon class="chanceUserName" onClick={chanceUserName} name="pencil-outline"></ion-icon>
        </div>
    );
}