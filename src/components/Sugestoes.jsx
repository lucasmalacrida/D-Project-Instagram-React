import Sugestao from "./Sugestao";

export default function Sugestoes() {
    const suggestions = [
        {
            name: "bad.vibes.memes",
            image: "../../assets/pics/badvibes.jpeg",
            status: "Segue você"
        },
        {
            name: "chirbirdart",
            image: "../../assets/pics/chibird.jpeg",
            status: "Segue você"
        },
        {
            name: "razoesparaacreditar",
            image: "../../assets/pics/razoes.jpeg",
            status: "Novo no Instagram"
        },
        {
            name: "adorable_animals",
            image: "../../assets/pics/adorable.jpeg",
            status: "Segue você"
        },
        {
            name: "smallcutecats",
            image: "../../assets/pics/small.jpeg",
            status: "Segue você"
        }
    ];

    return (
        <div>
            <div class="title-suggestions">
                <h3>Sugestões para você</h3>
                <h3 class="see-all">Ver tudo</h3>
            </div>
            <div class="container-suggestions">
                {suggestions.map( s => <Sugestao name={s.name} image={s.image} status={s.status} />)}
            </div>
            <div class="footer">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</div>
            <div class="copyright">© 2022 INSTAGRAM DO META</div>
        </div>
    )
}