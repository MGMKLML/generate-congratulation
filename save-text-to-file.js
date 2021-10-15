import fs, { mkdir } from 'fs';
import path from 'path';

export default (location, text) => {
    if (!fs.existsSync(path.dirname(location))) fs.mkdirSync(path.dirname(location)); 
    fs.appendFileSync(location, text, 'utf-8');
}