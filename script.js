document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector(".menu");
    let burger = document.querySelector(".hamburger");
    let search = document.querySelector("form.search");
  
    if (!menu || !burger) {
      console.error("Eroare: Elementele .menu sau .hamburger nu au fost găsite.");
      return;
    }
  
    burger.addEventListener("click", function () {
      if (menu.style.display === "flex") {
        search.style.display = "block";
        menu.style.display = "none";
        burger.innerHTML = "☰";
      } else {
        search.style.display = "none";
        menu.style.display = "flex";
        burger.innerHTML = "❌";
      }
    });
  });
  
  function clearPlaceholder() {
    document.getElementById("searchInput").setAttribute("placeholder", "");
  }
  
  function restorePlaceholder() {
    let input = document.getElementById("searchInput");
    if (input.value.trim() === "") {
      input.setAttribute("placeholder", "Search...");
    }
  }
  
  /*carousel*/
  
  /*
  document.addEventListener("DOMContentLoaded", function () {
      const carousel = document.querySelector(".carousel");
      const slides = document.querySelectorAll(".carousel .cardOne");
      const totalSlides = slides.length;
      let index = 0;
      let isTransitioning = false; // Blochează spam click
  
      function showSlide() {
          if (index >= totalSlides) {
              index = 0; // Revine la prima imagine când ajunge la ultima
          }
          if (index < 0) {
              index = totalSlides - 1; // Sare la ultima imagine când ajunge la prima
          }
          carousel.style.transform = `translateX(${-index * 300}px)`;
      }
  
      function nextSlide() {
          if (!isTransitioning) {
              isTransitioning = true;
              index--; // Mergi la următoarea imagine
              showSlide();
              setTimeout(() => isTransitioning = false, 300); // Deblochează după animație
          }
      }
  
      function prevSlide() {
          if (!isTransitioning) {
              isTransitioning = true;
              index++; // Mergi la imaginea anterioară
              showSlide();
              setTimeout(() => isTransitioning = false, 300); // Deblochează după animație
          }
      }
  
      document.getElementById("next").addEventListener("click", nextSlide);
      document.getElementById("prev").addEventListener("click", prevSlide);
  });

  */

  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const originalSlides = [
        { icon: "fa-building-columns", text: "Bank" },
        { icon: "fa-plane", text: "Travel Insurance Company" },
        { icon: "fa-car", text: "Car Rental" },
        { icon: "fa-house", text: "Real Estate" },
        { icon: "fa-gem", text: "Jewelry" },
        { icon: "fa-shirt", text: "Clothing" },
        { icon: "fa-laptop", text: "Electronics" },
        { icon: "fa-dumbbell", text: "Gym" }
    ];

    function createSlides() {
        const firstClone = originalSlides[0];
        const lastClone = originalSlides[originalSlides.length - 1];
        
        const slides = [lastClone, ...originalSlides, firstClone];
        
        carousel.innerHTML = slides.map(slide => `
            <div class="cardOne">
                <i class="fa-solid ${slide.icon}"></i>
                <p class="textCard">${slide.text}</p>
            </div>
        `).join('');
    }

    createSlides();
    
    let index = 1;
    let isTransitioning = false;
    const totalSlides = originalSlides.length + 2;
    const slideWidth = 300;
    carousel.style.transform = `translateX(${-index * slideWidth}px)`;

    function moveSlide(dir) {
        if (isTransitioning) return;
        isTransitioning = true;
        index += dir;
        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = `translateX(${-index * slideWidth}px)`;

        setTimeout(() => {
            if (index === totalSlides - 1) {
                index = 1;
                carousel.style.transition = "none";
                carousel.style.transform = `translateX(${-index * slideWidth}px)`;
            } else if (index === 0) {
                index = totalSlides - 2;
                carousel.style.transition = "none";
                carousel.style.transform = `translateX(${-index * slideWidth}px)`;
            }
            isTransitioning = false;
        }, 500);
    }

    document.getElementById("next").addEventListener("click", () => moveSlide(-1));
    document.getElementById("prev").addEventListener("click", () => moveSlide(1));
});

