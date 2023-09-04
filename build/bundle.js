const tags = document.querySelectorAll('.teacher__tags-tag');
const posts = document.querySelectorAll('.teacher');


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

    // Filter posts based on selected tags
    posts.forEach(post => {
      const postTags = post.getAttribute('data-tags').split(',');
      const isVisible = Array.from(selectedTags).every(tag => postTags.includes(tag));
      post.style.opacity = isVisible ? '1' : '0.2';
    });
  });
});