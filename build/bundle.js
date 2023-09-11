const tags = document.querySelectorAll('.teacher__tags-tag');
const teachers = document.querySelectorAll('.card');
const selectedTags = new Set();

// Get a reference to the anchor element
const anchor = document.getElementById("anchor");



teachers.forEach(teacher => {
  teacher.addEventListener('click', function (t) {
    window.location.hash = this.getAttribute('data-slug');;
  });
});

// Add an event listener for the "Escape" key press
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {

    event.preventDefault();

    window.location.hash = "teachers";
  }
});

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