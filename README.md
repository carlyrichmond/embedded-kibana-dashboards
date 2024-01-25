# Embedded Kibana Dashboards

Example Web Frontend Application with Embedded Kibana Dashboard.

## Architecture

This application is a simple web application comprising of:

* A single view is present in `index.html`.
* Accompanying JavaScript for actions present in `index.js`.
* A simple Express web server to serve the content for local development, present in `server.js`.

## How to run

This application makes use of a simple Express web server to easily serve the content:

```bash
npm install
node server.js
```

Once the server is started the application will be available at `http://localhost:3000`.

## Examples

There are two examples included within the repo:

1. Basic embedded Kibana dashboard using the public URL included in an iframe with dashboard controls to filter the data. This is accessible at `http://localhost:3000/basic`.
2. An extended example, available at `http://localhost:3000/advanced`, uses dropdown controls to filter data. [TODO]