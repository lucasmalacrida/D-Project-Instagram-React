export default function Post(props) {
    return (
        <div class="post">
            <div class="post-header">
                <img class="pic-medium" src={props.userPic} />
                <h1>{props.userName}</h1>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <img class="post-img" src={props.postImage} />
            <div class="post-options">
                <ion-icon name="heart" class="heart"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            <div class="likes">
                <img class="pic-small" src={props.likerPic} />
                <h2>Curtido por <b>{props.likerName}</b> e <b>outras {props.numLikes} pessoas</b></h2>
            </div>
            <div class="comments">
                <div class="comment">
                    <h2><b>{props.userName}</b> {props.postCaption}</h2>
                </div>
                <div class="view-all">
                    <h1 class="see-all">Ver todos os {props.numComments} comentários</h1>
                </div>
                <div class="comment">
                    <h2><b>{props.commentator}</b> {props.comment}</h2>
                    <ion-icon name="heart" class="heart"></ion-icon>
                </div>
                <div class="post-send">
                    <ion-icon name="happy-outline"></ion-icon>
                    <input type="text" id="comment-bar" placeholder="Adicione um comentário" />
                    <h1>Publicar</h1>
                </div>
            </div>
        </div>
    )
}