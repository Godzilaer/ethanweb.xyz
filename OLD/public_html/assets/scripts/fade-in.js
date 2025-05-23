document.addEventListener("footerLoaded", () => {
    const elements = document.querySelectorAll('body *:not(.no-fade-in *)');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const element = entry.target;

                element.classList.add('fade-in-running');
   
                element.addEventListener("animationend", () => {
                    element.classList.remove('fade-in-running');

                    element.classList.add('fade-in-end');
                }, { once: true });

                observer.unobserve(element);
            }
        });
    }, 
    //10% of element seen
    { threshold: 0.1 });

    elements.forEach((element) => {
        observer.observe(element);
    });
});