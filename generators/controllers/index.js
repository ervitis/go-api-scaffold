const Generator = require('../../helper/generator')

module.exports = class extends Generator {
  constructor (args, options) {
    super(args, options, 'controllers', ['repoName', 'repoUser', 'projectName'])
  }

  prompting() {
    return super.prompting()
  }

  writing() {
    Promise.all([
      this.fs.copyTpl(this.templatePath('main_controller.go.ejs'), this.destinationPath('controllers/_routing/main_controller.go'), this.props),
      this.fs.copyTpl(this.templatePath('routes.go.ejs'), this.destinationPath('controllers/routes.go'), this.props),
      this.fs.copyTpl(this.templatePath('handler.go.ejs'), this.destinationPath('controllers/handler.go'), this.props),
      this.fs.copyTpl(this.templatePath('mocks.go.ejs'), this.destinationPath('controllers/mocks.go'), this.props),
      this.fs.copyTpl(this.templatePath('models.go.ejs'), this.destinationPath('controllers/models.go'), this.props)
    ])
  }
}