export default function NavBar(){
    return(
        <header>
            <div class="header-container">
                <div class="logos">
                    <ion-icon class="logo-icon"name="logo-instagram"></ion-icon>
                    <div class="bar"></div>
                    <img src="./assets/logo.png" alt="" />
                </div>
                <input type="text" placeholder="Pesquisar"/>
                <div class="top-menu">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div> 
            </div>
        </header>
    );
}