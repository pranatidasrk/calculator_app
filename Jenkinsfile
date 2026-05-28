pipeline {
    agent any

    environment {
        IMAGE_NAME = "calculator-app"
        TAG = "latest"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'bat 'docker build -t %IMAGE_NAME%:%TAG% -f app/Dockerfile app''
            }
        }

        stage('Deploy to Minikube') {
            steps {

                bat 'minikube status'

                bat 'helm upgrade --install calculator ./helm/calculator'
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
