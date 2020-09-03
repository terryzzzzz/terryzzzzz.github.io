$(document).ready(function(){
  // init
    init();

    // Start ------ Page Transition
    const options = {
      animationSelector: '[class*="transition-fade"]',
      animateHistoryBrowsing: true,
      plugins: [
        new SwupScrollPlugin({
            animateScroll: false
        })
      ]
    };
    const swup = new Swup(options);
    let scrollValues = {};
    swup.on('clickLink', () => {
        scrollValues[window.location.href] = window.scrollY;
    });
    swup.on('popState', () => {
        setTimeout(function() {
            window.scrollTo(0, scrollValues[window.location.href]);
        }, 100);
    });
    swup.on('contentReplaced', init);
    // End ------ Page Transition


  // Functions
    function init() {
      // GSAP For Type Animation
      let gridTl = gsap.timeline();
      gridTl.from('.grid-yellow', {duration: 2, height: 0, ease: "circ.out", delay: 1})


      const words = ["Terry.", "A Web Developer.", "A Graphic Designer.", "A Quick Learner."]
      let boxTl = gsap.timeline()
      boxTl.to('.hi', {duration: 0.5, opacity: 1, delay: 0.2, ease: "power3.in", onComplete: () => masterTl.play()})
      .to('.cursor', {opacity: 1, ease: "power2.inOut", repeat: -1})
      let masterTl = gsap.timeline({repeat: -1}).pause()
      words.forEach(word => {
        let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1, delay: 1})
        tl.to('.text', {duration: 1, text: word})
        masterTl.add(tl)
      })
    }
})
