//電腦版 開啟語系
let language_panel = document.querySelector('header .language')
let language_btn = document.querySelector('header .language label')
language_btn.addEventListener('click', () => {
  language_panel.classList.toggle('active')
})

//電腦版 開啟購物車
let cart_btn = document.querySelector('header .top_cart label')
cart_btn.addEventListener('click', () => {
  cart_btn.parentElement.classList.toggle('active')
})

//電腦版 開啟頭像
let login_panel = document.querySelector('header .login')
let login_btn = document.querySelector('header .login label span.avator')
login_btn.addEventListener('click', () => {
  login_panel.classList.toggle('active')
})

//手機上 開啟 選單
let mobile_menu_btn = document.querySelector(
  'header .mobile_nav .mobile_menu_btn'
)
mobile_menu_btn.addEventListener('click', () => {
  login_panel.classList.add('active')
  document.body.classList.add('fixed')
  setTimeout(function () {
    login_panel.classList.add('complete')
  }, 0)
})

//手機上 開啟 搜尋
let search_bar = document.querySelector('header .search')
let mobile_search_btn = document.querySelector(
  'header .mobile_nav .mobile_search_btn'
)
mobile_search_btn.addEventListener('click', () => {
  search_bar.classList.add('active')
  document.body.classList.add('fixed')
  setTimeout(function () {
    search_bar.classList.add('complete')
  }, 0)
})
//手機上 關閉 搜尋
let mobile_search_close = document.querySelector('header .search .back i')
mobile_search_close.addEventListener('click', () => {
  search_bar.classList.remove('complete')
  setTimeout(function () {
    search_bar.classList.remove('active')
    document.body.classList.remove('fixed')
  }, 300)
})

//手機上 開啟 語系
let mobile_language_btn = document.querySelector('.popup .language_btn a')
mobile_language_btn.addEventListener('click', () => {
  language_panel.classList.add('active')
  setTimeout(function () {
    language_panel.classList.add('complete')
  }, 0)
})
//手機上 關閉 語系
let mobile_language_close = document.querySelector('header .language .back i')
mobile_language_close.addEventListener('click', () => {
  language_panel.classList.remove('complete')
  setTimeout(function () {
    language_panel.classList.remove('active')
  }, 300)
})

window.addEventListener('click', (event) => {
  let language_pop = document.querySelector('header .language ul')
  let top_cart_pop = document.querySelector('header .top_cart .top_cart_pop')
  let login_pop = document.querySelector('header .login .popup')
  //在視窗大於992 執行
  if (window.innerWidth > 992) {
    if (
      language_panel.classList.contains('active') &&
      event.target !== language_btn &&
      !language_pop.contains(event.target)
    ) {
      language_panel.classList.remove('active')
    }

    if (event.target !== cart_btn && !top_cart_pop.contains(event.target)) {
      cart_btn.parentElement.classList.remove('active')
    }

    if (
      login_panel.classList.contains('active') &&
      event.target !== login_btn &&
      !login_pop.contains(event.target)
    ) {
      login_panel.classList.remove('active')
    }
  }

  //在視窗小於992 執行
  if (window.innerWidth <= 992) {
    if (
      login_panel.contains(event.target) &&
      !login_pop.contains(event.target)
    ) {
      login_panel.classList.remove('complete')
      setTimeout(function () {
        login_panel.classList.remove('active')
        document.body.classList.remove('fixed')
      }, 300)
    }
  }
})

//偵測視窗變動 移除header上 所有視窗的狀態
window.addEventListener('resize', () => {
  login_panel.classList.remove('active')
  login_panel.classList.remove('complete')
  language_panel.classList.remove('active')
  language_panel.classList.remove('complete')
  cart_btn.parentElement.classList.remove('active')
  search_bar.classList.remove('active')
  search_bar.classList.remove('complete')
  document.body.classList.remove('fixed')
})

//登入 / 註冊 / 忘記密碼 相關的彈跳顯示設定
$('.reg-bt').on("click", function () {
  $('#reg').modal();
  $('#forgetpasswd-modal').modal('hide');
  $('#forgetpasswd-sns').modal('hide');
  $('#resetpasswd').modal('hide');
  $('#forgetpasswd_ok').modal('hide');
  $('#reg-ok').modal('hide');
  $('#iagreemodal').modal('hide');
  $('#reg-check').modal('hide');
  $('#login').modal('hide');
});

$('#iagree-bt').on("click", function () {
  $('#iagreemodal').modal();
});

$('#iagree-ok').on("click", function () {
  $('#iagreemodal').modal("hide");
  $('#reg').modal("hide");				
});

$('#reg-ok-bt').on("click", function () {
  $('#reg-ok').modal();
});

$('#reg-check-bt').on("click", function () {
  $('#reg-check').modal();
});

//
$('#forgetpasswd-bt').on("click", function () {
  $('#reg').modal('hide');
  $('#forgetpasswd-sns').modal('hide');
  $('#resetpasswd').modal('hide');
  $('#forgetpasswd_ok').modal('hide');
  $('#reg-ok').modal('hide');
  $('#iagreemodal').modal('hide');
  $('#reg-check').modal('hide');
  $('#login').modal('hide');	
  $('#forgetpasswd-modal').modal();
    
});

$('#forgetpasswd-sns-bt').on("click", function () {
    $('#forgetpasswd-sns').modal();
});

$('#forgetpasswd_ok-bt').on("click", function () {
  $('#forgetpasswd_ok').modal();
});

$('#resetpasswd-bt').on("click", function () {
  $('#resetpasswd').modal();
});

$('#resetpasswd-success-bt').on("click", function () {
  $('#resetpasswd-success').modal();
});
//
$('.log-bt').on("click", function () {
  $('#reg').modal('hide');
  $('#forgetpasswd-modal').modal('hide');
  $('#forgetpasswd-sns').modal('hide');
  $('#resetpasswd').modal('hide');
  $('#forgetpasswd_ok').modal('hide');
  $('#reg-ok').modal('hide');
  $('#iagreemodal').modal('hide');
  $('#reg-check').modal('hide');
  $('#login').modal();	
});