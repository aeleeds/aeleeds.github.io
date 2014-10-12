function toggle_visibilityOld(thechosenone) 
{
     $('.content').each(function(index) 
     {
          if ($(this).attr("id") == thechosenone) 
          {
               	$(this).show();
          }
          else 
          {
               $(this).hide();
          }
     });
}

function toggle_visibility(thechosenone) 
{
    $('.content').slideUp();
    $('.content').each(function(index) 
     {
          if ($(this).attr("id") == thechosenone) 
          {
               	$(this).slideDown;
          }
     });
}

