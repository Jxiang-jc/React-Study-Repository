import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentList from "../components/CommentList";
import { connect } from "react-redux";
import { initComments, deleteComment } from "../reducers/comments";
class CommentListContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onInitComments: PropTypes.func,
        onDeleteComment: PropTypes.func
    };
    componentDidMount() {
        this._initComments();
    }
    _initComments() {
        let comments = localStorage.getItem("comments");
        comments = comments ? JSON.parse(comments) : [];
        if (this.props.onInitComments) {
            this.props.onInitComments(comments);
        }
    }
    handlerDeleteComment(index) {
        const { comments } = this.props;
        const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
        localStorage.setItem("comments", JSON.stringify(newComments));
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index);
        }
    }
    render() {
        return (
            <CommentList
                comments={this.props.comments}
                onDeleteComment={this.handlerDeleteComment.bind(this)}
            />
        );
    }
}
const mapStatetoProps = state => {
    return {
        comments: state.comments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitComments: comments => {
            dispatch(initComments(comments));
        },
        onDeleteComment: commentIndex => {
            dispatch(deleteComment(commentIndex));
        }
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(CommentListContainer);
