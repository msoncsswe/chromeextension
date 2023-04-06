const imageObj = document.getElementsByTagName('img');
console.log(imageObj);
console.log(typeof imageObj);

// if (image) {
//   //
// }
for (const image in imageObj) {
  imageObj[image].src = 'images/' + fileName;
}
