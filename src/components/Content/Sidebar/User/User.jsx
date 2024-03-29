export default function User({ profileName, setProfileName, profilePic, setProfilePic }) {
    function loadProfileName() {
        let x = prompt("Digite seu novo nome:");
        x ? setProfileName(x) : alert("Nome Inválido!");
    }

    function loadProfilePic() {
        let x = prompt("Digite a URL da sua nova foto:");
        x ? setProfilePic(x) : alert("URL Inválida!");
    }

    return (
        <div className="logged-account">
            <img alt="pic-big" className="pic-big" src={profilePic} onClick={loadProfilePic} data-test="profile-image" />
            <div className="profile">
                <h1>catanacomics</h1>
                <div className="profile-name">
                    <h2 data-test="name">{profileName}</h2>
                    <ion-icon name="pencil" onClick={loadProfileName} data-test="edit-name"></ion-icon>
                </div>
            </div>
        </div>
    )
}