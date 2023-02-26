import logo from "../assets/logo.png";

export default function Navbar(){
    return (
        <div className="bigger-header">
            <div className="header">
                <div className="header-logo">
                    <a href="https://instagram.com/"><ion-icon name="logo-instagram" id="logo-insta"></ion-icon></a>
                    <div className="border-y"></div>
                    <a href="https://instagram.com/"><img src={logo} /></a>
                    <a href="https://instagram.com/" id="dm-mobile"><ion-icon name="paper-plane-outline"></ion-icon></a>
                </div>

                <div className="header-search-bar">
                    <input type="text" id="search-bar" placeholder="Pesquisar" />
                </div>

                <div className="header-side-menu">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}