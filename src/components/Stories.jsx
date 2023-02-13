import Story from "./Story";
import stories from "../data/stories"

export default function Stories() {
    return (
        <div class="stories">
            <div class="stories-overflow">
                {stories.map(s => <Story name={s.name} image={s.image} />)}
            </div>

            <ion-icon id="stories-arrow" name="chevron-forward-circle"></ion-icon>
        </div>
    )
}