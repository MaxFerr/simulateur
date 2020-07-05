import React, { Component } from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import './App.css';
import data from './credits.json'
import LoanType from './components/loanType/loanType'
import LoanAmount from './components/loanAmount/loanAmount'
import LoanDescription from './components/loanDescription/loanDescription'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoanLengthList from './components/loanLengthList/loanLengthList'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
        credits:Object.entries(data),
        loanType:"",
        loanTypeData:[],        
        loanAmountMax:0,
        loanAmountMin:0,
        selectedAmount:0,
        errorAmount:false,
        defaultRangeDuration:0,
        rangeDurationType:"",
        ranges:[],
        sum:{
          monthlyPaymentSum:0,
          loanTypeSum:"Pas encore sélectionné",
          amount:0,
          taeg:0,
          total:0,
          length:"",
          rang:0          
        },
        active:null
    }
  }
  handleLoanType=(event)=>{
    //handle the change and the selection of the loan type
    //reseting the state
    this.setState({
      loanTypeData:[],
      loanType:event.target.value,
      errorAmount:false,
      active:null,
      ranges:[],
      sum:{
          monthlyPaymentSum:0,
          loanTypeSum:"Pas encore sélectionné",
          amount:0,
          taeg:0,
          total:0,
          length:"",
          rang:0          
        }
    })
    //looping in credits
    for (var i = 0; i < this.state.credits.length; i++) {
      let index=i
      //checking if credits.description is true (it can be undefined because of 'credit hypo' loan type object)
      if(this.state.credits[i][1].description){
        //finding the data corresponding to the input's value 
        if(this.state.credits[i][1].description.title===event.target.value){
          //updating the state
          this.setState((prevState,props)=>{
            return {
              loanTypeData:prevState.credits[index],              
              loanAmountMax:prevState.credits[index][1].credit.amount_max,
              loanAmountMin:prevState.credits[index][1].credit.amount_min,
              selectedAmount:prevState.credits[index][1].credit.amount_default,
              defaultRangeDuration:prevState.credits[index][1].credit.range_duration_default,
              rangeDurationType:prevState.credits[index][1].credit.range_duration_type,
              ranges:prevState.credits[index][1].ranges
            }
          })
        }
      }else{
        //finding the data corresponding to the input's value (for 'credit hypo')
        //this if statement isnt necessary. It's just there if we add more data like
        //this.state.credits[i][1].i18n
        if(this.state.credits[i][1].i18n.title===event.target.value){          
          this.setState((prevState,props)=>{
            return {
              loanTypeData:prevState.credits[index],              
              loanAmountMax:prevState.credits[index][1].credit.amount_max,
              loanAmountMin:prevState.credits[index][1].credit.amount_min,
              selectedAmount:prevState.credits[index][1].credit.amount_default,
              defaultRangeDuration:prevState.credits[index][1].credit.range_duration_default,
              rangeDurationType:prevState.credits[index][1].credit.range_duration_type,
              ranges:prevState.credits[index][1].ranges
            }
          })
        }        
      }
    }    
  }

  handleAmountChange=(e)=>{
    //reseting the state when the amount change
    this.setState({
      selectedAmount:e.target.value,
      active:null,
        sum:{
            monthlyPaymentSum:0,
            loanTypeSum:"Pas encore sélectionné",
            amount:0,
            taeg:0,
            total:0,
            length:"",
            rang:0          
          }
    })
    //handling error if the amount is insufficient or superior to the data
    //corresponding to the range and the loan type 
    this.setState((prevState,props)=>{
      if(prevState.selectedAmount<prevState.loanAmountMin 
        || 
        prevState.selectedAmount>prevState.loanAmountMax){
        return {
          errorAmount:true
        } 
      }else{
        return {
          errorAmount:false
        } 
      }
    })          
  }

  handleLoanCard=(monthlyPaymentSum,amount,taeg,length,ranges,index)=>{
    //handle click on card   
    let totalTopay;
    //calculating the total to pay (transform year to month)
    if(length==='months'){
      totalTopay=monthlyPaymentSum*ranges;
    }else{
      totalTopay=monthlyPaymentSum*(ranges[0]*12);
    };
      //updating the state with the data received from the click on card
      this.setState((prevState,props)=>{
        return {
          sum:{
          monthlyPaymentSum:monthlyPaymentSum,
          loanTypeSum:prevState.loanType,
          amount:amount,
          taeg:taeg,
          total:totalTopay,
          length:length,
          rang:ranges
        },
        active:index
        }
      });
  }
  
  render(){    
      return (
      <div className="App">
        <h1 className="headerH">Simulateur</h1>
        <Container fluid id="cont">
          <Row>
            <Col sm={8}>
              <LoanType handleLoanType={this.handleLoanType} 
              credits={this.state.credits}
              />
              <LoanAmount 
              selectedAmount={this.state.selectedAmount} 
              loanAmountMax={this.state.loanAmountMax}
              loanAmountMin={this.state.loanAmountMin}
              handleAmountChange={this.handleAmountChange}
              errorAmount={this.state.errorAmount} 
              />              
              <LoanLengthList
              selectedAmount={this.state.selectedAmount} 
              defaultRangeDuration={this.state.defaultRangeDuration} 
              rangeDurationType={this.state.rangeDurationType}
              ranges={this.state.ranges}
              handleLoanCard={this.handleLoanCard}
              active={this.state.active}
              />
            </Col>
            <Col sm={4} >
              <LoanDescription sum={this.state.sum}/>
            </Col>
          </Row>
        </Container>        
      </div>
    );
  }  
}

export default App;
