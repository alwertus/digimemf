npm run build
rm -r ../digimemb/static
cp -R build ../digimemb
mv ../digimemb/build ../digimemb/static
echo move files to server ... Success!