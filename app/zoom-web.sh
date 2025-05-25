appUrl="$@"
destUrl=$(echo $appUrl | sed 's/zmw:\/\//https:\/\//')
# hyprctl dispatch workspace emptynm & google-chrome-stable "$destUrl"
firefox --new-window "$destUrl" && sleep 0.2 && hyprctl dispatch movetoworkspace emptynm
