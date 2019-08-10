#!/bin/sh
ssh root@142.93.215.35 <<EOF
	cd ~/node-app
	git pull
	npm install production
	pm2 restart all
	exit
EOF