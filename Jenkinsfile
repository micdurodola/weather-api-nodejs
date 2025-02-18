pipeline {
    agent any 
    // environment{
    //     NODE_HOME = '/usr/bin/node'
    //     PATH = "${NODE_HOME}:${env.PATH}"

    // }
    stages {
        stage('Checkout code'){
            steps {
                echo 'Checking out code from repository...........'
                git branch: 'main', credentialsId: '7bde7093-fb91-435b-b101-da11e49e7b09', url: 'https://github.com/micdurodola/weather-api-nodejs.git'

            }
        }

        stage ('Install dependencies') {
            steps {
                echo 'Installing dependencies..............'
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