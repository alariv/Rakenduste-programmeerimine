kui node_modules/ access error siis kustuta ja viska terminali:
docker-compose run --rm --no-deps backend-node install
docker-compose run --rm --no-deps frontend-react install

docker-compose down
docker-compose up