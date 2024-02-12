function download(url, writeCb) {
    setTimeout(function afterDownload() {
        let content = "ABCDEF";
        console.log("Download content ", content);
        writeCb(content, function uploadCb(url) {
            setTimeout(function afterUpload() {
                console.log("uploaded Sucessfully");

            }, 1000)
        });
    }, 1000)
}

function write(content, uploadCb) {
    setTimeout(function afterWrite() {

        let filename = "abc.txt";
        console.log("Written to  file ", filename);
        uploadCb();
    }, 1000)
}

download("www.google.com", function write(content, uploadCb) {
    setTimeout(function afterWrite() {
        let filename = "abc.txt";
        console.log("Written to  file ", filename);
        uploadCb("www.youtube.com");
    }, 1000)

});