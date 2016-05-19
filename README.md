Jobs4TakeAway.org
===============

Website featuring remote.work.


TODO:

- add translations
- deploy bundle to docker on production server
- configure ngingx on production server 

HOWTOS:
- run docker with meteor bundle 
``docker run -d \
    -e ROOT_URL=http://yourapp.com \
    -e MONGO_URL=mongodb://url \
    -e MONGO_OPLOG_URL=mongodb://oplog_url \
    -v /mybundle_dir:/bundle \
    -p 8080:80 \
    meteorhacks/meteord:base``


DONE
- 2016-05-19 ported website to meteor 
- 2016-05-19 publish on github 