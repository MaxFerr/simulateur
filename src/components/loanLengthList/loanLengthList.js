import React from 'react';
import LoanLength from '../loanLength/loanLength.js';
import './loanLengthList.css';

const LoanLengthList=(props)=>{
	//displaying all the possible range
	const list=props.ranges.map((range,i)=>{
		if(props.selectedAmount<=range.range_max && props.selectedAmount>=range.range_min){
			return range.range_duration.map((dur,ind)=>{
				return <LoanLength
						  defaultRangeDuration={props.defaultRangeDuration} 
			              rangeDurationType={props.rangeDurationType}
			              ranges={dur}
			              key={dur}
			              selectedAmount={props.selectedAmount}
			              rangeRate={range.range_rate}
			              amountToPay={Math.floor((props.selectedAmount*((range.range_rate/100)/12))/(1-(Math.pow(1+((range.range_rate/100)/12),(-dur)))))}
						  handleLoanCard={props.handleLoanCard}
						  index={ind}
						  active={props.active}
						/>
			});
		}else if(range.range_max===undefined){
			return <LoanLength
						  defaultRangeDuration={props.defaultRangeDuration}
						  selectedAmount={props.selectedAmount} 
			              rangeDurationType={props.rangeDurationType}
			              ranges={range.range_duration}
			              key={range.range_duration}
			              rangeRate={range.range_rate}
			              amountToPay={Math.floor((props.selectedAmount*((range.range_rate/100)/12))/(1-(Math.pow(1+((range.range_rate/100)/12),(-range.range_duration*12)))))}
						  handleLoanCard={props.handleLoanCard}
						  index={i}
						  active={props.active}
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

export default LoanLengthList;