for file in client/styles/*.css
do
  lessc $file | cssmin > dist/styles/$(basename $file)
done