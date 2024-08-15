document.addEventListener("DOMContentLoaded", function () {
  // Select all the toggle elements
  const faqToggles = document.querySelectorAll(".faq-list-pembayaran li a");

  // Add click event listeners to each toggle
  faqToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      // Find the chevron icon within the clicked toggle
      const chevronIcon = this.querySelector(".bx-chevron-down");

      // Toggle the 'rotated' class on the chevron icon
      chevronIcon.classList.toggle("rotated");
    });
  });
});
