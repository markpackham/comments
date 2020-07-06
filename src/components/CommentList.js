import React, {Component} from "react";
import Comment from "./Comment";

export default class CommentList extends Component{
    render(){
const commentNodes = this.props.comments.map(comment => {
    return(
    <Comment author={comment.author}>{comment.text}</Comment>
    )
})

        return(
            <div className="comment-list">
                {/* <Comment author="Zsolt">Give me a zsolt hand!</Comment>
                <Comment author="Colin">How about no.</Comment>
                <Comment author="Me">PHP is magic!</Comment> */}
                {commentNodes}
            </div>
        )

    }
}