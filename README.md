# Feeder

An open source RSS client. Gets the RSS feed from the specified URL and displays it to the webpage.

Just saying... Some websites won't have their RSS feed working, due to CORS.
Unless you wanna write your own middleware, it's a feature. Very intentional.

Currently also hosted at https://feeder-realfx-code.vercel.app/

# Requirements

I don't know, I run it with `node@v18.9.0` without any issues.

# Usage

To download the app before you run it...
```
git clone git@github.com:RealFX-Code/feeder.git
cd feeder
npm install
```

To run this app, run either of these commands...
```
npm run dev     # For local development server.
npm run devhost # For a local development server that's exposed to LAN.
```

To build for production...
```
npm run build
```
This will put all build files in ./dist/
Simply host all files in ./dist and you'll officially have feeder runnning!
