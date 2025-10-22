import SiteLoader from "siteloader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";

import Lenis from "lenis";
const lenis = new Lenis({});

gsap.registerPlugin(ScrollTrigger);

const tl_nav = gsap.timeline({ paused: true });
tl_nav.fromTo(
  ".header",
  {
    y: -25,
    duration: 0.5,
    opacity: 0,
    ease: "Power1.out",
  },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: "Power1.out",
    scrollTrigger: {
      trigger: ".nav-menu",
      start: "top 80%",
    },
  }
);

document.addEventListener("astro:page-load", () => {
  // Run preloader only on first visit
  if (localStorage.getItem("hasVisited")) {
    console.log("Returning visitor – skipping preloader");

    // Instantly hide preloader and intro to avoid flash
    const style = document.createElement("style");
    style.innerHTML = "#preloader, .intro { display: none !important; }";
    document.head.appendChild(style);

    // Remove preloader elements if present
    const preloader = document.getElementById("preloader");
    const intro = document.getElementById("intro");
    if (preloader) preloader.remove();
    if (intro) intro.remove();

    // ✅ Make sure toolbar is visible immediately
    const header = document.getElementById("header");
    if (header) {
      header.classList.remove("animate-hidden");
      header.style.opacity = "1";
      header.style.transform = "translateY(0)";
    }

    return;
  } else {
    localStorage.setItem("hasVisited", "true");
  }
  gsap.registerPlugin(ScrollTrigger);
  if (typeof gsap.ScrollTrigger === "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  Splitting();
  //scrollTrigger splitting-heading
  if (document.querySelector(".splitting-heading")) {
    const SplittingTexts = document.querySelectorAll(".splitting-heading");
    SplittingTexts.forEach((SplittingText) => {
      Splitting({ target: SplittingText, by: "chars" });
      const SplittingSectionHeader = SplittingText.closest(".section-header");
      const SplittingTextChars = document.querySelectorAll(".char");
      SplittingTextChars.forEach((char, index) => {
        const SplittingTextAnimation = gsap.timeline({
          paused: true,
        });
        gsap.set(char, { opacity: 0, yPercent: 75 });
        SplittingTextAnimation.to(char, {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          delay: index * 0.075,
          ease: "power1.out",
        });
        ScrollTrigger.create({
          trigger: SplittingSectionHeader,
          start: "top 80%",
          onEnter: () => {
            SplittingTextAnimation.play();
          },
        });
      });
    });
  }

  //scrollTrigger splitting-text
  if (document.querySelector(".splitting-text")) {
    const SplittingTexts = document.querySelectorAll(".splitting-text");
    SplittingTexts.forEach((SplittingText) => {
      Splitting({ target: SplittingText, by: "chars" });
      const SplittingTextTrigger = SplittingText.closest(
        ".splitting-text-trigger"
      );
      const SplittingTextChars = document.querySelectorAll(".char");
      SplittingTextChars.forEach((char, index) => {
        const SplittingTextAnimation = gsap.timeline({
          paused: true,
        });
        gsap.set(char, { opacity: 0, yPercent: 50 });
        SplittingTextAnimation.to(char, {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          delay: index * 0.05,
          ease: "power1.out",
        });
        ScrollTrigger.create({
          trigger: SplittingTextTrigger,
          start: "top 80%",
          onEnter: () => {
            SplittingTextAnimation.play();
          },
        });
      });
    });
  }

  // =====================================
  // loading step--1
  // Loading Start Logo
  // =====================================
  const tl_preloader = gsap.timeline({ paused: true });
  if (document.querySelector("#preloader")) {
    const preloader = document.getElementById("preloader");
    tl_preloader.to(".preloader-wrapper", {
      y: -25,
      duration: 0.75,
      opacity: 0,
      delay: 0.5,
      ease: "Power1.out",
    });
    tl_preloader.to(".preloader", {
      duration: 0.01,
      opacity: 0,
      ease: "Power1.out",
      onComplete: function () {
        preloader.parentNode.removeChild(preloader);
      },
    });
  }

  // =====================================
  // Loading step--2
  // =====================================
  const tl_intro = gsap.timeline({ paused: true });
  if (document.getElementById("intro")) {
    const introImgList = gsap.utils.toArray(".intro__img");
    let startDelay = 0;
    introImgList.forEach((imgWrapper, index) => {
      const imgElement = imgWrapper.querySelector("img");
      tl_intro
        .fromTo(
          imgWrapper,
          {
            clipPath: "inset(100% 100% 100% 100%)",
          },
          {
            duration: 2,
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "power1.out",
            delay: startDelay,
          },
          "<"
        )
        .fromTo(
          imgElement,
          {
            scale: 1.8,
          },
          {
            duration: 2,
            scale: 1,
            ease: "power1.out",
          },
          "="
        );
      startDelay += 0.35;
    });
  }

  // =====================================
  // Loading step--3
  // Loading Hide
  // =====================================
  const tl_overlay = gsap.timeline({ paused: true });
  if (document.querySelector(".intro")) {
    const fadeMask = document.getElementsByClassName("intro__fader");
    const introWrapper = document.getElementById("intro");
    tl_overlay.fromTo(
      fadeMask,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.in",
      },
      0.5
    );
    tl_overlay.fromTo(
      introWrapper,
      {
        yPercent: 0,
      },
      {
        yPercent: -125,
        duration: 1.15,
        ease: "power2.in",
      },
      "<"
    );
  }

  // =====================================
  // Loading step--1
  // Processing SiteLoader
  // =====================================
  if (document.querySelector(".js-siteloader")) {
    var loadingDone = false;
    const sl = new SiteLoader([
      {
        sources: [
          {
            sourceType: "image",
            selectors: [".img-load", ".hero-figure__img", ".slImg"],
          },
        ],
      },
    ]);
    sl.setTargetTextDom(".loading-num");
    sl.addEventListener("progress", (e) => {});
    sl.addEventListener("countComplete", () => {
      tl_preloader.play();
      loadingDone = true;
    });
    sl.startLoad();

    setTimeout(function () {
      // Fallback for loading if it takes too long
      if (loadingDone == false) {
        document.querySelector(".loading-num").innerText = "100";
        tl_preloader.play();
        loadingDone = true;
      }
    }, 12000);
  }

  // =====================================
  // Index Loading
  // =====================================
  if (document.querySelector(".index")) {
    document.body.classList.add("no-scroll");
    document.getElementById("header").classList.add("animate-hidden");
    tl_preloader.eventCallback("onComplete", function () {
      tl_intro.play();
    });
    tl_intro.eventCallback("onComplete", function () {
      tl_overlay.play();
    });

    tl_overlay.eventCallback("onComplete", function () {
      if (document.querySelector(".no-scroll")) {
        document.body.classList.remove("no-scroll");
      }
      document.getElementById("header").classList.remove("animate-hidden");
      tl_nav.play();
      if (document.querySelector(".index")) {
        HeroImgTimeline.play();
      }
      var loadIntroWrapper = document.getElementById("intro");
      if (loadIntroWrapper) {
        loadIntroWrapper.remove();
      }
    });
  } else {
    console.log("No Home Page");
  }

  function createAnimation(animationName, customProps = {}) {
    const defaultAnimations = {
      defaultAni: {
        y: 80,
        duration: 1.5,
        opacity: 0,
        ease: "Power1.out",
      },
      defaultAniWithDelay: {
        y: 40,
        duration: 1,
        opacity: 0,
        ease: "Power1.out",
        delay: 0.5,
      },
      fadeTop: {
        y: 75,
        duration: 1.25,
        opacity: 0,
        ease: "Power1.out",
      },
      fadeTopDelay: {
        y: 45,
        duration: 1,
        opacity: 0,
        delay: 0.75,
        ease: "Power1.out",
      },
      fadeTopDelayBig: {
        y: 45,
        duration: 1,
        opacity: 0,
        delay: 1,
        ease: "Power1.out",
      },
      fadeTopBig: {
        y: 100,
        duration: 1.5,
        opacity: 0,
        ease: "Power1.out",
      },
      fadeBottom: {
        y: -100,
        duration: 1.5,
        opacity: 0,
        delay: 1,
        ease: "Power1.out",
      },
      lineExtend: {
        width: 0,
        duration: 1.25,
        ease: "Power1.out",
      },
      figureScale: {
        scale: 1.05,
        duration: 2,
        ease: "Power1.out",
      },
      figureMove: {
        yPercent: -10,
        duration: 2,
        ease: "Power1.out",
      },
      figureMoveBit: {
        y: -40,
        duration: 2,
        ease: "Power1.out",
      },
    };
    if (!defaultAnimations.hasOwnProperty(animationName)) {
      throw new Error(
        `Animation name "${animationName}" does not exist in defaultAnimations.`
      );
    }
    return { ...defaultAnimations[animationName], ...customProps };
  }

  function createScrollTrigger(selector, triggerProps = {}) {
    return {
      trigger: selector,
      ...triggerProps,
    };
  }

  function applyScrollTriggerAnimation(
    selector,
    animationName,
    triggerSelector,
    triggerProps = {}
  ) {
    const animationProps = createAnimation(animationName);
    const scrollTriggerProps = { trigger: triggerSelector, ...triggerProps };
    gsap.from(selector, {
      ...animationProps,
      scrollTrigger: scrollTriggerProps,
    });
  }

  if (document.querySelectorAll(".section-header")) {
    const sectionHeaders = document.querySelectorAll(".section-header");
    sectionHeaders.forEach((sectionHeader) => {
      const sectionHeaderTitle = sectionHeader.querySelector(
        ".section-header__title"
      );
      const sectionHeaderLink = sectionHeader.querySelector(
        ".section-header__link"
      );
      applyScrollTriggerAnimation(
        sectionHeaderTitle,
        "fadeTop",
        sectionHeader,
        { start: "top 80%" }
      );
      applyScrollTriggerAnimation(
        sectionHeaderLink,
        "fadeTopDelay",
        sectionHeader,
        { start: "top 80%" }
      );
    });
  }
  // =====================================
  // Home Hero Swiper
  // =====================================
  const HeroImgTimeline = gsap.timeline({ paused: true });
  if (document.querySelector(".index")) {
    const HeroImgList = gsap.utils.toArray(".hero-item");
    HeroImgList.forEach((img, index) => {
      HeroImgTimeline.from(
        img,
        {
          x: -50,
          duration: 0.75,
          opacity: 0,
          ease: "Power1.out",
        },
        index * 0.25
      );
    });
    HeroImgTimeline.from(
      ".hero-swiper-navigation",
      {
        x: -25,
        duration: 0.5,
        opacity: 0,
        ease: "Power1.out",
      },
      0.5
    );
  }

  // =====================================
  // Common Section Header
  // =====================================
  function createLineExtendAnimation(element) {
    gsap.from(element, {
      width: 0,
      duration: 1.25,
      ease: "Power1.out",
      delay: 0.15,
      scrollTrigger: {
        trigger: element.closest(".section-header"),
        start: "top 80%",
      },
    });
  }

  document.querySelectorAll(".section-header__line").forEach(function (link) {
    createLineExtendAnimation(link);
  });

  if (document.querySelector(".page")) {
    if (!document.querySelector(".index")) {
      document.getElementById("header").classList.remove("animate-hidden");
      tl_nav.play();
    }
  }
  if (document.querySelector(".scroll-text")) {
    gsap.to(".scroll-text .animate-item", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "Power1.out",
      scrollTrigger: {
        trigger: ".scroll-text",
        start: "top 80%",
      },
    });
  }

  // Page Gallery
  function startGalleryAnimations() {
    const pictureElements = document.querySelectorAll(".gallery-item");
    pictureElements.forEach((picture, index) => {
      const pictureWrapper = picture.parentElement;
      gsap.fromTo(
        picture,
        {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power1.out",
        },
        {
          opacity: 1,
          y: 0,
        },
        {
          delay: index * 0.25,
          scrollTrigger: {
            trigger: picture,
            start: "top 80%",
            onEnter: () => {},
            onLeaveBack: () => {},
          },
        }
      );
    });
  }

  if (document.querySelector(".page-article")) {
    const startHeroFigure = document.querySelector(".p-article-hero__figure");
    const startHeroTitle = document.querySelector(".p-article-hero__title");
    applyScrollTriggerAnimation(
      startHeroTitle,
      "fadeTopDelay",
      startHeroTitle,
      { start: "top 80%" }
    );
    applyScrollTriggerAnimation(
      startHeroFigure,
      "fadeTopDelayBig",
      startHeroFigure,
      { start: "top 80%" }
    );

    if (document.querySelector(".page-article")) {
      const contentBlocks = document.querySelectorAll(".content-block");
      const contentAllFigures = document.querySelectorAll(".content-figure");
      contentBlocks.forEach((contentBlock) => {
        applyScrollTriggerAnimation(contentBlock, "fadeTop", contentBlock, {
          start: "top 80%",
        });
      });

      contentAllFigures.forEach((contentAllFigure) => {
        applyScrollTriggerAnimation(
          contentAllFigure,
          "fadeTop",
          contentAllFigure,
          { start: "top 80%" }
        );
      });
    }
  }

  if (document.querySelectorAll(".content-figure-abs")) {
    const contentFigures = document.querySelectorAll(".content-figure");
    contentFigures.forEach((contentFigure) => {
      const contentFigureAbs = contentFigure.querySelector(
        ".content-figure-abs"
      );
      applyScrollTriggerAnimation(
        contentFigureAbs,
        "figureMove",
        contentFigure,
        { scrub: 1 }
      );
    });
  }

  if (document.querySelector(".p-article-hero__figure-abs")) {
    const pArticleHeroFigure = document.querySelector(
      ".p-article-hero__figure"
    );
    const pArticleHeroFigureAbs = pArticleHeroFigure.querySelector(
      ".p-article-hero__figure-img"
    );
    applyScrollTriggerAnimation(
      pArticleHeroFigureAbs,
      "figureMove",
      pArticleHeroFigure,
      { start: "top 20%", scrub: 1 }
    );
  }

  // =====================================
  // Common Footer
  // =====================================
  if (document.querySelector(".footer")) {
    //footer
    gsap.from(".footer-social", {
      y: 40,
      duration: 1.25,
      opacity: 0,
      delay: 0.5,
      ease: "Power1.out",
      scrollTrigger: ".footer-social",
    });
    gsap.from(".footer-nav", {
      y: 40,
      duration: 1.25,
      opacity: 0,
      delay: 0.75,
      ease: "Power1.out",
      scrollTrigger: ".footer-nav",
    });
    gsap.from(".footer-brand", {
      yPercent: 50,
      duration: 1.25,
      opacity: 0,
      delay: 0.5,
      ease: "Power1.out",
      scrollTrigger: {
        trigger: ".footer-brand__figure",
      },
    });
    gsap.from(".footer-bottom__line", {
      width: 0,
      duration: 1,
      delay: 0.75,
      ease: "Power1.out",
      scrollTrigger: {
        trigger: ".footer-bottom",
      },
    });
    gsap.from(".footer-bottom__content", {
      y: 20,
      duration: 0.75,
      opacity: 0,
      delay: 1.25,
      ease: "Power1.out",
      scrollTrigger: {
        trigger: ".footer-bottom",
      },
    });
  }
});
