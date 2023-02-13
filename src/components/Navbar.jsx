export default function Navbar(){
    return (
        <div class="bigger-header">
            <div class="header">
                <div class="header-logo">
                    <a href="https://instagram.com/"><ion-icon name="logo-instagram" id="logo-insta"></ion-icon></a>
                    <div class="border-y"></div>
                    <a href="https://instagram.com/"><img src="../../assets/logo.png" /></a>
                    <a href="https://instagram.com/" id="dm-mobile"><ion-icon name="paper-plane-outline"></ion-icon></a>
                </div>

                <div class="header-search-bar">
                    <input type="text" id="search-bar" placeholder="Pesquisar" />
                </div>

                <div class="header-side-menu">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}