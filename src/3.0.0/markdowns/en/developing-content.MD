Developing a webapplication means that you are working on a specific rc-release. You can deploy this release locally on your client-system. The rc-release will always have a higher number than the current production-version. When this release is ready for production, you can generate a production release, by which automaticly a new rc-release is created (ready for further development).

# Always develop in the highest rc-release
All other releases are supposed to be frozen

# Deploying a rc-release

Whenever a release gets deployed, a complete build will be created using webpack.

* Open the console at the root of your app-folder (`src` its parent folder)
* Type: `gulp devserver`
* Open your browser and navigate to: `http://localhost:5001`

# Deploying and inspect the tablet-version

You can easily inspect how your site will respond on a tablet-device when opened from within the desktop-browser.

* Open the console at the root of your app-folder (`src` its parent folder)
* Type: `gulp devservertablet`
* Open your browser and navigate to: `http://localhost:5001`

Note that this "just" will render the affinity files (device specific views and models). It does not simulate a tablet's behaviour or css-rules. Use Chome canary to do this.

# Deploying and inspect the tablet-version

* Open the console at the root of your app-folder (`src` its parent folder)
* Type: `gulp devserverphone`
* Open your browser and navigate to: `http://localhost:5001`

Note that this "just" will render the affinity files (device specific views and models). It does not simulate a phone's behaviour or css-rules. Use Chome canary to do this.

# About the building-process

When building, [webpack](https://webpack.github.io) is being used. You can adjust the webpack configuration-files, but we advice to only manipulate the plugins and loaders. The webpack configuration-files are highly specific for this framework: modifying them could easily mean breaking the system. The webpack config-files are retained inside the folder: `app-root/lib`.

The build-process is very specific and comes with `two` runs. The first will create the right files that the view will be using (whenever a visitor requests a full page) and has the right structure needed to make the serverside MVC workable. The second run build separate chunks, so that the client can load these.

The clientside loads the chunks with `XMLHttpRequests` (not `script-tags` as webpack does natively).

`NOTE`: currently, temporarely files are created in the src directories during the build process. We are working on an in-memory sollution, to prevent these files from being build (`itsa-cli` version 1.2.0).