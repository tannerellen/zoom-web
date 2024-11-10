const webClientPath = "zoom.us/wc/join/";
const redirect = window.location.href
  .replace(/\zoom.us\/[a-z]\//, webClientPath)
  .replace("https://", "zmw://");
window.open(redirect, "_blank").focus();
window.setTimeout(() => {
  window.close();
}, 0);
