import axios from "axios";
import FormData from 'form-data';

export default async (text = 'Hey, Ivan!') => {
    const data = new FormData();
    data.append('text', text);
    const config = {
        url: 'https://api.deepai.org/api/text-generator',
        method: 'post',
        headers: { 
            'api-key': '66383efd-f3d3-4955-be74-25fa18cf47ec',
            ...data.getHeaders()
         },
        data
    };

    const response = await axios.request(config);
    const story = response.data.output.split('\n').filter((line) => line !== '').join('. ').trim();
    return story;
}