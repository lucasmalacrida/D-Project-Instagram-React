import "./styles/reset.css";
import "./styles/style.css";

import Navbar from "./components/Navbar/Navbar"
import Content from "./components/Content/Content"
import Lowerbar from "./components/Lowerbar/Lowerbar"

export default function App() {
    return (
        <>
            <Navbar />
            <Content />
            <Lowerbar />
        </>
    );
}