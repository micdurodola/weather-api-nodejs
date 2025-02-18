pipeline {
    agent any 
    environment{
        DOCKER_HUB_REPO = 'codex234/api-weather'

    }
    tools {
        nodejs 'NodeJS'
    }
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
                sh 'npm install'
            }
        }
        stage ('Build Docker Image'){
            steps {
               script{
                 echo 'Building Project ...............'
                 docker.build("${DOCKER_HUB_REPO}:latest")
               }
            }
        }  
        stage('Scan Docker Image:......................') {
            steps{
                script{
            echo 'Scanning Image....................'
            sh "trivy --severity HIGH,CRITICAL --no-progress image --format table -o trivy-scan-report.txt ${DOCKER_HUB_REPO}:latest"
        }

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