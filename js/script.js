$(function() {
    $('.pop').on('click', function() {
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      document.getElementById("captionpreview").textContent=$(this).find('img').attr('alt');
      $('#imagemodal').modal('show');
    });
});
