

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
})
const options={
    threshold:1,
    rootMargin:-100
}
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));