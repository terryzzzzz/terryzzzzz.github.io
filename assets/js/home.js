//
// $(document).ready(function(){
//   const words = ["Terry.", "A Web Developer.", "A Graphic Designer.", "A Quick Learner."]
//
//   // let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1})
//
//   let boxTl = gsap.timeline()
//
//   boxTl.from('.hi', {duration: 1, y: "7vw", delay: 0.5, ease: "power3.out", onComplete: () => masterTl.play()})
//   .to('.cursor', {opacity: 1, ease: "power2.inOut", repeat: -1})
//
//   let masterTl = gsap.timeline({repeat: -1}).pause()
//
//   words.forEach(word => {
//     let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1, delay: 1})
//     tl.to('.text', {duration: 1, text: word})
//     masterTl.add(tl)
//   })
// })
