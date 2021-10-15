import axios from "axios";
import FormData from 'form-data';

export default async (text = 'Hey, Ivan!') => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    return response.data.value;
}