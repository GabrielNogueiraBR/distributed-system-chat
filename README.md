<p align="center">
 <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
 <img src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white">
 <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
</p>
<p align="center">
 <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
 <a href="https://github.com/socketio/socket.io"><img alt="Qries" src="https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white"></a>
</p>

# 🖥️ Distributed System Project: Chat
Para este projeto terá como principal objetivo desenvolver uma prova de
conceito de uma aplicação com chat em tempo real permitindo a comunicação entre
diversos usuários em diferentes dispositivos.

O projeto será desenvolvido utilizando tecnologias do mundo de Javascript,
como o React para o frontend da aplicação e um servidor NodeJS responsável por
ficar escutando o socket.

# 👀 App Preview 
![teste](https://user-images.githubusercontent.com/30303558/202433976-cc3ebe5c-789f-498b-a312-dd19a51681e2.gif)


## 🖥️ Requirements
1. Make sure **Node JS** is installed on your machine by running:
```bash
node -v
```

2. If you have not installed the **Node JS**, use the following link to download LTS version and install it: [Download NodeJS](https://nodejs.org/en/)

## 📝 Installation

1. Clone the [repository](https://github.com/GabrielNogueiraBR/Monext)
`git clone git@github.com:GabrielNogueiraBR/distributed-system-chat.git`

2. Install npm packages
`npm install`


3. Starting the project with NPM
```
npm run dev
server is running on *:3000
```


## 📦 External packages

<a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"></a> - is used to run the server with all routes and business rules together with Socket.io.
</br>
<a href="https://github.com/socketio/socket.io"><img alt="Qries" src="https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white"></a> - is used to make the multi-screen connection in this project.
</br>

## 👨‍💻 Usage

- To access the application start screen, go to this path
```
GET /
```
On this screen, the user must inform the login and the name to access application

- To access the chat application screen, go to this path
```
GET /chat
```
On this screen, the user has access to the chat screen, with the form to interact with other users typing messages.

## 👨‍👦‍👦 Contributors
<div align="center">
 <a href="https://github.com/GabrielNogueiraBR" target="_blank"><img src="https://avatars.githubusercontent.com/u/30303558?v=4" width="8%"></a>
 <a href="https://github.com/VitorGois" target="_blank"><img src="https://avatars.githubusercontent.com/u/69533533?v=4" width="8%"></a>
 <a href="https://github.com/CordeiroOtavio" target="_blank"><img src="https://avatars.githubusercontent.com/u/69653683?v=4" width="8%"></a>
 <a href="https://github.com/ryanraul" target="_blank"><img src="https://avatars.githubusercontent.com/u/42502534?v=4" width="8%"></a>
 <a href="https://github.com/gferrazz" target="_blank"><img src="https://avatars.githubusercontent.com/u/48798017?v=4" width="8%"></a>
</div>

## 📃 License
This software is under the [MIT License](https://github.com/GabrielNogueiraBR/Monext/blob/main/LICENSE).
