import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Corpo() {
    return (
        <div className="container-content">
            <div className="container-main">
                <Stories />
                
                <Posts />
            </div>

            <Sidebar />
        </div>
    )
}