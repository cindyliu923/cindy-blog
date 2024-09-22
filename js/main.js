/**
 * Sets up Justified Gallery.
 */
if (!!$.prototype.justifiedGallery) {
  var options = {
    rowHeight: 140,
    margins: 4,
    lastRow: 'justify'
  };
  $('.article-gallery').justifiedGallery(options);
}


$(document).ready(function() {

  /**
   * Shows the responsive navigation menu on mobile.
   */
  $("#header > #nav > ul > .icon").click(function() {
    $("#header > #nav > ul").toggleClass("responsive");
  });


  /**
   * Controls the different versions of  the menu in blog post articles 
   * for Desktop, tablet and mobile.
   */
  if ($(".post").length) {
    /**
     * Display the menu if the menu icon is clicked.
     */
    var menu = $("#menu");
    var menu_icon = $("#menu-icon, #menu-icon-tablet");
    menu_icon.click(function() {
      if (menu.css('visibility') === 'hidden') {
        menu.css("visibility", "visible");
        menu_icon.addClass('active');
      } else {
        menu.css("visibility", "hidden");
        menu_icon.removeClass('active');
      }
      return false;
    });

    /**
     * Add a scroll listener to the menu to hide/show the navigation links.
     */
    if (menu.length) {
      $(window).on('scroll', function() {
        var topDistance = $("#menu > #nav").offset().top;

        // hide only the navigation links on desktop
        if (menu.css('visibility') !== 'hidden' && topDistance < 50) {
          $("#menu > #nav").show();
        } else if (menu.css('visibility') !== 'hidden' && topDistance > 100) {
          $("#menu > #nav").hide();
        }

        // on tablet, hide the navigation icon as well and show a "scroll to top
        // icon" instead
        if ( ! $( "#menu-icon" ).is(":visible") && topDistance < 50 ) {
          $("#menu-icon-tablet").show();
          $("#top-icon-tablet").hide();
        } else if (! $( "#menu-icon" ).is(":visible") && topDistance > 100) {
          $("#menu-icon-tablet").hide();
          $("#top-icon-tablet").show();
        }
      });
    }

    /**
     * Show mobile navigation menu after scrolling upwards,
     * hide it again after scrolling downwards.
     */
    if ($( "#footer-post").length) {
      var lastScrollTop = 0;
      $(window).on('scroll', function() {
        var topDistance = $(window).scrollTop();

        if (topDistance > lastScrollTop){
          // downscroll -> show menu
          $("#footer-post").hide();
        } else {
          // upscroll -> hide menu
          $("#footer-post").show();
        }
        lastScrollTop = topDistance;

        // close all submenu's on scroll
        $("#nav-footer").hide();
        $("#toc-footer").hide();
        $("#share-footer").hide();

        // show a "navigation" icon when close to the top of the page, 
        // otherwise show a "scroll to the top" icon
        if (topDistance < 50) {
          $("#actions-footer > ul > #top").hide();
          $("#actions-footer > ul > #menu").show();
        } else if (topDistance > 100) {
          $("#actions-footer > ul > #menu").hide();
          $("#actions-footer > ul > #top").show();
        }
      });
    }
  }

  // const chicken = document.createElement("img");
  // chicken.src = "/images/android-chrome-96x96.png"; // 正常站立的小雞圖片
  // chicken.id = "floating-chicken";
  // document.body.appendChild(chicken);

  // const logo = document.getElementById("logo"); // 假設你的 logo 的 id 是 'logo'
  // let mouseX = 0, mouseY = 0; // 滑鼠的即時座標
  // let chickenX, chickenY; // 小雞初始位置將根據 logo 的位置設置
  // const speed = 0.05; // 控制小雞跟隨速度
  // let isMoving = false; // 小雞是否正在移動
  // let isFat = false; // 小雞是否變胖
  // let stopTimeout; // 定義用於檢測滑鼠停止的計時器

  // // 設置小雞的初始位置到 logo 上面
  // if (logo) {
  //   const logoRect = logo.getBoundingClientRect();
  //   console.log(logoRect.left)
  //   console.log(logoRect.top)
  //   chickenX = logoRect.left - 8;
  //   chickenY = logoRect.top - 10;
  // } else {
  //   chickenX = 0; // 如果找不到 logo，設置默認為左上角
  //   chickenY = 0;
  // }

  // // 初始化小雞的位置
  // chicken.style.transform = `translate(${chickenX}px, ${chickenY}px)`;

  // // 監聽滑鼠移動事件，更新滑鼠的座標
  // document.addEventListener("mousemove", function(event) {
  //   mouseX = event.pageX;
  //   mouseY = event.pageY;

  //   // 如果滑鼠在移動，恢復小雞到正常大小
  //   if (isFat) {
  //     chicken.src = "/images/android-chrome-96x96.png"; // 恢復正常站立的圖片
  //     isFat = false;
  //   }

  //   // 清除之前的滑鼠停止計時器
  //   clearTimeout(stopTimeout);

  //   // 設置滑鼠停止後的變胖效果
  //   stopTimeout = setTimeout(function() {
  //     chicken.src = "/images/chicken-fat.png"; // 切換到變胖圖片
  //     isFat = true;
  //   }, 500); // 滑鼠停止500ms後變胖

  //   // 開始移動小雞
  //   if (!isMoving) {
  //     isMoving = true; // 標記小雞正在移動
  //     animateChicken(); // 開始跟隨滑鼠移動
  //   }
  // });

  // function animateChicken() {
  //   // 逐步移動小雞，讓小雞靠近滑鼠
  //   chickenX += (mouseX - chickenX) * speed;
  //   chickenY += (mouseY - chickenY) * speed;

  //   // 更新小雞的位置
  //   chicken.style.transform = `translate(${chickenX}px, ${chickenY}px)`;

  //   // 當小雞接近滑鼠時，停止移動
  //   if (Math.abs(mouseX - chickenX) > 1 || Math.abs(mouseY - chickenY) > 1) {
  //     requestAnimationFrame(animateChicken); // 繼續移動
  //   } else {
  //     isMoving = false; // 小雞停止移動，允許再次移動
  //   }
  // }
  //


  const chicken = document.createElement("img");
  chicken.src = "/images/android-chrome-96x96.png"; // 正常站立的小雞圖片
  chicken.id = "floating-chicken";
  chicken.style.position = "absolute"; // 設置小雞為絕對定位
  document.body.appendChild(chicken);

  const logo = document.getElementById("logo"); // 假設你的 logo 的 id 是 'logo'
  let mouseX = 0, mouseY = 0; // 滑鼠的即時座標
  let chickenX, chickenY; // 小雞初始位置將根據 logo 的位置設置
  const speed = 0.02; // 控制小雞跟隨速度
  let isMoving = false; // 小雞是否正在移動
  let state = "normal"; // 小雞的狀態，初始為正常
  let stopTimeout; // 定義用於檢測滑鼠停止的計時器

  // 設置小雞的初始位置到 logo 上面
  if (logo) {
    const logoRect = logo.getBoundingClientRect();
    chickenX = logoRect.left - 8;
    chickenY = logoRect.top - 10;
  } else {
    chickenX = 0; // 如果找不到 logo，設置默認為左上角
    chickenY = 0;
  }

  // 初始化小雞的位置
  chicken.style.transform = `translate(${chickenX}px, ${chickenY}px)`;

  // 監聽滑鼠移動事件，更新滑鼠的座標
  document.addEventListener("mousemove", function(event) {
    mouseX = event.pageX;
    mouseY = event.pageY;

    // 當滑鼠移動時，恢復小雞到正常大小
    chicken.src = "/images/android-chrome-96x96.png"; // 恢復正常站立的圖片
    state = "normal"; // 重置狀態為正常

    // 清除之前的滑鼠停止計時器
    clearTimeout(stopTimeout);

    // 設置滑鼠停止後的變胖效果
    stopTimeout = setTimeout(function() {
      if (state === "normal") {
        chicken.src = "/images/chicken-fat.png"; // 切換到變胖圖片
        state = "fat";

        // 另一個計時器在變胖後500ms後切換到荷包蛋
        setTimeout(function() {
          if (state === "fat") {
            chicken.src = "/images/fried-egg.ico"; // 切換到荷包蛋圖片
            state = "egg";
            chicken.style.transform = `translate(${chickenX}px, ${chickenY + 30}px)`; // 根據需要調整Y坐標
          }
        }, 1000); // 1000ms後切換到荷包蛋
      }
    }, 500); // 滑鼠停止500ms後變胖

    // 開始移動小雞
    if (!isMoving) {
      isMoving = true; // 標記小雞正在移動
      animateChicken(); // 開始跟隨滑鼠移動
    }
  });

  function animateChicken() {
    // 逐步移動小雞，讓小雞靠近滑鼠
    chickenX += (mouseX - chickenX) * speed;
    chickenY += (mouseY - chickenY) * speed;

    // 更新小雞的位置
    chicken.style.transform = `translate(${chickenX}px, ${chickenY}px)`;

    // 當小雞接近滑鼠時，停止移動
    if (Math.abs(mouseX - chickenX) > 1 || Math.abs(mouseY - chickenY) > 1) {
      requestAnimationFrame(animateChicken); // 繼續移動
    } else {
      isMoving = false; // 小雞停止移動，允許再次移動
    }
  }





});
