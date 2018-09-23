var sideBar, sideBarItems;

sideBar = $("#sideBar");

sideBarItems = $(".sideBarLink");

$("#navButton").click(function() {
  sideBar.css("width", "20vw");
  sideBar.toggle("slide", {
    direction: "left"
  }, 250);
  return void 0;
});

$(".sideBarLink").click(function() {
  sideBar.hide("slide", {
    direction: "left"
  }, 250);
  $("#navButton").removeClass("is-active");
  return void 0;
});

$("#bellIcon").click(function() {
  $("#notification").css("width", "40%");
  $("#notifications").css("position", "absolute");
  $("#notifications").css("top", $("header").position().top + $("#header").height() + 20);
  $("#notifications").css("left", $("#bellIcon").position().left - $("#notifications").width() / 2);
  $("#notifications").toggle("slide", {
    direction: "up"
  }, 300);
  return void 0;
});

$(".notificationExitButton").click(function(event) {
  $(event.target).parent().slideUp(300);
  if ($(".notification:hidden").length === $(".notification").length - 1) {
    $("#greenAlertCircle").hide(150);
  }
  if (".notification:hidden".length === $(".notification").length - 1) {
    $("#bellIcon").off();
  }
  return void 0;
});
