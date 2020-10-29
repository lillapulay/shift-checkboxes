const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  // Check if shift key was down
  // AND check if box was checked in, not out
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // Loops over every checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));