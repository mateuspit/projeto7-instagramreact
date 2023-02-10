import React from "react"

export default function Usuario(){

    const [userName ,setUserName] = React.useState("catanacomics");
    const [userIcon ,setUserIcon] = React.useState("./assets/catanacomics 1.png");


    function chanceUserName(){
        let userNameFunction = prompt("Por favor, insira o nome de usuario");
        while(userNameFunction === "" || userNameFunction === null || userNameFunction === undefined){
            userNameFunction = prompt("Por favor, insira um nome válido!");
        }
        setUserName(userNameFunction);
    }

    function chanceUserIcon(){
        let userIconFunction = prompt("Por favor, insira uma URL de uma imagem");
        while(userIconFunction === "" || userIconFunction === null || userIconFunction === undefined){
            userIconFunction = prompt("Por favor, insira uma URL valida!");
        }        
        setUserIcon(userIconFunction);
    }    
            

    return(
        <div class="top-side-menu">
            <div class="top-side-menu-img">
                <img data-test="profile-image" onClick={chanceUserIcon} src={userIcon} alt="" width="100px"/>
            </div>
            <div data-test="name" class="top-side-menu-user">
                {userName}
            </div>
            <ion-icon data-test="edit-name" class="chanceUserName" onClick={chanceUserName} name="pencil-outline"></ion-icon>
        </div>
    );
}