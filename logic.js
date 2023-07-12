// Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Preview for image for G.S Screen
function previewImage(event) {
  const imagePreview = document.getElementById("imagePreview");
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    imagePreview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    imagePreview.src = "#";
  }
}

// Preview for video for G.S Screen
function previewVideo(event) {
    const videoPreview = document.getElementById("videoPreview");
    const file = event.target.files[0];
  const reader = new FileReader();
  
  reader.onload = function () {
    videoPreview.src = reader.result;
};

if (file) {
    reader.readAsDataURL(file);
} else {
    videoPreview.src = "";
}
}

// Preview for tags for G.S Screen
function addTagInput() {
  const tagsContainer = document.getElementById("tagsContainer");
  const newTagInput = document.createElement("input");
  newTagInput.type = "text";
  newTagInput.name = "tags";
  newTagInput.className = "rounded py-2 px-3 w-32 shadow-xl";
  tagsContainer.insertBefore(newTagInput, document.getElementById("tags"));
}
