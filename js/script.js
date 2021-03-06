$(function() {

//current
var set = 200;//ウインドウ上部からどれぐらいの位置で変化させるか
var boxTop = new Array;
var current = -1;
//各要素の位置
//position-nowは場所を取得したい対象の要素に付ける
$('.position-now').each(function (i) {
  boxTop[i] = $(this).offset().top;
});
//最初の要素にclass="position-now"をつける
changeBox(0);
//スクロールした時の処理
$(window).scroll(function () {
  scrollPosition = $(window).scrollTop();
  for (var i = boxTop.length - 1; i >= 0; i--) {
    if ($(window).scrollTop() > boxTop[i] - set) {
      changeBox(i);
      break;
    }
  };
});
//ナビの処理
function changeBox(secNum) {
  if (secNum != current) {
    current = secNum;
    secNum2 = secNum + 1;//以下にクラス付与したい要素名と付与したいクラス名
    $('.nav-global li a').removeClass('link-current');

//位置によって個別に処理をしたい場合
    if (current == 0) {
      $('#concept_link_js').addClass('link-current');
      // 現在地がsection1の場合の処理
    } else if (current == 1) {
      $('#feature_link_js').addClass('link-current');
      // 現在地がsection2の場合の処理
    } else if (current == 2) {
      // 現在地がsection3の場合の処理
      $('#products_link_js').addClass('link-current');
    }
    else if (current == 3) {
      // 現在地がsection4の場合の処理
      $('#news_link_js').addClass('link-current');
    }
    else if (current == 4) {
      // 現在地がsection4の場合の処理
      $('#contact_link_js').addClass('link-current');
    }

  }
};
});
$(function () {
$('a[href^="#"]').click(function () {
  var adjust = -70;
  var speed = 500;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top + adjust;
  $("html, body").animate({ scrollTop: position }, speed, "swing");
  return false;
});

//


//wow
new WOW().init();



//google form
let $form = $('#js-form')
$form.submit(function(e) { 
  $.ajax({ 
   url: $form.attr('action'), 
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function() { 
        $form.hide();
        $('#js-success').show();

      }, 
      200: function() { 
        $form.hide();
        $('#js-error').show();
      }
    } 
  });
  return false; 
}); 


 //drawer
 $('.drawer').drawer();

 $(".navbar_toggle, .drawer-overlay").on('click', function () {
  $('.navbar_toggle').toggleClass('open');
});



//フォームの入力切り替え
$('#js-form input, #js-form textarea').on('change', function() {
  if( $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form input[type="checkbox"]').prop('checked') === true
  ) {
    $('#js-submit').prop('disabled', false );
    $('#js-submit').addClass('active');
  }else {
    $('#js-submit').prop('disabled', true );
    $('#js-submit').removeClass('active');
  };

});

});


//
