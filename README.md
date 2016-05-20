Jobs4TakeAway.org
===============

website featuring remote.work.

TODO:
- deploy bundle to docker on production server
- configure ngingx on production server to forward wwww port to local port

HOWTOS:
- run docker with meteor bundle 

``
docker run -d \
    -e ROOT_URL=http://yourapp.com \
    -e MONGO_URL=mongodb://url \
    -e MONGO_OPLOG_URL=mongodb://oplog_url \
    -v /mybundle_dir:/bundle \
    -p 8080:80 \
    meteorhacks/meteord:base
``
(see: https://github.com/meteorhacks/meteord)

DONE
- 2016-05-19 add translations https://github.com/TAPevents/tap-i18n#configuring-tap-i18n
- 2016-05-19 ported website to meteor 
- 2016-05-19 publish on github 