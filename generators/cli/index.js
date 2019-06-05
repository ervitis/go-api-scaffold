const Generator = require('../app/index')

class CliGenerator extends Generator {
  constructor (args, options) {
    super(args, options, 'cli', ['repoName', 'projectName', 'userName'])
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

  scheduleInstallTask (installer, paths, options, spawnOptions) {
    this.spawnCommandSync('go', ['mod', 'init'])
  }
}

module.exports = CliGenerator
