function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Silakan Masukkan Nama yang valid!";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 10){
    text = "Silakan Masukkan Subjek yang Benar!";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 13){
    text = "Silakan Masukkan Nomor Telepon yang valid!";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Silakan Masukkan Email yang valid!";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 140){
    text = "Silakan Masukkan Lebih Dari 140 Karakter!";
    error_message.innerHTML = text;
    return false;
  }
  alert("Formulir Berhasil Dikirim!");
  return true;
}
