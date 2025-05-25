// Pastikan DOM sudah sepenuhnya dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {
  // Product Data
const productsData = {
  // Products Section (6 produk pertama)
  "1": {
    name: "COLLOSUS N8XE",
    price: "$5,339",
    image: "https://media.polygonbikes.com/wp-content/uploads/2023/12/14141834/MY23-COLLOSUS-N8X3-P-2-768x576.png",
    rating: 5,
    description: "The COLLOSUS N8XE is a high-performance mountain bike designed for enduro racing with its lightweight carbon frame and advanced suspension system.",
    specs: {
      "Frame": "Carbon Fiber",
      "Wheel Size": "29\"",
      "Suspension": "170mm Front / 160mm Rear",
      "Drivetrain": "SRAM GX Eagle 12-speed",
      "Brakes": "SRAM Code R",
      "Weight": "14.3 kg",
      "Tires": "Maxxis Assegai 2.5\""
    }
  },
  "2": {
    name: "Aeroad CF SLX 8 AXS",
    price: "$6,099",
    image: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw14db32d0/images/full/full_2025_/2024/full_2025_3966_aeroad-cf-slx-8-axs_R107_P03_P5.png",
    rating: 5,
    description: "The ultimate road racing machine with aerodynamic carbon frame and wireless electronic shifting for unbeatable performance.",
    specs: {
      "Frame": "Aerodynamic Carbon",
      "Wheel Size": "700c",
      "Groupset": "SRAM RED eTap AXS",
      "Brakes": "SRAM RED Hydraulic",
      "Weight": "7.3 kg",
      "Tires": "Schwalbe Pro One 28mm"
    }
  },
  "3": {
    name: "Speed Concept SLR 9",
    price: "$7,099",
    image: "https://media.trekbikes.com/image/upload/q_auto,w_260,dpr_1.25,f_auto,fl_progressive:semi/Speed-Concept-SLR-9-AXS-NP",
    rating: 5,
    description: "Cutting-edge triathlon bike with integrated storage and superior aerodynamics.",
    specs: {
      "Frame": "OCLV Carbon",
      "Wheel Size": "700c",
      "Groupset": "SRAM RED eTap AXS",
      "Brakes": "SRAM RED Hydraulic",
      "Weight": "8.9 kg",
      "Aero Features": "Integrated hydration & storage"
    }
  },
  "4": {
    name: "V10 DH S",
    price: "$6,799",
    image: "https://www.santacruzbicycles.com/cdn/shop/files/MY25_V10_CC_DH_S_GlossKelpGreen_92142ecf-bc8c-47a0-8f5e-e507d9c94d8b.png",
    rating: 5,
    description: "World Cup-winning downhill bike with 216mm of travel and legendary VPP suspension.",
    specs: {
      "Frame": "Carbon CC",
      "Wheel Size": "27.5\"",
      "Suspension": "216mm VPP",
      "Drivetrain": "SRAM X01 DH 7-speed",
      "Brakes": "SRAM Code RSC",
      "Weight": "16.7 kg"
    }
  },
  "5": {
    name: "Propel Advanced SL 0 RED",
    price: "$12,899",
    image: "https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_850%2Cq_80/mhq2gfta0xpofdcjddqf/MY25PropelAdvancedSL0-Red_ColorABlackLava.jpg",
    rating: 5,
    description: "The fastest aero road bike in Giant's lineup, featuring their most advanced composite frame.",
    specs: {
      "Frame": "Advanced SL Composite",
      "Wheel Size": "700c",
      "Groupset": "SRAM RED eTap AXS",
      "Brakes": "SRAM RED Hydraulic",
      "Weight": "7.1 kg",
      "Aero Features": "Integrated cockpit"
    }
  },
  "6": {
    name: "Slash+ 9.9 X0 AXS T-Type",
    price: "$8,879",
    image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/SlashPlus99-25-47093-A-Primary",
    rating: 5,
    description: "High-performance electric mountain bike with 150mm travel and premium components.",
    specs: {
      "Frame": "OCLV Mountain Carbon",
      "Wheel Size": "29\"",
      "Motor": "Fazua Ride 60 (60Nm)",
      "Battery": "430Wh",
      "Suspension": "150mm Front/Rear",
      "Weight": "18.9 kg"
    }
  },
  
  // Best Sellers Section (3 produk berikutnya)
  "7": {
    name: "S5 Red ETAP AXS",
    price: "$13,599",
    image: "https://www.cervelo.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fcervelo%2FZnnHr5bWFbowe0Ph_0K0S5FRX1C-PROFILE-Web.png%3Fauto%3Dformat%252Ccompress%26fit%3Dcrop%26ar%3D77%253A41%26crop%3Dfaces%252Cedges&w=992&q=75",
    rating: 5,
    description: "Cervélo's flagship aero road bike with industry-leading aerodynamics.",
    specs: {
      "Frame": "Cervélo All-Carbon",
      "Wheel Size": "700c",
      "Groupset": "SRAM RED eTap AXS",
      "Brakes": "SRAM RED Hydraulic",
      "Weight": "7.4 kg",
      "Aero Features": "Fully integrated cockpit"
    }
  },
  "8": {
    name: "Glory Advanced",
    price: "$8,199",
    image: "https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_850%2Cq_80/eba4rownjiezzw1srvcc/MY25GloryAdvanced_ColorABlackLava_Mercury.jpg",
    rating: 5,
    description: "Giant's premium downhill race bike with 200mm of travel and Maestro suspension.",
    specs: {
      "Frame": "Advanced Composite",
      "Wheel Size": "27.5\"",
      "Suspension": "200mm Maestro",
      "Drivetrain": "SRAM X01 DH 7-speed",
      "Brakes": "SRAM Code RSC",
      "Weight": "17.2 kg"
    }
  },
  "9": {
    name: "GILI FITTE",
    price: "$849",
    image: "https://media.polygonbikes.com/wp-content/uploads/2022/08/13150832/MY22-GILI-FITTE-B-FINAL-P-768x576.png",
    rating: 5,
    description: "Versatile fitness bike that combines road speed with light off-road capability.",
    specs: {
      "Frame": "Aluminum",
      "Wheel Size": "700c",
      "Drivetrain": "Shimano Claris 8-speed",
      "Brakes": "Tektro Mechanical Disc",
      "Tires": "32mm Hybrid",
      "Weight": "10.8 kg"
    }
  },
  
  // New Arrivals Section (3 produk terakhir)
  "10": {
    name: "S-Works Turbo Creo 2",
    price: "$13,999",
    image: "https://assets.specialized.com/i/specialized/98125-00_CREO-SL-SW-CARBON-UL-CARB-BLUPRL-LQDSIL_HERO-PDP?$scom-pdp-gallery-image$&fmt=webp",
    rating: 5,
    description: "Ultra-lightweight e-road bike with smooth pedal assist and premium components.",
    specs: {
      "Frame": "FACT 11r Carbon",
      "Wheel Size": "700c",
      "Motor": "Specialized SL 1.1 (35Nm)",
      "Battery": "320Wh",
      "Groupset": "SRAM RED eTap AXS",
      "Weight": "12.6 kg"
    }
  },
  "11": {
    name: "Speedmax CF SLX 8 AXS",
    price: "$8,849",
    image: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw10818494/images/full/full_2025_/2024/full_2025_3866_speedmax-cf-slx-8-axs_R091_P12_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
    rating: 5,
    description: "Canyon's premium triathlon/TT bike with integrated storage and superior aerodynamics.",
    specs: {
      "Frame": "Aerodynamic Carbon",
      "Wheel Size": "700c",
      "Groupset": "SRAM Force eTap AXS",
      "Brakes": "SRAM Force Hydraulic",
      "Weight": "9.2 kg",
      "Aero Features": "Fully integrated cockpit"
    }
  },
  "12": {
    name: "S-Works Turbo Levo 4",
    price: "$13,499",
    image: "https://assets.specialized.com/i/specialized/95224-01_LEVO-SW-CARBON-G4-REDPRL-BLK-METWHTSIL_HERO-PDP-DARK?$scom-pdp-product-image-xl-premium$&fmt=webp",
    rating: 5,
    description: "Top-of-the-line electric mountain bike with 150mm travel and the latest motor technology.",
    specs: {
      "Frame": "FACT 11m Carbon",
      "Wheel Size": "29\"",
      "Motor": "Specialized 2.2 (90Nm)",
      "Battery": "700Wh",
      "Suspension": "150mm Front/Rear",
      "Weight": "21.3 kg"
    }
  }
};


  // DOM Elements
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');
  const cartCount = document.querySelector('.cart-count');
  const addToCartButtons = document.querySelectorAll('.product-overlay .btn, .add-to-cart-modal');
  const contactForm = document.querySelector('.contact-form');
  const newsletterForm = document.querySelector('.footer-newsletter form');
  const products = document.querySelectorAll('.product');
  const productModal = document.getElementById('productModal');

  // Mobile Menu Toggle
  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
      mobileMenuBtn.innerHTML = nav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
  }

  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768 && nav) {
        nav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Shopping Cart Functionality
  let cartItems = 0;

  function updateCartCount() {
    if (cartCount) {
      cartCount.textContent = cartItems;
      cartCount.style.display = cartItems > 0 ? 'block' : 'none';
    }
  }

  function addToCart(productId) {
    cartItems++;
    updateCartCount();
    const product = productsData[productId];
    if (product) {
      showNotification(`${product.name} added to cart!`);
    }
  }

  // Add to cart buttons
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const productElement = button.closest('.product');
      const modalElement = document.querySelector('.product-modal.show');
      
      let productId;
      if (productElement) {
        productId = productElement.getAttribute('data-id');
      } else if (modalElement) {
        productId = modalElement.getAttribute('data-current-product');
      }
      
      if (productId) {
        addToCart(productId);
      }
    });
  });

  // Notification System
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Product Modal Functionality
  function openProductModal(productId) {
    const product = productsData[productId];
    
    if (product && productModal) {
      // Update modal content
      document.getElementById('modalProductImage').src = product.image;
      document.getElementById('modalProductImage').alt = product.name;
      document.getElementById('modalProductName').textContent = product.name;
      document.getElementById('modalProductPrice').textContent = product.price;
      
      // Create rating stars
      const ratingContainer = document.getElementById('modalProductRating');
      if (ratingContainer) {
        ratingContainer.innerHTML = '';
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 >= 0.5;
        
        for (let i = 0; i < 5; i++) {
          const star = document.createElement('i');
          if (i < fullStars) {
            star.className = 'fas fa-star';
          } else if (i === fullStars && hasHalfStar) {
            star.className = 'fas fa-star-half-alt';
          } else {
            star.className = 'far fa-star';
          }
          ratingContainer.appendChild(star);
        }
      }
      
      document.getElementById('modalProductDescription').textContent = product.description;
      
      // Create specs list
      const specsContainer = document.getElementById('modalProductSpecs');
      if (specsContainer) {
        specsContainer.innerHTML = '<h3>Specifications</h3><ul></ul>';
        const specsList = specsContainer.querySelector('ul');
        
        for (const [key, value] of Object.entries(product.specs)) {
          const li = document.createElement('li');
          li.innerHTML = `<strong>${key}:</strong> ${value}`;
          specsList.appendChild(li);
        }
      }
      
      // Show modal
      productModal.classList.add('show');
      productModal.setAttribute('data-current-product', productId);
      document.body.style.overflow = 'hidden';
    }
  }

  // Open product modal when clicking any product
  products.forEach(product => {
    product.addEventListener('click', (e) => {
      if (!e.target.closest('.product-overlay .btn')) {
        const productId = product.getAttribute('data-id');
        openProductModal(productId);
      }
    });
  });

  // Close modal
  const closeModal = document.querySelector('.close-modal');
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      productModal.classList.remove('show');
      document.body.style.overflow = 'auto';
    });
  }

  // Close when clicking outside modal
  window.addEventListener('click', (e) => {
    if (e.target === productModal) {
      productModal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });

  // Close with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModal.classList.contains('show')) {
      productModal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });

  // Form Validation
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = contactForm.querySelectorAll('input, textarea');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = 'red';
          isValid = false;
        } else {
          input.style.borderColor = '#ddd';
        }
      });
      
      if (isValid) {
        showNotification('Message sent successfully!');
        contactForm.reset();
      } else {
        showNotification('Please fill all required fields');
      }
    });
  }

  // Newsletter Subscription
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      
      if (emailInput && emailInput.value.includes('@')) {
        showNotification('Thanks for subscribing!');
        emailInput.value = '';
      } else {
        showNotification('Please enter a valid email');
      }
    });
  }

  // Sticky Header on Scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
      header.style.boxShadow = window.scrollY > 100 
        ? '0 5px 15px rgba(0,0,0,0.2)' 
        : '0 2px 10px rgba(0,0,0,0.1)';
    }
  });

  // Animate Products on Scroll
  function animateOnScroll() {
    products.forEach(product => {
      const productPosition = product.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (productPosition < screenPosition) {
        product.classList.add('animate');
      }
    });
  }

  // Initialize animations
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
});