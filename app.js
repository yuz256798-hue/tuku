// 添加路由配置
const routes = {
    '/': 'index.html',
    '/product': 'product.html',
    '/my': 'my.html'
};

function navigate(path) {
    const content = document.getElementById('content');
    fetch(routes[path] || '404.html')
        .then(response => response.text())
        .then(data => {
            content.innerHTML = data;
        });
}

document.querySelectorAll('.bottom-tab-bar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const path = this.getAttribute('href').replace('.html', '');
        navigate(path);
    });
});