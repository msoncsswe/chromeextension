// async function getCurrentTab() {
//   let queryOptions = { active: true, lastFocusedWindow: true };
//   // `tab` will either be a `tabs.Tab` instance or `undefined`.
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// }

// let tab = getCurrentTab();
// tab
//   .then(function (success) {
//     const url = success.url;
//     // console.log(url);
//   })
//   .catch(function (error) {
//     console.log('error');
//   });
