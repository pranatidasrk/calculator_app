pipeline {
    agent any

    environment {
        IMAGE_NAME = "calculator-app"
        TAG = "latest"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/your-repo/calculator-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$TAG ./app'
            }
        }

        stage('Deploy to Minikube') {
            steps {
                sh '''
                eval $(minikube docker-env)

                docker build -t $IMAGE_NAME:$TAG ./app

                helm upgrade --install calculator ./helm/calculator
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'kubectl get pods'
                sh 'kubectl get svc'
            }
        }
    }
}