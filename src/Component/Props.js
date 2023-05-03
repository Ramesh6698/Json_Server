import React from "react";

class Prop extends React.Component{

    render(){
        return(
            <div class="card" >
  <img src={this.props.pic} class="card-img-top" alt="..."></img>
  <div class="card-body" >
    <h5 class="card-title">{this.props.title}</h5>
    <p class="card-text"> {this.props.text} </p>
    <a href={this.props.link} class="btn btn-primary"> Buy Now</a>
  </div>
</div>
        )
    };
};

export default Prop;