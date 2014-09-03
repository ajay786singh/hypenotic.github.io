jQuery(document).ready(function() {
	var offset_val= 40;
	var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));  
    if (mobile==false) {  
        
		
		jQuery('.archive').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
			offset: offset_val    
		   });
		
    }
});

