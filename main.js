var natija 
var kontrakt





natija = prompt("Salom to'plagan balingizni kirirting")

if(natija < 80){
alert("O'qishga kira olmadingiz")
} 
else
if(natija <100){
    alert("siz super kontrakt asosida o'qishga tavsiya qilindingiz")
   kontrakt = prompt("kontrakt miqdori yiliga 3000 $ qancha pulingiz bor")
   if(kontrakt < 3000){
     alert("siz o'qishga qabul qilinmadingiz")
 } else if(kontrakt >= 3000){alert("siz o'qishga qabul qilindingiz")}
}

else 
if(natija < 130){
     alert("siz kontrakt asosida o'qishga qabul qilindingiz")
    kontrakt = prompt("kontrakt miqdori yiliga 2000 $ qancha pulingiz bor")

    if(kontrakt < 2000){
        kontrakt = alert("Siz o'qishga qabul qilinmadingiz")
    } else if(kontrakt >= 2000){alert("siz o'qishga qabul qilindingiz")}
} 

else 
if(natija <= 180){
    alert("Siz grant asosida o'qishga qabul qilindingiz")
}
else 
if(natija >180){
    alert("noto’g’ri qiymat kiritildi")
}















