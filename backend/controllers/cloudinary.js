const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

// exports.uploadFile = (file,folder) => {
//     return new Promise(resolve=>{
//         cloudinary.uploader.upload(file,(result)=>{
//             resolve({
//                 url:result.url
//             })
//         },{
//             resource_type:"auto",
//             folder:folder
//         })
//     })
// }

module.exports = cloudinary;