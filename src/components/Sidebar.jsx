import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

export default function Sidebar() {
    return (
        <div className="bigger-sidebar">
            <div className="sidebar">
                <Usuario userName="catanacomics" profileName="Catana" profilePic="../../assets/pics/catana.jpeg" />
                <Sugestoes />
            </div>
        </div>
    )
}