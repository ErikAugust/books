const inquirer = require('inquirer')

export function askAddBook() {
    const questions = [
        {
          name: 'title',
          type: 'input',
          message: 'Enter the title of book:',
          validate: function( value: any ) {
            if (value.length) {
              return true;
            } else {
              return 'Please enter the title of book.';
            }
          }
        }
      ];
      return inquirer.prompt(questions);
}