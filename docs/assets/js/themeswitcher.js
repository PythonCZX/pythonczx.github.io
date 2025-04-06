const toggleSwitch = document.querySelector('#themetoggler');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (document.documentElement.getAttribute('data-theme') == 'dark') {
      document.getElementById('themetoggle').setAttribute("class", "ph ph-sun");
    }
    else if (document.documentElement.getAttribute('data-theme') == 'light') {
      document.getElementById('themetoggle').setAttribute("class", "ph ph-moon");
    }
    else if (document.documentElement.getAttribute('data-theme') == 'classic') {
      document.getElementById('themetoggle').setAttribute("class", "ph-fill ph-moon");
    }
  }
else {
  document.getElementById('themetoggle').setAttribute("class", "ph-fill ph-moon");
}

function switchTheme(e) {
    if (document.documentElement.getAttribute('data-theme') == 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      document.getElementById('themetoggle').setAttribute("class", "ph ph-moon");
    }
    else if (document.documentElement.getAttribute('data-theme') == 'light') {
      document.documentElement.setAttribute('data-theme', 'classic');
      localStorage.setItem('theme', 'classic');
      document.getElementById('themetoggle').setAttribute("class", "ph-fill ph-moon");
    }
    else if (document.documentElement.getAttribute('data-theme') == 'classic') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      document.getElementById('themetoggle').setAttribute("class", "ph ph-sun");
    }
    else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      document.getElementById('themetoggle').setAttribute("class", "ph ph-sun");
    } 
}

toggleSwitch.addEventListener('click', switchTheme, false);