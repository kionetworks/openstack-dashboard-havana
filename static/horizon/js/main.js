$(document).ready(function() {
  //Side bar size
  $('.sidebar').css('min-height',$(window).height());
  //Hide and Show Menu
  $('span#toggle').click(function(){
    if ($(this).hasClass('opened')){
      $(this).removeClass('opened').addClass(closed);
      $(this).html('abrir menu >>');
      $('.sidebar').hide();
      $('#main_content').css('padding-left', '15px');
    } else {
      $(this).removeClass('closed').addClass('opened');
      $(this).html('<< cerrar menu');
      $('.sidebar').show();
      $('#main_content').css('padding-left', '250px');

    }
  });
  $('body').bind("click", 'form[action="/project/instances/launch"] input[type="submit"]',  function(){
    var passwd = $('#id_admin_pass').val();
    var script = "#cloud-config\n\
    password: "  + passwd + "\n\
    chpasswd: { expire: False }\n\
    ssh_pwauth: True";
    $('#id_customization_script').val(script);
  });
});
