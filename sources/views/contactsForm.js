import {JetView} from "webix-jet";

export default class ContactForm extends JetView{

	config(){

		let form = {
			view:"form",
			id:"form",
			elements:[
				{view:"text", label:"User name", name:"Name"},
				{view:"text", label:"Email", name:"Email"},
				{view:"text", label:"Status", name:"Status"},
				{view:"text", label:"Country", name:"Country"},
			]
		}

		return form;

	}
	init(view){
		this.on(this.app, "onDataEditStop", (data) => {
			debugger
	        if(data){
	        		view.setValues(data);
	    	}
        });
	}
}

