import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Corpo() {
    return (
        <div class="container-content">
            <div class="container-main">
                <Stories />
                
                <Posts />
            </div>

            <Sidebar />
        </div>
    )
}