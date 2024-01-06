pipeline {
    agent any
    stages {
        stage('Pull') {
            steps {
                git branch: 'main', url: 'https://github.com/Sueza-project/speechci.git'
            }
        }

        stage('Install Packages') {
            steps{
                sh 'npm install'
                sh 'npm install --save-dev @babel/plugin-proposal-private-property-in-object'
            }

        }

        stage('Build') {
            steps {   
                sh 'CI=false npm run build'
            }
        }
    }
}