import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import form from "views/contactsForm";

export default class DataView extends JetView{
	config(){
		let list = { 
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
							on:{
								onAfterSelect:() =>{
									let values = $$("contsctsList").getSelectedItem();
			            			this.app.callEvent("onDataEditStop", [values]);
								}	
							}
						},
					]},
					{$subview:form}
				]},
				{}
			]	
		};
		return list;
	}

	init(){
		$$("contsctsList").parse(contacts);
	}
}