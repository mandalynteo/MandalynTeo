// carousel-gallery ======================================================

document.querySelectorAll('.gallery-arrow--left').forEach(btn => {
    btn.addEventListener('click', () => {
        const track = document.getElementById(btn.dataset.target);
        track.scrollBy({ left: -300, behavior: 'smooth' });
    });
});

document.querySelectorAll('.gallery-arrow--right').forEach(btn => {
    btn.addEventListener('click', () => {
        const track = document.getElementById(btn.dataset.target);
        track.scrollBy({ left: 300, behavior: 'smooth' });
    });
});

// return to top button ==================================================

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// for pop-up image ==================================================

document.querySelectorAll('.lightbox-trigger').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('lightbox-img').src = this.href;
        document.getElementById('lightbox').classList.add('active');
    });
});

document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});