#!/bin/bash
# Copy app into place
mkdir -p ~/.local/bin
cp app/zoom-web.sh ~/.local/bin
# Copy desktop file into place
mkdir -p ~/.local/share/applications
cp app/zoom-web.desktop ~/.local/share/applications
# Register zmw mime type so a url like zmw://url will open the zoom-web.sh app
xdg-mime default zoom-web.desktop x-scheme-handler/zmw
