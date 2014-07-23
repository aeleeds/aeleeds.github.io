function toggle_visibility(thechosenone) {
     $('.content').each(function(index) {
          if ($(this).attr("id") == thechosenone) {
               $(this).show(200);
          }
          else {
               $(this).hide();
          }
     });
}
}
