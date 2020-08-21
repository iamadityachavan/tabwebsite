function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "#242424";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.color = '#000fff';
    document.getElementById("defaultOpen").removeAttribute("id");
    elmnt.setAttribute("id", "defaultOpen");
}

// Get the element with id="defaultOpen" and click on it
$(document).ready(function(){
document.getElementById("defaultOpen").click();
});