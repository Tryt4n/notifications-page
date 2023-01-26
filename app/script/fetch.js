const URL = "./script/users.json";

const personProfilPicture = document.querySelectorAll("[data-person-profil-picture]");
const personName = document.querySelectorAll("[data-person-name]");
const personAction = document.querySelectorAll("[data-person-action]");
const personThing = document.querySelectorAll("[data-person-thing]");
const personPrivateMessage = document.querySelectorAll("[data-person-private-message]");
const personImageDescription = document.querySelectorAll("[data-person-image-description");

export default fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user, i) => {
      let { profileImg, name, action, thing, time, message, image, imageDescription } = user;
      personProfilPicture[i].setAttribute("src", profileImg);
      personProfilPicture[i].setAttribute("alt", name);
      personName[i].innerText = name;
      personAction[i].innerText = " " + action;

      if (thing) {
        personThing[i].innerText = thing;
      } else {
        personThing[i].parentElement.style.display = "none";
      }
      if (message) {
        personPrivateMessage[i].innerText = message;
      } else {
        personPrivateMessage[i].style.display = "none";
      }
      if (image) {
        personImageDescription[i].setAttribute("src", image);
        personImageDescription[i].setAttribute("alt", imageDescription);
      } else {
        personImageDescription[i].parentElement.style.display = "none";
      }
    });
  });
