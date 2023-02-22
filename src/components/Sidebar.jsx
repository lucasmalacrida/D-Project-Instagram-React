import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

export default function Sidebar() {
    return (
        <div className="bigger-sidebar">
            <div className="sidebar">
                <Usuario />
                <Sugestoes />
            </div>
        </div>
    )
}