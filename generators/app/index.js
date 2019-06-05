const Generator = require('yeoman-generator')

class GoApiScaffoldGenerator extends Generator {
  constructor (args, opts) {
    super(args, opts)

    try {
      this.argument('appname', { type: String, required: true })
    } catch (e) {
      this.log(`${e.message}`)
      process.exit(-1)
    }

  }

  method1() {
    this.log('method 1 ran')
  }

  method2() {
    this.log('method 2 ran')
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'your project name',
        default: this.appname
      },
      {
        type: 'confirm',
        name: 'cool',
        message: 'would you like to enable the cool feature?'
      }
    ])

    this.log('app name', this.answers.name)
    this.log('cool feature', this.answers.cool)
  }

  writing() {
    this.log(`cool feature ${this.answers.cool}`)
  }
}

module.exports = GoApiScaffoldGenerator
