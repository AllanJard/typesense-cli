const inquirer = require("inquirer");

module.exports = {
  askInitQuestions: () => {
    const questions = [
      {
        name: "host",
        type: "input",
        message: "Host (default => localhost): ",
        default: "localhost",
      },
      {
        name: "port",
        type: "input",
        message: "API port (default =>  8108):",
        default: "8108",
      },
      {
        name: "protocol",
        type: "input",
        message: "Protocol (default => http):",
        default: "http",
      },
      {
        name: "apiKey",
        type: "password",
        message: "API key (key type must be admin)",
        validate: (value) => {
          if (value.length) {
            return true;
          } else return "Please Provide an API Key of Type (admin)!!!";
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};