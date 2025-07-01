const allScrollers = document.querySelectorAll(".achievements_div")


document.addEventListener("DOMContentLoaded", () => {
    animation()
    viewAnimate()

    const aboutLink = document.getElementById("about")
    aboutLink.addEventListener("click", () => {
        const element = document.querySelector(".about_page")
        element.scrollIntoView({behavior: "smooth", block: "center"})
    })

    const botLink = document.getElementById("bot")
    botLink.addEventListener("click", () => {
        const element = document.querySelector(".bot_page")
        element.scrollIntoView({behavior: "smooth", block: "start"})
    })

    const achievementLink = document.getElementById("achievements")
    achievementLink.addEventListener("click", () => {
        const element = document.querySelector(".achievements_page")
        element.scrollIntoView({behavior: "smooth", block: "start"})
    })


    const contactLink = document.getElementById("contact")
    contactLink.addEventListener("click", () => {
        const element = document.querySelector(".contact_page")
        element.scrollIntoView({behavior: "smooth", block: "start"})
    })


    const scroller = document.querySelector(".achievements_div")
    scroller.addEventListener("wheel", (event) => {
        event.preventDefault()
        scroller.scrollLeft += event.deltaY
    })
    
})

const animation = () => {

    allScrollers.forEach(scroller => {

        const scroller_inner = scroller.querySelector(".scroller")
        const scrollerContent = Array.from(scroller_inner.children)

        scrollerContent.forEach(element => {
            const duplicatedElement = element.cloneNode(true)
            duplicatedElement.setAttribute("aria-hidden", true)
            scroller_inner.appendChild(duplicatedElement)
            scroller_inner.appendChild(duplicatedElement)

        })
    });
}

const viewAnimate = () => {
    document.querySelectorAll(".achievements_div").forEach(div => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in_view")
                    // console.log("in view")
                }

                else {
                    entry.target.classList.remove("in_view")
                    // console.log("not")
                }
            })
        }, { threshold: 0.1})

        observer.observe(div)
    })
}


