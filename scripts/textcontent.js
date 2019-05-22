// hide and show relevant sections

/*
let url = window.location.href
let addListener = url.match(/\.com$|localhost$|index/i)

if (addListener) {
  $(window).on("unload", function(){
    localStorage.removeItem('visible')
  })
}

if (localStorage.getItem('visible') && addListener) {
  let visible = localStorage.getItem('visible')
  console.log('visible')
  console.log(visible)
  $(visible).show();
  $('body,html').animate({
    scrollTop : $("#top-c").height() - $(".legalese-nav").height()
  }, 500) 
}

$(".bottom-content-title").each(function() {
  $(this).click(function(e) {
    if (addListener) {
      e.preventDefault();
      var id = $(this).attr("scroll");
      $(".bottom-content").hide();
      $(id).show();
      $('body,html').animate({
	scrollTop : $("#top-c").height() - $(".legalese-nav").height()
      }, 500) 
    } else {
      var id = $(this).attr("scroll");
      localStorage.setItem('visible', id)
    }
  });
});
*/
  
// for scrolltotop arrow

$(window).scroll(function() {
  if ($(this).scrollTop() >= $("#top-c").height()) {
    console.log('hi noting top-c')
    console.log($('#return-to-top'))
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : $("#top-c").height() - $(".legalese-nav").height()// Scroll to top of body
    }, 500);
});

// insert copyright date

let currentYear = `2017 \u2014 ${(new Date()).getFullYear()}`
$("#copyright-date").text(currentYear);

// scroll to blurb bar on renavigate
/*
$("li[role=presentation]").click(function(e) {
  if ($(this).scrollTop() <= $(".title-blurb").offset().top) {
    $('html, body').animate({
      scrollTop: $(".title-blurb").offset().top - $(".legalese-nav").height()
    }, 500);
  } else {
    $('html, body').animate({
      scrollTop: $(".title-blurb").offset().top - $(".legalese-nav").height()// can't retrieve nav height when it's fixed to top
    }, 500);
  }
  e.preventDefault();
    $("li[role=presentation] > a > div").removeClass("blurb-nav-highlight");
    $("div", this).addClass("blurb-nav-highlight");
});
*/

// show various bits of players navbar

$(".sidebar-header").each(function() {
    $(this).click(function() {
	var id = ".sub-" + $(this).attr("href").slice(1);
	$(".left-menu-sub").hide();
	$(id).show();
    });
});


// fix nav to top

/* var lastScrollTop = 0;
 * 
 * $(window).scroll(function(event){
 *     var st = $(this).scrollTop();
 *     if (st > lastScrollTop) {
 * 	$(".legalese-nav").fadeOut(100);
 *     } else {
 * 	$(".legalese-nav").fadeIn(100);
 *     };
 *     lastScrollTop = st;
 * }); */

/* $(".legalese-nav").affix({
 *   offset: {
 *     top: function() {
 *       return (this.top = $("#second-container").offset().top)
 *     }
 *   }
 * }) */

// don't know why I can't just add a css class here

$('.left-menu-item').on('click', function() {
  $('.left-menu-item').css({ "font-weight": "300", "text-decoration": "none" });
  $(this).css({ "font-weight": "700", "text-decoration": "none" });
});

$('.left-menu-item').hover(
  function() {
    $(this).css({ "font-weight": "700", "text-decoration": "none", "color": "#333333" });
  }, function() {
    $(this).css({ "font-weight": "300", "text-decoration": "none" });
  }
);


$(window).on('scroll', function() {
  $('.lower-nav-el').each(function() {
    if($(window).scrollTop() > ($(this).offset().top - 10)) {
      var id = $(this).attr('id');
      $('.left-menu-item').css('font-weight','300');
      $('a[href="#'+ id +'"]').css('font-weight','700');
    }
  });
});

// only affix sidebar if not on mobile

if ($(window).width() > 768) {
  $(".player-nav").affix({
    offset: {
      top: function() {
	return (this.top = $("#blurb-nav-id").offset().top + 65)
      }
    }
  })
}

