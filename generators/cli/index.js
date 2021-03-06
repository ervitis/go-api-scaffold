const Generator = require('../../helper/generator')

module.exports = class extends Generator {
  constructor (args, options) {
    super(args, options, 'cli', ['repoName', 'projectName', 'repoUser'])
  }

  async prompting () {
    return super.prompting()
  }

  writing () {
    this.fs.copyTpl(
      this.templatePath('main.go.ejs'),
      this.destinationPath('main.go'),
      this.props
    )
  }

  install() {
    this.spawnCommandSync('go', ['mod', 'init'])
  }
}
