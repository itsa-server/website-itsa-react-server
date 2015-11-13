Developing a webapplication means that you are working on a specific rc-release. When this release is ready for production, you can generate a production release, which you can upload to your server

# Create a new production-release

Creating a new productionrelease should be done by using the proper Gulp-command. There are three different ways of upgrading your application's production-version:

* Bumping the path-version (f.e. 1.0.2 --> 1.0.3)
* Bumping the minor-version (f.e. 1.0.2 --> 1.1.0)
* Bumping the major-version (f.e. 1.0.2 --> 2.0.0)

When creating a release, [webpack](https://webpack.github.io) is being used to build the files. You can adjust the webpack configuration-files, but we advice to only manipulate the plugins and loaders. The webpack configuration-files are highly specific for this framework: modifying them could easily mean breaking the system. The webpack config-files are retained inside the folder: `app-root/lib`.

## Bumping versions

### Bumping patch-version
* Open the console at the root of your app-folder (`src` its parent folder)
* Type: `gulp bumppatch`
* upload the new version to your server, as well as package.json (which holds the latest version-number)
* restart the server

### Bumping minor-version
* Open the console at the root of your app-folder (`src` its parent folder)
* Type: `gulp bumpminor`
* upload the new version to your server, as well as package.json (which holds the latest version-number)
* restart the server

### Bumping major-version
* Open the console at the root of your app-folder (`src` its parent folder)
* Type: `gulp bumpmajor`
* upload the new version to your server, as well as package.json (which holds the latest version-number)
* restart the server

## Revert to previous version (serverside)
Whenever your production-version happens to have a critical bug, you can easily revert to a previous version. Remember: the previous version is completely available inside its own version-number.

* Go to the root-applicationfolder on your server
* Change the file `package.json` --> set the version-number to the version you want to use
* restart the server

Whenever Itsa-server starts, it will run the version specified inside `package.json`.

# Uploading the proper files to the server
The serverside application is controlled by the file: `public_server/server.js`. This file will setup an application framework based upon [Hapi.js](http://hapijs.com). You can alter the `server.js` file if you need, however, in most cases you don't need to. In any case, keep the plugin `ReactServerPlugin`: this gives `Itsa-server` its functionality.

## Uploading an existing project
The folder `public_server` contains all files that should reside on the server. After bumping a production-release, the file **package.json** gets updated, and a new folder inside `public_server\versions` is begin created. <u>Both need to be uploaded to the server</u>.

## Uploading a new project
If you haven't uploaded the `public_server` folder to the server, then you'll need to follow the next steps (only the first time):

* Upload the folder `public_server` to the server
* Rename the folder to the name you want for the web-application
* run: `npm install` in the console of the server. This will load all packages that are needed.

# Starting the web-application on the server
To start the webapplication on the server, you can run:

```js
node server.js
```
Note that the process ends when you leave the console. There are utilities to keep the process running after you leave the console: one of them is `forever`:

```js
forever start server.js
```
# Skelleton of the server-folder