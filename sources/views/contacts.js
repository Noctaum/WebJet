import {JetView} from "webix-jet";
import {contacts} from "models/contacts";

export default class DataView extends JetView{
	config(){
		return { 
					rows:[
						{cols:[
							{rows:[
								{	
									view:"template", 
					            	template:"CONTATS",
					            	type:"header"
					            },
								{
									view:"list",
									id:"contsctsList",
									autoConfig:true,
									select:true,
									minHeight:600,
									template:"<div>#Name#</div>#Email#",
									type:{
							        	height:70          
							     	},
								},
							]},
							{
								view:"form",
								elements:[
									{view:"text", label:"User name", name:"title"},
									{view:"text", label:"Email", name:"year"},
								]
							},
						]},
						{}
					]

					
				};
	}
	init(view){
		$$("contsctsList").parse(contacts);
	}
}