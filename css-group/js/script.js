const h1 = document.querySelector(".heading-primary");


//set current year
const yearEl = document.querySelector(".year");
const currentYear= new Date().getFullYear();
yearEl.textContent = currentYear;

//  MAKE MOBILE NAVIGATION WORK //////////////////

function toggleMobileNav() {
    const headerEl = document.querySelector(".header");
    headerEl.classList.toggle("nav-open");
  }
  
  document.querySelector(".btn-mobile-nav").addEventListener("click", toggleMobileNav);
  


///////////////////////////////////////////////////////////
//  SMOOTH SCROLLING ANIMATION

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll to the top
    if (href == "#") window.scrollTo({ top: 0, behavior: "smooth" });

    //scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile nav

   
  });
});

////////////////////////////////////////////
//  STICKY NAVIGATION

const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },

  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
// hcaptcha/

function validateForm(event) {
    var hcaptchaResponse = hcaptcha.getResponse();
    if (!hcaptchaResponse) {
      alert("Please complete the hCaptcha challenge");
      return false;
    }
  
    // Add this block of code to handle form submission
    var form = document.querySelector(".gform");
    var formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData
    })
      .then(function (response) {
        if (response.ok) {
          // Redirect to the "thanks.html" page upon successful form submission
          window.location.href = "thanks.html";
        } else {
          alert("An error occurred while submitting the form. Please try again.");
        }
      })
      .catch(function (error) {
        console.error("Error submitting the form:", error);
        alert("An error occurred while submitting the form. Please try again.");
      });
  
    // Prevent the default form submission behavior
    event.preventDefault();
    return false;
  }
  
  
  
