#! /bin/bash

set -e

# triggers: http, topic, bucket
# topic: first-topic

# aading beta fails
gcloud functions deploy $npm_package_name \
  --runtime nodejs$npm_package_engines_node \
  --trigger-$npm_package_config_trigger \
  --entry-point=$npm_package_config_entry \
  --source=dist \
  --allow-unauthenticated
