export function mainScroll() {
  var tlSecondScroll = new TimelineMax();

  tlSecondScroll
    .set(".scroll-title1", { opacity: 0 })
    .set(".logos-container__logo", { opacity: 0, y: "50%" })
    .set(".scroll-text1", { opacity: 0, y: "50%" })
    .to(".root-loading-img", 0, { opacity: 0 })
    .to(".scroll-title1", 2, { opacity: 1 })
    .to(".scroll-text1", 1, { opacity: 1, y: "-5%", delay: 0.5 })
    .to(".scroll-text1", 2, { opacity: 1, y: "-5%" })
    .to(".logo1", 1, { opacity: 1, y: "0%" })
    .to(".logo2", 1, { opacity: 1, y: "0%" })
    .to(".logo3", 1, { opacity: 1, y: "0%" })
    .to(".logo4", 1, { opacity: 1, y: "0%" })
    .to(".logo5", 1, { opacity: 1, y: "0%" })
    .to(".root-loading-img", 0, { opacity: 0 });

  var controller = new ScrollMagic.Controller();
  if (window.innerWidth >= 1025) {
    var scene1 = new ScrollMagic.Scene({
      triggerElement: ".second-screen",
      triggerHook: 0.5,
      duration: "100%"
    })
      .setTween(tlSecondScroll)
      .setPin(".second-screen")
      .addIndicators()
      .addTo(controller);
  } else {
    var scene1 = new ScrollMagic.Scene({
      triggerElement: ".second-screen",
      triggerHook: 0.5,
      duration: "700"
    })
      .setTween(tlSecondScroll)
      .setPin(".second-screen")
      .addIndicators()
      .addTo(controller);
  }

  var tlThirdScroll = new TimelineMax();
  if (window.innerWidth >= 1025) {
    tlThirdScroll
      .set(".scroll-title2", { opacity: 0 })
      .set(".right-ellipse", { opacity: 0 })
      .set(".scroll-text--enrecom", { opacity: 0, y: "100" })
      .set(".scroll-link--enrecom", { opacity: 0 })
      .set(".scroll-text--ensend", { display: "none", opacity: 0, y: "100" })
      .set(".scroll-link--ensend", { display: "none", opacity: 0 })
      .set(".scroll-text--enpop", { display: "none", opacity: 0, y: "100" })
      .set(".scroll-link--enpop", { display: "none", opacity: 0 })
      .set(".name--enrecom", { opacity: 0 })
      .set(".name--ensend, .name--enpop", { opacity: 0, display: "none" })
      .set(".ellipse-line", { opacity: 0 })
      .set(".product-block", { opacity: 0 })
      .set(".service-enrecom", { rotation: -100, opacity: 0 })
      .set(".service-ensend", { rotation: -145, opacity: 0 })
      .set(".service-enpop", { rotation: -190, opacity: 0 })

      .to(".scroll-title2", 1, { opacity: 1, delay: 1 })
      .to(".product-block", 2, { opacity: 1 })
      .to(".right-ellipse", 1, { opacity: 1 }, "-=2")
      //enRecom start
      .to(".service-enrecom", 2, { rotation: -90, opacity: 1 }, "-=1")
      .to(".service-ensend", 2, { rotation: -135, opacity: 1 }, "-=2")
      .to(".service-enpop", 2, { rotation: -180, opacity: 1 }, "-=2")
      .to(".ellipse-line", 2, { opacity: 1 }, "-=1")
      .to(".name--enrecom", 1, { opacity: 1 }, "-=2")
      .to(".scroll-text--enrecom", 2, { opacity: 1, y: "0%" }, "-=3")
      .to(".scroll-link--enrecom", 2, { opacity: 1 })
      .to(".scroll-text--enrecom", 2, { opacity: 0, y: "-200" })
      .to(".scroll-link--enrecom", 2, { opacity: 0, y: "-200" }, "-=2")
      .to(".name--enrecom", 1, { opacity: 0 }, "-=2")
      .to(".scroll-text--enrecom, .scroll-link--enrecom, .name--enrecom", 0, {
        display: "none"
      })
      //enRecom end - enSend start
      .to(".name--ensend", 1, { display: "block", opacity: 1 }, "-=1")
      .to(".scroll-text--ensend, .scroll-link--ensend", 0, { display: "block" })
      .to(".service-enrecom", 4, { rotation: -45 }, "-=2")
      .to(".service-ensend", 4, { rotation: -90 }, "-=4")
      .to(".service-enpop", 4, { rotation: -135 }, "-=4")
      .to(".scroll-text--ensend", 2, { opacity: 1, y: "0" }, "-=2")
      .to(".scroll-link--ensend", 2, { opacity: 1 })
      .to(".scroll-text--ensend", 2, { opacity: 0, y: "-200" })
      .to(".scroll-link--ensend", 2, { opacity: 0, y: "-200" }, "-=2")
      .to(".name--ensend", 1, { opacity: 0 }, "-=2")
      .to(".scroll-text--ensend, .scroll-link--ensend, .name--ensend", 0, {
        display: "none"
      })
      //enSend end - enPop start
      .to(".name--enpop", 1, { display: "block", opacity: 1 }, "-=1")
      .to(".scroll-text--enpop, .scroll-link--enpop", 0, { display: "block" })
      .to(".service-enrecom", 4, { rotation: 0 }, "-=2")
      .to(".service-ensend", 4, { rotation: -45 }, "-=4")
      .to(".service-enpop", 4, { rotation: -90 }, "-=4")
      .to(".scroll-text--enpop", 2, { opacity: 1, y: "0" }, "-=2")
      .to(".scroll-link--enpop", 2, { opacity: 1 });

    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".third-screen",
      triggerHook: 0.5,
      duration: "4500"
    })
      .setTween(tlThirdScroll)
      .setPin(".third-screen")
      .addIndicators()
      .addTo(controller);
  } else {
    // tlThirdScroll
    // .
  }

  var tlFourthScroll = new TimelineMax();
  tlFourthScroll
    .set(".reasons", { opacity: 0, y: 50 })
    .set(".scroll-title3", { opacity: 0 })
    .to(".scroll-title3", 1, { opacity: 1 })
    .to(".reason1", 1, { opacity: 1, y: 0 })
    .to(".reason2", 1, { opacity: 1, y: 0 })
    .to(".reason3", 1, { opacity: 1, y: 0 })
    .to(".reason4", 1, { opacity: 1, y: 0 });

  var scene3 = new ScrollMagic.Scene({
    triggerElement: ".fourth-screen",
    triggerHook: 0.8,
    duration: "400"
  })
    .setTween(tlFourthScroll)
    .addIndicators()
    .addTo(controller);

  var tlFifthScroll = new TimelineMax();
  tlFifthScroll
    .set(".blog", { opacity: 0, y: 50 })
    .set(".blog__link", { opacity: 0 })
    .set(".scroll-title4", { opacity: 0 })
    .to(".scroll-title4", 1, { opacity: 1 })
    .to(".blog1", 1, { opacity: 1, y: 0 })
    .to(".blog2", 1, { opacity: 1, y: 0 })
    .to(".blog3", 1, { opacity: 1, y: 0 })
    .to(".blog4", 1, { opacity: 1, y: 0 })
    .to(".blog__link", 3, { opacity: 1, y: 0 });

  var scene4 = new ScrollMagic.Scene({
    triggerElement: ".fifth-screen",
    triggerHook: 0.8,
    duration: "600"
  })
    .setTween(tlFifthScroll)
    .addIndicators()
    .addTo(controller);

  var tlLoadAnim = new TimelineMax();
  tlLoadAnim
    .set(".mac-container__screen, .root-loading-img ", { opacity: 0 })
    .to(".mac-container__screen", 1, { opacity: 1 })
    .to(".root-loading-img", 1, { opacity: 1 })
    .to(".mac-container__white-screen", 1, { opacity: 0 })
    .to(".mac-container__white-screen", 0, { display: "none" })
    .to(
      ".mac-container__screen",
      0,
      { backgroundImage: "url(/assets/img/main/Macbook-bg.jpg)" },
      "-=1"
    );

  var tlFirstScroll = new TimelineMax();

  if (window.innerWidth >= 1850) {
    tlFirstScroll
      .set(".mac-container__enpop-icon", {
        x: 256,
        y: 82,
        scale: 0.8,
        opacity: 0
      })
      .set(".mac-container__ensend-icon", {
        x: -17,
        y: 99,
        scale: 0.7,
        opacity: 0
      })
      .set(".mac-container__enrecom-icon", {
        x: -270,
        y: 63,
        scale: 0.9,
        opacity: 0
      })
      .set(".root-loading-img", { opacity: 1 })

      .to(".mac-container__enpop-icon", 2, {
        x: 76,
        y: -137,
        scale: 1,
        opacity: 1
      })
      .to(
        ".mac-container__ensend-icon",
        2,
        { x: -387, y: 149, scale: 1, opacity: 1 },
        "-=2"
      )
      .to(
        ".mac-container__enrecom-icon",
        2,
        { x: -230, y: 63, scale: 1, opacity: 1 },
        "-=2"
      )
      .to(".root-loading-img", 0.5, { opacity: 0 }, "-=2");

    var scene5 = new ScrollMagic.Scene({
      triggerElement: ".first-screen",
      triggerHook: 0,
      duration: "400"
    })
      .setTween(tlFirstScroll)
      .setPin(".first-screen")
      .addIndicators()
      .addTo(controller);
  } else if (window.innerWidth >= 1280) {
    tlFirstScroll
      .set(".mac-container__enpop-icon", {
        x: 144,
        y: 48,
        scale: 0.5,
        opacity: 0
      })
      .set(".mac-container__ensend-icon", {
        x: 129,
        y: -224,
        scale: 0.5,
        opacity: 0
      })
      .set(".mac-container__enrecom-icon", {
        x: -125,
        y: -260,
        scale: 0.6,
        opacity: 0
      })
      .set(".root-loading-img", { opacity: 1 })

      .to(".mac-container__enpop-icon", 2, {
        x: 64,
        y: -104,
        scale: 0.7,
        opacity: 1
      })
      .to(
        ".mac-container__ensend-icon",
        2,
        { x: -126, y: -146, scale: 0.7, opacity: 1 },
        "-=2"
      )
      .to(
        ".mac-container__enrecom-icon",
        2,
        { x: -95, y: -260, scale: 0.7, opacity: 1 },
        "-=2"
      )
      .to(".root-loading-img", 0.5, { opacity: 0 }, "-=2");
    var scene5 = new ScrollMagic.Scene({
      triggerElement: ".first-screen",
      triggerHook: 0,
      duration: "400"
    })
      .setTween(tlFirstScroll)
      .setPin(".first-screen")
      .addIndicators()
      .addTo(controller);
  } else if (window.innerWidth >= 768) {
    tlFirstScroll
      .set(".mac-container__enpop-icon", {
        x: 125,
        y: 35,
        scale: 0.5,
        opacity: 0
      })
      .set(".mac-container__ensend-icon", {
        x: 109,
        y: -238,
        scale: 0.5,
        opacity: 0
      })
      .set(".mac-container__enrecom-icon", {
        x: 145,
        y: -491,
        scale: 0.5,
        opacity: 0
      })
      .set(".root-loading-img", { opacity: 1 })

      .to(".mac-container__enpop-icon", 2, {
        x: 64,
        y: -104,
        scale: 0.6,
        opacity: 1
      })
      .to(
        ".mac-container__ensend-icon",
        2,
        { x: -151, y: -158, scale: 0.7, opacity: 1 },
        "-=2"
      )
      .to(
        ".mac-container__enrecom-icon",
        2,
        { x: 195, y: -491, scale: 0.6, opacity: 1 },
        "-=2"
      )
      .to(".root-loading-img", 0.5, { opacity: 0 }, "-=2");
    var scene5 = new ScrollMagic.Scene({
      triggerElement: ".mac-container",
      triggerHook: 0.5,
      duration: "200"
    })
      .setTween(tlFirstScroll)
      .addIndicators()
      .addTo(controller);
  } else {
    tlFirstScroll
      .set(".mac-container__enpop-icon", {
        x: 46,
        y: -14,
        scale: 0.4,
        opacity: 0
      })
      .set(".mac-container__ensend-icon", {
        x: 30,
        y: -285,
        scale: 0.4,
        opacity: 0
      })
      .set(".mac-container__enrecom-icon", {
        x: 63,
        y: -541,
        scale: 0.4,
        opacity: 0
      })
      .set(".root-loading-img", { opacity: 1 })

      .to(".mac-container__enpop-icon", 2, {
        x: -21,
        y: -124,
        scale: 0.5,
        opacity: 1
      })
      .to(
        ".mac-container__ensend-icon",
        2,
        { x: -133, y: -249, scale: 0.5, opacity: 1 },
        "-=2"
      )
      .to(
        ".mac-container__enrecom-icon",
        2,
        { x: 95, y: -541, scale: 0.5, opacity: 1 },
        "-=2"
      )
      .to(".root-loading-img", 0.5, { opacity: 0 }, "-=2");
    var scene5 = new ScrollMagic.Scene({
      triggerElement: ".mac-container",
      triggerHook: 0.4,
      duration: "200"
    })
      .setTween(tlFirstScroll)
      .addIndicators()
      .addTo(controller);
  }
}
