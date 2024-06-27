const routes = {
    '/home': 'views/home.html',
    '/profile': 'views/perfil.html',
    '/chat': 'views/chat.html',
    '/login': 'views/login.html'
};

function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

async function router() {
    const path = window.location.hash.slice(1) || '/login';
    const route = routes[path] || routes['/login'];
    const html = await fetch(route).then(data => data.text());
    document.getElementById('main-content').innerHTML = html;

    if (path === '/login') {
        document.getElementById('main-header').style.display = 'none';
        document.getElementById('left-sidebar').style.display = 'none';
        document.getElementById('right-sidebar').style.display = 'none';
    } else {
        document.getElementById('main-header').style.display = 'flex';
        document.getElementById('left-sidebar').style.display = 'block';
        document.getElementById('right-sidebar').style.display = 'block';
    }
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[href^="#"]')) {
            e.preventDefault();
            navigateTo(e.target.getAttribute('href').slice(1));
        }
    });
    router();
});
