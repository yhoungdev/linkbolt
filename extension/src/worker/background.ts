// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

function logAuthToken(cookie) {
    if (cookie && cookie.name === 'auth_cookie') {
      console.log("Auth Token:", cookie.value);
    }
  }
  
  chrome.cookies.get({ url: 'http://localhost:3001/', name: 'auth_cookie' }, function (cookie) {
   logAuthToken(cookie)
  });
  

