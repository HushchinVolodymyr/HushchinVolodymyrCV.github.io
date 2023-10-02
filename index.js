document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle')
    const body = document.body
    const verticalBar = document.getElementById('vertical-bar')

    themeToggle.addEventListener('change', function() {
        body.classList.toggle('dark-mode')
        verticalBar.classList.toggle('dark-mode')

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark')
        } else {
            localStorage.setItem('theme', 'light')
        }
    })

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode')
        verticalBar.classList.add('dark-mode');
        themeToggle.checked = true
    }
})