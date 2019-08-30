import cloudinary from 'cloudinary';
import { CLOUD_NAME, API_KEY, API_SECRET  } from '../config/index';

export function storeUpload(stream) {

    // cloudinary.config({
    //     cloud_name : process.env.CLOUD_NAME,
    //     api_key: process.env.API_KEY,
    //     api_secret: process.env.API_SECRET
    // })

    cloudinary.config({
        cloud_name: CLOUD_NAME,
        api_key: API_KEY,
        api_secret: API_SECRET
    })

    return new Promise((resolve, reject) => {
        const buffer = cloudinary.v2.uploader.upload_stream((err, result) => {
            if(err) reject(err);
            resolve(result);
        });
        stream.pipe(buffer);
    });

};