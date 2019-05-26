import React, { Component } from 'react';
import './report.css';

class Report extends Component{
  constructor(props){
    super(props);
    this.state={
      totalCorrect: 0
    }
    this.alphabet = 64;
    this.totalcorrect = 0;
    for(let i in this.props.questions){
      for(let j in this.props.questions[i].options){
      if((this.props.answers[i] == this.props.correctAnswersList[i]) && (this.props.correctAnswersList[i] == j)){
         this.totalcorrect++;
       }
     }
    }

  }

  // showing options of question with correct and incorrect answer using color code
  optionsList(optionsIndex,answer,correctAnswer){
    this.alphabet = 64;
    let activeClassName= '';
    return this.props.questions[optionsIndex].options.map((item,index)=>{
      if((answer ==correctAnswer) && (correctAnswer == index)){
         activeClassName = 'green';
       }else if((answer != correctAnswer) && (answer == index) ){
         activeClassName = 'red';
       }else if((answer != correctAnswer) && (correctAnswer == index) ){
         activeClassName = 'green';
       }else{
         activeClassName = '';
       }
    return(
      <span key={index} className={`option ${activeClassName}`}>{String.fromCharCode(++this.alphabet)} - {item}</span>
    )
  });

  }

// creating template to show all questions
questions(){
  return this.props.questions.map((item,index)=>{
  return(
    <div key={index} className="question-area">
      <div className="question"> {item.text}</div>
      <div className="options">
        {this.optionsList(index,this.props.answers[index],this.props.correctAnswersList[index])}
      </div>
    </div>
  )
 });
}
  render(){
    return (
    <div className="report">
        <div className="header">
          <header> Quiz test Report</header>
           <p>(Correct:{this.totalcorrect} / Incorrect: {this.props.questions.length - this.totalcorrect} )</p>

          </div>
        <div className="questionlist">
          {this.questions()}
          </div>
    </div>
    )
  }

}

export default Report;
