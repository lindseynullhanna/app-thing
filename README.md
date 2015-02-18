## App!

### Setup

###### Install prerequisites

* [npm](http://nodejs.org/)
	$ npm install jspm

###### Set up the repo
Create a fork then run:

	$ git clone git@github.com:<your-fork>/app-thing.git
	$ cd app-thing
	$ npm install jspm
	$ npm install && jspm install

###### Possible problems
You may need to globally install certain packages if your command prompt can't find them.

	$ npm install jspm -g
	$ npm install gulp -g

Note: If you are on a Windows machine, you may need to close and reopen the command prompt.

### Development

###### Build
	# default build
	(app-thing) $ gulp


###### Run a local server
	$ python -m SimpleHTTPServer 8080
	Navigate to localhost:8080

### Guidelines

1. Create your own fork
2. Name your branches descriptively
3. Create PRs back to nostuddedtrees/master for merging
