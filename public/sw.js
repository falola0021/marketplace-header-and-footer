this.addEventListener("fetch", (event) => {
  if (
    event.request.url ===
    "https://api.kassandah.gigmobility.com/static/js/1.chunk.js"
  ) {
    event.waitUntil(
      this.registration.showNotification("Hello", {
        body: "You have a requisition waiting approver",
        icon: "kassandahwhite.png",
      })
    );
  }
});
