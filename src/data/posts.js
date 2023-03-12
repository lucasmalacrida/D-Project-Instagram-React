import catpic from "../assets/pics/meowed.jpeg";
import dogpic from "../assets/pics/barked.jpeg";
import natgeopic from "../assets/pics/natgeo.jpg";
import respondeaipic from "../assets/pics/respondeai.jpeg";

import catpost from "../assets/posts/gato-telefone.jpeg";
import dogpost from "../assets/posts/dog.jpeg";
import natgeopost from "../assets/posts/natgeopost.jpg";


const posts = [
    {
        userName: "meowed",
        userPic: catpic,
        postImage: catpost,
        likerName: "respondeai",
        likerPic: respondeaipic,
        initialNumLikes: 101523,
        postCaption: "meowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
        numComments: 1256,
        commentator: "barked",
        comment: "auauauuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"
    },
    {
        userName: "barked",
        userPic: dogpic,
        postImage: dogpost,
        likerName: "respondeai",
        likerPic: respondeaipic,
        initialNumLikes: 95532,
        postCaption: "auauauuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
        numComments: 1124,
        commentator: "meowed",
        comment: "meowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
    },
    {
        userName: "natgeo",
        userPic: natgeopic,
        postImage: natgeopost,
        likerName: "respondeai",
        likerPic: respondeaipic,
        initialNumLikes: 154123,
        postCaption: "wooooowwwwwwwwwwwwwwwwwwwwwwwww",
        numComments: 2847,
        commentator: "meowed",
        comment: "meowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
    }
];

export default posts;