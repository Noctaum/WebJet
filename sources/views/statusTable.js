import data from "views/obj";
import {statuses} from "models/statuses";

export default class statusData extends data{
	ready(view){
		//view.queryView({ view:"datatable"}).parse(statuses);
		view.queryView({ view:"datatable"}).sync(statuses);
	}
}