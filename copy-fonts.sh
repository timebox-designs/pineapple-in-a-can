# Only required if you update Bootstrap or FontAwesome

echo "Removing fonts"
rm -vf app/assets/fonts/*

echo "Copying fonts"
cp -vf bower_components/bootstrap/fonts/* app/assets/fonts
cp -vf bower_components/font-awesome/fonts/* app/assets/fonts
