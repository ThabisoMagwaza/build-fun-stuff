gsap.from('.background', 1, {y: "100vh"})
gsap.from('.box', 1.5, {scale: 0, y: 20, delay: .5, ease: "elastic.out(1, 0.5)"})
gsap.from('.hero__img', 2, {opacity: 0, delay: .5, y: -100, ease: "elastic.out(1, 0.5)"})
gsap.from('.hero__text', 1, {delay:1, opacity: 0, y:-50})