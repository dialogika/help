//the selection movement to the FAQ if we select one of the option
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".faq-list-intern section");
    const navLinks = document.querySelectorAll(".scroll-spy-anchor");
  
    window.addEventListener("scroll", () => {
      let current = "";
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop; // Adjust based on your header height
        console.log(section.getAttribute("id"), sectionTop, pageYOffset);
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  });

//for the sidebar movement if we select one of option (near the option)
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.menu-item.active').classList.remove('active');
        this.classList.add('active');
    });
  });

//For toggle move
document.addEventListener("DOMContentLoaded", function () {
  // Select all the toggle elements
  const faqToggles = document.querySelectorAll(".faq-list-intern li a");

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

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar-menu');
  const footer = document.querySelector('#clients');

  if (sidebar && footer) {
    const handleScroll = () => {
      const footerTop = footer.getBoundingClientRect().top + window.scrollY;
      const sidebarHeight = sidebar.offsetHeight;

      if (window.scrollY > 100) { // Ubah nilai ini sesuai dengan kebutuhan scroll
        sidebar.classList.add('scrolled');
      } else {
        sidebar.classList.remove('scrolled');
      }

      if (window.scrollY + sidebarHeight >= footerTop) {
        sidebar.classList.add('sticky');
      } else {
        sidebar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Panggil fungsi untuk menangani scroll saat halaman dimuat
    handleScroll();
  }
});

