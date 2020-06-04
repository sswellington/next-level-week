# Next Level Week: Ecoleta

<p align="center">
    <img src="/assets/icones/.README/capa.png">
</p>

--- 

## Configuração de ambiente
~~~bash
# https://github.com/asdf-vm/asdf-nodejs
asdf plugin-update --all
asdf plugin-add nodejs https://github.com/asdf-vm/asdf-nodejs.git
bash ~/.asdf/plugins/nodejs/bin/import-release-team-keyring

asdf install nodejs 12.18.0 
asdf local nodejs 12.18.0 
asdf plugin-update --all

# NodeJS
npm init -y         # incializar node.js
npm install express # instalar micro-framework 'express' (configura rota e interpreta parâmetros)

# Nodemon - Atualiza automaticamente o servidor
#   apenas na dependência de desenvolvimento, 
#   ao remover -D instala para todo servidor
npm install nodemon -D 
~~~

---

# [Layout](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta) 
## Panorâma
<p align="center">
    <img src="/assets/icones/.README/panorama.png">
</p>

## Home 
<p align="center">
    <img src="/assets/icones/.README/Home.png">
</p>

## Cadastro 
<p align="center">
    <img src="/assets/icones/.README/Cadastro.png">
</p>

## Sucesso! 
<p align="center">
    <img src="/assets/icones/.README/Sucesso.png">
</p>

## Buscar
<p align="center">
    <img src="/assets/icones/.README/Buscar.png">
</p>

## Lista
<p align="center">
    <img src="/assets/icones/.README/Lista.png">
</p>

---

## Estrutura de diretórios
### assets
* css :css:
* icones
* unsplash
* js
    * create-point
    * home
### src
* views    

<p align="center">
    <img src="/assets/icones/.README/1440x900.jpg">
</p>