let images = [{
  url: './PNG/projects-info_pic-admiral.png',
  text_link: 'Rostov-on-Don, Admiral',
  text_info_city: 'Rostov-on-Don <br> LCD admiral',
  text_info_time: '3.5 months',
  text_info_area: '81 m2',
},{
  url: './PNG/projects-info_pic-thieves.png',
  text_link: 'Sochi Thieves',
  text_info_city: 'Sochi <br> Thieves',
  text_info_time: '4 months',
  text_info_area: '105 m2',    
},{
  url: './PNG/projects-info_pic-patriotic.png',
  text_link: 'Rostov-on-Don Patriotic',
  text_info_city: 'Rostov-on-Don Patriotic',
  text_info_time: '3 months',
  text_info_area: '93 m2',
}];

function initSlider() {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".projects-info__slider-images");
  let sliderButtons = document.querySelector(".slider-buttons");
  let sliderDots = document.querySelector(".slider-dots");
  let sliderLink = document.querySelector(".projects-list");
  let sliderTextCity = document.querySelector(".projects-info__item-city");
  let sliderTextTime = document.querySelector(".projects-info__item-time");
  let sliderTextArea = document.querySelector(".projects-info__item-area");

  initImages();
  initButtons();
  initDots();
  initTextLink();
  initTextInfoCity();
  initTextInfoTime();
  initTextInfoArea();

  function initImages() {
      images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
      });
  }

  
  function initButtons() {
      sliderButtons.querySelectorAll(".slider__arrow").forEach(arrow => {
        arrow.addEventListener("click", function() {
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber;
          if (arrow.classList.contains("slider__arrow_left")) {
            nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
          } else {
            nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
          }
          moveSlider(nextNumber);
        });
      });
  } 


  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
        sliderDots.querySelector(".active").classList.remove("active");
        this.classList.add("active");
      })
    })
  }


  function initTextLink() {
    images.forEach((image, index) => {
      let text = `<li><a class="projects-list__item title n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].text_link}</a></li>`;
      sliderLink.innerHTML += text;
   });

   sliderLink.querySelectorAll(".projects-list__item").forEach(text => {
    text.addEventListener("click", function () {
      moveSlider(this.dataset.index);
    })
   });
  }


  function initTextInfoCity() {
    images.forEach((image,index) => {
      let textDivCity = `<div class="projects-info__item_text n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].text_info_city}</div>`;
      sliderTextCity.innerHTML += textDivCity;
    });
  }


  function initTextInfoTime() {
    images.forEach((image,index) => {
      let textDivTime = `<div class="projects-info__item_text n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].text_info_time}</div>`;
      sliderTextTime.innerHTML += textDivTime;
    });
  }


  function initTextInfoArea() {
    images.forEach((image,index) => {
      let textDivArea = `<div class="projects-info__item_text n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].text_info_area}</div>`;
      sliderTextArea.innerHTML += textDivArea;
    });
  }


  function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(".n" + num).classList.add("active");
      sliderDots.querySelector('.active').classList.remove('active');
      sliderDots.querySelector('.n' + num).classList.add('active');
      sliderLink.querySelector('.active').classList.remove('active');
      sliderLink.querySelector('.n' + num).classList.add('active');
      sliderTextCity.querySelector('.active').classList.remove('active');
      sliderTextCity.querySelector('.n' + num).classList.add('active');
      sliderTextTime.querySelector('.active').classList.remove('active');
      sliderTextTime.querySelector('.n' + num).classList.add('active');
      sliderTextArea.querySelector('.active').classList.remove('active');
      sliderTextArea.querySelector('.n' + num).classList.add('active');
  }
}

document.addEventListener("DOMContentLoaded", initSlider);