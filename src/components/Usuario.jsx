import { useState } from "react";

export default function Usuario() {
    const [profileName,setProfileName] = useState("catanacomics");
    const [profilePic,setProfilePic] = useState("../../assets/pics/catana.jpeg");

    function loadProfileName(){
        let x=prompt("Digite seu novo nome:");
        x? setProfileName(x) : alert("Nome Inválido!");
    }

    function loadProfilePic(){
        let x=prompt("Digite a URL da sua nova foto:");
        x? setProfilePic(x) : alert("URL Inválida!");
    }

    return (
        <div className="logged-account">
            <img className="pic-big" src={profilePic} onClick={loadProfilePic} data-test="profile-image" />
            <div className="profile">
                <h1 data-test="name">{profileName}</h1>
                <ion-icon name="pencil" onClick={loadProfileName} data-test="edit-name"></ion-icon>
            </div>
        </div>
    )
}