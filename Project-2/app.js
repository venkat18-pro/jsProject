const reviews=[{
  id:1,
  name: "vicky",
  job: "web",
  img:"img/god-murugan-photos-hd.jpg",
  text: "this is my first and second projects",

},
{
  id:2,
  name: "vj",
  job: "web",
  img:"img/images(15).jpg",
  text: "this is my first and second projects",

},
{
  id:3,
  name: "venkat",
  job: "web",
  img:"img/sai-baba-4.jpg",
  text: "this is my first and second projects",

}];
const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');
const randomBtn=document.querySelector('.random-btn');

var currentItem=-1;

window.addEventListener("DOMContentLoaded", function(){
  setup(currentItem);
});

function setup(person){
  const item= reviews[person];
  img.src=item.img;
  author.textContent= item.name;
  job.textContent= item.job;
  info.textContent= item.text;
};
nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length -1){
    currentItem= 0;
  }
  setup(currentItem);
});
prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem= reviews.length -1;
  }
  setup(currentItem);
});
