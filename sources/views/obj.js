import {JetView} from "webix-jet";

export default class DataTable extends JetView{
	config(){
		 
		const _ = this.app.getService("locale")._;
		
		let table = { 
			view:"datatable", 
			gravity:4, 
			editable:true,
			autoConfig:true,
			editaction:"dblclick",
			select:true
		};

		let addBut = { 
	   	 	view:"button",
	   	 	gravity:1, 
	   	 	label:_("Add new"), 
			click: () => this.table.add({})
   		};

		let delBut = {
			gravity:1, 
			view:"button", 
			value:_("Delete"), 
			click: () => {
				let id = this.table.getSelectedId();
				if(id) this.table.remove(id);
			}
   		}

   		return {rows:[table, addBut, delBut]}
	}
	
	init(){
		this.table = this.getRoot().queryView({ view:"datatable"});
	}
}

