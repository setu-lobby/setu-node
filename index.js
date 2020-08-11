const chalk = require('chalk');

class Setu {
    sayHi = () => {
        console.log(
            chalk.blue(`
            ███████╗███████╗████████╗██╗   ██╗
            ██╔════╝██╔════╝╚══██╔══╝██║   ██║
            ███████╗█████╗     ██║   ██║   ██║
            ╚════██║██╔══╝     ██║   ██║   ██║
            ███████║███████╗   ██║   ╚██████╔╝
            ╚══════╝╚══════╝   ╚═╝    ╚═════╝                         
            
            Welcome to Setu's (https://setu.co) official NPM module. Stay tuned, the code will be up soon.
            `)
        );
    };
}

module.exports = Setu;
