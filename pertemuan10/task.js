const DownloadShow = (result) => {
    return new Promise((success, error) => {
        const status = true;
        status ? success(`Download selesai\nHasil Download: ${result}`) : error(`Download Gagal`);
    })
}


const download = function (callShowDownload) {
    return setTimeout(function () {
        const result = `windows-10.exe`;
        callShowDownload(result).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }, 3000);
}


download(DownloadShow);