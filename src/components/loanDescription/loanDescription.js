import React from 'react';
import './loanDescription.css';
import {connect} from 'react-redux';

const LoanDescritpion=(props)=>{
	return (
		<div className='description'>
			<p>Mensualités : {props.sum.monthlyPaymentSum}€ </p>
			<p>Type de crédit : {props.sum.loanTypeSum} </p>
			<p>Montant : {props.sum.amount}€</p>
			<p>TAEG : {props.sum.taeg}%</p>
			<p>Durée : {props.sum.rang} {props.sum.rangeDurationType==='years'?'ans':'mois'} </p>
			<p>Total à payer : {props.sum.total}€</p>
		</div>
		);
};

const mapStateToProps=state=>{
	return {
		sum:state.sum
	};
};



export default connect(mapStateToProps)(LoanDescritpion);
