import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  //helper method
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "";
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
            {/* <li>
              <a href="sass.html">Login with Google</a>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

// shorter way to write it
function mapStateToProps({ auth }) {
  return { auth };
}

/*function mapStateToProps(state) {
  return { auth: state.auth };
}*/

export default connect(mapStateToProps)(Header);
