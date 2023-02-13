import Post from "./Post";

export default function Posts() {
    const posts = [
        {
            userName: "meowed",
            userPic: "../../assets/pics/meowed.jpeg",
            postImage: "../../assets/posts/gato-telefone.jpeg",
            likerName: "respondeai",
            likerPic: "../../assets/pics/respondeai.jpeg",
            numLikes: 101.523,
            postCaption: "meowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
            numComments: 1.256,
            commentator: "barked",
            comment: "auauauuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"
        },
        {
            userName: "barked",
            userPic: "../../assets/pics/barked.jpeg",
            postImage: "../../assets/posts/dog.jpeg",
            likerName: "respondeai",
            likerPic: "../../assets/pics/respondeai.jpeg",
            numLikes: 95.532,
            postCaption: "auauauuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
            numComments: 1.124,
            commentator: "meowed",
            comment: "meowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
        },
        {
            userName: "natgeo",
            userPic: "../../assets/pics/natgeo.jpg",
            postImage: "../../assets/posts/natgeopost.png",
            likerName: "respondeai",
            likerPic: "../../assets/pics/respondeai.jpeg",
            numLikes: 154.123,
            postCaption: "wooooowwwwwwwwwwwwwwwwwwwwwwwww",
            numComments: 2.847,
            commentator: "meowed",
            comment: "meowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
        }
    ];

    return (
        <div class="posts">
            {posts.map( p => <Post
            userName={p.userName} userPic={p.userPic} postImage={p.postImage}
            likerName={p.likerName} likerPic={p.likerPic} numLikes={p.numLikes} postCaption={p.postCaption}
            numComments={p.numComments} commentator={p.commentator} comment={p.comment}
            />)}
        </div>
    )
}