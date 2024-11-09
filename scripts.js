const servicesMediaFiles = [
  { type: 'image', src: 'assets/services/G_1 - Photo.jpg', alt: 'G 1' },
  { type: 'image', src: 'assets/services/G_2 - Photo.jpg', alt: 'G 2' },
  { type: 'image', src: 'assets/services/G_3 - Photo.jpg', alt: 'G 3' },
  { type: 'image', src: 'assets/services/G_6 - Photo.jpg', alt: 'G 6' },
  { type: 'image', src: 'assets/services/G_8 - Photo.jpg', alt: 'G 8' },
  { type: 'image', src: 'assets/services/G_12 - Photo.jpg', alt: 'G 12' },
  { type: 'image', src: 'assets/services/G_16 - Photo.jpg', alt: 'G 16' },
  { type: 'image', src: 'assets/services/G_17 - Photo.jpg', alt: 'G 17' },
  { type: 'image', src: 'assets/services/G_21 - Photo.jpg', alt: 'G 21' },
  { type: 'image', src: 'assets/services/G_22 - Photo.jpg', alt: 'G 22' },
  { type: 'image', src: 'assets/services/O.jpg', alt: 'O' },
  { type: 'image', src: 'assets/services/SAMPLE.jpg', alt: 'Sample' },
  { type: 'image', src: 'assets/services/IMG20231103173000.jpg', alt: 'IMG 20231103173000' },
  { type: 'image', src: 'assets/services/IMG20231103173012.jpg', alt: 'IMG 20231103173012' },
  { type: 'image', src: 'assets/services/IMG20231103173118.jpg', alt: 'IMG 20231103173118' },
  { type: 'image', src: 'assets/services/IMG20231103173155.jpg', alt: 'IMG 20231103173155' },
  { type: 'image', src: 'assets/services/IMG20231103173157.jpg', alt: 'IMG 20231103173157' },
  { type: 'image', src: 'assets/services/IMG20231103173202.jpg', alt: 'IMG 20231103173202' },
  { type: 'image', src: 'assets/services/IMG20231103173207.jpg', alt: 'IMG 20231103173207' },
  { type: 'image', src: 'assets/services/OP02_6 - Photo.jpg', alt: 'OP02_6 - Photo' },
  { type: 'image', src: 'assets/services/OP02_7 - Photo.jpg', alt: 'OP02_7 - Photo' },
  { type: 'image', src: 'assets/services/OP02_8 - Photo.jpg', alt: 'OP02_8 - Photo' },
  { type: 'image', src: 'assets/services/OP02_9 - Photo.jpg', alt: 'OP02_9 - Photo' },
  { type: 'image', src: 'assets/services/OP02_10 - Photo.jpg', alt: 'OP02_10 - Photo' },
  { type: 'image', src: 'assets/services/ELEVATION A.jpg', alt: 'Elevation A' },
  { type: 'image', src: 'assets/services/ELEVATION B.jpg', alt: 'Elevation B' },
  { type: 'image', src: 'assets/services/RS_6 - Photo.jpg', alt: 'RS 6' },
  { type: 'image', src: 'assets/services/RS_13 - Photo.jpg', alt: 'RS 13' },
  { type: 'image', src: 'assets/services/RS_16 - Photo.jpg', alt: 'RS 16' },
  { type: 'image', src: 'assets/services/RS_25 - Photo.jpg', alt: 'RS 25' },
  { type: 'image', src: 'assets/services/RS_36 - Photo.jpg', alt: 'RS 36' },
  { type: 'image', src: 'assets/services/RS_37 - Photo.jpg', alt: 'RS 37' },
  { type: 'image', src: 'assets/services/RS_38 - Photo.jpg', alt: 'RS 38' },
  { type: 'image', src: 'assets/services/RS_40 - Photo.jpg', alt: 'RS 40' },
  { type: 'image', src: 'assets/services/H_2 - Photo (2).jpg', alt: 'H 2 (2)' },
  { type: 'image', src: 'assets/services/H_2 - Photo (3).jpg', alt: 'H 2 (3)' },
  { type: 'image', src: 'assets/services/H_2 - Photo (5).jpg', alt: 'H 2 (5)' },
  { type: 'image', src: 'assets/services/H_2 - Photo.jpg', alt: 'H 2' },
  { type: 'image', src: 'assets/services/forumadvaita_11 - Photo.jpg', alt: 'Forum Advaita' },
  { type: 'image', src: 'assets/services/main.jpg', alt: 'Main' },
  { type: 'image', src: 'assets/services/postedit.jpg', alt: 'Post Edit' }
];

