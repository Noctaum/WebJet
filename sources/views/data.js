import {JetView, plugins} from "webix-jet";

export default class DataView extends JetView{
	config(){
		
		var header = {
			type:"header", template:"Data", css:"app-top-panel"
		};

		var menu = {
			view:"menu", id:"data:menu", 
			width:180, layout:"y", select:true,
			template:"<span class='webix_icon fa-#icon#'></span> #value# ",
			data:[
				{ value:"Countries", id:"countries", icon:"globe" },
				{ value:"Statuses",  id:"statuses",  icon:"book" },
			]
		};

		var ui = {
			type:"line", rows:[header,{cols:[
				{ type:"clean", css:"app-left-panel",
					margin:20, rows: [menu ]},
				{ rows:[ { height:10}, 
					{ type:"clean", css:"app-right-panel", padding:4, rows:[
						{ $subview:true } 
					]}
				]}
			]}]
		};


		return ui;
	}

	init(){
		this.use(plugins.Menu, "data:menu");
	}
}


