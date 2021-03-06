const chalk = require('chalk');
const figlet = require('figlet');

const colorize =(msg,color) => {

    if (typeof color!== "undefined"){
        msg=chalk[color].bold(msg);
    }
    return msg;
};

const log =(msg,color) => {
    console.log(colorize(msg,color));
};

const biglog =(msg,color) => {

    log(figlet.textSync(msg, {horizontalLayout: 'full', verticalLayout: 'full'}),color);
};

const errorlog =(errormsg) => {

    console.log(`${colorize("Error","red")}: ${colorize(colorize(errormsg,"red"),"bgYellowBright")}`);
};



exports=module.exports= {
    colorize,
    log,
    biglog,
    errorlog
};

