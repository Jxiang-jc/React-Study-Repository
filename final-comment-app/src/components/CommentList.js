import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

export default class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    };

    static defaultProps = {
        comments: []
    };

    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index);
        }
    }
    render() {
        return (
            <div>
                {this.props.comments.map((comment, idx) => (
                    <Comment
                        comment={comment}
                        key={idx}
                        index={idx}
                        onDeleteComment={this.handleDeleteComment.bind(this)}
                    />
                ))}
            </div>
        );
    }
}
