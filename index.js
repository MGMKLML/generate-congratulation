import readlinSync from 'readline-sync';
import createUserData from './create-user-data.js';
import getChuckNorrisJoke from './get-chuck-norris-joke.js';
import getRandomStory from './get-random-story.js';
import saveTextToFile from './save-text-to-file.js';

console.log('Hi human being!');

const dir = readlinSync.questionPath('Input a directory path: ', {
    isDirectory: true,
    exists: true,
    create: null,
});

const name = readlinSync.question('I request that you type your name in English: ', {
    limit: (input) => {
        return input.length > 1;
    },
    limitMessage: 'You can not have a one-letter name, huh?'
});

const phrase = readlinSync.question('Enter any phrase, e.g. "I am the king": ', {
    limit: (input) => {
        return input.length > 10;
    },
    limitMessage: 'The phrase should have more than 10 symbols'
});

const user = createUserData(dir, name, phrase);
saveTextToFile(user.location, `Name: ${user.name}\nPhrase: ${user.phrase}\n`);

console.log('Get ready for a story....');
const story = await getRandomStory(user.text);
console.log(story);
saveTextToFile(user.location, `\nStory:\n ${story}\n`);

console.log('Now we should finish it with some hardcore Chuck Norris joke.......');
const joke = await getChuckNorrisJoke();
saveTextToFile(user.location, `\nJoke:\n ${joke}\n`);
console.log(joke);





