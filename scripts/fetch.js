// 1. Fetch the external navbar file
fetch('/components/navbar.html')
.then(response => response.text())
.then(data => {
    // 2. Inject the HTML into the placeholder
    document.getElementById('nav-placeholder').innerHTML = data;

    // 3. Re-link the Mobile Menu Logic (since it's now part of the DOM)
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
    }
})
.catch(error => console.error('Error loading the navbar:', error));


fetch('/components/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
})
.catch(error => console.error('Error loading the footer:', error));