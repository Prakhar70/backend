function download(url){
    return new Promise(function executor(resolve, reject){
        console.log("Started downloads");
        setTimeout(function afterDownload(){
            console.log("download done");
            let content = "ABCDE";
            resolve(content);
        },1000)
    })
}
function write(content){
    return new Promise(function executor(resolve, reject){
        console.log("Started writing");
        setTimeout(function afterWriting(){
            console.log("write done");
            let filename = "abc.tct";
            resolve(filename);
        },1000)
    })
}
function upload(filename, url){
    return new Promise(function executor(resolve, reject){
        console.log("Started uploading");
        setTimeout(function afterUploading(){
            console.log("uploaded ",filename, "to", url);
            let res="SUCCESS"
            resolve(res);
        },1000)
    })
}

// write("ABCD").then(function resolveHandler(filename){
//     console.log(' content written in ', filename);
// })

// download("www.google.com").then(function resolveHandler(content){
//     console.log('Downloaded content is ', content);
    
// })
// upload("abc.txt", "www.wiki.com").then(function resolveHandler(res){
//     console.log("upload status",res);
// })

download("www.google.com").then(function resolveHandler(content){
    return write(content)
}).then(function resolveHandler(filename){
    return upload(filename, "www.wiki.com");
}).then(function resolveHandler(res){
    console.log("upload status", res);
})
