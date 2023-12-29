import Post from "./Post";
import initialPosts from "../../../data/initialPosts";
import { useState } from "react";

export default function Posts() {
    const [posts, setPosts] = useState(initialPosts);

    return (
        <div className="posts">
            {posts.map((p, i) => <Post
                key={p.postImage}
                index={i}
                userName={p.userName}
                userPic={p.userPic}
                postImage={p.postImage}
                likerName={p.likerName}
                likerPic={p.likerPic}
                initialNumLikes={p.initialNumLikes}
                postCaption={p.postCaption}
                numComments={p.numComments}
                comments={p.comments}
                posts={posts}
                setPosts={setPosts}
            />)}
        </div>
    )
}