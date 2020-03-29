
//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

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

// var opr = function openRightNav() { }

// var clr = function closeRightNav() { }

// var opl = function openLeftNav() { }

// var cll = function closeLeftNav() { }

// //      Only SideNav

// function myFunction(x) {
//     if (x.matches) { // If media query matches
        /* Set the width of the side navigation to 250px */
        // function openRightNav() {
        //     document.getElementById("contacts").style.width = "100vw";
        //     document.getElementById("home").style.marginRight = "0";
        // }
        
        // /* Set the width of the side navigation to 0 */
        // function closeRightNav() {
        //     document.getElementById("contacts").style.width = "0";
        //     document.getElementById("home").style.marginRight = "0";
        // }
        
        
        // function openLeftNav() {
        //     document.getElementById("about").style.width = "100vw";
        //     document.getElementById("home").style.marginLeft = "0";
        // }
        
        // /* Set the width of the side navigation to 0 */
        // function closeLeftNav() {
        //     document.getElementById("about").style.width = "0";
        //     document.getElementById("home").style.marginLeft = "0";
        // }
    // } else {
        /* Set the width of the side navigation to 250px */
        function openRightNav() {
            document.getElementById("about").style.width = "370px";
            document.getElementById('footer').style.position = "relative";
        }
        
        function openLeftNav() {
            document.getElementById("contacts").style.width = "370px";
        }

        function openSlideUp() {
            document.getElementById("portfolio").style.height = "100vh";
            document.getElementById('closebtn1').style.position = "fixed";
        }
        
        function showImg(id) {
            document.getElementsByClassName('closes')[id].style.position = "fixed";
            document.getElementsByClassName('navig-b')[id].style.position = "fixed";
            document.getElementsByClassName('navig-n')[id].style.position = "fixed";
        }

        function closeImg(id) {
            document.getElementsByClassName('closes')[id].style.position = "absolute";
            document.getElementsByClassName('navig-b')[id].style.position = "absolute";
            document.getElementsByClassName('navig-n')[id].style.position = "absolute";
        }
        
        // function navig_b(id) {
        //     document.getElementsByClassName('closes')[id].style.position = "fixed";
        //     document.getElementsByClassName('navig-b')[id].style.position = "fixed";
        //     document.getElementsByClassName('navig-n')[id].style.position = "fixed";
        //     document.getElementsByClassName('closes')[id-1].style.position = "absolute";
        //     document.getElementsByClassName('navig-b')[id-1].style.position = "absolute";
        //     document.getElementsByClassName('navig-n')[id-1].style.position = "absolute";
        // }

        // function navig_n(id) {
        //     document.getElementsByClassName('closes')[id].style.position = "fixed";
        //     document.getElementsByClassName('navig-b')[id].style.position = "fixed";
        //     document.getElementsByClassName('navig-n')[id].style.position = "fixed";
        //     document.getElementsByClassName('closes')[id+1].style.position = "absolute";
        //     document.getElementsByClassName('navig-b')[id+1].style.position = "absolute";
        //     document.getElementsByClassName('navig-n')[id+1].style.position = "absolute";
        // }
        
        function openSlideUp2() {
            document.getElementById("photography").style.height = "100vh";
            document.getElementById('closebtn2').style.position = "fixed";
        }
        
        
        /* Set the width of the side navigation to 0 */
        function closeSlideUp() {
            document.getElementById("portfolio").style.height = "0";
            document.getElementById('closebtn1').style.position = "absolute";
            document.getElementsByClassName('.closes').style.position = "absolute";
            document.getElementsByClassName('.navig-b').style.position = "absolute";
            document.getElementsByClassName('.navig-n').style.position = "absolute";
        }
        
        function closeSlideUp2() {
            document.getElementById("photography").style.height = "0";
            document.getElementById('closebtn2').style.position = "absolute";
        }

        function closeRightNav() {
            document.getElementById("about").style.width = "0";
            document.getElementById('footer').style.position = "absolute";
        }

        function closeLeftNav() {
            document.getElementById("contacts").style.width = "0";
        }

        function closeAll() {
            document.getElementById("portfolio").style.height = "0";
            // document.getElementById("photography").style.height = "0";
            document.getElementById("about").style.width = "0";
            document.getElementById("contacts").style.width = "0";
            document.getElementById('closebtn1').style.position = "absolute";
            document.getElementById('closebtn2').style.position = "absolute";
            document.getElementById('footer').style.position = "absolute";
        }

    // }
// }

// var x = window.matchMedia("(max-width: 450px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes

//////////// click event to hide overlay ////////////
// var $overlay = document.getElementsByClassName('overlay');

// $overlay.click(function(){ //annonymous function to hide overlay
//     console.log('overlay clicked');
//     $overlay.hide();
// });

//////////// add overlay to html ////////////
// var $overlay = $('<div id="overlay"></div>'); //string to create div (overlay) as jQuery variable
// var $image = $('<img>'); //select image tag as jQuery variable
// var $caption = $('<p></p>');

// $overlay.append($image); //add image to overlay
// $overlay.append($caption); //add caption to overlay
// $('body').append($overlay); //add overlay to body


// //////////// capture click event on image link ////////////
// $('#card a').click(function(event){ //annonymous function with event parameter
//     event.preventDefault(); //stops default event from happening (image loading)
//     var imageLocation = $(this).attr('href'); //gets href attribute from clicked 'a' tag in imageGallery
//     $image.attr('src', imageLocation); //set src attribute to imageLocation variable
//     $overlay.show(); //shows the overlay
//     var captionText = $(this).children('img').attr('alt'); //get the childs alt attribute
//     $caption.text(captionText);
// });


// //////////// click event to hide overlay ////////////
// $overlay.click(function(){ //annonymous function to hide overlay
//     $overlay.hide();
// });

