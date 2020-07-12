import data from '../credits.json';

const initialState={
        credits:Object.entries(data),
        loanType:"",
        loanTypeData:[],        
        loanAmountMax:0,
        loanAmountMin:0,
        selectedAmount:0,
        errorAmount:false,
        defaultRangeDuration:0,
        rangeDurationType:"",
        ranges:[],
        sum:{
          monthlyPaymentSum:0,
          loanTypeSum:"Pas encore sélectionné",
          amount:0,
          taeg:0,
          total:0,
          rangeDurationType:"",
          rang:0          
        },
        active:null
    };

const reducer=(state=initialState,action )=>{
	switch(action.type){
		case 'SELECT_LOAN_TYPE':
		//handle the change and the selection of the loan type
    	//looping in credits
		    	state={
		    		...initialState,
		    		loanType:action.value,
		    		sum:{
			          	...initialState.sum,
			          	loanTypeSum:action.value
		        	},
		    	}; 
		      for (var i = 0; i < state.credits.length; i++){
		        let index=i;
		        let uState={
		        	  loanType:action.value,
		              loanTypeData:state.credits[index],              
		              loanAmountMax:state.credits[index][1].credit.amount_max,
		              loanAmountMin:state.credits[index][1].credit.amount_min,
		              selectedAmount:state.credits[index][1].credit.amount_default,
		              defaultRangeDuration:state.credits[index][1].credit.range_duration_default,
		              rangeDurationType:state.credits[index][1].credit.range_duration_type,
		              ranges:state.credits[index][1].ranges
		            };
		            //reseting the state
		            if(action.value!=='Rien de sélectionné'){
		            	//checking if credits.description is true (it can be undefined because of 'credit hypo' loan type object)
			            if(state.credits[i][1].description){
			              //finding the data corresponding to the input's value 
			                if(state.credits[i][1].description.title===action.value){
			                  //updating the state
			                  return {
			                  	...state,
			                  	...uState
			                  };
			                };
			            }else{
			              //finding the data corresponding to the input's value (for 'credit hypo')
			              //this if statement isnt necessary. It's just there if we add more data like
			              //state.credits[i][1].i18n
			                if(state.credits[i][1].i18n.title===action.value){
			                  //updating the state
			                  return {
			                  	...state,
			                  	...uState
			                  };
			                };
			            };
		            }else{
		            	return {
		            		...initialState
		            	};
		            };
		      };
		      break;
	    case 'SELECT_AMOUNT':	        
		    //reseting the state when the amount change
		    //handling error if the amount is insufficient or superior to the data
		    //corresponding to the range and the loan type 
		    let errAmount=action.amountValue<state.loanAmountMin
		        || 
		        action.amountValue>state.loanAmountMax ? true : false
		    return {
		    	...state,
		    	selectedAmount:action.amountValue,
		      	active:null,
		      	sum:{
		            monthlyPaymentSum:0,
		            loanTypeSum:"Pas encore sélectionné",
		            amount:0,
		            taeg:0,
		            total:0,
		            rangeDurationType:"",
		            rang:0          
		          },
		          errorAmount:errAmount      
		    };
		   
		case 'LOANCARD_CLICK':
		    //handle click on card   
		    let totalTopay;
		    //calculating the total to pay (transform year to month)
		    if(action.payload.rangeDurationType==='months'){
		      totalTopay=action.payload.amountToPay*action.payload.ranges;
		    }else{
		      totalTopay=action.payload.amountToPay*(action.payload.ranges[0]*12);
		    };		    
		      //updating the state with the data received from the click on card		      
		        return {
		        	...state,
		          sum:{
		          monthlyPaymentSum:action.payload.amountToPay,
		          loanTypeSum:state.loanType,
		          amount:state.selectedAmount,
		          taeg:action.payload.rangeRate,
		          total:totalTopay,
		          rangeDurationType:action.payload.rangeDurationType,
		          rang:action.payload.ranges
		        },
		        active:action.payload.index
		        };

	    default :
		    return state;		    
	};	
};


export default reducer;