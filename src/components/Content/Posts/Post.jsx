import { useState } from "react";

export default function Post({ index, userPic, userName, postImage, likerPic, likerName, initialNumLikes, postCaption, numComments, comments, posts, setPosts }) {
    const [numLikes, setNumLikes] = useState(initialNumLikes);
    const [likedPost, setLikedPost] = useState(false);
    const [savedPost, setSavedPost] = useState(false);
    const [newComment, setNewComment] = useState('');

    function likePost() {
        setNumLikes(likes => likedPost ? likes - 1 : likes + 1);
        setLikedPost(liked => !liked);
    }

    function likeOnImg(e) {
        let likeIconTag = e.target.parentNode.lastElementChild;
        likeIconTag.classList.remove("hidden", "like-animation");
        setTimeout(() => likeIconTag.classList.add("like-animation"), 0);
        setTimeout(() => likeIconTag.classList.add("hidden"), 500);

        if (!likedPost) likePost();
    }

    const savePost = () => savedPost ? setSavedPost(false) : setSavedPost(true);

    function toPostComment() {
        const commentToAdd = {
            author: "catanacomics",
            comment: newComment
        };

        const postsToChange = [...posts];
        postsToChange[index].comments = [...posts[index].comments, commentToAdd];
        postsToChange[index].numComments += 1;

        setPosts(postsToChange);
        setNewComment('');
    }


    return (
        <div className="post" data-test="post">
            <div className="post-header">
                <img alt="pic-medium" className="pic-medium" src={userPic} />
                <h1>{userName}</h1>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <div className="container-img">
                <img alt="post-img" className="post-img" src={postImage} onDoubleClick={likeOnImg} data-test="post-image" />
                <ion-icon name="heart" class="like-on-img hidden"></ion-icon>
            </div>
            <div className="post-options">
                <ion-icon name={likedPost ? "heart" : "heart-outline"} style={likedPost ? { color: "#FE3140" } : {}} onClick={likePost} data-test="like-post"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name={savedPost ? "bookmark" : "bookmark-outline"} onClick={savePost} data-test="save-post"></ion-icon>
            </div>
            <div className="likes">
                <img alt="pic-small" className="pic-small" src={likerPic} />
                <h2>Curtido por <b>{likerName}</b> e <b>outras <span data-test="likes-number">{numLikes.toLocaleString('pt-br')}</span> pessoas</b></h2>
            </div>
            <div className="comments">
                <div className="comment">
                    <h2><b>{userName}</b> {postCaption}</h2>
                </div>
                <div className="view-all">
                    <h1 className="see-all">Ver todos os {numComments.toLocaleString('pt-br')} comentários</h1>
                </div>
                {comments.map(c =>
                    <div className="comment">
                        <h2><b>{c.author}</b> {c.comment}</h2>
                        <ion-icon name="heart-outline" className="heart"></ion-icon>
                    </div>
                )}
                <div className="post-send">
                    <ion-icon name="happy-outline"></ion-icon>
                    <input
                        type="text"
                        id="comment-bar"
                        placeholder="Adicione um comentário"
                        value={newComment}
                        onChange={e => setNewComment(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                toPostComment();
                            }
                        }}
                    />
                    <h1 onClick={toPostComment}>Publicar</h1>
                </div>
            </div>
        </div>
    )
}