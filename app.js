var chart, ctx, sideBar, sideBarItems;

$("#sendEmailNotifications").prop('checked', localStorage.getItem('sendEmailNotifications') === "true");

$("#setProfileToPublic").prop('checked', localStorage.getItem('setProfileToPublic') === "true");

sideBar = $("#sideBar");

sideBarItems = $(".sideBarLink");

$("#navButton").click(function() {
  sideBar.css("width", "15vw");
  sideBar.toggle(250);
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
  $("#notifications").css("top", $("#header").height() + 20);
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
  new Audio('notification.wav').play();
  return void 0;
});

Chart.defaults.global.title.display = false;

// Chart.defaults.global.legend.display = false
Chart.defaults.global.legend.position = "right";

ctx = document.getElementById('trafficChart').getContext('2d');

chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-36', '37-43', '44-50', '51-57', '58-64', '65-71', '72-78', '79-85', '86-92', '93-99'],
    datasets: [
      {
        label: 'Traffic',
        backgroundColor: 'rgba(226, 227, 246, .75)',
        borderColor: '#005ebc',
        fontColor: 'rgb(150,150,150)',
        data: [500,
      1000,
      1500,
      2000,
      2500]
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 1,
            suggestedMax: 10
          }
        }
      ]
    },
    legend: {
      display: false
    }
  }
});

ctx = document.getElementById('dailyTrafficChart').getContext('2d');

chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        label: 'Daily Traffic',
        backgroundColor: '#7377BF',
        borderColor: '#7377BF',
        data: [50,
      100,
      150,
      200,
      250]
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 5,
            suggestedMax: 10
          }
        }
      ]
    },
    legend: {
      display: false
    }
  }
});

ctx.height = 500;

ctx = document.getElementById('mobileUsersChart').getContext('2d');

chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [
      {
        label: 'Mobile Users',
        backgroundColor: ['#81C98F',
      '#74B1BF',
      '#005ebc'],
        borderColor: '#005ebc',
        data: [18,
      27,
      65]
      }
    ],
    options: {
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMin: 50,
              suggestedMax: 100
            }
          }
        ]
      },
      legend: {
        display: true
      }
    }
  }
});

$("#sendMessage").click(function() {
  if ($("#searchForUser").val() === "" || $("#messageForUser").val() === "") {
    alert("Please don't leave the message blank");
    return void 0;
  } else {
    alert("Message sent");
    $("#searchForUser").val("");
    return $("#messageForUser").val("");
  }
});

$("#saveSettings").click(function(event) {
  localStorage.setItem('sendEmailNotifications', $("#sendEmailNotifications").prop('checked'));
  return localStorage.setItem('setProfileToPublic', $("#setProfileToPublic").prop('checked'));
});

$(".alertExit").click(function() {
  $(".alert").slideUp(250);
  return new Audio('notification.wav').play();
});
