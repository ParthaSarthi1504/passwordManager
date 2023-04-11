import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deleteComment, isBoxClicked} = props

  const {id, website, userName, password} = passwordDetails

  const onDelete = () => {
    deleteComment(id)
  }

  const initial = website.slice(0, 1)

  return (
    <li className="li-row">
      <p className="initial-design">{initial}</p>
      <div className="name-comment-div">
        <p className="website-name">{website}</p>
        <p className="profile-username">{userName}</p>

        {isBoxClicked ? (
          <p className="profile-password">{password} </p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="starts"
          />
        )}
      </div>
      <button
        type="button"
        className="del-btn"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
          className="del-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
