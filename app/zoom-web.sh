#!/bin/bash

appUrl="$@"
destUrl=$(echo $appUrl | sed 's/zmw:\/\//https:\/\//')

launch_chrome() {
    local url="$1"
    
    if pgrep -x "chrome" > /dev/null; then
        echo "Chrome detected, opening new window"
        google-chrome-stable --new-window "$url"
    else
        echo "Launching Chrome"
        google-chrome-stable "$url"
    fi
}

hyprctl dispatch workspace empty &
launch_chrome "$destUrl"

# Old firefox method. No longer used due to firefox low quality on zoom
# firefox --new-window "$destUrl" && sleep 0.2 && hyprctl dispatch movetoworkspace emptynm
