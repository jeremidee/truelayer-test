/***** quicklinks that highlights active sections *****/
// $('.waypoint').waypoint({
//     handler: function() {
//         $(".quick-links-sidebar a").removeClass('active');
//         $("a[href='#" + this.element.id + "']").first().addClass('active');
//     }, offset:'20%'
// });
// $(".quick-links-sidebar a").on("click", function(event){
//     $(".quick-links-sidebar a").removeClass('active');
//     Waypoint.disableAll();
//     $(event.target).addClass('active');
//     setTimeout(function(){
//         Waypoint.enableAll();
//     }, 300);
// });
/***** developer console *****/
$(document).on("click", "#dev-console-nav a.nav-link", function(event){
    event.preventDefault();

    $("#dev-console-nav li").removeClass("active");
    $(event.target).closest("li").addClass("active");

    $("#dev-console-content .tab-pane").removeClass('active');

    var href = $(event.target).closest('a').attr("href");
    var tabEl = "#dev-console-content .tab-pane" + href;
    $(tabEl).addClass('active');
});



/***** close cookies alert *****/
$(document).on("click", ".close-cb", function(event){
    Cookies.set('accepted_cookies', 'true');
});
/***** close cookies alert *****/
$(document).on("click", ".open-chat", function(event){
    event.preventDefault();
    Intercom('show');
});
/***** mobile menu *****/
$(document).on("click", ".navbar-toggler", function(event){
    event.preventDefault();
    if ($("#navbarMobile").hasClass("toggled")){
        $("#navbarMobile").removeClass("toggled");
        $("#navbarMobile-backdrop .backdrop").remove();
        $("#wrapper").removeClass("overflow-wrapper");
    } else {
        $("#navbarMobile").addClass("toggled");
        $("#navbarMobile-backdrop").append("<div class='backdrop'></div>");
        $("#wrapper").addClass("overflow-wrapper");
    }
});

$(document).on("click", "#navbarMobile-backdrop .backdrop", function(event){
    $("#navbarMobile").removeClass("toggled");
    $("#navbarMobile-backdrop .backdrop").remove();
});

var windowsize = $(window).width();

$(window).resize(function() {
  windowsize = $(window).width();
  if (windowsize > 991) {
    $("#navbarMobile").removeClass("toggled");
    $("#navbarMobile-backdrop .backdrop").remove();
  }
});

$(document).on("click", ".menu-item", function(event){
    event.preventDefault();

    var el = $(event.target).closest("li.menu-item");
    if ($(el).hasClass("open")){
        $(el).removeClass("open");
        $(el).find("i.fa").removeClass("fa-caret-up");
        $(el).find("i.fa").addClass("fa-caret-down");
        $(el).next(".submenu").attr("hidden", "");
    } else {

        $("#navbarMobile li.open").each(function(menu){
            $(this).removeClass("open");
            $(this).find("i.fa").removeClass("fa-caret-up");
            $(this).find("i.fa").addClass("fa-caret-down");
            $(this).next(".submenu").attr("hidden", "");
        });

        $(el).addClass("open");
        $(el).find("i.fa").removeClass("fa-caret-down");
        $(el).find("i.fa").addClass("fa-caret-up");
        $(el).next(".submenu").removeAttr("hidden");
    }
});


$(document).ready(function(){
    var url = window.location.pathname;
    if (url.length > 1 && url[url.length - 1] === "/"){
        var url = url.substring(0, url.length - 1);
    }
    var linkSelector = "#navbarMobile a[href='" + url + "']:not(.navbar-brand)";

    var linkSelectorCount = document.querySelectorAll(linkSelector);

    if (linkSelectorCount.length > 0){
        $(document.querySelector(linkSelector)).addClass("active");
        if ($(document.querySelector(linkSelector)).hasClass("submenu-link")) {
            $(document.querySelector(linkSelector)).parents("ul.submenu").removeAttr("hidden");
            $(document.querySelector(linkSelector)).parents("ul.submenu").prev("li").find("i.fa").removeClass("fa-caret-down");
            $(document.querySelector(linkSelector)).parents("ul.submenu").prev("li").find("i.fa").addClass("fa-caret-up");
        }
    }
});


        
/*Scroll to top when arrow up clicked BEGIN*/

  $(document).ready(function() {
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var st = $(this).scrollTop();
        var height = $(window).scrollTop();
        var winheight = $(window).height()
        var docheight = $(document).height()
        var scrollTop = $(window).scrollTop()
        var trackLength = docheight - winheight
        var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled

        if (st < lastScrollTop && pctScrolled < 59) {
            $('#backToTop').fadeIn();
        }
        if (pctScrolled > 60) {
            $('#backToTop').fadeIn();
        }
        if (height == 0) {
            $('#backToTop').fadeOut();
        }

        lastScrollTop = st;
    });
    $("#backToTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
  
  });
  /*Scroll to top when arrow up clicked END*/

     

