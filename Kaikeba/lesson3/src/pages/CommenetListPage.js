// 组件优化技术
// 核心：需渲染需要被渲染的组件

import React, { Component } from "react";

class CommenetListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentList: []
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                commentList: [
                    {
                        id: 0,
                        author: "小明",
                        body: "这是小明写的文章"
                    },
                    {
                        id: 1,
                        author: "小红",
                        body: "这是小红写的文章"
                    }
                ]
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { commentList } = this.state;
        console.log("render", commentList);
        return (
            <div>
                <h1>CommenetListPage</h1>
                {commentList.map(item => (
                    <Comment key={item.id} data={item} />
                ))}
            </div>
        );
    }
}

export default CommenetListPage;

class Comment extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        const { author, body } = this.props.data;
        const { author: newAuthor, body: newBody } = nextProps.data;

        if (author === newAuthor && body === newBody) {
            return false;
        }
        return true;
    }
    render() {
        console.log("Comment render");
        const { author, body } = this.props.data;
        return (
            <div className="border">
                <p>{author}</p>
                <p>{body}</p>
            </div>
        );
    }
}
