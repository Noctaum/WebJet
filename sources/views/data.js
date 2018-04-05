import {JetView, plugins} from "webix-jet";
import countrTable from "views/countryTable";
import statusTable from "views/statusTable";

export default class DataView extends JetView{
	config(){
		var header = {
			type:"header", template:"Data", css:"app-top-panel"
		};

		{  
		 var menu = {cols:[
		    {
		    view:"list", gravity:1, select:true,
		    on:{
	            onAfterSelect:function(id){ 
	              this.$scope.$$(id).show();
	            }
	        },
        	data: [
		        { value:"countries", id:"countries", icon:"globe" },
				{ value:"statuses",  id:"statuses",  icon:"book" },
		      ]
		    },    
		    {   
		    	gravity:4,
		        cells:[
		          	{id:"countries", $subview:countrTable},  
		          	{id:"statuses", $subview:statusTable}                    
		      
		        ]
		     }
		   ]
		};

		var ui = {
			type:"line", rows:[header,{cols:[menu]}
			]};

		return ui;
	}
}
	init(){
	}
}


