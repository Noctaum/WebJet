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

		let delBut = { 
			view:"button",
			label:_("Remove"), 
			click: () => {
				let id = this.$$("contsctsList").getSelectedId();
				if(id) this.$$("contsctsList").remove(id);
			}

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
						delBut,
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
		//this.$$("contsctsList").parse(contacts);
		this.$$("contsctsList").sync(contacts);
		
		this.on(this.app, "setNew", (data) => {


			var id = this.$$("contsctsList").getSelectedId();
			this.$$("contsctsList").updateItem(id, data);
			
		});
	}
	urlChange(){
		var id = this.getParam("id");
		if (id) this.$$("contsctsList").select(id);
		else this.$$("contsctsList").select(1);
	} 
}