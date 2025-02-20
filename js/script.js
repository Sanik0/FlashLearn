
  

  // =========================================== FREQUENTLY ASKED QUESTIONS ===========================================
const questions = document.querySelectorAll('.q');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling; 
    const plus = question.querySelector('.plus'); 
    const minus = question.querySelector('.minus'); 

    questions.forEach(q => {
      const otherAnswer = q.nextElementSibling;
      const otherPlus = q.querySelector('.plus');
      const otherMinus = q.querySelector('.minus');

      if (q !== question) {
        if (otherAnswer) otherAnswer.classList.remove('open');
        if (otherPlus) otherPlus.style.display = 'block'; 
        if (otherMinus) otherMinus.style.display = 'none'; 
      }
    });

    if (answer.classList.contains('open')) {
      if (minus) minus.style.display = 'none';
      if (plus) plus.style.display = 'block';
    } else {
      if (minus) minus.style.display = 'block';
      if (plus) plus.style.display = 'none';
    }

    answer.classList.toggle('open');
  });
});

// =========================================== SWIPER ===========================================



  const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 10,

    direction: 'horizontal',
    loop: false,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const swiperTestimonial = new Swiper('.swiperTestimonial', {
    slidesPerView: 1,
    spaceBetween: 10,

    direction: 'horizontal',
    loop: false,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const swiperFlashcard = new Swiper('.swiperFlashcard', {
    slidesPerView: 1,
    spaceBetween: 10,
    // effect: "cards",

    direction: 'horizontal',
    loop: false,
  
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  document.querySelectorAll('.Fcard').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});


// =========================================== FILE ===========================================

const dropArea = document.getElementById("drop-area");
        const fileInput = document.getElementById("file-input");
    
        dropArea.addEventListener("dragover", (event) => {
          event.preventDefault();
          dropArea.classList.add("dragover");
        });
      
        dropArea.addEventListener("dragleave", () => {
          dropArea.classList.remove("dragover");
        });
      
        dropArea.addEventListener("drop", (event) => {
          event.preventDefault();
          dropArea.classList.remove("dragover");
      
          const files = event.dataTransfer.files; 
          fileInput.files = files;
          handleFiles(files); 
        });
      
        dropArea.addEventListener("click", () => {
          fileInput.click();
        });
      
        fileInput.addEventListener("change", (event) => {
          const files = event.target.files;
        });
      
        function handleFiles(files) {
          console.log("Selected files:", files);
          for (const file of files) {
            console.log(file.name);
          }
        }


