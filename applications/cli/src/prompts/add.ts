const inquirer = require('inquirer')

export function promptAddBook() {
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
        },
        {
            name: 'slug',
            type: 'input',
            message: 'Enter the URL slug for the book:',
            validate: function( value: any ) {
                if (value.length) {
                return true;
                } else {
                return 'Please add an URL slug for the book.';
                }
            }
            },
        {
            name: 'author',
            type: 'input',
            message: 'Enter the author(s) of book:',
            validate: function( value: any ) {
              if (value.length) {
                return true;
              } else {
                return 'Please enter the author(s) of book.';
              }
            }
          },
          {
            name: 'description',
            type: 'input',
            message: 'Enter the description of book:',
            validate: function( value: any ) {
              if (value.length) {
                return true;
              } else {
                return 'Please enter the description of book.';
              }
            }
          },
          {
            name: 'image',
            type: 'input',
            message: 'Add an image URL for the book:',
            validate: function( value: any ) {
              if (value.length) {
                return true;
              } else {
                return 'Please add an image URL for the book.';
              }
            }
          },
          {
            name: 'completed',
            type: 'confirm',
            message: 'Have you completed this book:'
          }
      ];
      return inquirer.prompt(questions);
}