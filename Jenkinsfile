pipeline {
    agent any
    stages{
        stage('Code checkout from repo...........'){
            steps{
                echo 'Checking out the code from repo.............'
            }
            
        }
        stage('Install dependencies'){
            steps{
                echo 'Installing dependencies .............'
            }
            
        }
        stage('Build docker Image'){
            steps{
                echo 'Building docker images .............'
            }
            
        }
        stage('Push docker image'){
            steps{
                echo 'Pushing docker image into private/public repo  .............'
            }
            
        }
        stage('Deploying cntainer'){
            steps{
                echo 'Deploy working container into production server .............'
            }
            
        }
    }
}