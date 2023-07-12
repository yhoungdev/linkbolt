#!/bin/bash

# Open a new tab and change directory to /server
gnome-terminal --tab --title="Server Running" --working-directory="/path/to/server" -- bash -c "cd /server && yarn dev"

# Change directory back to the original location
cd -
