import React, {Component} from "react";
import Comment from "./Comment";

export default class CommentList extends Component{
    render(){
        return(
            <div className="comment-list">
                <Comment author="Zsolt">Give me a zsolt hand!</Comment>
                <Comment author="Colin">How about no.</Comment>
            </div>
        )

    }
}