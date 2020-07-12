import React from 'react';
import './loanType.css';
import {connect} from 'react-redux';

const LoanType=(dispatch)=>{
	//getting all the loan type
	const loanTypeTitle=dispatch.credits.map(cred=>{
		let type=`${cred[1].description?cred[1].description.title:cred[1].i18n.title}`
		return <option 
		value={type} 
		key={`${cred[0]}`}>{type}</option>
	});

	const handleLoanType=(e)=>{
		const val=e.target.value		
		dispatch.handleLoanTypeDis(val)
	};

	return (
		<div>
			<label className='typeLab' >Type de prêt</label>
			  <select onChange={handleLoanType} list="loanTypes" name="loanType" id="loanType">
			  <option value="Rien de sélectionné">Rien de sélectionné</option>			  
			    {loanTypeTitle}
			  </select>
		</div>
		);
};

const mapStateToProps=state=>{
	return {
		credits:state.credits
	};
};

const mapDispatchToProps=dispatch=>{
	return {
		handleLoanTypeDis:(val)=>dispatch({type:'SELECT_LOAN_TYPE',value:val})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoanType);