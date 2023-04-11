import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class NewPassword extends Component {
  state = {
    userName: '',
    password: '',
    website: '',
    searchInput: '',
    passwordList: [],
    checkBoxClicked: false,
  }

  submitPassword = event => {
    event.preventDefault()
    const {userName, password, website} = this.state

    const newPassword = {
      id: uuidv4(),
      website,
      userName,
      password,
    }

    this.setState(prevState => ({
      website: '',
      userName: '',
      password: '',
      passwordList: [...prevState.passwordList, newPassword],
    }))
  }

  getUserName = event => {
    this.setState({userName: event.target.value})
  }

  getWebsite = event => {
    this.setState({website: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  getSearchData = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteComment = uniqueId => {
    const {passwordList} = this.state
    const remainingPasswords = passwordList.filter(each => each.id !== uniqueId)
    this.setState({passwordList: remainingPasswords})
  }

  controlCheckBox = () => {
    this.setState(prevState => ({
      checkBoxClicked: !prevState.checkBoxClicked,
    }))
  }

  render() {
    const {
      userName,
      password,
      website,
      searchInput,
      checkBoxClicked,
      passwordList,
    } = this.state
    console.log(checkBoxClicked)

    const filteredPasswords = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="comment-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="card-container">
          <form
            className="comment-form-container"
            onSubmit={this.submitPassword}
          >
            <h1 className="heading">Add New Password</h1>
            <div className="single-input">
              <div className="logo-div">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website"
                />
              </div>

              <input
                placeholder="Enter Website"
                type="text"
                className="input-username"
                value={website}
                onChange={this.getWebsite}
              />
            </div>
            <div className="single-input">
              <div className="logo-div">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  alt="username"
                  className="website"
                />
              </div>

              <input
                placeholder="Enter Username"
                type="text"
                className="input-username"
                value={userName}
                onChange={this.getUserName}
              />
            </div>
            <div className="single-input">
              <div className="logo-div">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website"
                />
              </div>
              <input
                placeholder="Enter Password"
                type="password"
                className="input-username"
                value={password}
                onChange={this.getPassword}
              />
            </div>

            <button type="submit" className="submit-btn">
              Add
            </button>
          </form>

          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
            alt="password manager"
            className="comment-img"
          />
        </div>

        <div className="bot-container">
          <div className="total-commands-box">
            <div className="password-counter">
              <h1 className="command-para">Your Passwords</h1>
              <p className="total-command">{filteredPasswords.length}</p>
            </div>
            <div className="single-input">
              <div className="logo-div">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="website"
                />
              </div>
              <input
                placeholder="search"
                type="search"
                className="input-username"
                onChange={this.getSearchData}
              />
            </div>
          </div>
          <hr className="hr-rule" />
          <div className="password-counter2">
            <input
              placeholder="search"
              type="checkbox"
              className="check-box"
              id="CheckBox"
              onChange={this.controlCheckBox}
            />
            <label htmlFor="CheckBox" className="command-para">
              Show Passwords
            </label>
          </div>
          <ul className="ul-div">
            {filteredPasswords.length === 0 ? (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords"
                />
                <p className="command-para2">No Passwords</p>
              </div>
            ) : (
              filteredPasswords.map(each => (
                <PasswordItem
                  key={each.id}
                  passwordDetails={each}
                  isBoxClicked={checkBoxClicked}
                  deleteComment={this.deleteComment}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default NewPassword
