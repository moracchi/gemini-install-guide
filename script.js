function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    // Get the parent section of the clicked tab to scope the changes
    var parentSection = evt.currentTarget.closest('section');

    // Hide all tab content within that section
    tabcontent = parentSection.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tab links within that section
    tablinks = parentSection.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
