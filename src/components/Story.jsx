export default function Story(props) {
    return (
        <div className="story">
            <div className="box-story-pic">
                <img className="story-ring" src="../../assets/stories_background.jpg" />
                <img className="story-pic pic-big" src={props.image} />
            </div>
            <h4>{props.name}</h4>
        </div>
    )
}