// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {

  // Select all filter buttons and portfolio items
  var filterLinks = document.querySelectorAll('#filter a');
  var portfolioItems = document.querySelectorAll('.portfolio .one-third.column');

  // Add initial styles for the transition
  portfolioItems.forEach(function(item) {
    item.style.transition = 'opacity 0.5s ease'; // Smooth transition on opacity
    item.style.opacity = '1'; // Default opacity to 1
  });

  // Loop through each filter button to add event listeners
  filterLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Remove 'current' class from all filter links
      filterLinks.forEach(function(link) {
        link.classList.remove('current');
      });

      // Add 'current' class to the clicked link
      this.classList.add('current');

      // Get the data-filter value from the clicked link
      var filterValue = this.getAttribute('data-filter');

      // Loop through each portfolio item and show/hide with transition
      portfolioItems.forEach(function(item) {
        // If showing all items or the item matches the filter
        if (filterValue === '*' || item.classList.contains(filterValue.replace('.', ''))) {
          item.style.display = 'block'; // Ensure the item is block so it takes space
          setTimeout(function() {
            item.style.opacity = '1'; // Fade in
          }, 10); // Small timeout to allow for transition to apply
        } else {
          item.style.opacity = '0'; // Fade out
          setTimeout(function() {
            item.style.display = 'none'; // Set display to none after transition completes
          }, 500); // Match the duration of the transition
        }
      });
    });
  });
});