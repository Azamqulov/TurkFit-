// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn")
    const navLinks = document.getElementById("navLinks")
  
    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active")
        document.body.classList.toggle("menu-open")
      })
  
      // Close menu when clicking on a link
      const links = navLinks.querySelectorAll("a")
      links.forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active")
          document.body.classList.remove("menu-open")
        })
      })
    }
  
    // Modal functionality
    const modalTriggers = document.querySelectorAll(".modal-trigger")
    const closeModalButtons = document.querySelectorAll(".close-modal")
  
    modalTriggers.forEach((trigger) => {
      trigger.addEventListener("click", function () {
        const modalId = this.getAttribute("data-modal")
        const modal = document.getElementById(modalId + "Modal")
        if (modal) {
          modal.classList.add("active")
          document.body.style.overflow = "hidden"
        }
      })
    })
  
    closeModalButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const modal = this.closest(".modal")
        if (modal) {
          modal.classList.remove("active")
          document.body.style.overflow = ""
        }
      })
    })
  
    // Close modal when clicking outside
    const modals = document.querySelectorAll(".modal")
    modals.forEach((modal) => {
      modal.addEventListener("click", function (e) {
        if (e.target === this) {
          this.classList.remove("active")
          document.body.style.overflow = ""
        }
      })
    })
  
    // Cookie consent
    const cookieConsent = document.getElementById("cookieConsent")
    const acceptCookies = document.getElementById("acceptCookies")
    const declineCookies = document.getElementById("declineCookies")
  
    if (cookieConsent && acceptCookies && declineCookies) {
      if (!localStorage.getItem("cookieConsent")) {
        setTimeout(() => {
          cookieConsent.style.display = "block"
        }, 2000)
      } else {
        cookieConsent.style.display = "none"
      }
  
      acceptCookies.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "accepted")
        cookieConsent.style.display = "none"
      })
  
      declineCookies.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "declined")
        cookieConsent.style.display = "none"
      })
    }
  
    // Set current year in footer
    const currentYearElement = document.getElementById("currentYear")
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear()
    }
  
    // Set current date in modals
    const currentDateElements = document.querySelectorAll(".current-date")
    if (currentDateElements.length > 0) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      const formattedDate = new Date().toLocaleDateString("en-US", options)
  
      currentDateElements.forEach((element) => {
        element.textContent = formattedDate
      })
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const headerOffset = 70
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  })
  
  
