const Generator = require('../../helper/generator.js')
const mkdir = require('mkdirp')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts, 'app', ['projectName', 'repoUser', 'repoName', 'dir'])

    this.listdirs = ['../cli/index.js', '../controllers/index.js', '../server/index.js']
  }

  prompting () {
    return super.prompting().then(props => {
      const compose = src => this.composeWith(require.resolve(src), props)

      props.silent = true

      this.listdirs.forEach(compose)

      this.props = props
    })
  }

  writing () {
    mkdir.sync(this.props.dir)
    this.destinationRoot(this.props.dir)
  }
}
