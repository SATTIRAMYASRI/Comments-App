// Write your code here
// Write your code here
import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import './index.css'

class CommentItem extends Component {
  render() {
    const {
      commentDetails,
      userBackground,
      commentLiked,
      onDeleteComment,
    } = this.props
    const {id, name, comment, isLiked} = commentDetails
    const likeImgUrl = isLiked
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    const likedtext = isLiked ? 'likedtext-styling' : ''
    const onLikeBtnClicked = () => {
      commentLiked(id)
    }
    const onDeleteBtnClicked = () => {
      onDeleteComment(id)
    }
    const letterInprofile = name[0].toUpperCase()
    const userBackgroundColor = userBackground[Math.floor(Math.random() * 7)]
    return (
      <li className="li-container">
        <div className="bg-container">
          <div className="text-container">
            <h1 className={`user-profile ${userBackgroundColor}`}>
              {letterInprofile}
            </h1>
            <div className="commentuser-container">
              <div className="name-time-container">
                <h1 className="user-name">{name}</h1>
                <p className="time">{formatDistanceToNow(new Date())}</p>
              </div>
              <p className="user-comment">{comment}</p>
            </div>
          </div>
          <div className="like-delete-Container">
            <div className="like-container">
              <button
                type="button"
                className="button-styling"
                onClick={onLikeBtnClicked}
              >
                <img src={likeImgUrl} className="img-styling" alt="like" />
              </button>
              <p className={`like-text ${likedtext}`}>Like</p>
            </div>
            <button type="button" testid="delete" className="button-styling">
              {/* <button type="button" className="button-styling"> */}
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                alt="delete"
                className="img-styling"
                onClick={onDeleteBtnClicked}
              />
            </button>
          </div>
        </div>
        <hr className="line" />
      </li>
    )
  }
}
export default CommentItem
