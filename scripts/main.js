function toggle_visibilityTest(target) 
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
     }, 500);
}

