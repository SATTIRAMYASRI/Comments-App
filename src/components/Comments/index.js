// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentList = []

class Comments extends Component {
  state = {commentList: initialCommentList, name: '', comment: ''}

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  commentLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentList} = this.state
    const res = commentList.filter(eachComment => eachComment.id !== id)
    this.setState({commentList: res})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentList, name, comment} = this.state

    console.log(commentList)

    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="card-container">
          <div>
            <p className="sub-heading">Say something about 4.0 Technologies</p>
            <form onSubmit={this.onAddComment}>
              <input
                value={name}
                placeholder="Your Name"
                className="name-input"
                onChange={this.onChangeName}
              />
              <br />
              <textarea
                value={comment}
                placeholder="Your Comment"
                className="comment-input"
                onChange={this.onChangeComment}
                rows="6"
              />
              <br />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="line" />
        <div className="comments-container">
          <h1 className="comment-counter">{commentList.length}</h1>
          <p className="comment-text">Comments</p>
        </div>
        <ul>
          {commentList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              userBackground={initialContainerBackgroundClassNames}
              key={eachComment.id}
              commentLiked={this.commentLiked}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
