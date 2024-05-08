const toggleBtn = document.getElementById('toggleBtn');
const itemList = document.getElementById('itemList');



toggleBtn.addEventListener('click', function() {
  // Toggle the 'hidden' class on the list of items
  // This class controls whether the list is visible or hidden
  itemList.classList.toggle('hidden');
});
