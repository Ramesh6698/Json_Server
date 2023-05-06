import React from "react";

class Prop extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.pic} class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text"> {this.props.text} </p>
          <a href={this.props.link} target="_blank" class="btn btn-primary">
            {" "}
            Buy Now
          </a>
        </div>
        <div>price: {this.props.price}</div>
        <div>rating: {this.props.rating}</div>
      </div>
    );
  }
}

export default Prop;
