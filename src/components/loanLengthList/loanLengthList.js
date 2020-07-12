import React from 'react';
import LoanLength from '../loanLength/loanLength.js';
import './loanLengthList.css';
import {connect} from 'react-redux';

const LoanLengthList=(dispatch)=>{	
	//displaying all the possible range	
	const list=dispatch.ranges.map((range,i)=>{
		if(dispatch.selectedAmount<=range.range_max && dispatch.selectedAmount>=range.range_min){
			return range.range_duration.map((dur,ind)=>{
				return <LoanLength
						  defaultRangeDuration={dispatch.defaultRangeDuration} 
			              rangeDurationType={dispatch.rangeDurationType}
			              ranges={dur}
			              key={dur}
			              selectedAmount={dispatch.selectedAmount}
			              rangeRate={range.range_rate}
			              amountToPay={Math.floor((dispatch.selectedAmount*((range.range_rate/100)/12))/(1-(Math.pow(1+((range.range_rate/100)/12),(-dur)))))}						  
						  index={ind}
						  active={dispatch.active}
						  handleClick={dispatch.handleClick}
						/>
			});
		}else if(range.range_max===undefined){
			return <LoanLength
						  defaultRangeDuration={dispatch.defaultRangeDuration}
						  selectedAmount={dispatch.selectedAmount} 
			              rangeDurationType={dispatch.rangeDurationType}
			              ranges={range.range_duration}
			              key={range.range_duration}
			              rangeRate={range.range_rate}
			              amountToPay={Math.floor((dispatch.selectedAmount*((range.range_rate/100)/12))/(1-(Math.pow(1+((range.range_rate/100)/12),(-range.range_duration*12)))))}						  
						  index={i}
						  active={dispatch.active}
						  handleClick={dispatch.handleClick}
						/>
		};
		return null;
	});
	return (
		<div className='loanList'>
			<p>Durée</p>
			<div className='loanListCard'>
				{list}
			</div>
		</div>
		);
};



const mapStateToProps=state=>{
	return {
		defaultRangeDuration:state.defaultRangeDuration,
		rangeDurationType:state.rangeDurationType,
		ranges:state.ranges,
		active:state.active,
		selectedAmount:state.selectedAmount
	};
};


export default connect(mapStateToProps)(LoanLengthList);
