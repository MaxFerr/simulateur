import React from 'react';
import './loanDescription.css';

const LoanDescritpion=(props)=>{
	return (
		<div className='description'>
			<p>Mensualités : {props.sum.monthlyPaymentSum}€ </p>
			<p>Type de crédit : {props.sum.loanTypeSum} </p>
			<p>Montant : {props.sum.amount}€</p>
			<p>TAEG : {props.sum.taeg}%</p>
			<p>Durée : {props.sum.rang} {props.sum.length==='years'?'ans':'mois'} </p>
			<p>Total à payer : {props.sum.total}€</p>
		</div>
		)
}

export default LoanDescritpion;