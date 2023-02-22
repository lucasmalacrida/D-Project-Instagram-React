import { useState } from "react";

export default function Post(props) {
    const [numLikes, setNumLikes] = useState(props.numLikes);
    const [likedPost, setLikedPost] = useState(false);
    const [savedPost, setSavedPost] = useState(false);

    function likePost() {
        if (likedPost){
            setNumLikes(numLikes - 1);
            setLikedPost(false);
        } else {
            setNumLikes(numLikes + 1);
            setLikedPost(true);
        }
    }

    function savePost() {
        savedPost? setSavedPost(false) : setSavedPost(true);
    }

    return (
        <div className="post" data-test="post">
            <div className="post-header">
                <img className="pic-medium" src={props.userPic} />
                <h1>{props.userName}</h1>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <img className="post-img" src={props.postImage} onDoubleClick={likedPost? null : likePost} data-test="post-image" />
            <div className="post-options">
                <ion-icon name={likedPost? "heart" : "heart-outline"} style={likedPost? {color: "#FE3140"} : {}} onClick={likePost} data-test="like-post"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name={savedPost? "bookmark" : "bookmark-outline"} onClick={savePost} data-test="save-post"></ion-icon>
            </div>
            <div className="likes">
                <img className="pic-small" src={props.likerPic} />
                <h2>Curtido por <b>{props.likerName}</b> e <b>outras <span data-test="likes-number">{numLikes.toLocaleString('pt-br')}</span> pessoas</b></h2>
            </div>
            <div className="comments">
                <div className="comment">
                    <h2><b>{props.userName}</b> {props.postCaption}</h2>
                </div>
                <div className="view-all">
                    <h1 className="see-all">Ver todos os {props.numComments.toLocaleString('pt-br')} comentários</h1>
                </div>
                <div className="comment">
                    <h2><b>{props.commentator}</b> {props.comment}</h2>
                    <ion-icon name="heart-outline" className="heart"></ion-icon>
                </div>
                <div className="post-send">
                    <ion-icon name="happy-outline"></ion-icon>
                    <input type="text" id="comment-bar" placeholder="Adicione um comentário" />
                    <h1>Publicar</h1>
                </div>
            </div>
        </div>
    )
}