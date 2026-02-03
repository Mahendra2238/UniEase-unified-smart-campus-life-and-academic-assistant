// Auto-hide messages after 5 seconds
document.addEventListener("DOMContentLoaded", () => {
  const messages = document.querySelectorAll(".alert")
  if (messages) {
    messages.forEach((message) => {
      setTimeout(() => {
        message.style.transition = "opacity 0.5s"
        message.style.opacity = "0"
        setTimeout(() => {
          message.remove()
        }, 500)
      }, 5000)
    })
  }

  // Mobile menu toggle for dropdowns
  const dropdowns = document.querySelectorAll(".dropdown")
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault()
        this.classList.toggle("active")
      }
    })
  })

  // Confirm before deleting
  const deleteButtons = document.querySelectorAll(".btn-delete")
  if (deleteButtons) {
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        if (!confirm("Are you sure you want to delete this item?")) {
          e.preventDefault()
        }
      })
    })
  }

  // Form validation
  const forms = document.querySelectorAll("form")
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      const requiredFields = form.querySelectorAll("[required]")
      let isValid = true

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false
          field.style.borderColor = "red"
        } else {
          field.style.borderColor = "#ddd"
        }
      })

      if (!isValid) {
        e.preventDefault()
        alert("Please fill in all required fields")
      }
    })
  })

  // Real-time search filtering (for future implementation)
  const searchInputs = document.querySelectorAll('input[type="search"]')
  searchInputs.forEach((input) => {
    input.addEventListener("input", function () {
      // Implement real-time filtering here
      console.log("Searching for:", this.value)
    })
  })

  // Dynamic table sorting (for future implementation)
  const tableHeaders = document.querySelectorAll("th[data-sortable]")
  tableHeaders.forEach((header) => {
    header.style.cursor = "pointer"
    header.addEventListener("click", function () {
      // Implement sorting logic here
      console.log("Sorting by:", this.textContent)
    })
  })

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")
      if (targetId !== "#") {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          e.preventDefault()
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })
})
