import { useState } from "react";

import Stories from "./Stories/Stories";
import Posts from "./Posts/Posts";
import Sidebar from "./Sidebar/Sidebar";

import catana from "../../assets/pics/catana.jpeg";

export default function Content() {
    const [profileName, setProfileName] = useState("Catana");
    const [profilePic, setProfilePic] = useState(catana);

    return (
        <div className="container-content">
            <div className="container-main">
                <Stories />

                <Posts />
            </div>

            <Sidebar profileName={profileName} setProfileName={setProfileName} profilePic={profilePic} setProfilePic={setProfilePic} />
        </div>
    )
}