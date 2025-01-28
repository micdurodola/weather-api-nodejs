pipeline {
    agent any 
    environment{
        NODE_HOME = '/usr/bin/node'
        PATH = "${NODE_HOME}:${env.PATH}"

    }
    stages {
        stage('Checkout code'){
            steps {
                echo 'Checking out code from repository...........'
                checkout scm  // Fetch code from repository

            }
        }

        stage ('Install dependencies') {
            steps {
                echo 'Installing dependencies..............'
                sh 'npm install'
            }
        }
        stage ('Build Project'){
            steps {
                echo 'Building Projectx ...............'
            }
        }   
    }
    post {
        success {
            echo 'Weather API build successfully..............'
        }
        failure {
            echo 'Build was unsuccesful, check log for more details OK.............'
        }
    }
}