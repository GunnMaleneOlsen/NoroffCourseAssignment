
function replceText() {
    document.body.innerHTML = document.body.innerHTML.replace(/the /g, 'replaced ');
    document.body.innerHTML = document.body.innerHTML.replace(/The /g, 'Replaced ');

}

setTimeout(replceText, 4000 );