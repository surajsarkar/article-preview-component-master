//

$(document).ready(function () {
  $(".icon-share").mouseenter(function () {
    $(".icon-block").animate({ opacity: "1" }, 300);
  });

  $(".icon-share").mouseleave(function () {
    $(".icon-block").animate({ opacity: "0" }, 300);
  });
});
