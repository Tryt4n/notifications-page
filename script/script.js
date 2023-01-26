import fetch from "./fetch.js";
import preventByClickingLinks from "./util.js";

const markAllMessages = document.querySelector("[data-mark-all-btn]");
const messages = document.querySelectorAll(".messages__message");
const notificationsCounter = document.querySelector("[data-notifications-counter]");

fetch();
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
