export default function Usuario() {
    return (
        <div class="logged-account">
            <img class="pic-big" src="../../assets/pics/catana.jpeg" onClick={()=>(prompt("Digite a URL da sua nova foto:"))} data-test="profile-image" />
            <div class="profile">
                <h1 data-test="name">catanacomics</h1>
                <ion-icon name="pencil" onClick={()=>(prompt("Digite seu novo nome:"))} data-test="edit-name"></ion-icon>
            </div>
        </div>
    )
}