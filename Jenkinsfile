pipeline {
  agent any

  tools {
    nodejs 'NodeJSTool_21'
  }

  stages {
    stage('Git') {
      steps {
        // Clone the repository into a specific directory
        git url: 'https://github.com/odataProjects/nodeJS_CRUD', branch: 'main'
      }
    }

    stage('Build & Test') {
      steps {
        script {
          // Install dependencies
          sh 'npm install'
          
	        // Run tests
          sh 'npm test'
        }
      }
    }

    stage('Deploy') {
      steps {
        script {
          sh 'ansible-playbook -i inventory.ini playbook.yml'
        }
      }
    }
  }

  post {
    success {
      emailext body: 'The pipeline succeeded. Here is the link to the build: https://odata1060.serveo.net',
               subject: 'Pipeline Success',
               to: 'thierrymichael1711@gmail.com',
               from: 'nalyvalisoa0510@gmail.com'
    }
    failure {
      emailext body: 'The pipeline failed. Please check the Jenkins console output for details: https://jenkins_ks.serveo.net/job/$PROJECT_NAME/$BUILD_NUMBER/console',
               subject: 'Pipeline Failure',
               to: 'thierrymichael1711@gmail.com',
               from: 'nalyvalisoa0510@gmail.com'
    }
  }
}
