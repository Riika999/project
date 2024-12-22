// JavaScript for click interaction
document.querySelectorAll('.nav-lvl > a').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor click behavior
      const dropdown = this.nextElementSibling;
      const isOpen = dropdown.style.display === 'grid';
      
      // Close all other dropdowns
      document.querySelectorAll('.mega-dropdown').forEach(menu => {
        menu.style.display = 'none';
      });
  
      // Toggle the clicked dropdown
      dropdown.style.display = isOpen ? 'none' : 'grid';
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    const isDropdown = e.target.closest('.nav-lvl');
    if (!isDropdown) {
      document.querySelectorAll('.mega-dropdown').forEach(menu => {
        menu.style.display = 'none';
      });
    }
  });
  