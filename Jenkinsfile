Pipeline {
  Agent {
    docker: {
      image: 'node:12.18.6:alpine3.9'
    }
  }
  Environment {
    TEST = 'true',
  }
  Stages {
    Stage('Build') {
      Steps {
        sh 'npm i'
      }
    }
    Stage('Test') {
      Steps {
        sh 'npm test'
      }
    }
    Stage('Record Results') {
      Steps {
        sh 'echo "Saving results to InfluxDB"'
      }
    }
  }
}