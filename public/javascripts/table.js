
$(document).ready( function() {
	$('#datatable').dynatable({
		table: {
		  defaultColumnIdStyle: 'lowercase'
		},
		features: {
		  paginate: true,
		  search: true,
		  recordCount: false,
		  perPageSelect: true
		},
		
	  });    	
});
