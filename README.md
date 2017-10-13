flamtasy-workshop
=================

# setup
yarn
yarn run build
cp parse.js dist/
cp -r app/assets/assets dist/
cd dist
node parse.js

# issue
* use rem for font-size rather than vw
* ajax assets rather than require()
* minimize vue
