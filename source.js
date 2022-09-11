const btn = document.getElementById('btn');
let newNotification;

// Push new Notifications
const showNotification = function () {
  Notification.requestPermission().then((perms) => {
    if (perms === 'granted') {
      const notification = new Notification("Ekanshu Say's", {
        body: "Om Namah Shivaya",
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Aum_Om_black.svg/1200px-Aum_Om_black.svg.png'
      });

      notification.addEventListener('close', (element) => {
        console.log(element);
      });
    }
  })
};
btn.addEventListener('click', showNotification);

// Display Notifications on leave
const displayNotification = function () {
  (document.visibilityState === 'hidden')
    ? newNotification = new Notification("Ekanshu Say's", {
      body: "Come Back",
    })
    : newNotification.close();
};
document.addEventListener('visibilitychange', displayNotification);