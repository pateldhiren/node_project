pipeline {
    stages {
        agent {
            docker {
                image 'node:6-alpine'
                args '-p 4003:4003'
            }
        }
    	stage('Build') {
    		steps {
    			sh 'npm install'
    		}
    	}
    	stage('Test') {
    		steps {
    			sh 'npm start'
    		}
    	}
	}
}
