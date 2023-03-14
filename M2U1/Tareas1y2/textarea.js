
const textarea = document.getElementById('myTextarea');
const charCount = document.getElementById('charCount');

textarea.addEventListener('input', function() {
  const remainingChars = textarea.maxLength - textarea.value.length;
  charCount.innerHTML = remainingChars;
});