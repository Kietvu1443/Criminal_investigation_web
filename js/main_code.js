const CheckAnDanh = document.getElementById("anonymous");
const nhapTen = document.getElementById("name");
const nhapcccd = document.getElementById("cccd");
const nhapSdt = document.getElementById("sdt");

CheckAnDanh.addEventListener("change",function(){
    const hidden = this.checked;
    nhapTen.style.display = hidden ? "none" : "";
    nhapcccd.style.display = hidden ? "none" : "";
    nhapSdt.style.display = hidden ? "none" : "";

    document.querySelector('label[for="name"]').style.display = hidden ? "none" : "";
    document.querySelector('label[for="cccd"]').style.display = hidden ? "none" : "";
    document.querySelector('label[for="sdt"]').style.display = hidden ? "none" : "";
})
