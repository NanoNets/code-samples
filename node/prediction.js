const request = require('request');
const api = 'Enter-your-api-key'
const modelId = '';
const ImagePath = '';


const formData = {
    modelId,
    file: fs.createReadStream(ImagePath)
};
const resp = request.post({
    url: `https://app.nanonet.com/api/v2/ObjectDetection/Model/${modelId}/UploadFile/`,
    formData: formData,
    auth: {
        username: api,
        password: ''
    }
}, (err, body) => {
    callback(err, body)
});