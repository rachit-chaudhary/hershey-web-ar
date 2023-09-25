// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo(0, 0);
    console.log("scrolled to top")
}
//add functionality if user is revisting then it won't scroll to top.
window.onload = scrollToTop()

//DOM Elements
const menuTrigger = document.querySelector(".bars")
const enterBtn =document.getElementById("enterBtn")
const movie = document.querySelector(".movie")
const bg = document.querySelector(".bg")


//Menu Overlay
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//jQuery
lasScrTop = 0;
opa = 1;
sca = 5;
$(window).scroll(function () {
  winTop = $(this).scrollTop();
  winMid = $(window).height() / 2 + winTop;
  winBot = $(window).height() + winTop;
  // scroll到li,執行動態
  $(".scroll-wrap li").each(function () {
    liHei = $(this).height();
    liOff = $(this).offset();
    liTop = liOff.top;
    liBot = liTop + liHei;
    if (liBot <= winMid || liTop >= winBot) {
      // li滑出視窗時移除 inView
      $(this).removeClass("inView");
    } else if (liTop <= winMid) {
      // li滑到中間時，加入 inView
      $(this).addClass("inView");
    }
    inViewEq = $(".inView").index() + 1;
    console.log(inViewEq);
    $(".movie")
      .attr("class", "")
      .addClass("movie step-" + inViewEq);


      let imageSteps = "step-".concat(inViewEq)

      if (imageSteps == "step-1") {
          bg.children[0].src = "assets/images/gerard-siderius-Iv_Q-zzNerE-unsplash.jpg"
      } else if(imageSteps == "step-4") {
        console.log("step4")
        bg.children[0].src = "assets/images/gerard-siderius-4hQYGZ6tiA0-unsplash.jpg"
      } else {
        bg.children[0].src = "assets/images/taro-ohtani-PrgOionplMo-unsplash.jpg"
      }
  });
  // 判斷scroll往上滑或往下滑
  if (winTop > lasScrTop) {
    // 往下滑
  } else {
    // 往上滑
  }
  lasScrTop = winTop;
});