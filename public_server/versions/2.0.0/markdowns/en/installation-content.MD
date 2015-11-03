# Step 1: Install itsa-cli

First, you need to install `itsa-cli` on your system globally. With this cli, you can create new applications:

```js
npm install -g itsa-cli
```

# Step 2: Install additional global packages

To make all functionality work, you need three additional global packages:

### Install Gulp globally:

```
npm install -g gulp
```

### If you want linting in your project, you need to install es-lint globally:

```
npm install -g eslint
```

### Because we also need to lint React syntax, you need to install eslint-plugin-react globally:

```
npm install -g eslint-plugin-react
```


# Step 3: Create a new web-application

Create a new web-application anywhere on your local system. From the console, type:

```js
itsa create appname
```

**appname** will become a new folder with the appropriate files.

# Step 4: npm install

Goto the created folder and run:

```js
npm install
```

--------------

You can start right away building your application. But before you do, you might want to finetune the webapp's [configuration-file](/configuration).

## Created folder structure

The folder structure of your application will have the next skelleton: