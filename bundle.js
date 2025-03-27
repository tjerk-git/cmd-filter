const tags = document.querySelectorAll(".teacher__tags-tag");
const closeButtons = document.querySelectorAll(".popup__close");
const teachers = document.querySelectorAll(".card");
const selectedTags = new Set();
const btnAlfabet = document.getElementById("sortAlfabet");
const btnRandom = document.getElementById("sortRandom");
const audioPlayer = document.getElementById("audioPlayer");
const pronounceButtons = document.querySelectorAll(".btn-pronounce");

// Get a reference to the anchor element
const anchor = document.getElementById("anchor");

const teachers_div = document.getElementById("teachers");
//const loader = document.getElementById("loader");

window.onload = function () {
  setTimeout(function () {
    teachers_div.style.opacity = "100";
    //loader.style.display = "none";
  }, 900);
};

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

pronounceButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const audioSrc = this.dataset.audio;
    const audioPlayer = document.querySelector(`.audio_${audioSrc}`);

    audioPlayer.play();
  });
});

btnAlfabet.addEventListener("click", function () {
  let sortImage = document.querySelectorAll(".alfabetSort");

  sortImage.forEach((image) => {
    if (image.classList.contains("hidden")) {
      image.classList.remove("hidden");
    } else {
      image.classList.add("hidden");
    }
  });

  let teachersSelection = document.querySelectorAll(".card");
  let teacherArray = Array.from(teachersSelection);

  // Step 3: Rearrange the order of the elements (for example, reverse order)
  teacherArray.reverse();

  // Step 4: Append the elements back to their parent container in the new order
  let parentContainer = document.getElementById("teachers"); // Change this to your actual parent container
  teacherArray.forEach((teacherDiv) => {
    parentContainer.appendChild(teacherDiv);
  });
});

btnRandom.addEventListener("click", function () {
  let teachersSelection = document.querySelectorAll(".card");
  let teacherArray = Array.from(teachersSelection);

  let shuffled = teacherArray
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  let parentContainer = document.getElementById("teachers"); // Change this to your actual parent container
  shuffled.forEach((teacherDiv) => {
    parentContainer.appendChild(teacherDiv);
  });
});

teachers.forEach((teacher) => {
  var element = document.getElementById(
    teacher.getAttribute("data-slug") + "-tags",
  );
  var content = element.innerHTML.split(",");

  // add on click to element open dialog with matching id
  teacher.addEventListener("click", () => {
    // get dialog with matching id
    let dialog = document.getElementById(teacher.getAttribute("data-slug"));
    dialog.showModal();
  });

  element.innerHTML = "";

  content.forEach((tag) => {
    if (tag == " teachers") return;
    var div = document.createElement("div");
    div.classList.add("teacher__tags-smaller-tag");
    div.innerHTML = `${tag}`;
    element.appendChild(div);
  });
});

// all button with popup__close class add event listener to close dialog
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    // find the dialog with matching id
    let dialog = closeButton.closest("dialog");
    dialog.close();
  });
});

tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    const selectedTag = tag.getAttribute("data-tag");

    if (selectedTags.has(selectedTag)) {
      selectedTags.delete(selectedTag);
      tag.classList.remove("selected");
    } else {
      selectedTags.add(selectedTag);
      tag.classList.add("selected");
    }

    teachers.forEach((teacher) => {
      const postTags = teacher.getAttribute("data-tags").split(",");
      const isVisible = Array.from(selectedTags).every((tag) =>
        postTags.includes(tag),
      );

      if (isVisible) {
        teacher.classList.remove("removing");
      } else {
        teacher.classList.add("removing");
      }
    });
  });
});
