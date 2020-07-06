import React, {Component} from "react";
import CommentList from '../components/CommentList';

class CommentBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {
                    id: 1,
                    author: "Hannah",
                    text: "React is dope."
                },
                {
                    id: 2,
                    author: "Katie",
                    text: "I like Vue better though."
                }
            ]
        }
    }

    render(){
        return (
            <div className="comment-box">
               <h2>Comments</h2>
               <CommentList comments={this.state.comments} />
            </div>
        );
    }
}

export default CommentBox;