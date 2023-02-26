import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

import catana from "../assets/pics/catana.jpeg";

export default function Sidebar() {
    return (
        <div className="bigger-sidebar">
            <div className="sidebar">
                <Usuario userName="catanacomics" profileName="Catana" profilePic={catana} />
                <Sugestoes />
            </div>
        </div>
    )
}