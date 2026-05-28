pipeline {
    agent any

    environment {
        IMAGE_NAME = "calculator-app"
        TAG = "V1"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/pranatidasrk/calculator_app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME:%TAG ./app'
            }
        }

        stage('Deploy to Minikube') {
            steps {
                bat '''
                eval %(minikube docker-env)

                docker build -t %IMAGE_NAME:$TAG ./app

                helm upgrade --install calculator ./helm/calculator
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                bat 'kubectl get pods'
                bat 'kubectl get svc'
            }
        }
    }
}
