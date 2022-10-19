const core = require('@actions/core')
const github = require('@actions/github')

try {
    const include = core.getInput('include')
    const exclude = core.getInput('exclude')
    const find = core.getInput('find')
    const replace = core.getInput('replace')
} catch (error) {
    core.setFailed(error.message)
}

// Yet to fill remaining
