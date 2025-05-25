let useWeb = false;
const webClientPath = "zoom.us/wc/join/";

processRedirects();

function processRedirects() {
  const currentUrl = window.location.href;
  const urlParams = getURLParams(["redirectParam", "fromRedirect"]);

  if (urlParams.fromRedirect) {
    // We have been re-redirected and want to just use the default behavior of opening the zoom app
    return;
  }

  if (window.location.host === "zoom.us") {
    // If this a new load from the new window then show confirmation modal
    useWeb = window.confirm("Open in web client? Cancel opens Zoom app.");
    const redirectParam = decodeURI(urlParams.redirectParam);
    if (useWeb) {
      window.location.href = redirectParam
        .replace(/\zoom.us\/[a-z]\//, webClientPath)
        .replace("https://", "zmw://");
    } else {
      const urlParts = redirectParam.split("?");
      window.location.href = `${urlParts[0]}?fromRedirect=true&${urlParts[1]}`;
    }
  } else {
    // If this is the first load then open a new window with special url and close current window
    const redirectParam = encodeURI(currentUrl);
    window
      .open(
        `https://zoom.us/j/redirect?redirectParam=${redirectParam}`,
        "_blank",
      )
      .focus();
    window.setTimeout(() => {
      window.close();
    }, 0);
  }
}

function getURLParams(params) {
  const paramsResult = {};
  const paramParts = window.location.search.replace("?", "").split("&");
  for (const paramPart of paramParts) {
    for (const param of params) {
      if (paramPart.startsWith(`${param}=`)) {
        paramsResult[param] = paramPart.replace(`${param}=`, "");
      }
    }
  }

  return paramsResult;
}
