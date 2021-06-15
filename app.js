
const closeModalTriggerEl = document.querySelector(".close");
const openModalTriggerEl = document.querySelector(".trigger");
const modalEl = document.querySelector(".modal");


function main(){

  openModalTriggerEl.addEventListener("click",function(){
  modalEl.classList.add("open");
  });

  closeModalTriggerEl.addEventListener("click",function(){
  modalEl.classList.remove("open");
  });

     window.addEventListener("click",function(e){
if(e.target === modalEl ){
  modalEl.classList.remove("open");
}
     });


}

main();