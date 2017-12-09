$(document).ready(function() {

  // Call to puppeteer list of devices for screen sizes
  $.ajax({
    type: 'GET',
    url: "/devices"
  }).then(function(devices) {
    for (let device of devices) {
      $('select').append(`<option>${device}</option>`);
    }
  });

  //Call to Puppeteer screenshot
  $('button').on('click', function() {
    // var site = $('input').val();
    // var device = $('select').val();


    // var form = $('#needs-validation')[0];
    // if (form.checkValidity() === false) {
    //   // event.preventDefault();
    //   // event.stopPropagation();
    //   form.classList.add('was-validated');
    //   return;
    // }
    $(this).addClass('active');


    // $.get({
    //   type: 'GET',
    //   url: '/screen/' + encodeURIComponent(site) + '/' + encodeURIComponent(device)
    // }).done(function(imgurl) {
    //   $('a.btn').removeClass('active');
    //
    //   $('body').append('<form id="target" action="/' + imgurl + '"></form>');
    //   $('#target').submit();
    //   $('body')
    // });
  });
});
