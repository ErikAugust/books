import {Command, flags} from '@oclif/command'
import { askAddBook } from '../prompts/add'

export default class Add extends Command {
  static description = 'add a new book to list'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Add)

    const name = flags.name ?? 'world'
    const addBook = await askAddBook();
    this.log(`hello ${name} from /Users/erikjohnson/Repos/2021/books/applications/cli/src/commands/add.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
