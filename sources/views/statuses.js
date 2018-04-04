import {JetView} from "webix-jet";
import {statuses} from "models/statuses";
import dat from "views/obj";

export default class DataView extends JetView{
	config(){
		return dat("status","Name","Name","Icon","Icon");
	}
	init(view){
		$$("status").parse(statuses);
	}
}