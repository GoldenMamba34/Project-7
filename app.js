var chart, ctx, sideBar, sideBarItems;

sideBar = $("#sideBar");

sideBarItems = $(".sideBarLink");

$("#navButton").click(function() {
  sideBar.css("width", "15vw");
  sideBar.toggle("slide", {
    direction: "left"
  }, 250);
  return void 0;
});

$(".sideBarLink").click(function() {
  if ($(document).width() < 769) {
    sideBar.hide("slide", {
      direction: "left"
    }, 250);
  }
  $("#navButton").removeClass("is-active");
  return void 0;
});

$("#bellIcon").click(function() {
  $("#notifications").css("position", "absolute");
  $("#notifications").css("top", $("header").position().top + $("#header").height() + 20);
  if ($(document).width() > 768) {
    $("#notifications").css("left", $("#bellIcon").position().left - $("#notifications").width() / 2 - $(document).width() * .1);
  } else if ($(document).width() > 568) {
    $("#notifications").css("left", "30%");
  } else {
    $("#notifications").css("left", "10%");
  }
  $("#notifications").toggle("slide", {
    direction: "up"
  }, 250);
  return void 0;
});

$(".notificationExitButton").click(function(event) {
  $(event.target).parent().slideUp(250);
  if ($(".notification:hidden").length === $(".notification").length - 1) {
    $("#greenAlertCircle").hide(150);
  }
  if (".notification:hidden".length === $(".notification").length - 1) {
    $("#bellIcon").off();
  }
  return void 0;
});

ctx = document.getElementById('trafficChart').getContext('2d');

chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-36', '37-43', '44-50', '51-57', '58-64', '65-71', '72-78', '79-85', '86-92', '93-99'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(226, 227, 246, .75)',
        borderColor: '#005ebc',
        data: [500,
      1000,
      1500,
      2000,
      2500]
      }
    ]
  },
  options: {
    responsive: true
  }
});
