function update() {
    var source = 'https://amcphd.com/dev/webstream/cam.jpeg',
        timestamp = (new Date()).getTime(),
        newUrl = source + '?_=' + timestamp;
    document.getElementById("img").src = newUrl;
    setTimeout(update, 1000);
}
