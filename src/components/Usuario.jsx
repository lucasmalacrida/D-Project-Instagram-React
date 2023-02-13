import { useState } from "react";

export default function Usuario() {
    const [profileName,setProfileName] = useState("");
    const [profilePic,setProfilePic] = useState("");

    const initialProfileName = "catanacomics";
    const initialProfilePic = "../../assets/pics/catana.jpeg";

    function loadProfileName(){
        setProfileName(prompt("Digite seu novo nome:"));
    }

    function loadProfilePic(){
        setProfilePic(prompt("Digite a URL da sua nova foto:"));
    }

    return (
        <div class="logged-account">
            <img class="pic-big" src={profilePic? profilePic : initialProfilePic} onClick={() => loadProfilePic()} data-test="profile-image" />
            <div class="profile">
                <h1 data-test="name">{profileName? profileName : initialProfileName}</h1>
                <ion-icon name="pencil" onClick={() => loadProfileName()} data-test="edit-name"></ion-icon>
            </div>
        </div>
    )
}