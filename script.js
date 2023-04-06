const imageObj = document.getElementsByTagName('img');
// console.log(imageObj);
// console.log(typeof imageObj);

// if (image) {
//   //
// }

const arrOfImages = ["images/IMG_0463.png", "images/IMG_0503.png", "images/IMG_1050.png", "images/IMG_8493.png", "images/IMG_8652.png", "images/IMG_8669.png", "images/IMG_8980.png", "images/IMG_9018.png", "images/IMG_9098.png"]
for (const image of imageObj) {
//   image.src = 'IMG_0503.png';
    // let url = chrome.extension.getURL('/images/IMG_8652.png')
    image.src = chrome.runtime.getURL("/images/IMG_0463.png");
  console.log(image)
}

