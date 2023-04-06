const imageObj = document.getElementsByTagName('img');
console.log(imageObj);
console.log(typeof imageObj);
console.log(Array.isArray(imageObj))

// if (image) {
//   //
// }

const arrOfImages = ["https://i.imgur.com/3mBNgqF.jpg", "https://i.imgur.com/y9m0sT9.jpg", "https://i.imgur.com/COi46sr.jpg", "https://i.imgur.com/G9rzVDc.jpg", "https://i.imgur.com/RxVmfef.jpg", "https://i.imgur.com/KKl7Mdh.jpg", "https://i.imgur.com/TfUvXmX.jpg"]

const randomURL = () => {
    return Math.floor(Math.random() * (arrOfImages.length - 1));
  };
  
console.log(randomURL())

 for (const image of imageObj) {
        //   image.src = 'IMG_0503.png';
            // let url = chrome.extension.getURL('/images/IMG_8652.png')
            image.src = arrOfImages[randomURL()];
        //   console.log(image)
}



