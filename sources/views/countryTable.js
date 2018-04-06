import data from "views/obj";
import {countries} from "models/countries";

export default class countryData extends data{
	ready(view){
		//view.queryView({ view:"datatable"}).parse(countries);
		view.queryView({ view:"datatable"}).sync(countries);
	}
	add(){
		countries.add({value:"New Country"})
	}
	dell(){
		var one = this.table.getSelectedId();
		if(one) countries.remove(one);
	}
}