/*
Load Datasets From Ghent
*/
var HondenvoorzieningenAPI = {
	init: function(connString) {
		this._connString = connString;
	},
	getHondenvoorzieningen: function() {
		var url = this._connString;
		return Utils.getJSONByPromise(url);
	}	
};

/*
Database classes
*/
var PetsDbContext = {
	init: function(connString) {
		this._connString = connString;// Connection string to localstorage
		// Application Data object
		this._appData = {
			"sla": "tomaat"	
		};
		// Get application data from the localstorage
		if(Utils.store(this._connString) != null) {
			this._appData = Utils.store(this._connString);
		} else {
			Utils.store(this._connString, this._appData)
		}
	}	
};