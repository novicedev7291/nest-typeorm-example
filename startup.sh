#!/bin/bash

DB_HOST=${DB_HOST:="127.0.0.1"}
DB_USER=${DB_USER:=root}
DB_PASS=${DB_PASS:=root}
DB_NAME=${DB_NAME:=projects}

container_id=$(docker ps -a | grep "projects-db" | awk "{print $1}")

if [ -z "$container_id" ]
then
    docker run -e MYSQL_ROOT_PASSWORD=$DB_PASS \
        -e MYSQL_DATABASE=$DB_NAME \
        --name projects-db \
        -v "./scripts:/docker-entrypoint-initdb.d" \
        -p "3307:3306" \
        -d \
        mysql
fi

echo "Connecting mysql db @ $DB_HOST..."
until mysql -h$DB_HOST -u"$DB_USER" -p"$DB_PASS" -P3307 -D"$DB_NAME" -e "\q"; do
    >&2 echo "Mysql is not up, hence waiting for next 2s.."
    sleep 2
done

npm run start



