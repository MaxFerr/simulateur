import React from 'react';
import './loanType.css';

const LoanType=(props)=>{
	//getting all the loan type
	const loanTypeTitle=props.credits.map(cred=>{
		let type=`${cred[1].description?cred[1].description.title:cred[1].i18n.title}`
		return <option 
		value={type} 
		key={`${cred[0]}`}>{type}</option>
	})
	return (
		<div>
			<label className='typeLab' >Type de prêt</label>
			  <select onChange={props.handleLoanType} list="loanTypes" name="loanType" id="loanType">
			  <option value="Rien de sélectionné">Rien de sélectionné</option>			  
			    {loanTypeTitle}
			  </select>
		</div>
		)
}

export default LoanType;