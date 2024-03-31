import React from "react";

class Square extends React.Component {
  render() {
    var squareStyle = {
    
      height: 50,
      backgroundColor: this.props.color,
    };

    return (
      <div style={squareStyle}>
        Please contact us using the information below for further information. <br />
        <a href="mailto:patel.urmi@northeastern.edu">patel.urmi@northeastern.edu</a>  
        <br />
        <a href="tel:5086677726">508-667-7726</a>
      </div>
    );
  }
}

export default Square;
