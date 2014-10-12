function toggle_visibility(thechosenone) 
{
     $('.content').each(function(index) 
     {
          if ($(this).attr("id") == thechosenone) 
          {
               if (($(this).is(":hidden")){
               	$(this).slideDown();
               }
          }
          else 
          {
               $(this).slideUp();
          }
          setTimeout(function() {
      		}, 2000);
     });
}
