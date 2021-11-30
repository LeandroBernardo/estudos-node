# Para esse exemplo foi utilizada a instalação do lodash de forma global

npm i lodash -g

# Após a instalação, quando tentamos executar o lodash na aplicação, acaba retornando erro

# O erro ocorre pois instalamos o pacote de forma global, no entanto, não linkamos o pacote ao projeto. Para solucionar o problema precisamos executar
npm link lodash