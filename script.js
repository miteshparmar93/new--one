const qrinput =document.querySelector(".qr-text");
const qrimg =document.querySelector(".qr-img");
const qrbutton =document.querySelector(".qr-button");

qrbutton.addEventListener("click",()=>{
  const inputvalue= qrinput.value;
  console.log(inputvalue);

  if(!inputvalue){
    alert("please inter valid url")
  }else{
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
    qrimg.alt= `qe code for that${inputvalue}`
  }
})

