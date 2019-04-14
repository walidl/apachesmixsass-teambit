
function dropDownMenu(drop){

  drop.on({

    mouseenter: function(){

    $(this).children(".menu").show(300);

    },

    mouseleave: function(){

      $(this).children(".menu").hide(300);


    },
  })
}


function scrollEvent(item){

  $(window).scroll(function() {

    if ($(this).scrollTop()> 400)
     item.addClass("scrolled");
    else
     {
      item.removeClass("scrolled");
     }
 });

 item.click(function(){

  window.scrollTo({
  top: 0,
  behavior: 'smooth'
});
 })
}

function init(){

  var nav = $("nav");

  var drop = $(".dropdown");

  dropDownMenu(drop);

  scrollEvent(nav)

}

$(document).ready(init);
