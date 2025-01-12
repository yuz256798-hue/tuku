document.addEventListener('DOMContentLoaded', function() {
    // 分类切换功能
    const categoryLinks = document.querySelectorAll('.category-list a');
    const products = document.querySelectorAll('.product');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有active类
            categoryLinks.forEach(l => l.classList.remove('active'));
            // 添加active类到当前点击的链接
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            products.forEach(product => {
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // 配置微信分享
    if (typeof wx !== 'undefined') {
        // 请替换以下配置信息
        wx.config({
            debug: false,
            appId: '', // 必填，公众号的唯一标识
            timestamp: '', // 必填，生成签名的时间戳
            nonceStr: '', // 必填，生成签名的随机串
            signature: '',// 必填，签名
            jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
        });

        wx.ready(function () {
            const shareData = {
                title: '产品图库', // 分享标题
                desc: '精选商品，欢迎选购！', // 分享描述
                link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'share.jpg', // 分享图标
                success: function () {
                    // 设置成功回调
                }
            };

            wx.updateAppMessageShareData(shareData);
            wx.updateTimelineShareData(shareData);
        });
    }
}); 