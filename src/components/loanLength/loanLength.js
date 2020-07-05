import React from 'react';
import './loanLength.css'

const LoanLength=(props)=>{
	return (
		<div className={`loanCard ${props.active===props.index?'active':null}`}	
		onClick={()=>{props.handleLoanCard(props.amountToPay,
			props.selectedAmount,
			props.rangeRate,
			props.rangeDurationType,
			props.ranges,props.index)}}>			
			<p>{props.ranges} {props.rangeDurationType==='months'?'mois':'ans'}</p>
			<p>{props.amountToPay}€</p>			
		</div>
		)
}

export default LoanLength;