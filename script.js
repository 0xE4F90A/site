$(function() {
  //alert("jQueryが正常に動作しています！");

  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });


  $('.web').hover(
    function() {
      $(this).find('.text-contents').fadeIn(100);
    },
    function() {
      $(this).find('.text-contents').fadeOut();
    }
  );

});

const loginPage = () => {
  id = document.getElementById('id').value;
  pwd = document.getElementById('pass').value;
  location.href = 'http://inthefinal.html.xdomain.jp/' + id + pwd + '.html';
}

document.getElementById('submit_btn').addEventListener('click', () => {
  loginPage();
});
