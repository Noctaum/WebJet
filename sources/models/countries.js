// export const countries = [
// 	{"id":1,"value":"USA"},
// 	{"id":2,"value":"Canada"},
// 	{"id":3,"value":"Italy"}
// ];

export const countries = new webix.DataCollection({ 
	data:[
		{"id":1,"value":"USA"},
		{"id":2,"value":"Canada"},
		{"id":3,"value":"Italy"}
	],
	save:"rest->http://localhost:8096/api/v1/countries"
});