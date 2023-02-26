import "./styles/reset.css";
import "./styles/style.css";

import Navbar from "./components/Navbar"
import Corpo from "./components/Corpo"
import Lowerbar from "./components/Lowerbar"

export default function App() {
    return (
        <>
            <Navbar />

            <Corpo />
            
            <Lowerbar />
        </>
    );
}