SESSION_NAME=server

tmux new-session -s $SESSION_NAME -d

tmux send-keys -t $SESSION_NAME:0 'npm run run-dev-server' Enter
