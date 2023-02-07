import ReactDOM from 'react-dom'

function Top(){
    return(
        <header>
            <div class="header-container">
                <div class="logos">
                    <ion-icon class="logo-icon"name="logo-instagram"></ion-icon>
                    <div class="bar"></div>
                    <img src="./img/logo.png" alt="" />
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

function Story(){
    return(
        <div class="story">
            <div class="story-img">
                <img src="./img/9gag 1.png" alt=""/>                
            </div>
            <div class="story-title">
                9 gag
            </div>
        </div>
    );
}

function Stories(){
    return(
        <div class="stories-container">
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
        </div>
    );
}

function Posts(){
    return(
        <div class="posts">
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

function Post(){
    return(
        <div class="post">
            <div class="post-header">
                <div class="post-user-data">
                    <img src="./img/meowed 1.png" alt="" width="100px"/>
                    meowed
                </div>  
                <div class="post-options">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>                    
                </div>             
            </div>
            <div class="post-photo">
                <img src="./img/gato-telefone 1.png" alt="" width="100px"/>
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
                <img src="./img/respondeai 1.png" alt="" width="100px"/>
                <p>Curtido por <span> respondeai </span> e <span> outras 9999 pessoas </span></p>           
            </div>
        </div>
    );
}

function Content(){
    return(
        <div class="content">
            <Stories/>
            <Posts/>
        </div>        
    );
}

function TopSideMenu(){
    return(
        <div class="top-side-menu">
            <div class="top-side-menu-img">
                <img src="./img/catanacomics 1.png" alt="" width="100px"/>
            </div>
            <div class="top-side-menu-user">
                catanacomics
            </div>
            <ion-icon name="pencil-outline"></ion-icon>
        </div>
    );
}

function TopSuggestions(){
    return(
        <div class="top-suggestions">
            <div class="suggestions-4u">
                Sugestões para você
            </div>
            <div class="see-all-suggestions">
                Ver tudo
            </div>
        </div>
    );
}

function Suggestion(){
    return(
        <div class="suggestion">
            <div class="suggestion-infos">
                <div class="suggestion-img">
                    <img src="./img/badvibesmemes 1.png" alt="" width="100px"/>
                </div>
                <div class="suggestion-stats">
                    <div class="suggestion-user">
                        bad.vibes.memes
                    </div>
                    <div class="suggestion-status">
                        Segue você
                    </div>
                </div>
            </div>
            <div class="suggestion-button">
                Seguir
            </div>
        </div>
    );
}

function Suggestions(){
    return(
        <div class="suggestions">
            <TopSuggestions/>
            <Suggestion/>
            <Suggestion/>
            <Suggestion/>
            <Suggestion/>
            <Suggestion/>
        </div>
    );
}

function FooterSideMenu(){
    return(
        <div class="footer-side-menu">
            <div class="footer-suggestions-menu">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div class="footer-copyrights">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}

function SideMenu(){
    return(
        <div class="side-menu-container">
            <div class="side-menu">
                <TopSideMenu/>
                <Suggestions/>
                <FooterSideMenu/>
            </div>
        </div>        
    );
}

function PrincipalContainer(){
    return(
        <div class="principal-container">
            <Content />
            <SideMenu />
        </div>
    );
}

function App(){
    return(
        <div class="site">
            <Top/>
            <div class="top-container-bar"></div>
            <PrincipalContainer/>
        </div>
    );
}


ReactDOM.render(<App/>, document.querySelector(".root"));