const philosophyMediaFiles = [
  { type: 'image', src: 'assets/philosophy/stories.jpg', alt: 'stories' },
  { type: 'image', src: 'assets/philosophy/stories 2.jpg', alt: 'stories 2' }
];

const masterMediaFiles = [
  { type: 'image', src: 'assets/with-the-master/1.jpg', alt: '1' },
  { type: 'image', src: 'assets/with-the-master/2.jpg', alt: '2' },
  { type: 'image', src: 'assets/with-the-master/3.jpg', alt: '3' },
  { type: 'image', src: 'assets/with-the-master/4.jpg', alt: '4' }
];

function initializeSlider(mediaFiles, sliderContainer) {
  mediaFiles.forEach((media) => {
    const slide = document.createElement('div');
    slide.classList.add('slide', 'fade'); // Ensuring each slide has necessary classes

    if (media.type === 'video') {
      const video = document.createElement('video');
      video.classList.add('video-slide');
      video.controls = true;
      const source = document.createElement('source');
      source.src = media.src;
      source.type = 'video/mp4';
      video.appendChild(source);
      slide.appendChild(video);
    } else if (media.type === 'image') {
      const img = document.createElement('img');
      img.src = media.src;
      img.alt = media.alt;
      slide.appendChild(img);
    }

    sliderContainer.appendChild(slide);
  });
}

initializeSlider(philosophyMediaFiles, document.getElementById('philosophy-slider'));
initializeSlider(servicesMediaFiles, document.getElementById('services-slider'));

let slideIndexPhilosophy = 0;
let slideIndexServices = 0;
let slideIndexMaster = 0;

function changeSlide(n, sliderId) {
  let slides, slideIndex;

  if (sliderId === 'philosophy') {
    slides = document.querySelectorAll('#philosophy-slider .slide');
    slideIndexPhilosophy += n;
    slideIndex = slideIndexPhilosophy;
  } else if (sliderId === 'services') {
    slides = document.querySelectorAll('#services-slider .slide');
    slideIndexServices += n;
    slideIndex = slideIndexServices;
  } else if (sliderId === 'master') {
    slides = document.querySelectorAll('#master-slider .slide');
    slideIndexMaster += n;
    slideIndex = slideIndexMaster;
  }

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  // Update the specific slide index
  if (sliderId === 'philosophy') {
    slideIndexPhilosophy = slideIndex;
  } else if (sliderId === 'services') {
    slideIndexServices = slideIndex;
  } else if (sliderId === 'master') {
    slideIndexMaster = slideIndex;
  }

  // Hide all slides in the selected slider
  for (let slide of slides) {
    slide.style.display = 'none';
  }

  // Show the current slide in the selected slider
  slides[slideIndex].style.display = 'block';
}

function autoSlide(sliderId) {
  if (sliderId === 'philosophy') {
    changeSlide(1, 'philosophy');
  } else if (sliderId === 'services') {
    changeSlide(1, 'services');
  }
}

// Auto slide every 10 seconds for each slider
setInterval(() => {
  autoSlide('philosophy');
}, 10000);

setInterval(() => {
  autoSlide('services');
}, 10000);

changeSlide(0, 'philosophy');
changeSlide(0, 'services');

function showSection(sectionId) {
  const objectiveSection = document.getElementById('objective-section');
  const philosophySection = document.getElementById('philosophy-section');
  const servicesSection = document.getElementById('services-section');
  const contactSection = document.getElementById('contact-section');
  const masterSection = document.getElementById('master-section');

  let sections = [];
  sections.push(objectiveSection, philosophySection, servicesSection, contactSection, masterSection);

  sections.forEach(section => {
    if (sectionId === 'home') {
      if (section.id != 'contact-section' || section.id != 'master-section')
        section.style.display = 'block';
      else
        section.style.display = 'none';
    } else if (sectionId === 'contact'){
      if (section.id == 'contact-section')
        section.style.display = 'block';
      else
        section.style.display = 'none';
    } else{
      if (section.id == 'master-section'){
        section.style.display = 'block';
        initializeSlider(masterMediaFiles, document.getElementById('master-slider'));

        setInterval(() => {
          autoSlide('master');
        }, 10000);

        changeSlide(0, 'master');
      }
      else
        section.style.display = 'none';
    }
  });
}

// Function to open PDF in new tab
function openPDF(pdfPath) {
  window.open(pdfPath, '_blank');
}