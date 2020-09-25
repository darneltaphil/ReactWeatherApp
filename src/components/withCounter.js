import React, {useState} from 'react';

function withCounter() {
	const [count,setCount]= useState(0);
	
	console.log(count);
	
	const isEven= false
		
	
	function increaseCount (){
		setCount(count+1);
	}
	function decreaseCount (isEvenbool){
		if(!isEvenbool){
		setCount(count-1);
		   }
	}
	
  return (
    <div className="App">
      
	  <button onClick={()=>decreaseCount(isEven)}> decrease</button>
<p>{count} </p>
	  <button onClick={increaseCount}> increase</button>
	  
    </div>
  );

export default withCounter;
