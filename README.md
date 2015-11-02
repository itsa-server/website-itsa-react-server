
Design-rules:

* Do not require css inside app.js --> this css would only be available when rendered on the client, not serverside
* The `views` directory should consist of jsx files with no other responsibility then returning a react-component. No browser `window` properties or methods should be used here
* No dots or minus-tokens in the view-filename, other than extention
* There always should be a `main.jsx` app inside the Apps-folder --> this will be used for all views that don't have a matching app-name
* No require.ensure within the views!