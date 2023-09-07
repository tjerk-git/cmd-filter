const tags = document.querySelectorAll('.teacher__tags-tag');
const teachers = document.querySelectorAll('.teacher');
const selectedTags = new Set();



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