import React, { Component } from 'react';
import { Link } from 'gatsby';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    const { siteTitle } = this.props;
    return (
      <header>
        <div className={"btn-menu " + (this.state.isActive ? 'close' : '')} onClick={this.onClickHandler}>
          <div className={"btn-line " + (this.state.isActive ? 'show' : '')}></div>
          <div className={"btn-line " + (this.state.isActive ? 'show' : '')}></div>
          <div className={"btn-line " + (this.state.isActive ? 'show' : '')}></div>
        </div>
        <h1 className="logo"><Link to="/">{siteTitle}</Link></h1>

        <nav className={"menu " + (this.state.isActive ? 'show' : '')}>
          <ul className={"menu-nav " + (this.state.isActive ? 'show' : '')}>
            {/* <li className={"nav-item " + (this.state.isActive ? 'show' : '')}><Link className="nav-link" to="/">Home</Link></li> */}
            <li className={"nav-item " + (this.state.isActive ? 'show' : '')}><Link className="nav-link" to="/about">About</Link></li>
          </ul>
        </nav>
        {/* <input type="checkbox" id="nav-toggle" className="nav-toggle"/> */}
        {/* <nav>
          <ul>
            <li><Link to="/page-2">About</Link></li>
          </ul>
        </nav> */}
        {/* <label for="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label> */}
      </header>
    )
  }
}


// const Header = ({ siteTitle }) => (
//   <header>
//     <div className="btn-menu">
//       <div className="btn-line"></div>
//       <div className="btn-line"></div>
//       <div className="btn-line"></div>
//     </div>
//     <h1 className="logo"><Link to="/">{siteTitle}</Link></h1>
//     {/* <input type="checkbox" id="nav-toggle" className="nav-toggle"/> */}
//     <nav>
//       <ul>
//         <li><Link to="/page-2">About</Link></li>
//       </ul>
//     </nav>
//     {/* <label for="nav-toggle" className="nav-toggle-label">
//       <span></span>
//     </label> */}
//   </header>
// )

export default Header;
