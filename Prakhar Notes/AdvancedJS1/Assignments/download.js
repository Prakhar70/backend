function download(url, cb){
    console.log("Started downloadind data....");
    setTimeout(function down(){
        console.log("Downloaded data");
        const content="ABCDEF";
        cb(content);
    },4000)
}
function write(content, cb){
    console.log("Started writing data....");
    setTimeout(function write(){
        const filename="abc.txt"
        console.log("Written data on ", filename);
        cb(filename);
    },1000)
}



function upload(filename, url, cb){
    console.log("Starting uploading of data");
    setTimeout(function up(){
        console.log("Uploaded," ,filename ,"onto ",url);
        res="SUCCESSFULLY";
        cb(res);
    },1000)
}

download("www.google.com", function postdownload(content){
    console.log("Download Completed");
    write(content, function postwrite(filename){
        console.log("written data onto ", filename);
        upload(filename, "www.wikipedia.com",function afterUpload(res){
            console.log("Uploaded the file ", filename, res);

        })
    })
})