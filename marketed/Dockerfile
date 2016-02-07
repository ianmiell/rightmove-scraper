FROM node
WORKDIR /root
RUN npm install -g system && npm install -g phantomjs && npm install -g casperjs && apt-get -y update && apt-get install -y vim strace mlocate && apt-get clean -y && updatedb
RUN apt-get install -y python-pip && pip install beautifulsoup4
ADD marketed.js marketed.js
ADD run.sh run.sh
ADD html_to_csv.py html_to_csv.py
ENTRYPOINT ["/root/run.sh"]
