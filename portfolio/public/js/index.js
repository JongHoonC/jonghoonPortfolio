$(function () {
  var bar1 = new ProgressBar.Line('#line1', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#365BAB',
    trailColor: '#333333',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
  });
  var bar2 = new ProgressBar.Line('#line2', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#365BAB',
    trailColor: '#333333',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
  });
  var bar3 = new ProgressBar.Line('#line3', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#365BAB',
    trailColor: '#333333',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
  });
  var bar4 = new ProgressBar.Line('#line4', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#365BAB',
    trailColor: '#333333',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
  });
  var bar5 = new ProgressBar.Line('#line5', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#365BAB',
    trailColor: '#333333',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
  });
  var bar6 = new ProgressBar.Line('#line6', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#365BAB',
    trailColor: '#333333',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
  });

  $(window).scroll(function () {
    let skillTop = $('#Skill').offset().top;
    console.log(skillTop);
    if ($(window).scrollTop() > skillTop - 400) {
      bar1.animate(0.9);
      bar2.animate(0.9);
      bar3.animate(0.4);
      bar4.animate(0.6);
      bar5.animate(0.6);
      bar6.animate(0.5);
    }
  });
});
