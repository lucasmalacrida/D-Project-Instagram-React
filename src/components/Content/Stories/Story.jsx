import stories_background from "../../../assets/stories_background.jpg";

export default function Story(props) {
    return (
        <div className="story">
            <div className="box-story-pic">
                <img alt="story-ring" className="story-ring" src={stories_background} />
                <img alt="story-pic" className="story-pic pic-big" src={props.image} />
            </div>
            <h4>{props.name}</h4>
        </div>
    )
}