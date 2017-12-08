import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  //helper method
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Still deciding";
      case false:
        return "I'm not logged in";
      default:
        return "I'm logged in";
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="left brand-logo">
            Emaily
          </a>
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
