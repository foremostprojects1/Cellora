(function ($) {
    "use strict";
    // --------- INDEX-1 BANNER TITLE ANIMATION ----------
    var textWrapper = document.querySelector('.rv-1-text-animate');
    if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S+/g, "<span class='word'>$&</span>");
    }

    anime.timeline({ loop: true })
        .add({
            targets: '.rv-1-text-animate .word',
            translateX: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 3000,
            delay: (el, i) => 500 + 200 * i
        }).add({
            targets: '.rv-1-text-animate .word',
            translateX: [0, -90],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 2900,
            delay: (el, i) => 100 + 150 * i
        });
    // --------- INDEX-1 BANNER TITLE ANIMATION ----------

    // FIXED HEADER =====
    window.addEventListener("scroll", () => {
        const toFixHeaders = document.querySelectorAll(".to-be-fixed");
        toFixHeaders.forEach(toFixHeader => {
            if (window.scrollY > 100) {
                toFixHeader.classList.add("fixed");
                document.body.style.paddingTop = toFixHeader.getBoundingClientRect().height + 'px';
            } else {
                toFixHeader.classList.remove("fixed");
                document.body.style.paddingTop = 0;
            }
        })
    });
    //===== FIXED HEADER

    // ANIMATION ON SCROLL
    AOS.init({
        duration: 1200,
        once: true,
    });

    // INDEX-1 IMAGE REVEAL ANIMATION
    gsap.registerPlugin(ScrollTrigger);
    let imageContainers = document.querySelectorAll(".reveal");

    imageContainers.forEach(imageContainer => {
        let image = imageContainer.querySelector("img");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: imageContainer,
                toggleActions: "restart none none reset",
                once: true,
            }
        });

        tl.set(imageContainer, { autoAlpha: 1 });
        tl.from(imageContainer, 0.8, {
            xPercent: -100,
            ease: Power2.out
        });
        tl.from(image, 0.8, {
            xPercent: 100,
            scale: 1.3,
            delay: -0.8,
            ease: Power2.out
        });
    });


    // INDEX-1 SPEAKERS SLIDER
    new Swiper(".rv-1-speakers__slider", {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: true,
        navigation: {
            nextEl: "#rv-1-speakers__slider-nav .next",
            prevEl: "#rv-1-speakers__slider-nav .prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            992: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
            1200: {
                spaceBetween: 30,
            }
        },
    });

    // INDEX-1 VIDEO CONTROLS
    const videos = document.querySelectorAll('.rv-1-speaker video');

    videos.forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });

        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });

    // INDEX-1 GALLERY SLIDER
    const gallerySlider = new Swiper(".rv-1-gallery__slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: true,
        navigation: {
            nextEl: "#rv-1-gallery__slider-nav .next",
            prevEl: "#rv-1-gallery__slider-nav .prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            480: {
                centeredSlides: true,
                spaceBetween: 15,
                slidesPerView: 1.5,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                spaceBetween: 15,
                slidesPerView: 3,
            },
            992: {
                spaceBetween: 20,
            },
            1400: {
                spaceBetween: 30,
            }
        },
    });

    // INDEX-1 BLOGS SLIDER
    new Swiper(".rv-1-blogs__slider", {
        spaceBetween: 30,
        autoplay: true,
        navigation: {
            nextEl: "#rv-1-blogs__slider-nav .next",
            prevEl: "#rv-1-blogs__slider-nav .prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            480: {
                centeredSlides: true,
                spaceBetween: 15,
                slidesPerView: 1.5,
            },
            768: {
                spaceBetween: 15,
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
    });

    // INDEX-2 TEXT ANIMATION
    function textAnimate(sliderElement) {
        const textsToAnimate = sliderElement.querySelectorAll(".rv-text-anime");
        textsToAnimate.forEach(textToAnimate => {
            const animate = new SplitType(textToAnimate, { types: 'words , chars' });
            gsap.from(animate.chars, {
                opacity: 0,
                x: 100,
                duration: 1.1,
                stagger: { amount: 0.9 },
                scrollTrigger: {
                    trigger: textToAnimate,
                    start: "top 95%",
                }
            });
        })
    };

    textAnimate(document);


    // INDEX-2 BLOGS SLIDER
    new Swiper(".rv-2-blogs__slider", {
        slidesPerView: 3,
        spaceBetween: 15,
        autoplay: true,
        navigation: {
            nextEl: "#rv-2-blogs__slider-nav .next",
            prevEl: "#rv-2-blogs__slider-nav .prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
                centeredSlides: true,
                slidesPerView: 1.5,
                loop: true,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
    });


    // INDEX 2 PORTFOLIO SLIDER
    new Swiper(".rv-2-portfolios__slider", {
        slidesPerView: 3,
        spaceBetween: 15,
        autoplay: true,
        pagination: {
            el: ".rv-2-swiper-dots",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
    });


    // INDEX-2 PROGRESS BAR 
    const progressBars = document.querySelectorAll('.progressbar');
    progressBars.forEach(progressBar => {
        const targetValue = parseInt(progressBar.getAttribute('data-value'), 10);
        const progressLabel = progressBar.querySelector(".progress-label");
        let currentValue = 0;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const updateProgressBar = () => {
                        if (currentValue < targetValue) {
                            currentValue++;
                            progressBar.style.width = `${currentValue}%`;
                            progressLabel.textContent = `${currentValue}%`;
                            requestAnimationFrame(updateProgressBar);
                        }
                    };

                    updateProgressBar();
                    observer.unobserve(progressBar);
                }
            });
        });

        observer.observe(progressBar);
    });


    // INDEX-3 BANNER SLIDER
    new Swiper(".rv-3-banner__slider", {
        loop: true,
        effect: "fade",
        autoplay: true,
        autoHeight: true,
        pagination: {
            el: ".rv-3-banner-swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">0' + (index + 1) + "</span>";
            },
        },
        on: {
            slideChange: function () {
                textAnimate(this.el);
            }
        }
    });


    // INDEX-3 CATEGORY SLIDER
    new Swiper(".rv-3-categories__slider", {
        autoplay: true,
        slidesPerView: 5,
        spaceBetween: 15,
        pagination: {
            el: "#rv-3-categories-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                centeredSlides: true,
                slidesPerView: 1.5,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1400: {
                spaceBetween: 30,
            }
        },
    });


    // INDEX-3 CATEGORY SLIDER
    new Swiper(".rv-3-products__slider", {
        autoplay: true,
        slidesPerView: 4,
        spaceBetween: 15,
        navigation: {
            nextEl: "#rv-3-products__slider-nav .next",
            prevEl: "#rv-3-products__slider-nav .prev",
        },
        breakpoints: {
            0: {
                centeredSlides: true,
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                spaceBetween: 30,
            }
        },
    });

    // INDEX-3 PROJECTS SLIDER 
    new Swiper(".rv-3-projects__slider", {
        autoplay: true,
        spaceBetween: 20,
        slidesPerView: "auto",
        pagination: {
            el: "#rv-3-projects-slider-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2.2,
                centeredSlides: true,
            },
            1400: {
                spaceBetween: 25,
            },
            1600: {
                spaceBetween: 30,
            }
        },
    });

    // INDEX-3 TESTIMONIAL SLIDER 
    const testimonialThumb = new Swiper(".rv-3-testimony__img-slider", {
        spaceBetween: 10,
        slidesPerView: "auto",
    });

    new Swiper(".rv-3-testimonial__slider", {
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        navigation: {
            nextEl: "#rv-3-testimonial-slider-nav .next",
            prevEl: "#rv-3-testimonial-slider-nav .prev",
        },
        thumbs: {
            swiper: testimonialThumb,
        },
    });

    // INDEX-3 TEAM SLIDER 
    new Swiper(".rv-3-team__slider", {
        autoplay: true,
        spaceBetween: 15,
        slidesPerView: 3,
        pagination: {
            el: "#rv-3-team-slider-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
        },
    });

    // INDEX-3 BLOG SLIDER 
    new Swiper(".rv-3-blogs__slider", {
        autoplay: true,
        spaceBetween: 20,
        slidesPerView: 3,
        pagination: {
            el: "#rv-3-blogs-slider-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1.5,
                centeredSlides: true,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
        },
    });

    // INDEX-4 Banner SLIDER 
    new Swiper(".rv-4-banner__slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 2,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: "#rv-4-banner-slider-pagination",
            clickable: true,
        },
        on: {
            slideChange: function () {
                textAnimate(this.el);
            }
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1.4,
            },
            992: {
                slidesPerView: 2,
            }
        },
    });


    // INDEX-5 Banner SLIDER 
    var rv_5_BannerThumbs = new Swiper(".rv-5-banner__txt-slider", {
        slidesPerView: 1,
        effect: "fade",
        on: {
            slideChange: function () {
                textAnimate(this.el);
            }
        },
    });

    new Swiper(".rv-5-banner__slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 1,
        effect: "fade",
        loop: true,
        navigation: {
            prevEl: "#rv-5-banner__txt-slider-nav .prev",
            nextEl: "#rv-5-banner__txt-slider-nav .next",
        },
        thumbs: {
            swiper: rv_5_BannerThumbs,
        },
    });


    // INDEX-5 SERVICE SLIDER 
    new Swiper(".rv-5-services__slider", {
        autoplay: true,
        spaceBetween: 15,
        slidesPerView: 3,
        pagination: {
            el: "#rv-5-services-slider-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1.6,
                centeredSlides: true,
                loop: true,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
    });

    // INDEX-5 TEAM SLIDER 
    new Swiper(".rv-5-team__slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 3,
        navigation: {
            prevEl: "#rv-5-team-slider-nav .prev",
            nextEl: "#rv-5-team-slider-nav .next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
            },
            480: {
                spaceBetween: 20,
                slidesPerView: 1.6,
                centeredSlides: true,
                loop: true,
            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        },
    });


    // INDEX-5 TESTIMONIAL SLIDER
    var rv_5_testimonialImgSlider = new Swiper('.rv-5-testimonial__img-slider', {
        slidesPerView: 1,
        effect: "fade",
        spaceBetween: 50,
        loop: true,
    })
    new Swiper(".rv-5-testimonial__txt-slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        thumbs: {
            swiper: rv_5_testimonialImgSlider,
        },
    });

    // INDEX-5 PARTNERS SLIDER
    new Swiper(".rv-5-partners__slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 6,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                spaceBetween: 120,
                slidesPerView: 6,
            }
        }
    });

    // INDEX-6 BANNER SLIDER
    new Swiper(".rv-6-banner__slider", {
        // autoplay: true,
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        navigation: {
            prevEl: "#rv-6-banner__slider-nav .prev",
            nextEl: "#rv-6-banner__slider-nav .next",
        },
        on: {
            slideChange: function () {
                textAnimate(this.el);
            }
        },
    });


    // INDEX-6 TEAM SLIDER 
    new Swiper(".rv-6-team__slider", {
        autoplay: true,
        spaceBetween: 15,
        slidesPerView: 4,
        autoHeight: true,
        pagination: {
            el: "#rv-6-team-slider-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                spaceBetween: 20,
            },
            1400: {
                spaceBetween: 30,
            }
        },
    });

    // INDEX-6 TESTIMONIAL SLIDER
    var rv_6_testimonialImgSlider = new Swiper('.rv-6-testimonial__img-slider', {
        slidesPerView: 1,
        effect: "fade",
        spaceBetween: 50,
        loop: true,
    })
    new Swiper(".rv-6-testimonial__txt-slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        thumbs: {
            swiper: rv_6_testimonialImgSlider,
        },
        pagination: {
            el: "#rv-6-testimonial__slider-pagination",
            type: "fraction",

            renderFraction: function (currentClass, totalClass) {
                return '0<span class="' + currentClass + '"></span>' +
                    ' / ' +
                    '0<span class="' + totalClass + '"></span>';
            }
        },
        navigation: {
            nextEl: ".rv-6-testimonial-slider-nav .next",
            prevEl: ".rv-6-testimonial-slider-nav .prev",
        },
    });

    // INDEX-6 CLIENTS SLIDER
    new Swiper(".rv-6-clients__slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 6,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                spaceBetween: 120,
                slidesPerView: 6,
            }
        }
    });

    // INDEX-6 BLOGS SLIDER
    new Swiper(".rv-6-blogs__slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 2,
        navigation: {
            prevEl: "#rv-6-blogs__slider-nav .prev",
            nextEl: "#rv-6-blogs__slider-nav .next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                centeredSlides: true,
            },
            992: {
                slidesPerView: 1.6,
                centeredSlides: true,
            },
            1200: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
        },
    });

    // INDEX-7 BANNER SLIDER
    new Swiper(".rv-7-banner__slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 1,
        // effect: "fade",
        loop: true,
        navigation: {
            prevEl: "#rv-7-banner__slider-nav .prev",
            nextEl: "#rv-7-banner__slider-nav .next",
        },
        on: {
            slideChange: function () {
                textAnimate(this.el);
            }
        },
    });

    // INDEX-7 CATEGORY SLIDER
    new Swiper(".rv-7-categories__slider", {
        spaceBetween: 15,
        slidesPerView: 5,
        scrollbar: {
            el: "#rv-7-categories__scrollbar",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1400: {
                spaceBetween: 30,
            }
        }
    });

    // INDEX-7 PRODUCT SLIDER
    new Swiper(".rv-7-products__slider", {
        spaceBetween: 15,
        slidesPerView: 4,
        navigation: {
            prevEl: "#rv-7-products__slider-nav .prev",
            nextEl: "#rv-7-products__slider-nav .next"
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                centeredSlides: true,
                loop: true,
                slidesPerView: 1.6
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2.3,
                centeredSlides: true,
                loop: true,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
            1400: {
                spaceBetween: 30,
            }
        }
    });

    // INDEX-7 BLOGS SLIDER
    new Swiper(".rv-7-blogs__slider", {
        spaceBetween: 15,
        slidesPerView: 3,
        navigation: {
            prevEl: "#rv-7-blogs__slider-nav .prev",
            nextEl: "#rv-7-blogs__slider-nav .next"
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                spaceBetween: 20,
                slidesPerView: 1.6,
                loop: true,
                centeredSlides: true,
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            992: {
                spaceBetween: 25,
            }
        }
    });

    // INDEX-7 PARTNERS SLIDER
    new Swiper(".rv-7-partners__slider", {
        slidesPerView: 5,
        navigation: {
            prevEl: "#rv-7-partners__slider-nav .prev",
            nextEl: "#rv-7-partners__slider-nav .next"
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5
            },
        }
    });

    // INDEX-7 DAILY-DEAL SLIDER
    new Swiper(".rv-7-daily-deal__slider", {
        slidesPerView: 4,
        spaceBetween: 15,
        navigation: {
            prevEl: "#rv-7-daily-deal__slider-nav .prev",
            nextEl: "#rv-7-daily-deal__slider-nav .next"
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                centeredSlides: true,
                loop: true,
                slidesPerView: 1.6
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2.3,
                centeredSlides: true,
                loop: true,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
            1400: {
                spaceBetween: 30,
            }
        }
    });

    // INDEX-7 TRENDING PRODUCT SLIDER
    new Swiper(".rv-7-trending-products__slider", {
        spaceBetween: 15,
        slidesPerView: 4,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                centeredSlides: true,
                loop: true,
                slidesPerView: 1.6
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2.3,
                centeredSlides: true,
                loop: true,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
            1400: {
                spaceBetween: 30,
            }
        }
    });

    // COUNTDOWN
    $.syotimerLang.custom = {
        day: ["D", "D"],
        hour: ["H", "H"],
        minute: ["M", "M"],
        second: ["S", "S"],
    };

    $(".rv-7-daily-deals__countdown").syotimer({
        lang: "custom",
        date: new Date(2023, 12, 9, 20),
    });

    // INDEX-8 functions SLIDER
    new Swiper(".rv-8-functions__slider", {
        slidesPerView: 4,
        spaceBetween: 15,
        scrollbar: {
            el: "#rv-8-functions__scrollbar",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                spaceBetween: 30,
            }
        }
    });

    // INDEX-8 PROJECTS SLIDER 
    new Swiper(".rv-8-projects__slider", {
        autoplay: true,
        spaceBetween: 20,
        slidesPerView: "auto",
        navigation: {
            prevEl: "#rv-8-projects-slider-nav .prev",
            nextEl: "#rv-8-projects-slider-nav .next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2.2,
                centeredSlides: true,
            },
            1400: {
                spaceBetween: 25,
            },
            1600: {
                spaceBetween: 30,
            }
        },
    });

    // INDEX-8 TEAM SLIDER 
    new Swiper(".rv-8-team__slider", {
        autoplay: true,
        spaceBetween: 20,
        slidesPerView: 4,
        navigation: {
            prevEl: "#rv-8-team-slider-nav .prev",
            nextEl: "#rv-8-team-slider-nav .next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                spaceBetween: 20,
            },
            1400: {
                spaceBetween: 30,
            }
        },
    });

    // INDEX-8 TESTIMONIAL SLIDER
    var rv_8_testimonialImgSlider = new Swiper('.rv-8-testimonial__img-slider', {
        slidesPerView: 1,
        effect: "fade",
        spaceBetween: 50,
        loop: true,
    })

    // INDEX-8 BANNER SLIDER
    new Swiper(".rv-8-testimonial__txt-slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        thumbs: {
            swiper: rv_8_testimonialImgSlider,
        },
        pagination: {
            el: "#rv-8-testimonial__slider-pagination",
            renderBullet: function (index, className) {
                return '<span class="' + className + '"><span class="number">0' + (index + 1) + "</span></span>";
            },
        },
    });

    // INDEX-8 PARTNERS SLIDER
    new Swiper(".rv-8-partners__slider", {
        autoplay: true,
        spaceBetween: 20,
        slidesPerView: 6,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                spaceBetween: 30,
                slidesPerView: 4,
            },
            992: {
                spaceBetween: 30,
                slidesPerView: 5
            },
            1200: {
                spaceBetween: 120,
                slidesPerView: 6,
            }
        }
    });

    // INDEX-9 BANNER SLIDER
    new Swiper(".rv-9-banner__slider", {
        autoplay: true,
        slidesPerView: 1,
        loop: true,
        effect: "fade",
        pagination: {
            el: "#rv-9-banner-slider-dots",
            clickable: true,
        },
        on: {
            slideChange: function () {
                textAnimate(this.el);
            }
        },
    });

    // INDEX-9 PROJECTS SLIDER 
    new Swiper(".rv-9-projects__slider", {
        autoplay: true,
        spaceBetween: 20,
        slidesPerView: 2.3,
        loop: true,
        centeredSlides: true,
        navigation: {
            prevEl: "#rv-9-projects-slider-nav .prev",
            nextEl: "#rv-9-projects-slider-nav .next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                spaceBetween: 30,
                slidesPerView: 2.5,
            },
            1400: {
                centeredSlides: false,
                slidesPerView: 2.3,
            }
        }
    });

    // INDEX-9 TEAM SLIDER 
    new Swiper(".rv-9-team__slider", {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 15,
        pagination: {
            el: "#rv-9-team-slider-dots",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                spaceBetween: 30,
                slidesPerView: 3,
            }
        }
    });

    // INDEX-10 BANNER SLIDER 
    new Swiper(".rv-10-banner__slider", {
        // autoplay: true,
        slidesPerView: 1,
        loop: true,
        effect: "fade",
        navigation: {
            prevEl: '#rv-10-banner__slider-nav .prev',
            nextEl: '#rv-10-banner__slider-nav .next'
        }
    });


    // CURSOR ANIMATION
    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0;

    var mouseX = 0,
        mouseY = 0;

    gsap.to({}, 0.005, {
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            gsap.set(follower, {
                css: {
                    left: posX - 12,
                    top: posY - 12
                }
            });

            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $(document).on("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    // add circle
    $("a, button").on("mouseenter", function () {
        cursor.addClass("active");
        follower.addClass("active");
    });
    $("a, button").on("mouseleave", function () {
        cursor.removeClass("active");
        follower.removeClass("active");
    });



    // INDEX-10 TESTIMONIAL SLIDER
    var rv_10_testimonialImgSlider = new Swiper('.rv-10-testimonial__img-slider', {
        // slidesPerView: 1.5,
        slidesPerView: "auto",
        loop: true,
        simulateTouch: false,
        watchSlidesProgress: true,
        spaceBetween: 60,
    });
    new Swiper(".rv-10-testimonial__txt-slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        thumbs: {
            swiper: rv_10_testimonialImgSlider,
        },
        pagination: {
            el: "#rv-10-testimonial__slider-pagination",
            clickable: true
        }
    });

    // INDEX-10 PARTNER SLIDER
    new Swiper(".rv-10-partners__slider", {
        autoplay: true,
        spaceBetween: 157,
        slidesPerView: 5,
    });

    // INDEX-10 BLOGS SLIDER
    new Swiper(".rv-10-blogs__slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 3,
        pagination: {
            el: "#rv-10-blogs-slider-dots",
            clickable: true,
        }
    });

    // INDEX-11 SERVICE SLIDER
    new Swiper(".rv-11-services__slider", {
        spaceBetween: 30,
        slidesPerView: 4,
        autoplay: true,
        pagination: {
            el: "#rv-11-services-slider-dots",
            clickable: true,
        }
    });

    // INDEX-11 PROJECTS SLIDER
    new Swiper(".rv-11-projects__slider", {
        spaceBetween: 30,
        slidesPerView: 3,
        autoplay: true,
        navigation: {
            prevEl: "#rv-11-projects-slider-nav .prev",
            nextEl: "#rv-11-projects-slider-nav .next",
        }
    });

    // INDEX-11 TEAM SLIDER
    new Swiper(".rv-11-team__slider", {
        spaceBetween: 60,
        slidesPerView: 3,
        autoplay: true,
    });

    // SMOOTH SCROLL
    if (window.outerWidth > 991) {
        initialiseLenisScroll();
    }

    function initialiseLenisScroll() {
        const lenis = new Lenis({
            smoothWheel: true,
            duration: 1.2,
        });

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        const rv14VertcalSlider = document.querySelector(".rv-14-case-studies-txt-slider .swiper-wrapper");
        if (rv14VertcalSlider) {
            rv14VertcalSlider.addEventListener('mouseenter', () => {
                lenis.stop();
            });
            rv14VertcalSlider.addEventListener('mouseleave', () => {
                lenis.start();
            });
        }
    }

    // INDEX-11 PRODUCT SLIDER
    new Swiper(".rv-11-products__slider", {
        spaceBetween: 30,
        slidesPerView: 3,
        autoplay: true,
        navigation: {
            prevEl: "#rv-11-products-slider-nav .prev",
            nextEl: "#rv-11-products-slider-nav .next",
        }
    });

    // INDEX-11 blog SLIDER
    new Swiper(".rv-11-blogs__slider", {
        spaceBetween: 30,
        slidesPerView: 3,
        autoplay: true,
        pagination: {
            el: "#rv-11-blogs-slider-dots",
            clickable: true,
        }
    });

    // INDEX-7 BANNER SLIDER
    new Swiper(".rv-11-banner__slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 1,
        effect: "fade",
        loop: true,
        navigation: {
            prevEl: "#rv-11-banner__slider-nav .prev",
            nextEl: "#rv-11-banner__slider-nav .next",
        },
    });

    // SPLTT IMAGE
    // Splitting({
    //     target: '.rv-11-banner__slide',
    //     by: 'cells',
    //     rows: 3,
    // });

    // INDEX-12 BANNER SLIDER
    new Swiper(".rv-12-banner__slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 1,
        effect: "fade",
        loop: true,
        pagination: {
            el: "#rv-12-banner-dots",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"><span class="number">0' + (index + 1) + "</span></span>";
            },
        },
    });

    // IMAGE SCROLL
    gsap.to("#rv-12-infos-vectors", {
        x: -400,
        duration: 0.1,
        ease: "Linear.easeNone",
        scrollTrigger: {
            trigger: "#rv-12-infos-vectors",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });
    gsap.to("#rv-12-infos-vectors-2", {
        x: 250,
        duration: 0.1,
        ease: "Linear.easeNone",
        scrollTrigger: {
            trigger: "#rv-12-infos-vectors-2",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });

    // INDEX-12 Banner SLIDER 
    new Swiper(".rv-12-projects__slider", {
        autoplay: true,
        spaceBetween: 50,
        slidesPerView: 1.7,
        centeredSlides: true,
        loop: true,
        navigation: {
            prevEl: "#rv-12-projects__slider-nav .prev",
            nextEl: "#rv-12-projects__slider-nav .next"
        }
    });

    // INDEX-12 TESTIMONIAL SLIDER 
    const rv12TestimonialThumb = new Swiper(".rv-12-testimony__img-slider", {
        spaceBetween: 10,
        slidesPerView: 3,
        slidesPerView: "auto",
    });

    new Swiper(".rv-12-testimonial__slider", {
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        pagination: {
            el: "#rv-3-projects-slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: "#rv-12-testimonial-slider-nav .next",
            prevEl: "#rv-12-testimonial-slider-nav .prev",
        },
        thumbs: {
            swiper: rv12TestimonialThumb,
        },
    });

    // INDEX-12 PARTNERS SLIDER
    new Swiper(".rv-12-partners__slider", {
        autoplay: true,
        spaceBetween: 170,
        slidesPerView: 5,
    });

    // INDEX-13 BANNER PRODUCT SLIDER
    new Swiper(".rv-13-banner-prod-slider", {
        autoplay: true,
        slidesPerView: 1,
        effect: "fade",
        loop: true,
        pagination: {
            el: "#rv-13-banner-prod-slider__pagination",
            type: "fraction",

            renderFraction: function (currentClass, totalClass) {
                return '0<span class="' + currentClass + '"></span>' +
                    ' / ' +
                    '0<span class="' + totalClass + '"></span>';
            }
        },
        navigation: {
            nextEl: "#rv-13-banner-prod-slider-nav .next",
            prevEl: "#rv-13-banner-prod-slider-nav .prev",
        },
    });

    // INDEX-13 CATEGORY SLIDER
    new Swiper(".rv-13-products__slider", {
        autoplay: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: "#rv-13-products__slider-nav .next",
            prevEl: "#rv-13-products__slider-nav .prev",
        },
        pagination: {
            el: "#rv-13-products-slider-pagination",
            clickable: true,
        }
    });

    // INDEX-13 CATEGORY SLIDER-2
    new Swiper(".rv-13-products__slider-2", {
        autoplay: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: "#rv-13-prod-slider-nav-2 .next",
            prevEl: "#rv-13-prod-slider-nav-2 .prev",
        },
    });

    // INDEX-6 TESTIMONIAL SLIDER
    var rv_13_testimonialImgSlider = new Swiper('.rv-13-testimony-reviewer-slider', {
        slidesPerView: 1,
        effect: "fade",
        spaceBetween: 50,
        loop: true,
    })
    new Swiper(".rv-13-testimonial__slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        thumbs: {
            swiper: rv_13_testimonialImgSlider,
        },
        pagination: {
            el: "#rv-13-testimonial__slider-pagination",
            type: "fraction",

            renderFraction: function (currentClass, totalClass) {
                return '0<span class="' + currentClass + '"></span>' +
                    ' / ' +
                    '0<span class="' + totalClass + '"></span>';
            }
        },
        navigation: {
            nextEl: "#rv-13-testimonial-slider-nav .next",
            prevEl: "#rv-13-testimonial-slider-nav .prev",
        },
    });

    // INDEX-13 COUNTDOWN
    $.syotimerLang.custom2 = {
        day: ["Day", "Day"],
        hour: ["Hou", "Hou"],
        minute: ["Min", "Min"],
        second: ["Sec", "Sec"],
    };
    $(".rv-13-weekly-deals__countdown").syotimer({
        lang: "custom2",
        date: new Date(2023, 12, 9, 20),
    });

    // INDEX-14 PARTNERS SLIDER
    new Swiper(".rv-14-partners__slider", {
        autoplay: true,
        spaceBetween: 123,
        slidesPerView: 5,
    });

    // INDEX-14 BLOGS SLIDER
    new Swiper(".rv-14-blogs__slider", {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 2,
        navigation: {
            prevEl: "#rv-14-blogs__slider-nav .prev",
            nextEl: "#rv-14-blogs__slider-nav .next",
        },
    });

    // INDEX-14 TEAM SLIDER 
    new Swiper(".rv-14-team__slider", {
        autoplay: true,
        spaceBetween: 57,
        slidesPerView: 4,
    });

    // INDEX-14 TESTIMONIAL SLIDER
    var rv_14_caseStudiesImgSlider = new Swiper('.rv-14-case-studies-img-slider', {
        slidesPerView: 1,
        effect: "fade",
        spaceBetween: 50,
        loop: true,
    })
    new Swiper(".rv-14-case-studies-txt-slider", {
        autoplay: true,
        autoHeight: true,
        direction: "vertical",
        spaceBetween: 50,
        slidesPerView: 3,
        mousewheel: true,
        centeredSlides: true,
        thumbs: {
            swiper: rv_14_caseStudiesImgSlider,
        },
    });



    // PRICE FILTER
    let keypressSliders = document.querySelectorAll(".slider-keypress");

    keypressSliders.forEach(function (keypressSlider, index) {
        let input0 = keypressSlider.parentElement.querySelector(".input-with-keypress-0");
        let input1 = keypressSlider.parentElement.querySelector(".input-with-keypress-1");
        let inputs = [input0, input1];

        if (keypressSlider) {
            noUiSlider.create(keypressSlider, {
                start: [240, 768],
                connect: true,
                step: 1,
                range: {
                    min: [100],
                    max: [1000]
                }
            });

            keypressSlider.noUiSlider.on("update", function (values, handle) {
                inputs[handle].innerText = values[handle];

                function setSliderHandle(i, value) {
                    var r = [null, null];
                    r[i] = value;
                    keypressSlider.noUiSlider.set(r);
                }

                inputs.forEach(function (input, handle) {
                    input.addEventListener("change", function () {
                        setSliderHandle(handle, this.value);
                    });

                    input.addEventListener("keydown", function (e) {
                        var values = keypressSlider.noUiSlider.get();
                        var value = Number(values[handle]);
                        var steps = keypressSlider.noUiSlider.steps();
                        var step = steps[handle];
                        var position;

                        switch (e.which) {
                            case 13:
                                setSliderHandle(handle, this.value);
                                break;

                            case 38:
                                position = step[1];
                                if (position === false) {
                                    position = 1;
                                }
                                if (position !== null) {
                                    setSliderHandle(handle, value + position);
                                }
                                break;

                            case 40:
                                position = step[0];
                                if (position === false) {
                                    position = 1;
                                }
                                if (position !== null) {
                                    setSliderHandle(handle, value - position);
                                }
                                break;
                        }
                    });
                });
            });
        }
    });

    // products slider 
    var rv_products_details__img1 = new Swiper('.rv-product-details-img-slider-1', {
        autoHeight: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        breakpoints: {
            0: {
                direction: "horizontal",
            },
            576: {
                direction: "vertical",
            }
        },
    });

    // products slider 
    var rv_products_details__img2 = new Swiper('.rv-product-details-img-slider-2', {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        thumbs: {
            swiper: rv_products_details__img1,
        },
    });

    // responsive menu
    const hamburgerBtn = document.querySelector("#rv-1-header-mobile-menu-btn");
    const hamburgerCloseBtn = document.querySelector(".sidebar-close-btn");
    hamburgerBtn.addEventListener("click", () => {
        document.querySelector(".rv-1-header-nav__sidebar").classList.add("active");
        document.body.parentElement.style.overflowY = "hidden";
    });
    hamburgerCloseBtn.addEventListener("click", () => {
        document.querySelector(".rv-1-header-nav__sidebar").classList.remove("active");
        document.body.parentElement.style.overflowY = "scroll";
    });

    const topMenus = document.querySelectorAll(".rv-1-header__nav>ul>li");
    topMenus.forEach(topMenu => {
        if (window.innerWidth < 992) {
            topMenu.addEventListener('click', () => {
                topMenu.classList.add("rv-dropdown-active");
            });
        }
    });

    new Swiper('.rv-project-details__cover-slider', {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        autoplay: true,
        navigation: {
            prevEl: '#rv-project-details__cover-slider-nav .prev',
            nextEl: '#rv-project-details__cover-slider-nav .next'
        }
    });


})(jQuery);

function calculate() {
    let length = parseFloat(document.getElementById("length").value);
    let height = parseFloat(document.getElementById("height").value);
    let size = document.getElementById("size").value;
  
    let totalSqFeet = length * height;
    let totalSqMeter = totalSqFeet / 10.764;
  
    let requiredTiles;
    let requiredBoxes;
  
    if (size === "600x600") {
      requiredTiles = Math.ceil(totalSqMeter / 0.36);
      requiredBoxes = Math.ceil(requiredTiles / 4);
    } else if (size === "600x1200") {
      requiredTiles = Math.ceil(totalSqMeter / 0.72);
      requiredBoxes = Math.ceil(requiredTiles / 2);
    }
  
    document.getElementById("totalSqMeter").value = totalSqMeter.toFixed(2);
    document.getElementById("totalSqFeet").value = totalSqFeet.toFixed(2);
    document.getElementById("requiredTiles").value = Math.ceil(requiredTiles);
    document.getElementById("requiredBoxes").value = Math.ceil(requiredBoxes);
  }