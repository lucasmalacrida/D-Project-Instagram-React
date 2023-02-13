import Story from "./Story";

export default function Stories() {
    const stories = [
        {
            name: "9gag",
            image: "../../assets/pics/9gag.jpeg"
        },
        {
            name: "meowed",
            image: "../../assets/pics/meowed.jpeg"
        },
        {
            name: "barked",
            image: "../../assets/pics/barked.jpeg"
        },
        {
            name: "nathanwpyle...",
            image: "../../assets/pics/nathan.jpeg"
        },
        {
            name: "wawawiwac...",
            image: "../../assets/pics/wawa.jpeg"
        },
        {
            name: "respondeai",
            image: "../../assets/pics/respondeai.jpeg"
        },
        {
            name: "filomoderna",
            image: "../../assets/pics/filosofia.jpeg"
        },
        {
            name: "memeriago...",
            image: "../../assets/pics/memeriago.jpeg"
        }
    ];

    return (
        <div class="stories">
            <div class="stories-overflow">
                {stories.map( s => <Story name={s.name} image={s.image} />)}
            </div>

            <ion-icon id="stories-arrow" name="chevron-forward-circle"></ion-icon>
        </div>
    )
}