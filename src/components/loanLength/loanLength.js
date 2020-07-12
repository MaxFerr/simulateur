import React from 'react';
import './loanLength.css';
import {connect} from 'react-redux';

const LoanLength=(props)=>{

	const handleLoanCard =()=>{
		props.handleLoanCardDis(props.amountToPay,props.selectedAmount,props.rangeRate,props.rangeDurationType,props.ranges,props.index,props.length)
		props.handleClick()
	};

	return (
		<div className={`loanCard ${props.active===props.index?'active':null}`}	
		onClick={handleLoanCard}>			
			<p>{props.ranges} {props.rangeDurationType==='months'?'mois':'ans'}</p>
			<p>{props.amountToPay}€</p>			
		</div>
		);
};

const mapDispatchToProps=dispatch=>{
	return {
		handleLoanCardDis:(amountToPay,selectedAmount,rangeRate,rangeDurationType,ranges,index)=>dispatch({type:'LOANCARD_CLICK',payload:{
				amountToPay:amountToPay,
				selectedAmount:selectedAmount,
				rangeRate:rangeRate,
				rangeDurationType:rangeDurationType,
				ranges:ranges,
				index:index		

		} })
	};
};

export default connect(null,mapDispatchToProps)(LoanLength);
