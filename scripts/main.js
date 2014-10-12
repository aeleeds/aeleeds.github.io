function toggle_visibility(target) 
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

function toggle_visibilityTest(target) 
{
	$('.content').each(function(index) 
	{
   		if ($(this).attr("id") != target)   
   		{
   			$('.content').slideUp();
   		}
   	});
   	
    $('.content').each(function(index) 
     {
          if ($(this).attr("id") == target) 
          {
               	$(this).slideDown;
          }
     });
}

