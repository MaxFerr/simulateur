import React from 'react';
import './loanAmount.css';
import {connect} from 'react-redux';

const LoanAmount=(dispatch)=>{
	const handleAmountChange=(e)=>{
		const amount=e.target.value		
		dispatch.handleAmountChangeDis(amount)
	};
	return (
		<div>
			<label className='amount'>Montant</label>
			  <input 			  
			  type='number' 
			  name="loanAmount" 
			  id="loanAmount"
			  onChange={handleAmountChange}			   
			  value={dispatch.selectedAmount} 
			  min={dispatch.loanAmountMin} 
			  max={dispatch.loanAmountMax} />
			  <input  list="devices" name="device" id="device" defaultValue='€'/>
			  <datalist id="devices">
			    <option value="€"/>			    
			  </datalist>
			  <span className='amount red'>
			  {dispatch.errorAmount
			  	?`Selectionnez un montant entre ${dispatch.loanAmountMin} - ${dispatch.loanAmountMax} €`
			  	:null
			  }
			  	</span>			  
		</div>
		);
};


const mapStateToProps=state=>{
	return {
		selectedAmount:state.selectedAmount,
		loanAmountMax:state.loanAmountMax,
		loanAmountMin:state.loanAmountMin,
		errorAmount:state.errorAmount,
	};
};

const mapDispatchToProps=dispatch=>{
	return {
		handleAmountChangeDis:(val)=>dispatch({type:'SELECT_AMOUNT',amountValue:val})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoanAmount);
