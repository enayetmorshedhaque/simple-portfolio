$(document).ready(function () {
  function applyThemeChange() {
    var screenWidth = $(window).width();
    if (screenWidth <= 1023) {
      $("#theme-change-mobile").show();
      $("#theme-change-desktop").hide();
    } else {
      $("#theme-change-mobile").hide();
      $("#theme-change-desktop").show();
    }
  }

  function toggleDarkMode() {
    $(".dark-mode").click(function () {
      $("body").addClass("dark-theme");
      $(".bright-mode").show();
      $(".dark-mode").hide();
    });

    $(".bright-mode").click(function () {
      $("body").removeClass("dark-theme");
      $(".dark-mode").show();
      $(".bright-mode").hide();
    });
  }

  // Apply theme change on initial load
  applyThemeChange();

  // Apply theme change on window resize
  $(window).resize(function () {
    applyThemeChange();
  });

  // Initialize toggle dark mode functionality
  toggleDarkMode();
});
