function toggle_visibility(thechosenone) 
{
     $('.content').each(function(index) 
     {
          if ($(this).attr("id") == thechosenone) 
          {
               $(this).slideDown();
          }
          else 
          {
               $(this).slideUp();
          }
     });
}
