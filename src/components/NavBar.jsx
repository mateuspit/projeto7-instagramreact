export default function NavBar() {
    return (
        <header>
            <div className="header-container">
                <div className="logos">
                    <ion-icon className="logo-icon" name="logo-instagram"></ion-icon>
                    <div className="bar"></div>
                    <img src="./assets/logo.png" alt="" />
                </div>
                <input type="text" placeholder="Pesquisar" />
                <div className="top-menu">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </header>
    );
}