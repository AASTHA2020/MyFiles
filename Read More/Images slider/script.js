const images = [
    "nature2.jpg",
    "nature3.jpg",
    "nature4.jpg"
  ];
  
  let currentIndex = 0;
  const sliderImg = document.getElementById("sliderImg");
  
  // Function to show the current slide
  function showSlide() {
    sliderImg.src = images[currentIndex];
  }
  
  // Function to show the next slide
  function nextSlide() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0; // If reached the end, go back to the first image
    }
    showSlide();
  }
  
  // Function to show the previous slide
  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1; // If reached the beginning, go to the last image
    }
    showSlide();
  }
  
  // Show the first slide initially
  showSlide();
  
  