function toggle_visibilityOld(target) 
{
     $('.content').each(function(index) 
     {
          if ($(this).attr("id") == target) 
          {
               	$(this).show();
          }
          else 
          {
               $(this).hide();
          }
     });
}

function toggle_visibility(target) 
{
	var body = document.body,
    html = document.documentElement;
	var docHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
	var spacer = document.getElementById('spacer');
	console.log('Height is' + docHeight);
	$(spacer).css('min-height', docHeight);
	
	console.log('Hide all but ' + target);
	$('.content').each(function(index) 
	{
   		if ($(this).attr("id") != target)   
   		{
   			$(this).slideUp();
   			console.log('Sliding up ' + $(this).attr('id'));
   		}
   	});
   	
   	setTimeout(function() 
   	{
		console.log('Slide down ' + target);
		$('.content').each(function(index) 
		 {
			console.log('Checking ' + $(this).attr('id'));
			if ($(this).attr("id") == target) 
			{
				$(this).slideDown();
				console.log('Sliding down ' + $(this).attr('id'));
			}
		 });
     }, 400);
     
     $(spacer).css('min-height','');
}

