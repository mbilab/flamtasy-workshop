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
* assets/ in dist/ rather than in app/
* two layer assets?
* ajax assets rather than require()
* minimize vue
