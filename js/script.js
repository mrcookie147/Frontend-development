document.addEventListener('DOMContentLoaded', () => {
    function Animation(e) {
        const element = e;
        gsap.fromTo(element, {
            y: 40,
            opacity: 0,
            duration: 0.8
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8
        });
    };

    function BackgroundAnimation(e) {
        const element = e;
        gsap.fromTo(element, {
            scale: .85,
            opacity: 0,
            duration: 0.8
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.8
        });
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'background') {
                    BackgroundAnimation(entry.target)
                    observer.unobserve(entry.target);
                } else {
                    Animation(entry.target);
                    observer.unobserve(entry.target);
                }
            };
        });
    }, {
        threshold: 0.1
    });

    const objects = [
        '.h',
        '.smallH',
        '.p',
        '#background'
    ];

    for (let i = 0; i < objects.length; i++) {
        document.querySelectorAll(objects[i]).forEach(element => {
            observer.observe(element);
        });
    }
});