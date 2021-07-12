/*預設彈出窗*/
const default_alert = Swal.mixin({
  customClass: {
    popup: 'custom_alert',
  },
  text: '您確定要刪除所選的常用旅客嗎？',
  confirmButtonText: '關閉',
  confirmButtonColor: '#fcb239',
})

/*預設確認框*/
const deflaut_confirm = Swal.mixin({
  customClass: {
    popup: 'alert_comfirm',
  },
  title: '刪除常用旅客',
  text: '您確定要刪除所選的常用旅客嗎？',
  confirmButtonText: '刪除',
  confirmButtonColor: '#fcb239',
  showCancelButton: true,
  cancelButtonText: '取消',
  cancelButtonColor: '#bbb',
})

/*預設提交*/
const deflaut_submit = Swal.mixin({
  customClass: {
    popup: 'alert_submit',
  },
  title: '刪除常用旅客',
  text: '您確定要刪除所選的常用旅客嗎？',
  confirmButtonText: '刪除',
  confirmButtonColor: '#fcb239',
  showCancelButton: true,
  cancelButtonText: '取消',
  cancelButtonColor: '#bbb',
})