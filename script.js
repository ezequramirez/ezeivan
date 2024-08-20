document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const ronaldoSection = document.getElementById('ronaldo');
    const messiSection = document.getElementById('messi');
    const discussionSection = document.getElementById('discussion');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        ronaldoSection.classList.toggle('show-section');
        messiSection.classList.toggle('show-section');
        discussionSection.classList.toggle('show-section');
    });
});