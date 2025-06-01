### Building from source
Solar Tweaks is fully open-source, allowing for users to obtain the source code and make their own modifications. To do so, the repository can be cloned using the command:

`$ git clone https://github.com/theawesomeyopro1/Solar-Tweaks.git`
Once the repository is downloaded, navigate to the directory and install the necessary dependencies using the commands:

`$ cd Solar-Tweaks`

`$ npm install`
For development purposes, run this command to build the app and start it. Hot reload is included for easier development and testing.

`$ npm run serve`
To build the final version of the app, run this command. The resulting executables, installers, etc. will be located in the dist directory.

`$ npm run build`
Note: If you are a receiving an error like this "error:0308010C:digital envelope routines::unsupported", then before running any npm run commands, run set NODE_OPTIONS=--openssl-legacy-provider in Command Prompt on Windows or export NODE_OPTIONS=--openssl-legacy-provider on Linux.

### Note 2: if you do not wish to build from source, go to the releases tab and install solar tweaks from there (windows only). 
it may work on linux and mac with a compatiblity layer, but im not sure lmao
# Solar-Tweaks
