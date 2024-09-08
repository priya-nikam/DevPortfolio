console.log("script running");




/* for navbaar */
// document.querySelector('.cross').style.display = 'none';
// document.querySelector('.hamburger').addEventListener('click', () => {
//   document.querySelector('.navbar').classList.toggle('.navbargo')

//   if (document.querySelector('.navbar').classList.contains('.navbargo')) {
//     document.querySelector('.ham').style.display = 'inline';
//     document.querySelector('.cross').style.display = 'none';
//   }
//   else {
//     document.querySelector('.ham').style.display = 'none';
//     setTimeout(() => {
//       document.querySelector('.cross').style.display = 'none';
//     }, 300);
//   }
// })


/* for progress bar */
// var progressElement = document.querySelector('.progress');
// progressElement.style.width = '70%';

function updateProgress(progress) {
  // var progressBar = document.querySelector('.progress');
  // progressBar.style.width = progress + '%';
  const tags = document.querySelectorAll('.tag');
  tags.forEach((tag, index) => {
    tag.dataset.value = index + 1;
  });

}
updateProgress(25); // 25%
updateProgress(50); // 50%
updateProgress(75); // 75%
updateProgress(100); // 100%
updateProgress(0); // 0%




