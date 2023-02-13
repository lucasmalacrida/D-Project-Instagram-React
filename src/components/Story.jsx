export default function Story(props) {
    return (
        <div class="story">
            <div class="box-story-pic">
                <img class="story-ring" src="../../assets/stories_background.jpg" />
                <img class="story-pic pic-big" src={props.image} />
            </div>
            <h4>{props.name}</h4>
        </div>
    )
}