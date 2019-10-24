//      Full Width SideNav

/* Open the sidenav 
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}*/

/* Close/hide the sidenav 
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}*/

// //      SideNav Only Push Content

// /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
// function openNav() {
//     document.getElementById("mySidenav").style.width = "500px";
//     document.getElementById("main").style.marginLeft = "500px";
// }

// /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
// }


//      SideNav Push Black Content

// /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
// function openNav() {
//     document.getElementById("mySidenav").style.width = "500px";
//     document.getElementById("home").style.marginRight = "500px";
//     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// }

// /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("home").style.marginRight = "0";
//     document.body.style.backgroundColor = "white";
// }

//      Only SideNav

/* Set the width of the side navigation to 250px */
function openRightNav() {
    document.getElementById("contacts").style.width = "380px";
    document.getElementById("home").style.marginRight = "400";
}

/* Set the width of the side navigation to 0 */
function closeRightNav() {
    document.getElementById("contacts").style.width = "0";
    document.getElementById("home").style.marginRight = "0";
}


function openLeftNav() {
    document.getElementById("about").style.width = "380px";
    document.getElementById("home").style.marginLeft = "400";
}

/* Set the width of the side navigation to 0 */
function closeLeftNav() {
    document.getElementById("about").style.width = "0";
    document.getElementById("home").style.marginLeft = "0";
}