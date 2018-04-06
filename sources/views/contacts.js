import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import form from "views/contactsForm";

export default class DataView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;

		let addBut = { 
			view:"button",
			label:_("Add new"), 
			click: () => this.$$("contsctsList").add({Name:"New contact", Email:"new@gmail.com"})

		};

		let list = { 
			rows:[
				{cols:[
					{rows:[
						{	
							view:"template", 
							template:_("CONTACTS"),
							type:"header"
						},
						{
							view:"list",
							id:"contsctsList",
							autoConfig:true,
							select:true,
							minHeight:300,
							template:"<div>#Name#</div>#Email#",
							type:{
								height:70          
							},
							on:{
								onAfterSelect:(id) =>{
									this.setParam("id", id, true);
									let values = this.$$("contsctsList").getSelectedItem();
									this.app.callEvent("onDataEditStop", [values]);
								}	
							}
						},
						{},
						addBut
					]},
					{$subview:form}
				]},
				{},
			]	
		};
		return list;
	}

	init(){
		$$("contsctsList").parse(contacts);
		
		
		//let a = $$("contsctsList").data.pull;

		//$$("contsctsList").select(1);
		// }
		// ready(){
		// 	this.app.callEvent("onDataEditStop", [this.$$("contsctsList").getSelectedItem()]);
		this.on(this.app, "setNew", (data) => {


			var id = $$("contsctsList").getSelectedId();
			$$("contsctsList").updateItem(id, data);
			
			// let crutch = $$("contsctsList").getSelectedId();
			// $$("contsctsList").remove(crutch);
			// $$("contsctsList").add(data);
			// $$("contsctsList").select(crutch);
		});
			

			


	//$$("contsctsList").sync(form);
	}
	urlChange(){
		var id = this.getParam("id");
		if (id) this.$$("contsctsList").select(id);
		else this.$$("contsctsList").select(1);


		// let changes = this.app.getService("state").getState();
		// this.$$("contsctsList").add(changes);
	} 
}