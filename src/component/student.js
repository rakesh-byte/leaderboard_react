import React, { Component } from "react";
import "../component/style.css";

class Student extends Component {
    
  constructor(){
    super();
    this.state = {
        score :0,
        success : false
    }
  }

  componentDidMount(){
      this.setState(
          {
            score : this.props.score,
          }
      );
  }
  
  addScore(){
      this.setState({
          score:this.state.score + 1
      },
      () => {
        if(this.state.score >= 350){this.setState({success:true})}
      }
      );
  }

  minusScore(){
    this.setState({
        score:this.state.score - 1
    },
    () => {
      if(this.state.score < 350){this.setState({success:false})}
    }
    );
}

  render() {
    const isSuccess = this.state.success;
    let text;
    isSuccess?text = <span>Success</span>:text = <span>Failed</span>

    return (
      <div className="student">
        <div className="left">
          <h2 className="NameClass">
              {this.props.name}
              <button className = "addScore" onClick = {() => this.addScore()}>+</button>
              <button className = "minusScore" onClick = {() => this.minusScore()}>-</button>
           </h2>
          <p className="UniversityClass"> {this.props.university} {text}</p>
        </div>
        <div className="right">
          <div className="Score">{this.state.score}</div>
        </div>
      </div>
    );
  }
}

export default Student;
