FROM node
WORKDIR /root
RUN npm install -g system && npm install -g phantomjs && npm install -g casperjs && apt-get -y update && apt-get install -y vim strace mlocate && apt-get clean -y && updatedb
ADD marketed.js marketed.js
ADD run.sh run.sh
ENTRYPOINT ["/root/run.sh"]
