import {Command, flags} from '@oclif/command'
import { Books, Book, Quote } from '@eaj/books'

export default class Hello extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ books hello
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const books = new Books();
    const {args, flags} = this.parse(Hello)
    const name = flags.name ?? 'world'
    
    this.log(`hello ${name} from ./src/commands/hello.ts`)

    const book = books.find('The Adventures of Tom Sawyer');
    book?.quotes.forEach((quote => this.log(quote.text + '\n')));

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
