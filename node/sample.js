const parser = require('xml2json');
const fs = require("fs");
const request = require('request');
const async = require("async");
const find = require("find");
const path = require("path");

const opts = {
    url: 'https://app.nanonet.com/api/v2/ObjectDetection/Model/1daa9595-07d7-4968-bc78-f663bab2ad32/UploadFile/',
    modelId: '1daa9595-07d7-4968-bc78-f663bab2ad32',
    api: 'gYVa2GgdDYbR6R4AFnk5y2aU0sQirNIIoAcpOUh_aZn',
    annotationFolder: path.join(__dirname, '../annotations/xmls'),
    imageFolder: path.join(__dirname, '../images/')
}


find.file(opts.annotationPath, function (files) {
    async.mapSeries(files, function (file, outerCB) {
        fs.readFile(file, (err, data) => {
            if (err) {
                outerCB(err);
            }
            console.log(`processing ${file}`);
            const json = parser.toJson(data);
            const jsonObject = JSON.parse(json);
            const name = jsonObject.annotation.filename;
            let obj = jsonObject.annotation.object;
            if (!Array.isArray(obj)) obj = [obj];
            const out = { name, obj }
            async.mapSeries(obj, (element, callback) => {
                const category = element.name;
                const { bndbox } = element;
                bndbox.xmin = parseInt(bndbox.xmin);
                bndbox.ymin = parseInt(bndbox.ymin);
                bndbox.xmax = parseInt(bndbox.xmax);
                bndbox.ymax = parseInt(bndbox.ymax);
                const jsonData = `[{"name":"${category.replace(/ /g,'')}", "bndbox": ${JSON.stringify(bndbox)}}]}]`
                const formData = {
                    modelId: opts.modelId,
                    data: `[{"filename":"${name}", "object": ${jsonData}`,
                    file: fs.createReadStream(path.join(opts.imageFolder, name))
                };
                try {
                    const resp = request.post({
                        url: opts.url,
                        formData: formData,
                        auth: {
                            username: opts.api,
                            password: ''
                        }
                    }, (err, body) => {
                        callback(err, body)
                    });
                } catch (error) {
                    callback(error)
                }
            }, function (err, results) {
                outerCB(err, results)
            });
        });
    });
});