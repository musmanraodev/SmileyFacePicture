function setup() {
  createCanvas(1000,1000);
}

function draw() {
    // here we use a callback to display the image after loading
  loadImage("http://4.bp.blogspot.com/-e98D9RG3Gzs/U5XAgtaj9tI/AAAAAAAAIIo/hDPgyrWvxy0/s1600/shy-smiley.png", function(img) {
    image(img, 0, 0);
  });

}