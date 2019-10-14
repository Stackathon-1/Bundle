import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import BurgerButt from './burgerButt'
import {UserHome} from '.'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {clicked: false}
  }
  toggle() {
    this.setState({clicked: !this.state.clicked})
    console.log(this.state)
  }

  render() {
    let {handleClick, isLoggedIn} = this.props
    return (
      <div>
        <nav className="modern-nav">
          {isLoggedIn ? (
            <div id="main-nav">
              {/* The navbar will show these links after you log in */}
              <div>
                <Link to="/home">Home</Link>
              </div>

              <div>
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
              </div>
            </div>
          ) : (
            <div id="main-nav">
              {/* The navbar will show these links before you log in */}
              {/* <Link to="/login" className="rot-link">
          Login
        </Link>
        <Link to="/signup" className="rot-link">
          Sign Up
        </Link>
        <Link to="/start" className="rot-link">
          START
        </Link>
        <Link to="/" className="rot-link">
          HOME
        </Link> */}

              <div className="rot-link">QREW</div>

              <Link
                to={!this.state.clicked ? '/start' : '/'}
                onClick={this.toggle.bind(this)}
              >
                <BurgerButt />
              </Link>
            </div>
          )}
        </nav>
        {/* <hr /> */}
      </div>
    )
  }
}

//       <div>
//         <div className="rot-link">BUNDLEAPP</div>
//         <Link
//           to={!this.state.clicked ? '/start' : '/'}
//           onClick={this.toggle.bind(this)}
//         >
//           <BurgerButt />
//         </Link>
//       </div>
//     )
//   }
// }

// const Navbar = ({handleClick, isLoggedIn}) => (
//   <div>
//     <nav>
//       {isLoggedIn ? (
//         <div id="main-nav">
//           {/* The navbar will show these links after you log in */}
//           <div>
//             <Link to="/home">Home</Link>
//           </div>

//           <div>
//             <a href="#" onClick={handleClick}>
//               Logout
//             </a>
//           </div>
//         </div>
//       ) : (
//         <div id="main-nav">
//           {/* The navbar will show these links before you log in */}
//           {/* <Link to="/login" className="rot-link">
//             Login
//           </Link>
//           <Link to="/signup" className="rot-link">
//             Sign Up
//           </Link>
//           <Link to="/start" className="rot-link">
//             START
//           </Link>
//           <Link to="/" className="rot-link">
//             HOME
//           </Link> */}

//           <div className="rot-link">BUNDLEAPP</div>

//           <Link to="/start">
//             <BurgerButt />
//           </Link>
//         </div>
//       )}
//     </nav>
//     {/* <hr /> */}
//   </div>
// )

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
