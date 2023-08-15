# Use a imagem base do Ubuntu
FROM ubuntu:latest

# Instale as atualizações do sistema operacional e as principais libs para desenvolvedores
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y build-essential curl wget git

# Instale o Node.js
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

# Defina o diretório de trabalho
WORKDIR /poc-mobile

# Copie os arquivos do projeto para o diretório de trabalho
COPY . /poc-mobile

# Instale as dependências do projeto
RUN npm install

