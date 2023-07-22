// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

chrome.permission;

function logAuthToken(cookie) {
  if (cookie && cookie.name === "auth_cookie") {
    const jwtCookie = cookie.value;
    chrome.storage.local.set({ auth_jwt: jwtCookie }).then((response) => {
      console.log("was saved ");
    });
  }
}

chrome.cookies.get(
  { url: "http://localhost:3001/", name: "auth_cookie" },
  function (cookie) {
    logAuthToken(cookie);
  },
);

chrome.permissions.contains(
  { origins: ["http://localhost:3001/*"] },
  function (result) {
    if (result) {
      console.log("Extension has permission to access http://localhost:3001");
    } else {
      console.log(
        "Extension does not have permission for http://localhost:3000",
      );
    }
  },
);
