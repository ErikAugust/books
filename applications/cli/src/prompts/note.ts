const inquirer = require('inquirer');

export function promptAddNote() {
    const questions = [
        {
          name: 'text',
          type: 'input',
          message: 'Enter the text of the note:',
          validate: function( value: any ) {
            if (value.length) {
                return true;
            } else {
                return 'Please enter the text of the quote.';
            }
          }
        }
      ];
      return inquirer.prompt(questions);
}