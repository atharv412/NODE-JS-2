import { fs } from 'fs'
import { axios } from 'axios'

async function downloadImage(url) {
    const response = await axios(
        {
            url,
            method: 'GET',
            responseType: 'stream'
        }
    );
    return new Promise((resolve, reject) => {
        response.data.pipe(fs.createWriteStream('./NODE JS 2'))
            .on('error', reject)
            .once('close', () => resolve('./NODE JS 2'));
    });
}


// downloadImage()
// take a url and download the image