var lang = document.querySelector('html').lang;

var opt;
if (lang === 'ko') {
    opt = document.querySelector('option[value = "java5-2.html"]');
} else if (lang === 'en') {
    opt = document.querySelector('option[value = "java5-2-en.html"]');
} else if (lang === 'ja') {
    opt = document.querySelector('option[value = "java5-2-jp.html"]');
}
opt.selected = true;

document.getElementById('form').select.onchange = function() {
    location.herf = document.getElementById('form').select.value;
}