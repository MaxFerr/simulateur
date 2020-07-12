import React, { Component } from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import './App.css';
import LoanType from './components/loanType/loanType';
import LoanAmount from './components/loanAmount/loanAmount';
import LoanDescription from './components/loanDescription/loanDescription';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoanLengthList from './components/loanLengthList/loanLengthList';

const ref = React.createRef();


class App extends Component {
  
  handleClick = () =>
    ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });


  
  
  render(){    
      return (
      <div className="App">
        <h1 className="headerH">Simulateur</h1>
        <Container fluid id="cont">
          <Row>
            <Col sm={8}>
              <LoanType/>
              <LoanAmount/>              
              <LoanLengthList handleClick={this.handleClick}/>
            </Col>
            <Col sm={4} >
              <span ref={ref}>
              <LoanDescription/>
              </span>
            </Col>
          </Row>
        </Container>        
      </div>
    );
  };  
};


export default App;
