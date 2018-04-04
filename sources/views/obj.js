function dat(mainID, ...args){
	
	let length = args.length;
	length % 2 == 0 ? true : length = length-1;
	let mass = [];
	
	for(let i = 0; i<length; i+=2){
		mass.push({id:`${args[i]}`, header:`${args[i+1]}`, editor:"text"})
	}

	let table = { 
		view:"datatable", 
		id: `${mainID}`,
		editable:true,
		editaction:"dblclick",
		select:true,
		columns:mass,
	};

	let addBut = { 
   	 	view:"button", 
   	 	label:"Add new", 
		click: function (){
  			$$(`${mainID}`).add({ 
				},0);
		}
   	 };

	let delBut = {
		view:"button", 
		value:"Delete", 
		id:"del",
		click: function(){
			$$(`${mainID}`).remove($$(`${mainID}`).getSelectedId());
        	return false;
        }
    }

    let dt = {
    	rows:[table, addBut, delBut]
    }
    
	return dt;
}
	
export default dat;



	   	 	
		   
		