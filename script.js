const notificationContainerUnread = document.querySelectorAll(
  ".notification-container__unread"
);
const span = document.querySelectorAll("span");

const markRead = document.querySelector(".mark-read");

function markAsRead() {
  for (item of notificationContainerUnread) {
    item.className = "notification-container__read";
  }
  for (item of span) {
    item.style.display = "none";
  }
}

markRead.addEventListener("click", markAsRead);
