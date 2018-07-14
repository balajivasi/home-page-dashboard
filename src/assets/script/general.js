$(document).ready(function(){
	introJs().setOption('showStepNumbers','false').start();
	$('#LeftMenu').hide();
	$('#dots,.closeIcon').on('click',function(){
		var width=$( window ).width();
		
		if($('.MainSite').hasClass('menuopen')){
			$('.MainSite').removeClass('menuopen');

			if(width>=800){
				$('#LeftMenu').animate({
		    		width: "0px"
		  		}, 10,function(){
		  			$('#LeftMenu').hide();
		  		} )

				/*$('.mainpanel').animate({
					width:"100%"
				},10)*/
			}else{
				$('#LeftMenu').hide();
			}
			

		}else{
			$('.MainSite').addClass('menuopen');
			if(width>=800){
				$('#LeftMenu').show();
				/*$('.menuopen .mainpanel').animate({
					width:"100%"
				},10)*/

				$('#LeftMenu').animate({
		    		width: "400px"
		  		}, 600 )
			}else{
				$('#LeftMenu').fadeIn();
				$('.PageMessage').hide()
			}
			
		}
		
		
	})

	$('.tabNav li').on('click',function(e){
		e.preventDefault();
		$('.tabNav li').removeClass('active')
		$(this).addClass('active')
		var id=$(this).attr('data-clickId');
		$('.tabcontent').hide();
		$('#'+id).show()
	})

	$('.createposting').on('click',function(){
		$('.overlay,.Posting').show()
	})

	$('.newSeason').on('click',function(){
		$('.overlay,.sessionSettings').show()
	})

	jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
    
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
    
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
    
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            
            // Check if the viewport is set, else we gonna set it if we can.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
    
            // Replace image with new SVG
            $img.replaceWith($svg);
    
        }, 'xml');
    
    });
    
	var height=$(document).height()+50;
	$('#LeftMenu').height(height);

	$('.searchIcon').on('click',function(){
		$(this).hide();
		$('.search,.searchclose').show();
		$('.notificationIcon,.accountIcon').removeClass('active');
		$('.accountDetails,.notification').hide()
	})
	
	$('.searchclose').on('click',function(){
		$('.searchIcon').show();
		$('.search,.searchclose').hide()
	})
	$('.notificationIcon').on('click',function(){
		$('.notification').toggle();
		$('.notificationIcon').toggleClass('active');
		$('.searchIcon').show()
		$('.search,.searchclose,.accountDetails').hide();
		$('.accountIcon').removeClass('active');

	})
	$('.accountIcon a').on('click',function(){
		$('.accountDetails').toggle();
		$('.accountIcon').toggleClass('active');
		$('.searchIcon').show()
		$('.notificationIcon').removeClass('active');
		$('.search,.searchclose,.notification').hide();
	})

	$('.navBar').on('click',function(){
		if($(this).hasClass('activeNav')){
			$(this).removeClass('activeNav')
			$('.mainBody').removeClass('navActive');
			$('.pageMenuBar').fadeOut('fast')
		}else{
			$(this).addClass('activeNav');
			$('.pageMenuBar').fadeIn('slow')
			$('.mainBody').addClass('navActive');
		}
		
	})
	$('.pageMenuBar>ul>li>a').on('click',function(){
		$(this).next('ul').slideToggle()
	})

	$('.close,.popcancel').on('click',function(){
		$('.overlay,.popup').hide()
	})
	$('.openwarning').on('click',function(){
		$('.overlay,.popwarning').show()
	})
	$('.openinformation').on('click',function(){
		$('.overlay,.popinformation').show()
	})
	$('.openSuccess').on('click',function(){
		$('.overlay,.popsuccess').show()
	})

	$('.PageMessage .close').on('click',function(){
		$('.PageMessage').fadeOut(100);
	})


	$('body').on('click', '.menuopen section,.menuopen footer,.menuopen .headerSeperate,.menuopen .menuIcons',function(){
		var width=$( window ).width();
		$('.MainSite').removeClass('menuopen');

		if(width>=600){
			$('#LeftMenu').animate({
	    		width: "0px"
	  		}, 0,function(){
	  			$('#LeftMenu').hide();
	  		} )

			$('.mainpanel').animate({
				width:"100%"
			},600)
		}else{
			$('#LeftMenu').hide();
		}
	})

	$('.tableselect tr td').on('click',function(){
		$('.tableselect tr td.selected').removeClass('selected')
		$(this).addClass('selected')
	})

	$('.arrowbtnTable').on('click',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active').html('&#9650;');
			$(this).parents('tr').siblings('.showHide').hide()
		}else{
			$(this).addClass('active').html('&#9660;');
			$(this).parents('tr').siblings('.showHide').show()
		}
	})

	$('.tabsNav li a').on('click',function(e){
		e.preventDefault()
	})
	$('.tabsNav li').on('click',function(){
		var id=$(this).attr('data-tab');
		$('.tabsNav li').removeClass('active')
		$(this).addClass('active')
		$('.tabs').hide();
		$('.'+id).show()
	})
	$('.rosterChange').on('change',function(){
		var id=$(this).val()
		$('.tabNavigation').show();
		$('.rosterTab,.am,.pm').hide();
		$('.am,.pm').removeClass('active')
		switch(id){
			case 'am':
				$('.am').show()
				$('.tabNavnoEvent li.am').addClass('active')
				break;
			case 'pm':
				$('.pm').show()
				$('.tabNavnoEvent li.pm').addClass('active')
				break;
			case 'both':
				$('.tabNavnoEvent li.am,.tabNavnoEvent li.pm').show()
				$('.am').show()
				$('.tabNavnoEvent li.am').addClass('active')
				break;
			default: 
				$('.tabNavigation').hide()
				break;
		}
		
	})

	$('.am').on('click',function(e){
		e.preventDefault();
		$('.am,.pm').removeClass('active');
		$('.tabNavnoEvent li.am').addClass('active')
		$('div.pm.rosterTab').hide()
		$('div.am.rosterTab').show()
	})
	$('.pm').on('click',function(e){
		e.preventDefault();
		$('.am,.pm').removeClass('active');
		$('.tabNavnoEvent li.pm').addClass('active')
		$('div.am.rosterTab').hide()
		$('div.pm.rosterTab').show()
	})

	$('#selectCategory').on('change',function(){
		var value=$(this).val();
		switch(value){
			case 'staff':
				$('.hide').hide();
				$('#category,#staff').show();
				break;
			case 'school':
				$('.hide').hide();
				$('#category,#school').show();
				break;
			case 'organization':
				$('.hide').hide();
				$('#category,#organization').show();
				break;
			case 'program':
				$('.hide').hide();
				$('#category,#program').show();
				break;
			case 'event':
				$('.hide').hide();
				$('#category,#event').show();
				break;
			default:
				$('.hideCategory').hide()
				break;
		}
	})

	$('.addDetails').on('click',function(e){
		e.preventDefault();
		$('#addDetails').show()
	})

	$('#link').on('change',function(e){
		e.preventDefault();
		if($(this).is(':checked')){
			$('#fileUrl').show()
		}else{
			$('#fileUrl').hide()
		}
	})

	$('.location').on('change',function(e){
		e.preventDefault();
		if($(this).is(':checked')){
			$('#location').show()
		}else{
			$('#location').hide()
		}
	})
	$('.Waiting').on('change',function(e){
		e.preventDefault();
		if($(this).is(':checked')){
			$('#Waiting').show()
		}else{
			$('#Waiting').hide()
		}
	})
	$('.newPersion').on('change',function(e){
		e.preventDefault();
		if($(this).is(':checked')){
			$('#newPersion').show()
		}else{
			$('#newPersion').hide()
		}
	})
	$('.elocation').on('change',function(e){
		e.preventDefault();
		if($(this).is(':checked')){
			$('#elocation').show()
		}else{
			$('#elocation').hide()
		}
	})
	
	$('.eventList').on('click',function(){
		$('.eventList').text($(this).text() === 'List' ? 'Grid' : 'List')
		if($(this).text() === 'List'){
			$('#List').show();
			$('#Grid').hide()
		}else{
			$('#List').hide();
			$('#Grid').show()
		}
	})

	$('.eventCatList').on('click',function(){
		$('.eventCatList').text($(this).text() === 'List' ? 'Grid' : 'List')
		if($(this).text() === 'List'){
			$('#ListCat').show();
			$('#GridCat').hide()
		}else{
			$('#ListCat').hide();
			$('#GridCat').show()
		}
	})

	$('#eventType').on('change',function(e){
		e.preventDefault();
		var value=$(this).val();
		switch(value){
			case 'ProfessionalDevelopment':
				$('.tabsHide').hide()
				$('#ProfessionalDevelopment').show()
				$('.tabshow').hide()
				break;
			default:
				$('#ProfessionalDevelopment,.tabshow,.tabsHide').hide()
		}
	})

	$('.ParticipantsDrop').on('change',function(e){
		e.preventDefault();
		var value=$(this).val();
		switch(value){
			case 'add':
				$('.phide').hide()
				$('#Add').show();
				break;
			case 'view':
				$('.phide').hide()
				$('#view').show()
				break;
			default:
				$('.phide').hide()
				break;
		}
	})

	$('.activity').on('change',function(e){
		e.preventDefault();
		var id=$(this).val();
		switch(id){
			case 'larkin':
				$('.activityDetails').show()
				break;
			case 'anderson':
				$('.activityDetails').show()
				break;
			default:
				$('.activityDetails').hide()
				break;
		}
	})

	$('.selectView').on('change',function(){
		var value= $(this).val();
		debugger;
		if(value === 'grid'){
			$('#searchDetails').show();
			$('#searchCalendar').hide()
		}else if(value === "calendar"){
			$('#searchDetails').hide();
			$('#searchCalendar').show()
		}else{
			$('#searchDetails,#searchCalendar').hide();
		}
	})

})