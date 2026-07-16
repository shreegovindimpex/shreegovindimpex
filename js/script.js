// Step-1

if (typeof emailjs !== "undefined") {
  emailjs.init({
    publicKey: "yuhczuxfmg4S9QozB",
  });
}
console.log("Shree Govind Impex Website Loaded");

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

  let current = 0;

  setInterval(() => {

    slides[current].classList.remove("active");

    current++;

    if (current >= slides.length) {

      current = 0;

    }

    slides[current].classList.add("active");

  }, 4000);

}


/*==========================
TOP BUTTON
==========================*/

const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 500 ? "block" : "none";
  });

  topBtn.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
}

window.onload = function () {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
}

/*==========================
COUNTER ANIMATION
==========================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const counter = entry.target;

      const target = +counter.dataset.target;

      let count = 0;

      const speed = target / 100;

      const update = () => {

        if (count < target) {

          count += speed;

          counter.innerText = Math.ceil(count);

          requestAnimationFrame(update);

        } else {

          counter.innerText = target;

        }

      };

      update();

      counterObserver.unobserve(counter);

    }

  });

}, {
  threshold: 0.5
});

counters.forEach(counter => counterObserver.observe(counter));


/*==========================
AOS
==========================*/
if (typeof AOS !== "undefined") {
  AOS.init({

    duration: 1000,

    offset: 120,

    once: true,

    easing: "ease-in-out"

  });
}



/*==========================
SEARCH
==========================*/

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchInput) {

  searchBtn.addEventListener("click", searchProduct);

  searchInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

      searchProduct();

    }

  });

}
function searchProduct() {

  let value = searchInput.value.toLowerCase().trim();

  if (value === "") {

    alert("Please enter a product name.");

    return;

  }

  const keywords = [

    "organic jaggery",

    "natural jaggery",

    "basmati rice",

    "rice",

    "millets",

    "dry fruits",

    "spices",

    "honey",

    "pulses"

  ];

  if (keywords.includes(value)) {

    document.getElementById("products").scrollIntoView({

      behavior: "smooth"

    });

  }

  else {

    alert("Product not found.");

  }

}

/*==========================
MOBILE MENU
==========================*/

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}


/*==========================
PRODUCT FILTER
==========================*/

const filterBtns = document.querySelectorAll(".filter-btn");

const productCards = document.querySelectorAll(".product-card");

if (filterBtns.length > 0) {

  filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      filterBtns.forEach(b => b.classList.remove("active"));

      btn.classList.add("active");

      const filter = btn.dataset.filter;

      productCards.forEach(card => {

        if (filter === "all" || card.dataset.category === filter) {

          card.style.display = "block";

        }

        else {

          card.style.display = "none";

        }

      });

    });

  });

}

/*==========================
EMAILJS
==========================*/

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.send("service_qh15cxb", "template_wwcrzki", {

      name: document.getElementById("name").value,

      email: document.getElementById("email").value,

      phone: document.getElementById("phone").value,

      country: document.getElementById("country").value,

      product: document.getElementById("product").value,

      message: document.getElementById("message").value

    }).then(() => {

      alert("Thank you! Your inquiry has been sent successfully.");

      contactForm.reset();

    }).catch(() => {

      alert("Something went wrong. Please try again.");

    });

  });

}

/*==========================
PREMIUM GALLERY LIGHTBOX
==========================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeLightbox = document.getElementById("closeLightbox");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

let currentImage = 0;

if (galleryImages.length) {

  galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

      currentImage = index;

      showImage();

      lightbox.style.display = "flex";

    });

  });

}

function showImage() {

  lightboxImg.src = galleryImages[currentImage].src;

}

if (nextBtn) {

  nextBtn.onclick = () => {

    currentImage++;

    if (currentImage >= galleryImages.length) {

      currentImage = 0;

    }

    showImage();

  }

}

if (prevBtn) {

  prevBtn.onclick = () => {

    currentImage--;

    if (currentImage < 0) {

      currentImage = galleryImages.length - 1;

    }

    showImage();

  }

}

if (closeLightbox) {

  closeLightbox.onclick = () => {

    lightbox.style.display = "none";

  }

}

window.addEventListener("keydown", (e) => {

  if (lightbox.style.display === "flex") {

    if (e.key === "ArrowRight") {

      nextBtn.click();

    }

    if (e.key === "ArrowLeft") {

      prevBtn.click();

    }

    if (e.key === "Escape") {

      lightbox.style.display = "none";

    }

  }

});

if (lightbox) {

  lightbox.onclick = (e) => {

    if (e.target === lightbox) {

      lightbox.style.display = "none";

    }

  }

}

/*==========================
SCROLL PROGRESS BAR
==========================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

  if (progressBar) {

    const scroll = window.scrollY;

    const height = document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scroll / height) * 100;

    progressBar.style.width = progress + "%";

  }

});

/*==========================
GALLERY FILTER
==========================*/

const galleryFilterBtns = document.querySelectorAll(".gallery-filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

if (galleryFilterBtns.length > 0) {

  galleryFilterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      galleryFilterBtns.forEach(b => b.classList.remove("active"));

      btn.classList.add("active");

      const filter = btn.dataset.filter;

      galleryItems.forEach(item => {

        if (filter === "all" || item.dataset.category === filter) {

          item.classList.remove("hide");

        } else {

          item.classList.add("hide");

        }

      });

    });

  });

}

/*==========================
LOAD MORE
==========================*/

const loadMoreBtn = document.getElementById("loadMoreBtn");

const allGalleryItems = document.querySelectorAll(".gallery-item");

let visibleItems = 8;

if (loadMoreBtn) {

  allGalleryItems.forEach((item, index) => {

    if (index >= visibleItems) {

      item.style.display = "none";

    }

  });

  loadMoreBtn.addEventListener("click", () => {

    let hidden = 0;

    allGalleryItems.forEach(item => {

      if (item.style.display === "none" && hidden < 8) {

        item.style.display = "block";

        hidden++;

      }

    });

    const remaining = [...allGalleryItems].filter(item => item.style.display === "none");

    if (remaining.length === 0) {

      loadMoreBtn.style.display = "none";

    }

  });

  if (allGalleryItems.length <= 8) {

    loadMoreBtn.style.display = "none";

  }

}

/*==========================
GALLERY SEARCH
==========================*/

const gallerySearchInput = document.getElementById("searchInput");
const gallerySearchBtn = document.getElementById("searchBtn");

if (gallerySearchInput && gallerySearchBtn) {

  function searchGallery() {

    const keyword = gallerySearchInput.value.toLowerCase().trim();

    document.querySelectorAll(".gallery-item").forEach(item => {

      const title = item.querySelector("h3").textContent.toLowerCase();

      if (title.includes(keyword) || keyword === "") {

        item.style.display = "block";

      } else {

        item.style.display = "none";

      }

    });

  }

  gallerySearchBtn.addEventListener("click", searchGallery);

  gallerySearchInput.addEventListener("keyup", searchGallery);

}
