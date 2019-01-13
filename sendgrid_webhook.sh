#!/bin/bash
# make sure you have execute permissions:
# cd /path/to/project
# chmod +x ./sendgrid_webhook.sh
# to run, type ./sendgrid_webhook.sh in the terminal

function localtunnel {
lt --port 5000 --subdomain young-eagle-53
}

until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
