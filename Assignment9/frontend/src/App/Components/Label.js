import React from "react";

class Label extends React.Component {
  render() {
    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 0,
    };

    return (
      <div>
        <p style={labelStyle}>{this.props.color}</p>
      </div>
    );
  }
}

export default Label;
