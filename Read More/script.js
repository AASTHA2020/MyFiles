document.getElementById('readMoreBtn').addEventListener('click', function() {
    var moreContent = document.querySelector('.more-content');
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
      moreContent.style.display = 'block';
      this.textContent = 'Read Less';
    } else {
      moreContent.style.display = 'none';
      this.textContent = 'Read More';
    }
  });
  