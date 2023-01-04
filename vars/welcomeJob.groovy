def call(String name = 'User') {
	echo "Welcome, ${name}."
	pipeline {
	    agent any
	    stages {
		stage("build") {
		    steps {
			echo 'Hello1 '
			error 'Failed step1'
		    }
		}
		stage("test") {
		    steps {
			echo 'Hello2 '
		    }
		}
		stage("deploy") {
		    steps {
			echo 'Hello3 '
			error 'Failed step2'
		    }
		}
		stage("done") {
		    steps {
			echo 'Hello3 '
		    }
		}
	    }
	}
}
