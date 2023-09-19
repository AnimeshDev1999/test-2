let page = "one";

const pager = () => {
  if (page === "one") {
    jQuery(".head-1").text(" ");
    jQuery(".head-2").text("25M+ Downloads");
    jQuery(".head-3").text("on appstore & google playstore");
    jQuery(".txt-3").text("View Case Study");
  } else if (page === "two") {
    jQuery(".head-1").text("The Next Big");
    jQuery(".head-2").text("Blockchain");
    jQuery(".head-3").text("Revolution");
    jQuery(".txt-3").text("Comming Soon");
  } else if (page === "three") {
    jQuery(".head-1").text("Powered by");
    jQuery(".head-2").text("NASA");
    jQuery(".head-3").text("Algorithms");
    jQuery(".txt-3").text("View Case Study");
  } else if (page === "four") {
    jQuery(".head-1").text("Redefining");
    jQuery(".head-2").text("UX strategy");
    jQuery(".head-3").text("and UI design");
    jQuery(".txt-3").text("Comming Soon");
  } else if (page === "five") {
    jQuery(".head-1").text("Text Headline");
    jQuery(".head-2").text("Text Headline");
    jQuery(".head-3").text("Footer Headline");
    jQuery(".txt-3").text("View Case Study");
  } else if (page === "six") {
    jQuery(".head-1").text("Lorem");
    jQuery(".head-2").text("Lorem ipsum");
    jQuery(".head-3").text("Lorem");
    jQuery(".txt-3").text("Comming Soon");
  } else {
    jQuery(".head-1").text("Text Headline");
    jQuery(".head-2").text("Text Headline");
    jQuery(".head-3").text("Footer Headline");
    jQuery(".txt-3").text("View Case Study");
  }
};

$(document).ready(function () {
  $("#pg-1").waypoint(function () {
    page = "one";
    pager();
  });
});

$(document).ready(function () {
  $("#pg-2").waypoint(function () {
    page = "two";
    pager();
  });
});

$(document).ready(function () {
  $("#pg-3").waypoint(function () {
    page = "three";
    pager();
  });
});

$(document).ready(function () {
  $("#pg-4").waypoint(function () {
    page = "four";
    pager();
  });
});

$(document).ready(function () {
  $("#pg-5").waypoint(function () {
    page = "five";
    pager();
  });
});
$(document).ready(function () {
  $("#pg-6").waypoint(function () {
    page = "six";
    pager();
  });
});
$(document).ready(function () {
  $("#pg-7").waypoint(function () {
    page = "seven";
    pager();
  });
});
