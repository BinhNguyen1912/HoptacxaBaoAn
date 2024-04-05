window.addEventListener("load",function(){
// ============XU LY DI CHUYEN CHUOT CHO MENU========================================
    // lấy ra nhưng cái thẻ a để xử lý sự kiện hover ecfect
    let menu_link = this.document.querySelectorAll(".Header .Header_menu .menu .menu-link");
    menu_link.forEach(item => item.addEventListener("mouseenter",handlehoverlink));
    // tao ra duong line truoc
    let line = document.createElement("div");
    line.className = "line-hover";
    document.body.appendChild(line);
    function handlehoverlink(event){
        const {top ,left ,width ,height} = event.target.getBoundingClientRect();
        console.log({top,left,width,height});
        let offsetbottom = 6;
        line.style.top = `${top + height + offsetbottom}px`;
        line.style.left=`${left}px`;
        line.style.width=`${width}px`;
    };
    let menu = document.querySelector(".Header .Header_menu .menu");
    menu.addEventListener("mouseleave",function(e){
        line.style.width = 0;
    })


//====================================================================================================
// // QUANG CAO NHAP FORM
// setTimeout(function(){
//     let text = `
//         <form class="form-tb" action="">
//     <i class="fa-solid fa-xmark dele"></i>
//     <div class="form-head">
//         <img src="image/logo.png">
//         <div class="form-title">Nhập thông tin để được tư vấn</div>
//     </div>
//     <div class="form-body">
//         <lable class="title">Nhập họ tên : </lable>
//         <input name="ten" placeholder="Enter your Name">
//         <lable class="title">Nhập Email : </lable>
//         <input name="mail" placeholder="Enter your Email">
//         <lable class="title">Nhập Số điện thoại : </lable>
//         <input name="phone" placeholder="Enter your Phone">
//     </div>
//     <div class="btn-f">
//         <button class="btn-form">Gửi ngay</button>
//     </div>
//     </form>`;
//         document.body.insertAdjacentHTML("beforeend",text);
//     },1000);
//     setTimeout(function(){
//         let dele = document.querySelector(".dele");
//         let form = document.querySelector(".form-tb");
//         dele.addEventListener("click",function(e){
//             if(e.target.matches(".dele")){
//                 e.target.parentNode.remove(e.target);
//             }
//         })
//     clearTimeout();
//         let btn = document.querySelector(".btn-form");
//         btn.addEventListener("click",function(e){
//             e.target.parentNode.parentNode.remove(e.target);
//             let text = `
//                 <div class="alert-form">
//                     <i class="fa-solid fa-check"></i>
//                     <div class="title">Gửi thành công</div>
//                 </div>`;
//                 document.body.insertAdjacentHTML("beforeend",text);
//         })
//         document.body.addEventListener("click",function(event){
//             console.log(event.target);
//             if(!event.target.matches(".dele")){
//                         dele.parentNode.remove(dele);
//                     }
//         })
//         },1500);
// //END QUANG CAO NHAP FORM
// BACK-TO
function debounceFn(func , wait , immediate){
    let timeout;
    return function(){
        let context = this,
            args = arguments;
            let later = function(){
                timeout = null;
                if(!immediate) func.apply(context,args);
            };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later , wait);
        if(callNow) func.apply(context,args);
        };
    }
        window.addEventListener("scroll",debounceFn(function(){
            let up = document.querySelector(".fa-arrow-up");
            let html = document.documentElement;
            if(html.scrollTop > html.clientHeight){
                up.classList.remove("up");
            }else up.classList.add("up");

            up.addEventListener("click",function(){
                html.scroll(0,0);
            })
        },50))
})

// HÀM XỬ LÝ CHAT BOX
var chatOpen = false;
  
  function sendMessage() {
    var input = document.getElementById("input-message");
    var message = input.value;
    
    if (message.trim() === "") return;
    
    appendMessage("You: " + message, 'user-message');
    
    // Bot response (for demonstration purposes, this is a static response)
    setTimeout(function() {
      appendMessage("Bot: Hello! How can I assist you?", 'bot-message');
    }, 500);
    
    input.value = "";
    input.focus();
  }
  
  function appendMessage(message, className) {
    var chatMessages = document.getElementById("chat-messages");
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add('message');
    messageElement.classList.add(className);
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatMessages.scrollIntoView(false); // Cố gắng cuộn tin nhắn vào tầm nhìn
}
  
  function toggleChat() {
    var chatContainer = document.getElementById("chat-container");
    if (chatOpen) {
      chatContainer.style.display = "none";
    } else {
      chatContainer.style.display = "block";
    }
    chatOpen = !chatOpen;
  }
  document.getElementById("input-message").addEventListener("keypress", function(event) {
    // Kiểm tra xem phím nhấn có phải là Enter không (keyCode của phím Enter là 13)
    if (event.keyCode === 13) {
        // Ngăn chặn hành động mặc định của phím Enter (tránh việc gửi biểu mẫu)
        event.preventDefault();
        // Gửi tin nhắn
        sendMessage();
    }
});
function sendMessage() {
    var input = document.getElementById("input-message");
    var message = input.value;
    
    if (message.trim() === "") return;
    
    appendMessage("You: " + message, 'user-message');

    // Kiểm tra nội dung tin nhắn để đưa ra phản hồi phù hợp
    var response;
    if (message.toLowerCase().includes("cung cap ")) {
        response = "Bot :Chúng tôi cung cấp các sản phẩm tươi như trái cây , rau xanh và có các loại gạo ngon của bà con Việt Nam";
    } else if (message.toLowerCase().includes("sdt")) {
        response = "Bot:Vui lòng liên hệ qua sđt 0353739132 để được nhân viên tư vấn";
    } else if (message.toLowerCase().includes("kg")) {
        response = "Bot:Tùy mùa , hiện tại là 30.000đ/Kg";
    } else if (message.toLowerCase().includes("mục tiêu")) {
        response = "Bot:Giúp cho bà con tránh khỏi tình trạng giải cứu nông sản của bà con.";
    } else if (message.toLowerCase().includes("the nao")) {
        response = "Bot:cô phụng xinh đẹp";
    } 
     else {
        response = "Bot: Xin chào, tôi có thể giúp gì cho bạn.";
    }
    // Phản hồi tin nhắn
    setTimeout(function() {
        appendMessage(response, 'bot-message');
    }, 300);

    input.value = "";

    // Tập trung lại vào ô nhập tin nhắn sau khi gửi tin nhắn
    input.focus();
}

// Hàm để lấy thời gian hiện tại
function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    // Định dạng giờ và phút thành chuỗi "HH:MM"
    return (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
}

// END CHAT BOX