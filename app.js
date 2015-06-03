$(document).ready( function() {
	$('.searchbox').submit( function(event){
		// zero out results if previous search has run
		$('.results').html('');
		// get the value of the tags the user submitted
		var searchTerm = $(this).find("input[name='searchTerm']").val();
		getRequest(searchTerm);
	});

});
	


var getRequest = function(searchTerm) { 

	var params = {
		version: 'v3',  
		campaign-cycle: 'YYYY', 
		lname: searchTerm,
		api-key: 'db48fdf669f8c9c3af242744eb4579b3:4:54239992',
		response-format: '.json'

	}

	var result = $.ajax ({
		url: "http://api.nytimes.com/svc/elections/us", 
		data: request,
		dataType: "json",
		type: "GET",


	}).done(function(result)) { 
		console.log(result);`
	}


}

var showResults 