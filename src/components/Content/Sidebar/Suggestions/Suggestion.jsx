export default function Suggestion(props) {
    return (
        <div className="suggestion">
            <img alt="pic-medium" className="pic-medium" src={props.image} />
            <div className="suggestion-about">
                <h1>{props.name}</h1>
                <h4>{props.status}</h4>
            </div>
            <h3 className="follow">Seguir</h3>
        </div>
    )
}