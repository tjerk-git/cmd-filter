const tags = document.querySelectorAll('.teacher__tags-tag');
const closeButtons = document.querySelectorAll('.popup__close');
const teachers = document.querySelectorAll('.card');
const selectedTags = new Set();

// Get a reference to the anchor element
const anchor = document.getElementById("anchor");

const teachers_div = document.getElementById("teachers");
const loader = document.getElementById("loader");

window.onload = function () {
  setTimeout(function () {
    teachers_div.style.opacity = "100";
    loader.style.display = "none";
  }, 900);
};


teachers.forEach(teacher => {
  teacher.addEventListener('click', function (t) {


    let popup = document.getElementById(this.getAttribute('data-slug'));

    popup.style.opacity = "1";
    popup.style.visibility = "visible";
  });
});

closeButtons.forEach(closeButton => {
  closeButton.addEventListener('click', function (t) {

    let popup = document.getElementById(this.getAttribute('data-slug'));

    console.log(popup);
    popup.style.opacity = "0";
    popup.style.visibility = "hidden";
  });
})

// // Add an event listener for the "Escape" key press
// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {

//     event.preventDefault();

//     window.location.hash = "teachers";
//   }
// });

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    const selectedTag = tag.getAttribute('data-tag');

    if (selectedTags.has(selectedTag)) {
      selectedTags.delete(selectedTag);
      tag.classList.remove('selected');
    } else {
      selectedTags.add(selectedTag);
      tag.classList.add('selected');
    }

    teachers.forEach(teacher => {

      const postTags = teacher.getAttribute('data-tags').split(',');
      const isVisible = Array.from(selectedTags).every(tag => postTags.includes(tag));

      if (isVisible) {
        teacher.classList.remove('removing');
      } else {
        teacher.classList.add('removing');
      }

    });
  });
});