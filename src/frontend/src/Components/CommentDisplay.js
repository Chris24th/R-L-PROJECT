import { useEffect, useState } from "react";
import axios from "axios";

const CommentDisplay = (postID) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        try {
            axios({
                method: "post",
                url: "http://localhost/api/v1/displaycomment/",
                data: postID,
            }).then((response) => {
                setComments(response.data);
            });
        } catch (e) {
            console.error(e);
        }
    });

    // const commentList = comments.map((comment) => (
    //     <div>{comment.textContent}</div>
    // ));

    return (
        <div>
            {/* {commentList} */}
            <button onClick={() => console.log(postID)}>test</button>
        </div>
    );
};

export default CommentDisplay;
