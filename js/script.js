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

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

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
function openNav() {
    if (document.getElementById("mySideBlog").clientWidth == 0) {
        document.getElementById("mySideBlog").style.width = "100%";
        document.getElementById("mySideBlog").style.height = "100vh";
        
        document.getElementById("main").style.marginLeft = "100%";
        
        //========Script to fetching Medium API automatically ===========//
        function myFunction(x) {
            if (x.matches) { // If media query matches
                MediumWidget.Init({
                    renderTo: '#medium-widget',
                    params: {
                        "resource": "https://medium.com/@syofyanzuhad/",
                        "postsPerLine": 1,
                        "limit": 4,
                        "picture": "big",
                        "fields": [
                            "description",
                            "author",
                            "claps",
                            "likes",
                            "publishAt"
                        ],
                        "ratio": "original"
                    }
                });
            } else {
                MediumWidget.Init({
                    renderTo: '#medium-widget',
                    params: {
                        "resource": "https://medium.com/@syofyanzuhad/",
                        "postsPerLine": 2,
                        "limit": 4,
                        "picture": "big",
                        "fields": [
                            "description",
                            "author",
                            "claps",
                            "likes",
                            "publishAt"
                        ],
                        "ratio": "original"
                    }
                });
            }
        }
        var x = window.matchMedia("(max-width: 450px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes
    } else {
        document.getElementById("mySideBlog").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0%";
    }

    //========Script to fetching Medium API manually ===========//

    // fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@syofyanzuhad/')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         // Filter for acctual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
    //         const res = data.items //This is an array with the content. No feed, no info about author etc..
    //         const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !

    //         // Functions to create a short text out of whole blog's content
    //         function toText(node) {
    //             let tag = document.createElement('div')
    //             tag.innerHTML = node
    //             node = tag.innerText
    //             return node
    //         }
    //         function shortenText(text, startingPoint, maxLength) {
    //             return text.length > maxLength ?
    //                 text.slice(startingPoint, maxLength) :
    //                 text
    //         }

    //         // Put things in right spots of markup
    //         let output = '';
    //         posts.forEach((item) => {
    //             output += `
    //                 <li class="blog__post">
    //                     <a id= href="${item.link}" class="blog-link">
    //                     <img src="${item.thumbnail}" class="blog__topImg"></img>
    //                     <div class="blog__content">
    //                         <div class="blog_preview">
    //                             <h2 class="blog__title">${shortenText(item.title, 0, 30) + '...'}</h2>
    //                             <p class="blog__intro">${'...' + shortenText(toText(item.content), 50, 300) + '...'}</p>
    //                         </div>
    //                         <hr>
    //                         <div class="blog__info">
    //                             <span class="blog__author">${item.author}</span>
    //                             <span class="blog__date">${shortenText(item.pubDate, 0, 10)}</span>
    //                         </div>
    //                     </div>
    //                     <a/>
    //                 </li>`
    //         })
    //         document.querySelector('.blog__slider').innerHTML = output
    //     })
}

// /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
// function closeNav() {
    // document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
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
        
        // function showImg(id) {
        //     document.getElementsByClassName('closes')[id].style.position = "fixed";
        //     document.getElementsByClassName('navig-b')[id].style.position = "fixed";
        //     document.getElementsByClassName('navig-n')[id].style.position = "fixed";
        // }

        // function closeImg(id) {
        //     document.getElementsByClassName('closes')[id].style.position = "absolute";
        //     document.getElementsByClassName('navig-b')[id].style.position = "absolute";
        //     document.getElementsByClassName('navig-n')[id].style.position = "absolute";
        // }
        function openRightNav() {
            if (document.getElementById("about").clientWidth == 0) {
                document.getElementById("about").style.width = "370px";
                document.getElementById('footerAbout').style.position = "relative";
            } else {
                document.getElementById("about").style.width = "0px";
                document.getElementById('footerAbout').style.position = "absolute";
            }
        }
        
        function openLeftNav() {
            if (document.getElementById("contacts").clientWidth == 0) {
                document.getElementById("contacts").style.width = "370px";
            } else {
                document.getElementById("contacts").style.width = "0px";
            }
        }

        // ===== OPEN PORTFOLIO SIDE =====
        function openSlideUp() {
            var content = `
                <a id="closebtn1" href="javascript:void(0)" class="closebtn mt-5" onclick="closeSlideUp()">&times;</a>
                
                <!--Accordion wrapper-->
                <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                    <div class="container text-center text-white mt-5 mb-3" id="portofolio">
                        <div class="row mt-5">
                            <div class="col mt-5">
                                <h2>PORTFOLIO</h2>
                                <hr>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-sm-6 col-md-6 mb-2">
                                <div class="card bg-none">
                                    <a href="#port-1" class="img-top">
                                        <img src="img/portofolio/library.jpg" class="card-img-top " alt="Library Management"> 
                                    </a>
                                        <div class="overlay" id="port-1">
                                            <a href="#img" class="closes"> &times;</a>

                                            <a href="#port-8" class="navig-b"> <h1> < </h1> </a>
                                            <div class="image">
                                                <img src="img/portofolio/library.jpg" class="img-thumbnail" alt="Library Management">
                                            </div>
                                            <a href="#port-2" class="navig-n"> <h1> > </h1> </a>
                                        </div>
                                    <div class="card-body">
                                        <p class="card-text">Example Library Management.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 mb-2">
                                <div class="card">
                                    <a href="#port-2" class="img-top">
                                        <img src="img/portofolio/sistem_sekolah.jpg" class="card-img-top" alt="School Management System"> 
                                    </a>
                                    <div class="overlay" id="port-2">
                                        <a href="#img" class="closes"> &times; </a>

                                        <a href="#port-1" class="navig-b"> <h1> < </h1> </a>
                                        <div class="image">
                                            <img src="img/portofolio/sistem_sekolah.jpg" class="img-thumbnail" alt="School Management System">
                                        </div>
                                        <a href="#port-3" class="navig-n"> <h1> > </h1> </a>	
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">School Management System.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 mb-2">
                                <div class="card">
                                    <a href="#port-3" class="img-top">
                                        <img src="img/portofolio/sikaryawan.png" class="card-img-top" alt="Management system for karyawan"> 
                                    </a>
                                    <div class="overlay" id="port-3">
                                        <a href="#img" class="closes"> &times; </a>

                                        <a href="#port-2" class="navig-b"> <h1> < </h1> </a>
                                        <div class="image">
                                            <img src="img/portofolio/sikaryawan.png" class="img-thumbnail" alt="Management system for karyawan">
                                        </div>
                                        <a href="#port-4" class="navig-n"> <h1> > </h1> </a>
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">Management system for karyawan.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 mb-2">
                                <div class="card">
                                    <a href="#port-4" class="img-top">
                                        <img src="img/portofolio/laravel-pusher.png" class="card-img-top" alt="Laravel-Pusher Real-time chat app"> 
                                    </a>
                                    <div class="overlay" id="port-4">
                                        <a href="#img" class="closes"> &times; </a>

                                        <a href="#port-3" class="navig-b"> <h1> < </h1> </a>
                                        <div class="image">
                                            <img src="img/portofolio/laravel-pusher.png" class="img-thumbnail" alt="Laravel-Pusher Real-time chat app">
                                        </div>
                                        <a href="#port-7" class="navig-n"> <h1> > </h1> </a>

                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">Laravel-Pusher Real-time chat app.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 mb-2">
                                <div class="card">
                                    <a href="#port-5" class="img-top">
                                        <img src="img/portofolio/php_blog.jpg" class="card-img-top" alt="..."> 
                                    </a>
                                    <div class="overlay" id="port-5">
                                        <a href="#img" class="closes"> &times; </a>

                                        <a href="#port-4" class="navig-b"> <h1> < </h1> </a>	
                                        <div class="image">
                                            <img src="img/portofolio/php_blog.jpg" class="img-thumbnail" alt="">
                                        </div>
                                        <a href="#port-6" class="navig-n"> <h1> > </h1> </a>
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">Blog menggunakan php native.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 mb-2">
                                <div class="card">
                                    <a href="#port-6" class="img-top">
                                        <img src="img/portofolio/laravel-here.png" class="card-img-top" alt="..."> 
                                    </a>
                                    <div class="overlay" id="port-6">
                                        <a href="#img" class="closes"> &times; </a>

                                        <a href="#port-5" class="navig-b"> <h1> < </h1> </a>
                                        <div class="image">
                                            <img src="img/portofolio/laravel-here.png" class="img-thumbnail" alt="">
                                        </div>
                                        <a href="#port-7" class="navig-n"> <h1> > </h1> </a>
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">Aplikasi penyimpanan (pin) tempat pada peta, menggunakan Here Map.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 mb-2">
                                <div class="card">
                                    <a href="#port-7" class="img-top">
                                        <img src="img/portofolio/dashboard-pondokprogrammer.png" class="card-img-top" alt="Web Aplikasi Manajemen Pembelajaran Pondok"> 
                                    </a>
                                    <div class="overlay" id="port-7">
                                        <a href="#img" class="closes"> &times; </a>

                                        <a href="#port-4" class="navig-b"> <h1> < </h1> </a>
                                            <div class="image">
                                                <img src="img/portofolio/dashboard-pondokprogrammer.png" class="img-thumbnail" alt="Web Aplikasi Manajemen Pembelajaran Pondok">
                                            </div>
                                        <a href="#port-8" class="navig-n"> <h1> > </h1> </a>
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">Web Aplikasi Manajemen Pembelajaran Pondok.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 mb-2">
                                <div class="card">
                                    <a href="#port-8" class="img-top">
                                        <img src="img/portofolio/bimago2.jpg" class="card-img-top" alt="Web Profile of Bimago Course"> 
                                    </a>
                                    <div class="overlay" id="port-8">
                                        <a href="#img" class="closes"> &times; </a>

                                        <a href="#port-7" class="navig-b"> <h1> < </h1> </a>
                                        <div class="image">
                                            <img src="img/portofolio/bimago2.jpg" class="img-thumbnail" alt="Web Profile of Bimago Course">
                                        </div>
                                        <a href="#port-1" class="navig-n"> <h1> > </h1> </a>
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">Web Profile of Bimago Course.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>`
            ;
            // console.log(content);

            if (document.getElementById("portfolio").clientHeight == 0) {
                document.getElementById("portfolio").style.height = "100vh";
                $("#portfolio").append(content);
                document.getElementById('closebtn1').style.position = "fixed";
            } else {
                document.getElementById("portfolio").style.height = "0";
                $("#portfolio").empty();
                document.getElementById('closebtn1').style.position = "absolute";
            }
        }
        
        function openSlideUp2() {
            if (document.getElementById("photography").clientHeight == 0) {
                document.getElementById("photography").style.height = "100vh";
                document.getElementById('closebtn2').style.position = "fixed";
            } else {
                document.getElementById("photography").style.height = "0";
                document.getElementById('closebtn2').style.position = "absolute";
            }
        }
        
        
        /* Set the width of the side navigation to 0 */
        function closeSlideUp() {
            document.getElementById("portfolio").style.height = "0";
            $("#portfolio").empty();
            document.getElementById('closebtn1').style.position = "absolute";
            // document.getElementsByClassName('.closes').style.position = "absolute";
            // document.getElementsByClassName('.navig-b').style.position = "absolute";
            // document.getElementsByClassName('.navig-n').style.position = "absolute";
        }
        
        function closeSlideUp2() {
            document.getElementById("photography").style.height = "0";
            document.getElementById('closebtn2').style.position = "absolute";
        }

        function closeRightNav() {
            document.getElementById("about").style.width = "0";
            document.getElementById('footerAbout').style.position = "absolute";
        }

        function closeLeftNav() {
            document.getElementById("contacts").style.width = "0";
        }
        
        function closeAll() {
            document.getElementById("portfolio").style.height = "0";
            $("#portfolio").empty();
            // document.getElementById("photography").style.height = "0";
            document.getElementById("about").style.width = "0";
            document.getElementById("contacts").style.width = "0";
            // document.getElementById('closebtn').style.position = "absolute";
            // document.getElementById('closebtn1').style.position = "absolute";
            document.getElementById("mySideBlog").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            // console.log('closed');
        }

        function chatWA() {
            let WA = [];
            
            if (document.getElementById("form-name-wa").value === '') {
                alert("Silahkan isi Nama !");
                return false;
            }
            WA["name"] = document.getElementById("form-name-wa").value;

            if (document.getElementById("form-email-wa").value === '') {
                alert("Silahkan isi Email !");
                return false;
            }
            WA["email"] = document.getElementById("form-email-wa").value;

            if (document.getElementById("form-phone-wa").value === '') {
                alert("Silahkan isi Nomor !");
                return false;
            }
            WA["phone"] = document.getElementById("form-phone-wa").value;

            if (document.getElementById("pesan2").value === '') {
                alert("Silahkan isi Pesan !");
                return false;
            }
            WA["pesan"] = document.getElementById("pesan2").value;

            // console.log(WA);
            window.open(`https://api.whatsapp.com/send?phone=6281326743694&text=Assalamual'aikum %0ANama: ${WA['name']}%0AEmail: ${WA['email']}%0APhone: ${WA['phone']}%0APesan: ${WA['pesan']}`, "_blank");
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

