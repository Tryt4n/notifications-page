import preventByClickingLinks from "./util.js";

const markAllMessages = document.querySelector("[data-mark-all-btn]");
const messages = document.querySelectorAll(".messages__message");
const notificationsCounter = document.querySelector("[data-notifications-counter]");

markAllAsRead();
toggleReadOrUnread();
handleCounter();

function markAllAsRead() {
  markAllMessages.addEventListener("click", () => {
    messages.forEach((message) => {
      message.classList.remove("messages__unread");
      message.removeAttribute("aria-label");
      handleCounter();
    });
  });
}

function toggleReadOrUnread() {
  messages.forEach((message) =>
    message.addEventListener("click", () => {
      message.classList.toggle("messages__unread");
      handleCounter();
      if (message.classList.contains("messages__unread"))
        return message.setAttribute("aria-label", "Unread Message");
      else {
        message.removeAttribute("aria-label");
      }
    })
  );
  preventByClickingLinks();
}

function handleCounter() {
  const unreadMessages = document.querySelectorAll(".messages__unread");
  notificationsCounter.innerText = unreadMessages.length;
}

const URL = "/script/users.json";

const personProfilPicture = document.querySelectorAll("[data-person-profil-picture]");
const personName = document.querySelectorAll("[data-person-name]");
const personAction = document.querySelectorAll("[data-person-action]");
const personThing = document.querySelectorAll("[data-person-thing]");
const personPrivateMessage = document.querySelectorAll("[data-person-private-message]");
const personImageDescription = document.querySelectorAll("[data-person-image-description");

fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user, i) => {
      let { profileImg, name, action, thing, message, image, imageDescription } = user;
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
