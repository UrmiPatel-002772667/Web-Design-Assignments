import React from "react";
import Label from "../Components/Label";
import Square from "../Components/Square";

class ContactCard extends React.Component {
  render() {
    var cardStyle = {
      padding: 30,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)",
      height: 750,
    };
    return (
      <div style={cardStyle} className="container mt-5">
        <h2 className="mb-3">For further information, get in touch with us.</h2>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            Submit
          </button>
        </form>
        <Label color={this.props.color} />
        <Square color={this.props.color} />
      </div>
    );
  }
}
export default ContactCard;
