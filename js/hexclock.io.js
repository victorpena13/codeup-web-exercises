
function setVisibility(id) {
    if(document.getElementById('bt1').value==='Hide Details') {
        document.getElementById('bt1').value = 'Details';
        document.getElementById(id).style.display = 'none';
    }else{
        document.getElementById('bt1').value = 'Hide Details';
        document.getElementById(id).style.display = 'inline';
    }
}


