const {Command, flags} = require('@oclif/command')

class AddCommand extends Command {
  async run() {
    const {flags} = this.parse(AddCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/erikjohnson/Repos/2021/books/applications/cli/src/commands/add.js`)
  }
}

AddCommand.description = `Adds a book to the list
...
Extra documentation goes here
`

AddCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = AddCommand
