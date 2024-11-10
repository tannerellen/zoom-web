echo "$@" > ~/output.txt
appUrl="$@"
destUrl=$(echo $appUrl | sed 's/zmw:\/\//https:\/\//')
hyprctl dispatch workspace emptynm & google-chrome-stable "$destUrl"
