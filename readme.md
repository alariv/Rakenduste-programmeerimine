kui node_modules/ access error siis kustuta ja viska terminali:
docker-compose run --rm --no-deps backend-node install
docker-compose run --rm --no-deps frontend-react install

docker-compose down
docker-compose up

## FLOW

- Vajuta nupule "lisa kategooria", et tekitada uus kauba kategooria:
![alt text](./category.png)

- Vajuta nupule "lisa ese", et lisada toode, juba eelnevalt salvestatud kategooria alla:
![alt text](./item.png)

- Mõlemal juhul saad õnnestumise korral vastava teate:
![alt text](./saved.png)

- Avalehel on välja kuvatud gird view sisestatud esemetest:
![alt text](./itemList.png)
