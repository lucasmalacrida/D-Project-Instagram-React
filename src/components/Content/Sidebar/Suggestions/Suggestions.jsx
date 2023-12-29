import Suggestion from "./Suggestion";
import suggestions from "../../../../data/suggestions";

export default function Sugestoes() {
    return (
        <>
            <div className="title-suggestions">
                <h3>Sugestões para você</h3>
                <h3 className="see-all">Ver tudo</h3>
            </div>
            <div className="container-suggestions">
                {suggestions.map(s => <Suggestion key={s.name} name={s.name} image={s.image} status={s.status} />)}
            </div>
            <div className="footer">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</div>
            <div className="copyright">© 2022 INSTAGRAM DO META</div>
        </>
    )
}