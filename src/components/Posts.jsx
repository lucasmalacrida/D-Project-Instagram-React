import Post from "./Post";
import posts from "../data/posts";

export default function Posts() {
    return (
        <div className="posts">
            {posts.map( p => <Post
            key={p.postImage}
            userName={p.userName}
            userPic={p.userPic}
            postImage={p.postImage}
            likerName={p.likerName}
            likerPic={p.likerPic}
            initialNumLikes={p.initialNumLikes}
            postCaption={p.postCaption}
            numComments={p.numComments}
            commentator={p.commentator}
            comment={p.comment}
            />)}
        </div>
    )
}