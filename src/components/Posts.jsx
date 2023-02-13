import Post from "./Post";
import posts from "../data/posts";

export default function Posts() {
    return (
        <div class="posts">
            {posts.map( p => <Post
            userName={p.userName} userPic={p.userPic} postImage={p.postImage}
            likerName={p.likerName} likerPic={p.likerPic} numLikes={p.numLikes.toLocaleString('pt-br')} postCaption={p.postCaption}
            numComments={p.numComments.toLocaleString('pt-br')} commentator={p.commentator} comment={p.comment}
            />)}
        </div>
    )
}