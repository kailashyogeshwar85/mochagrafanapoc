pipeline {
  agent {
    docker {
      image 'node:12.18.6-alpine3.9'
    }
  }
  environment {
    TEST = 'true'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm i'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Record Results') {
      steps {
        sh 'echo "Saving results to InfluxDB"'
      }
    }
  }
}