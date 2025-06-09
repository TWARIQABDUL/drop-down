const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links-container');
  const dropdowns = document.querySelectorAll('.dropdown');
  const arrows = document.querySelectorAll('.arrow-down img');

  // Toggle mobile menu
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
  });

  // Handle dropdowns (mobile and desktop)
  dropdowns.forEach((dropdown, index) => {
    const dropdownBtn = dropdown.querySelector('.dropdown-btn');
    const arrow = dropdown.querySelector('.arrow-down img');

    dropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();

      // Close other dropdowns
      dropdowns.forEach((d, i) => {
        if (d !== dropdown && d.classList.contains('active')) {
          d.classList.remove('active');
          arrows[i].style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle('active');
      arrow.style.transform = dropdown.classList.contains('active') 
        ? 'rotate(180deg)' 
        : 'rotate(0deg)';
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown-btn')) {
      dropdowns.forEach((dropdown, index) => {
        dropdown.classList.remove('active');
        arrows[index].style.transform = 'rotate(0deg)';
      });
    }
  });