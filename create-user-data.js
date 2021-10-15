import path from 'path';

export default (dir, name, phrase) => {
    const text = `Congratulations, ${name}! ${phrase}`;
    const timestamp = Date.now();
    const file = `congrats_${timestamp}.txt`;
    const location = path.resolve(dir, 'congrats', file);
    
    return {
        location, 
        name, 
        phrase,
        text,
        timestamp
    };
}