// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

  // Sticky Navigation Logic for Home Page (index.html)
  const navbar = document.getElementById('main-navbar');
  const anchor = document.getElementById('nav-anchor');
  
  if (navbar && anchor) {
    // Calculate initial anchor offset.
    // The anchor is in-flow block layout with height 0, so offsetTop is constant.
    let anchorOffset = anchor.offsetTop;
    
    // Recalculate offset on window resize if navbar is not currently sticky
    window.addEventListener('resize', () => {
      if (!navbar.classList.contains('sticky')) {
        anchorOffset = anchor.offsetTop;
      }
    });

    const handleScroll = () => {
      // Get the vertical scroll position
      const scrollY = window.scrollY || window.pageYOffset;
      
      if (scrollY >= anchorOffset) {
        if (!navbar.classList.contains('sticky')) {
          navbar.classList.add('sticky');
          anchor.style.height = '60px'; // Prevent content jump
        }
      } else {
        if (navbar.classList.contains('sticky')) {
          navbar.classList.remove('sticky');
          anchor.style.height = '0'; // Revert spacing
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to check position on page load
    handleScroll();
  }

  // Back to Top Button Logic
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // See All Photos Toggle
  const seeAllPhotosBtn = document.getElementById('see-all-photos-btn');
  const photosGrid = document.getElementById('photos-grid');
  if (seeAllPhotosBtn && photosGrid) {
    seeAllPhotosBtn.addEventListener('click', () => {
      photosGrid.classList.add('show-all');
      seeAllPhotosBtn.style.display = 'none';
    });
  }
  
});
