import React from 'react';
import './loanAmount.css'

const LoanAmount=(props)=>{
	return (
		<div>
			<label className='amount'>Montant</label>
			  <input 			  
			  type='number' 
			  name="loanAmount" 
			  id="loanAmount"
			  onChange={props.handleAmountChange}			   
			  value={props.selectedAmount} 
			  min={props.loanAmountMin} 
			  max={props.loanAmountMax} />
			  <input  list="devices" name="device" id="device" defaultValue='€'/>
			  <datalist id="devices">
			    <option value="€"/>			    
			  </datalist>
			  <span className='amount red'>
			  {props.errorAmount
			  	?`Selectionnez un montant entre ${props.loanAmountMin} - ${props.loanAmountMax} €`
			  	:null
			  }
			  	</span>			  
		</div>
		)
}

export default LoanAmount;