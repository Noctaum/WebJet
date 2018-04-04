import {JetView} from "webix-jet";

export default class DataView extends JetView{
	config(){
		
  	let segment =	{ 
			view:"segmented", 
			value:"en", 
			inputWidth:250, 
			options:[
    			{ id:"en", value:"En" },
    			{ id:"ru", value:"Ru"},
    			{ id:"js", value:"Js"}
  			],
  			align:"center"
  		}

	let centreSegm = {
		rows:[ {},segment,{} ]
	};
  		return centreSegm;
	}
	init(){
	}
}



