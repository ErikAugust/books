const inquirer = require('inquirer')

export function promptAddQuote() {
    const questions = [
        {
          name: 'text',
          type: 'input',
          message: 'Enter the text of the quote:',
          validate: function( value: any ) {
            if (value.length) {
                return true;
            } else {
                return 'Please enter the text of the quote.';
            }
          }
        },
        {
            name: 'page',
            type: 'number',
            message: 'Enter the page number:',
            validate: function( value: any ) {
                if (value) {
                    return true;
                } else {
                    return 'Enter the page number';
                }
            }
        }
      ];
      return inquirer.prompt(questions);
}