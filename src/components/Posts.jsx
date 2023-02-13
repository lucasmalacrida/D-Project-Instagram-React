export default function Posts() {
    return (
        <div class="posts">
            <div class="post">
                <div class="post-header">
                    <img class="pic-medium" src="../../assets/pics/meowed.jpeg" />
                    <h1>meowed</h1>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img class="post-img" src="../../assets/posts/gato-telefone.jpeg" />
                <div class="post-options">
                    <ion-icon name="heart" class="heart"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="likes">
                    <img class="pic-small" src="../../assets/pics/respondeai.jpeg" />
                    <h2>Curtido por <b>respondeai</b> e <b>outras 101.523 pessoas</b></h2>
                </div>
                <div class="comments">
                    <div class="comment">
                        <h2><b>meowed</b> meowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</h2>
                    </div>
                    <div class="view-all">
                        <h1 class="see-all">Ver todos os 1.256 comentários</h1>
                    </div>
                    <div class="comment">
                        <h2><b>barked</b> auauauuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</h2>
                        <ion-icon name="heart" class="heart"></ion-icon>
                    </div>
                    <div class="post-send">
                        <ion-icon name="happy-outline"></ion-icon>
                        <input type="text" id="comment-bar" placeholder="Adicione um comentário" />
                        <h1>Publicar</h1>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="post-header">
                    <img class="pic-medium" src="../../assets/pics/barked.jpeg" />
                    <h1>barked</h1>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img class="post-img" src="../../assets/posts/dog.jpeg" />
                <div class="post-options">
                    <ion-icon name="heart" class="heart"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="likes">
                    <img class="pic-small" src="../../assets/pics/respondeai.jpeg" />
                    <h2>Curtido por <b>respondeai</b> e <b>outras 95.532 pessoas</b></h2>
                </div>
                <div class="comments">
                    <div class="comment">
                        <h2><b>barked</b> auauauuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</h2>
                    </div>
                    <div class="view-all">
                        <h1 class="see-all">Ver todos os 1.124 comentários</h1>
                    </div>
                    <div class="comment">
                        <h2><b>meowed</b> meowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</h2>
                        <ion-icon name="heart" class="heart"></ion-icon>
                    </div>
                    <div class="post-send">
                        <ion-icon name="happy-outline"></ion-icon>
                        <input type="text" id="comment-bar" placeholder="Adicione um comentário" />
                        <h1>Publicar</h1>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="post-header">
                    <img class="pic-medium" src="../../assets/pics/natgeo.jpg" />
                    <h1>natgeo</h1>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <video class="post-img" autoplay muted>
                    <source src="../../assets/video.mp4" type="video/mp4" />
                    <source src="../../assets/video.ogv" type="video/ogv" />
                    Seu navegador não suporta vídeos.
                </video>
                <div class="post-options">
                    <ion-icon name="heart" class="heart"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="likes">
                    <img class="pic-small" src="../../assets/pics/respondeai.jpeg" />
                    <h2>Curtido por <b>respondeai</b> e <b>outras 154.123 pessoas</b></h2>
                </div>
                <div class="comments">
                    <div class="comment">
                        <h2><b>natgeo</b> Bear life</h2>
                    </div>
                    <div class="view-all">
                        <h1 class="see-all">Ver todos os 2.847 comentários</h1>
                    </div>
                    <div class="comment">
                        <h2><b>barked</b> auauuuuuuuuuuuuuuuuuuuuuuuuuuuuu</h2>
                        <ion-icon name="heart" class="heart"></ion-icon>
                    </div>
                    <div class="comment">
                        <h2><b>meowed</b> meowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</h2>
                        <ion-icon name="heart" class="heart"></ion-icon>
                    </div>

                    <div class="post-send">
                        <ion-icon name="happy-outline"></ion-icon>
                        <input type="text" id="comment-bar" placeholder="Adicione um comentário" />
                        <h1>Publicar</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}