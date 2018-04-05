import data from "views/obj";
import {countries} from "models/countries";

export default class countryData extends data{
	ready(view){
		view.queryView({ view:"datatable"}).parse(countries);
	}
}