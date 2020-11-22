#!/bin/bash
srcPath="/home/alwertus/Projects/web/digimemf/template"
targetPath="/home/alwertus/Projects/web/digimemf/newComponent"

if [ -n "$1" ]
then
  component=$1
fi




cd $srcPath && echo $component

if [ -d $targetPath ]; then
  echo "Каталог $targetPath уже существует"
else
  mkdir $targetPath
fi


return 0