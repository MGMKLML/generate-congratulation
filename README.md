# How to congratulate yourself with your birthday

## Make sure you have NodeJS installed
Open Command Prompt (Windows) or Terminal (Linux) and run the following command:
```
node -v
```

You should see a result similar to `v.16.2.0`. If you see an error, it means you do not have NodeJS installed.

In order to install NodeJS for Windows, download the build from https://nodejs.org/en/download. Then check its version to make sure it is installed.

In order to install NodeJS for Linux, first make sure you have the `curl` installed. Run the command `curl -h`. If you see the help menu, `curl` is installed. If not, then run the following command:
```shell
sudo apt update
sudo apt upgrade
sudo apt install curl
```
Run the `curl -h` command and make sure it's installed. 

Then run the following commands:
```
cd ~
curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
nano nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs
```
Then check the installed version with the `node -v` command. 

## Download the repo
You may download the .zip file directly and unpack it or make use of the git command if you have git installed:
```
git clone git@github.com:MGMKLML/generate-congratulation.git
```

## Install the packages
Go inside the downloaded folder (to the folder where `index.js` is located) and run the following commands:
```
npm install
```
After the installation, run the following command:
```
node index.js
```

## Have fun
Finally, you are ready to go. You will see a few questions one by one. 

The first question will ask you to type a path to a folder. This folder will be used to store files with the congratulations. Feel free to use any folder you have on the PC.

The second question will ask your name. To get the most out of the program, type your name in English and without typos, for example, `Ivan`.

The third question will ask you to generate a phrase. The phrase should contain more than 10 symbols. We suggest to write something creative, for example, `I am the king`. 

Once you've answered all the questions, you will see a short story and a joke. They will also be downloaded to the file located in the folder which you've specified.




