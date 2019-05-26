import React, { Component } from 'react';
import './quiz.css';

class Quiz extends Component{
  constructor(props){
    super(props);
    this.state={
    }
    this.alphabet = 64;
  }


  // will run on clicking the answers options tabs
  onclickAnswer(index){
   this.props.selected(index);
   this.props.next();
  }

// creating templte for options of questions
  optionsList(){
    this.alphabet = 64;
    return this.props.question.options.map((item,index)=>{
    return(
      <span key={index} className="option">{String.fromCharCode(++this.alphabet)} - {item}</span>
    )
   })
  }

  // creating templte for question
  question(){
    return(
      <div className="question-area">
        <div className="question"> {this.props.question.text}</div>
        <div className="options">
          {this.optionsList()}
        </div>
      </div>
    )
  }

 // bottom answers tabs template
  answerTabs(){
    this.alphabet = 64;
    return this.props.question.options.map((item,index)=>{
    return(
      <span key={index} className="answer-tabs" onClick={()=>this.onclickAnswer(index)}>{String.fromCharCode(++this.alphabet)}</span>
    )
   })
  }


  render(){
    return (
      <div className="quiz">
      <div className="top">
        {this.question()}
        </div>
        <div className="answer-list">
         <div className="list">
          {this.answerTabs()}
          </div>
          </div>
      </div>
    )
  }
}

export default Quiz;
