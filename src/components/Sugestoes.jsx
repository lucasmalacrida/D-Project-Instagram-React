import Sugestao from "./Sugestao";
import suggestions from "../data/suggestions";

export default function Sugestoes() {
    return (
        <div>
            <div class="title-suggestions">
                <h3>Sugestões para você</h3>
                <h3 class="see-all">Ver tudo</h3>
            </div>
            <div class="container-suggestions">
                {suggestions.map(s => <Sugestao name={s.name} image={s.image} status={s.status} />)}
            </div>
            <div class="footer">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</div>
            <div class="copyright">© 2022 INSTAGRAM DO META</div>
        </div>
    )
}