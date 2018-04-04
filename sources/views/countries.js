import {JetView} from "webix-jet";
import {countries} from "models/countries";
import dat from "views/obj";

export default class DataView extends JetView{
	config(){
		return dat("countrs","id","ID","Name","Name");
	}
	init(view){
		$$("countrs").parse(countries);
	}
}