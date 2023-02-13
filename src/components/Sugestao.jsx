export default function Sugestao(props) {
    return (
        <div class="suggestion">
            <img class="pic-medium" src={props.image} />
            <div class="suggestion-about">
                <h1>{props.name}</h1>
                <h4>{props.status}</h4>
            </div>
            <h3 class="follow">Seguir</h3>
        </div>
    )
}