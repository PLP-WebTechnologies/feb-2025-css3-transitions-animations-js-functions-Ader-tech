window.onload = function () {
  const savedColor = localStorage.getItem('preferredColor');
  if (savedColor) {
    document.getElementById('box').style.backgroundColor = savedColor;
    document.getElementById('colorPicker').value = savedColor;
  }
};

document.getElementById('saveBtn').addEventListener('click', function () {
  const selectedColor = document.getElementById('colorPicker').value;
  localStorage.setItem('preferredColor', selectedColor);
  document.getElementById('box').style.backgroundColor = selectedColor;
});

document.getElementById('animateBtn').addEventListener('click', function () {
  const box = document.getElementById('box');
  box.classList.add('animate');

  setTimeout(() => {
    box.classList.remove('animate');
  }, 1000);
});
