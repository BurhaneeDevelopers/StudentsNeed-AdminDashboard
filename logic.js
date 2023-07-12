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
function previewGsImage(event) {
  const imagePreview = document.getElementById("gsImagePreview");
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
function previewGsVideo(event) {
  const videoPreview = document.getElementById("gsVideoPreview");
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

// Preview for image for Research Screen
function previewResearchImage(event) {
  const imagePreview = document.getElementById("researchImagePreview");
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

// Preview for video for Research Screen
function previewResearchVideo(event) {
  const videoPreview = document.getElementById("researchVideoPreview");
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
function addGsTagInput() {
  const tagsContainer = document.getElementById("gsTagsContainer");
  const newTagInput = document.createElement("input");
  newTagInput.type = "text";
  newTagInput.name = "tags";
  newTagInput.placeholder = "Enter Tags";
  newTagInput.className = "rounded py-2 px-3 w-32 shadow-xl";
  tagsContainer.insertBefore(newTagInput, document.getElementById("gsTags"));
}

// Preview for tags for Research Screen
function addResearchTagInput() {
  const tagsContainer = document.getElementById("researchTagsContainer");
  const newTagInput = document.createElement("input");
  newTagInput.type = "text";
  newTagInput.name = "tags";
  newTagInput.placeholder = "Enter Tags";
  newTagInput.className =
    "border border-gray-800 rounded py-2 px-3 w-32 shadow-md";
  tagsContainer.insertBefore(
    newTagInput,
    document.getElementById("researchTags")
  );
}
