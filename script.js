// Swap the project image from still to GIF on hover.
document.querySelectorAll('.project-image img').forEach(function(img) {
    // Change to GIF on mouseover.
    img.addEventListener('mouseover', function() {
      const gifSrc = img.getAttribute('data-gif');
      if (gifSrc) img.src = gifSrc;
    });
    // Revert to still image on mouseout.
    img.addEventListener('mouseout', function() {
      const stillSrc = img.getAttribute('data-still');
      if (stillSrc) img.src = stillSrc;
    });
  });
  