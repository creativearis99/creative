#! /bin/bash

set -e

echo docker_image_org_name
echo $npm_package_config_port
echo $npm_package_config_docker_image_name

moduleP=.$npm_package_config_modulePath
#docker ps
docker build -t $npm_package_config_docker_org/$npm_package_config_image_name $moduleP  --force-rm --force-rm   --build-arg modulePath=$npm_package_config_modulePath --build-arg distFolder=$npm_package_files_0
