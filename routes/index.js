var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WEBSITE KHÁCH HÀNG' });
});


//PRODUCT ===============================
router.get('/danh-sach-san-pham', function(req, res, next) {
  res.render('product/list', { title: 'danh sách sản phẩm' });
});

router.get('/thong-tin-chi-tiet', function(req, res, next) {
  res.render('product/product', { title: ' thông tin chi tiết sản phẩm' });
});


router.get('/tim-kiem-nang-cao', function(req, res, next) {
  res.render('product/search', { title: 'tìm kiếm nâng cao' });
});

//GIỎ HÀNG===============================
router.get('/danh-sach-gio-hang', function(req, res, next) {
  res.render('package/product', { title: 'quản lý giỏ hàng' });
});


router.get('/thong-tin-giao-hang', function(req, res, next) {
  res.render('package/ship', { title: 'thông tin giao hàng' });
});

router.get('/lich-su-trang-thai', function(req, res, next) {
  res.render('package/history', { title: 'lịch sử, trạng thái mua hàng' });
});

//TÀI KHOẢN==============================
router.get('/dang-nhap', function(req, res, next) {
  res.render('account/login', { title: 'đăng nhập' });
});

router.get('/quen-mat-khau', function(req, res, next) {
  res.render('account/forgot-password', { title: 'quên mật khẩu' });
});

router.get('/dang-ky', function(req, res, next) {
  res.render('account/register', { title: 'đăng ký mới' });
});
 
router.get('/cap-nhap', function(req, res, next) {
  res.render('account/update', { title: 'cập nhập thông tin' });
});


/*
sản phẩm
    danh sách sản phẩm -> xem thông tin chi tiết sản phẩm
    search nâng cao
giỏ hàng
    danh sách sản phẩm trong giỏ hàng
    thông tin giao hàng
    lịch sử quá trình và trạng thái mua hàng
tài khoản
    đăng nhập
    quên mật khẩu
    đăng ký
    cập nhập thông tin 

*/
module.exports = router;
