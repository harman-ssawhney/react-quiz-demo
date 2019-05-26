import React, { Component } from 'react';
import './dashboard.css';
import  Quiz from '../quiz/quiz';
import  Report from '../report/report';
import FetchRates from '../../services/services'

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state={
      questionsList: null,
      questionIndex: 0,
      answers: [],
      showReport: false
    }
     this.correctAnswers = null;
     this.storeAnswers = this.storeAnswers.bind(this);
     this.next = this.next.bind(this);


  }

  componentDidMount(){
     // api call to fetch data
     FetchRates().then(res=>{
       this.setState({
         questionsList : res.data,
         question: res.data[0]
       });

       this.correctAnswers = res.data.map((item)=>{
           return item.answer;
       })
     })
     .catch(err=>{
       console.log(err);
     });
  }



  //get question
  next(){
    let newIndex = ++this.state.questionIndex;
    if(newIndex < this.state.questionsList.length){
      this.setState({
        questionIndex : newIndex,
      });
    }else{
      this.setState({
        showReport : true
      });
    }
  }

  // to store answers by user
  storeAnswers(selected){
    let answersAry = this.state.answers;
     answersAry.push(selected);
     this.setState({
       answers : answersAry
     });

  }

  render(){
    // render questions if data is available else show loading
    if(this.state.questionsList){
      if(!this.state.showReport){
    return (
      <div className="dashboard">
      <div className="count-header">
        <header> Quiz {(this.state.questionIndex+1)} of {this.state.questionsList.length}</header>
        </div>
        <Quiz question={this.state.questionsList[this.state.questionIndex]} next={this.next} selected={this.storeAnswers}/>
      </div>
    )
  }else{
    return(
    <div className="dashboard">
      <Report questions={this.state.questionsList} answers={this.state.answers} correctAnswersList={this.correctAnswers}  />
    </div>
    )
  }
  }else{
    return (
    <div className="dashboard">
      <div className="loading">Loading your quiz...</div>
    </div>
   )
  }
  }
}

export default Dashboard;
