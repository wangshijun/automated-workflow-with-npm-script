for file in client/styles/*.less
do
  filename=$(basename $file)
  distpath=$(echo $filename | sed 's/\.less$/.css/')
  lessc $file | cssmin > dist/styles/$distpath
done