// downarrow click

$(".downarrow").click(function() {
  $('html, body').animate({
    scrollTop: $("#top-c").height() - $(".legalese-nav").height()
  }, 500);
});

// underline navbar items

/* $(".top-bar-link").click(function() {
 *     $(".top-bar-link > div").css("border-bottom", "0");
 *     $("div", this).css({
 * 	"border-bottom": "0px solid",
 * 	"border-color": "rgba(82, 254, 206, 1)"
 *     }).animate({
 * 	borderWidth: 3
 *     }, 200);
 * });*/

// change color of navbar on scroll, show legalese-logo

/*
   $(window).scroll(function() {
   if ($(this).scrollTop() >= $("#first-container").height()) {
   $(".legalese-nav").css("background-color", "#333333");
   $("#top-bar > li > a").css("color", "white");
   $(".fa.fa-twitter").css("color", "white");
   if ($(window).width() < 768) {
   $(".navbar-collapse").css("background-color", "#333333");
   $(".navbar-brand.visible-xs-inline > img").attr("src", "images/legalese-section-logo-20160611-croissant-plain-white.png");
   } else {
   $("#legalese-logo-nav > a > img").attr("src", "images/legalese-section-logo-20160611-croissant-plain-white.png");
   }
   } else {
   $(".legalese-nav").css("background-color", "white");
   $("#top-bar > li > a").css("color", "#333333");
   $("#login").css("color", "rgb(0, 0, 255)");
   $(".fa.fa-twitter").css("color", "#333333");
   if ($(window).width() < 768) {
   $(".navbar-collapse").css("background-color", "white");
   $(".navbar-brand.visible-xs-inline > img").attr("src", "images/20160713-b-sq.png");
   } else {
   $("#legalese-logo-nav > a > img").attr("src", "images/20160713-b-sq.png");
   }
   }
   });
 */

// fix top button to above bot-container when scrolling

$(window).scroll(function() {
  var bottomHeight = $(".bot-container").height()
  if ($(window).scrollTop() + $(window).height() >= $(".bot-container").offset().top) {
    $("#return-to-top").css({
      "bottom": bottomHeight + 30
    });
    $("#return-to-top-text").css({
      "bottom": bottomHeight + 2
    });
  } else {
    $("#return-to-top").css({
      "bottom": "20px"
    });
    $("#return-to-top-text").css({
      "bottom": "-8px"
    });
  }
})

// fix bar to bottom for large screens

if ($('body').outerHeight() < $(window).height()) {
  $(".bot-container").addClass("bot-container-fixed")
} else {
  $(".bot-container").removeClass("bot-container-fixed")
}

// set pricetags

function monthly(price, which) {
  if (which) {
    return price
  } else {
    return (price / 0.7).toFixed(2)
  }
}

let which = false

const prices = {
  pro: {
    substandard: 1.74,
    subcomplex: 2.34,
  },
  plus: {
    substandard: 1.74,
    subcomplex: 2.34,
  },
  basic: {
    substandard: 2.32,
    subcomplex: 3.12,
  },
}

$('#price-toggle').change(function() {
  $('#substandard-pro').hide().html(`$${monthly(prices.pro.substandard, which)}`).fadeIn(500)
  $('#substandard-plus').hide().html(`$${monthly(prices.plus.substandard, which)}`).fadeIn(500)
  $('#substandard-basic').hide().html(`$${monthly(prices.basic.substandard, which)}`).fadeIn(500)
  $('#subcomplex-pro').hide().html(`$${monthly(prices.pro.subcomplex, which)}`).fadeIn(500)
  $('#subcomplex-plus').hide().html(`$${monthly(prices.plus.subcomplex, which)}`).fadeIn(500)
  $('#subcomplex-basic').hide().html(`$${monthly(prices.basic.subcomplex, which)}`).fadeIn(500)
  which = !which
})

$(function () {
  $('[data-toggle="popover"]').popover()
})
