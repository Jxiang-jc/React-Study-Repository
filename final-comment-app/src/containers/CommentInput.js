import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import CommentInput from '../components/CommentInput'
import {addComment} from '../reducers/comments'

class CommentInputContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onSubmit: PropTypes.func
    }
    constructor() {
        super()
        this.state = {username: ''}
    }

    componentDidMount() {

    }
    render() {
        return (
            <CommentInput
                username={this.state.username}
                onSubmit={}
                onUserNameInputBlur={}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (comment) => {
            dispatch(addComment(comment))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentInputContainer)