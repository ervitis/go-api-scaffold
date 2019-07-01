const Generator = require('../../helper/generator')

module.exports = class extends Generator {
  constructor (args, options) {
    super(args, options, 'server', ['repoName', 'repoUser', 'projectName'])
  }

  prompting() {
    return super.prompting()
  }

  writing() {
    Promise.all([
      this.fs.copyTpl(this.templatePath('server_config.go.ejs'), this.destinationPath('server/server_config.go'), this.props)
    ])
  }
}