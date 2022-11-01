//nav toggle btn
function classToggle() {
  const navs = document.querySelectorAll(".Navbar__Items");
  navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
}
document.querySelector(".Navbar__Link-toggle").addEventListener("click", classToggle);



//pages
window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;
        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
            changeBackground(page_id);
        });
    }
}

function SwitchPage (page_id) {
    console.log(page_id);
    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
    
}
//background
function changeBackground(page_id) {
    const container = document.querySelector('.container');
    container.style.backgroundImage = `url('./assets/img/banner-${page_id}.png'),linear-gradient(rgb(128 34 128 / 70%),rgba(180, 192, 180, 0.048))`;
}
