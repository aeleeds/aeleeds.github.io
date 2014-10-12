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
	console.log(target);
	$('.content').each(function(index) 
	{
   		if ($(this).attr("id") != target)   
   		{
   			$(this).slideUp();
   		}
   	});
   	
   	console.log(target);
	$('.content').each(function(index) 
     {
        if ($(this).attr("id") == target) 
        {
            $(this).slideDown;
        }
     });
}

