import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import {countries} from "models/countries";
import {statuses} from "models/statuses";

export default class ContactForm extends JetView{

	config(){

		const _ = this.app.getService("locale")._;

		let saveBut = {
			view:"button", 
			value:_("Save"), 
			click: () => {
				let values = this.$$("form").getValues();
			    this.app.callEvent("setNew", [values]);

			//this.app.getService("state").setState(values);
				
			 //    this.app.callEvent("putsForm", [values]);
			}
   		}

		let form = {
			view:"form",
			id:"form",
			elements:[
				{view:"text", label:_("User name"), name:"Name"},
				{view:"text", label:_("Email"), name:"Email"},
				{view:"combo", label:_("Status"), name:"Status", options:statuses},
				{view:"combo", label:_("Country"), name:"Country", options:countries},
			]
		}
//$$("categoriesData").sync(categories);
		return {rows:[form,{},saveBut]};

	}
	init(){
		this.on(this.app, "onDataEditStop", (data) => {
	        if(data){
	        	$$("form").setValues(data);
	    	}
        });
	}
 //        this.app.setService("state", {
 //            getState:() => { return this.state; },
 //            setState:(state) => { this.state = state; }
 //        });
	// }
/*	
	urlChange(view){
		let a = contacts;
		var id = this.getParam("id");
		let length = a.length;
		for(let i = 0; i<length; i++){
			if(a[i].id == id) {
				view.setValues(a[i]);
				break;
			}
		}
    }
*/
}

