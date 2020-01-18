import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CommentInput from "../components/CommentInput";
import { addComment } from "../reducers/comments";

class CommentInputContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onSubmit: PropTypes.func
    };
    constructor() {
        super();
        this.state = { username: "" };
    }

    componentDidMount() {
        this._loadUsername();
    }
    _loadUsername() {
        const username = localStorage.getItem("username");
        if (username) {
            this.setState({
                username
            });
        }
    }
    _saveUsername(username) {
        localStorage.setItem("username", username);
    }
    handleSubmit(comment) {
        if (!comment) return;
        if (!comment.username) {
            alert("请输入用户名");
            return;
        }
        if (!comment.content) {
            alert("请输入评论内容");
            return;
        }
        const { comments } = this.props;
        const newComments = [...comments, comment];
        localStorage.setItem("comments", JSON.stringify(newComments));
        if (this.props.onSubmit) {
            this.props.onSubmit(comment);
        }
    }
    render() {
        return (
            <CommentInput
                username={this.state.username}
                onSubmit={this.handleSubmit.bind(this)}
                onUserNameInputBlur={this._saveUsername}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: comment => {
            dispatch(addComment(comment));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentInputContainer);
