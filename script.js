const notificationContainerUnread = document.querySelectorAll(
  ".notification-container__unread"
);
const span = document.querySelectorAll("span");
const notificationCount = document.querySelector(".notification-count");
const markRead = document.querySelector(".mark-read");

console.log(notificationCount.textContent);

function markAsRead() {
    notificationCount.textContent = "0";
  for (item of notificationContainerUnread) {
    item.className = "notification-container__read";
  }
  for (item of span) {
    item.style.display = "none";
  }
}

markRead.addEventListener("click", markAsRead);
