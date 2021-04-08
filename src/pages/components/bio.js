import React from 'react'
import { Link } from 'gatsby'

// styles
import { bioStyles } from './bio.module.css'

// const Bio = ({ children, showCount, showStatus }) => {
//   if (showStatus) {
//     return (
//       <div className={bioStyles}>
//         <h3>Bio</h3>
//         { children }
//         <br></br>
//         <Link to="/">Show Less</Link>
//       </div>
//     )
//   } else {
//     return (
//       <div className={bioStyles}>
//         <h3>Bio</h3>
//         { children.slice( 0, showCount )}...
//         <br></br>
//         <Link to="/">Show More</Link>
//       </div>
//     )
//   }

// }

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    if (this.state.isToggleOn) {
      return (
      <div className={bioStyles}>
        <h3>Bio</h3>
          { this.props.children }
          <br></br>
      <button onClick={this.handleClick}>
        Show Less
      </button>
       </div>
    );
    } else {
      return (
      <div className={bioStyles}>
        <h3>Bio</h3>
         { this.props.children.slice( 0, this.props.showCount) } ...
         <br></br>
      <button onClick={this.handleClick}>
        Show More
      </button>
       </div>
    );
    }
    
  }
}


export default Bio