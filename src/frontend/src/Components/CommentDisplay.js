import { useEffect, useState } from "react";
import axios from "axios";

const CommentDisplay = (postID) => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        try {
            axios
                .get("http://localhost/api/v1/displaycomment/")
                .then(async (res) => {
                    setComment(res.data);
                });
        } catch (e) {
            console.log(e);
        }
    });

    const commentList = postID.map((data) => <div>xxxxxx</div>);

    return <div>{commentList}</div>;
};

export default CommentDisplay;
