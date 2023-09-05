const tags = document.querySelectorAll('.teacher__tags-tag');
const teachers = document.querySelectorAll('.teacher');

const selectedTags = new Set();

teachers.forEach(teacher => {
  teacher.addEventListener('click', () => {
    if (teacher.classList.contains('highlighted')) {
      teacher.classList.remove('highlighted');
    } else {
      teacher.classList.add('highlighted');
    }

    const teacherDescription = teacher.querySelector('.teacher__description');
    teacherDescription.style.display = teacherDescription.style.display === 'block' ? 'none' : 'block';
  })
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

    // Filter posts based on selected tags
    teachers.forEach(teacher => {


      const postTags = teacher.getAttribute('data-tags').split(',');
      const isVisible = Array.from(selectedTags).every(tag => postTags.includes(tag));
      //post.style.display = isVisible ? 'inline-block' : 'none';

      if (isVisible) {
        teacher.classList.remove('removing');
      } else {
        teacher.classList.add('removing');
      }

    });
  });
});