import list from "./actions/list";
import add from "./actions/add";
import remove from "./actions/remove";
import update from "./actions/update";

const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");
const modalUpdateElement = document.getElementById("updateModal");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");

const addPictureHandler = () => {
  const url = getInputContents();

  add(url.trim());
  refreshGrid();

  clearInputContents();
};

const updatePicHandler = (e) => {
  let newPic = document.getElementById("update-pic-url");

  update(e, newPic.value);

  modalUpdateElement.style.display = "none";

  refreshGrid();
};

const refreshGrid = () => {
  const items = list();

  const fragment = document.createDocumentFragment();

  items.forEach(i => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    imgElement.src = i.toString();

    const deleteButtonElement = clone.querySelector(
        ".picture-item-delete-button"
    );

    deleteButtonElement.addEventListener("click", () => {
      remove(i);
      refreshGrid();
    });

    const updateButtonElement = clone.querySelector(
        ".picture-item-update-button"
    );

    updateButtonElement.addEventListener("click", () => {
      modalUpdateElement.style.display = "block";

      let updatePicBtn = document.getElementById("updatePicBtn");
      updatePicBtn.addEventListener("click", (e) => {
        e.preventDefault();
        updatePicHandler(i);
      });
    });

    const closeBtn = document.getElementsByClassName("close")[0];

    closeBtn.addEventListener("click", () => {
      let modal = document.getElementById('updateModal');
      modal.style.display = "none";
    });

    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => addPictureHandler());

window.addEventListener('click', (e) => {
  let modal = document.getElementById('updateModal');
  if (e.target === modal)
    modal.style.display = "none";
});