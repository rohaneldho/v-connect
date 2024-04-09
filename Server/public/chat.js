(function(){

    const app = document.querySelector(".app");
    const socket = io();

    let uname;

    app.querySelector(".join-screen #join-user").addEventListener("click", function(){
    let username = app.querySelector(".join-screen #username").value;
    if (username.length == 0){
        return;
    }
    socket.emit("newuser", username) ;
    uname = username;
    app.querySelector(".join-screen").classList.remove("active"); 
    app.querySelector(".chat-screen").classList.add("active");
    });

    app.querySelector (".chat-screen #send-message").addEventListener("click", function(){
        let message = app.querySelector(".chat-screen #message-input").value;
        if(message.length== 0){
        return;
        }
        renderMessage("my" , {
            username: uname, 
            text: message
        }) ;
        socket.emit("chat", {
            username: uname, 
            text: message
        });
        app.querySelector(".chat-screen #message-input").value = "";
    }) ;

    app.querySelector(".chat-screen #exit-chat").addEventListener("click",function(){
        socket.emit("exituser",uname);
        window.location.href= window.location.href;
    });
    socket.on("update",function(update){
        renderMessage("update",update);
    });
    socket.on("chat",function(message){
        renderMessage("other",message);
    });
    
    function renderMessage(type,message){
        let messageContainer = app.querySelector(".chat-screen .messages");
        if (type=="my"){
            let e1 = document.createElement("div");
            e1.setAttribute("class","message my-message");
            e1.innerHTML = `
                <div>
                    <div class = "name">You</div>
                    <div class = "text">${message.text}</div>
                </div>
            `;
            messageContainer.appendChild(e1);
        }else if(type =="other"){
            let e1 = document.createElement("div");
            e1.setAttribute("class","message other-message");
            e1.innerHTML = `
                <div>
                    <div class = "name">${message.username}</div>
                    <div class = "text">${message.text}</div>
                </div>
            `;
            messageContainer.appendChild(e1);
        }else if (type =="update"){
            let e1 = document.createElement("div");
            e1.setAttribute("class","update");
            e1.innerText = message;
            messageContainer.appendChild(e1);
        }

        messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
    }
    
})();