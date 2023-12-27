
var DrawSVGPlugin = DrawSVGPlugin || window.DrawSVGPlugin
var CountUp = CountUp || window.CountUp

gsap.registerPlugin(DrawSVGPlugin)

function getRandomInt(min, max) {
  return Math.random() * (max - min) + min
}

// Doddle
var $doddle = jQuery('.doddle')

$doddle.each(function () {
  var $self = jQuery(this)
  var $maskPaths = $self.find('mask path')
  var isAsync = $self.attr('data-animation-async')
  var isLong = $self.attr('data-animation-long')
  var tl = gsap.timeline({
    paused: true
  })

  $maskPaths.each(function (i) {
    tl.fromTo(jQuery(this)[0], { drawSVG: '0%' }, { drawSVG: '100%', duration: isLong ? 2 : 1, ease: 'power1.out' }, i === 0 ? '<' : isAsync ? '>-0.5' : '>-0.75')
  })

  $self[0].tl = tl
})

// Dots
var $dots = jQuery('.dots')

$dots.each(function () {
  var $self = jQuery(this)
  var $dots = $self.find('circle, path')

  setInterval(() => {
    $dots.each(function (o, i) {
      gsap.to(jQuery(this)[0], { duration: 0.75, ease: 'power1.out', scale: getRandomInt(0.5, 2), transformOrigin: 'center center' })
    })
  }, 1250)
})

// Donate
var $donate = jQuery('.donate-grid-list')

$donate.each(function () {
  var $self = jQuery(this)
  var $maskPaths = $self.find('.donate-grid-svg svg mask path')

  $self.on('mouseenter', function () {
    console.log('dsa')
    $maskPaths.each(function (i) {
      gsap.fromTo(jQuery(this)[0], { drawSVG: '0%' }, { drawSVG: '100%', duration: 1, ease: 'power1.out' }, '<')
    })
  })

  $self.on('mouseleave', function () {
    $maskPaths.each(function (i) {
      gsap.fromTo(jQuery(this)[0], { drawSVG: '100%' }, { drawSVG: '0%', duration: 1, ease: 'power1.out' }, '<')
    })
  })
})
