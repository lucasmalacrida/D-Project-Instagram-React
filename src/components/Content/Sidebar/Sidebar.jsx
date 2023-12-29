import User from "./User/User";
import Suggestions from "./Suggestions/Suggestions";

export default function Sidebar({ profileName, setProfileName, profilePic, setProfilePic }) {
    return (
        <div className="bigger-sidebar">
            <div className="sidebar">
                <User profileName={profileName} setProfileName={setProfileName} profilePic={profilePic} setProfilePic={setProfilePic} />
                <Suggestions />
            </div>
        </div>
    )
}