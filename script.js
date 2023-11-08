
const word_element=document.querySelector('#word');

const coreectLetters=[];

const wrongLetters=[];

const popup_container=document.querySelector('#popup-container');

const items=document.querySelectorAll('.item');

const popup=document.querySelector('.success-message');

let selectedWord=getRandomWord();

const AgBtn=document.querySelector('#play-again');

AgBtn.addEventListener('click',function(){

    coreectLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord=getRandomWord();
    uptadeWrongLetters();
    displayWord();
    popup_container.style.display='none';

})

function getRandomWord(){
    const letters=["html","css","java","javascript","python","flutter","c","assembly"];
    return letters[Math.floor(Math.random()*letters.length)];
}

function displayWord(){

    word_element.innerHTML=`${selectedWord.split('').map(letter=>`
    <div class="letter">
    ${coreectLetters.includes(letter)?letter:''}
    </div>
    `).join('')}`


    const w=word_element.innerText.replace(/\n/g,"");
    
    if(w===selectedWord){

        document.querySelector('.popup').style.background='green'
        popup_container.style.display='flex';
        popup.innerText='Kazandınız Tebrikler';

    }

    

}

displayWord();


function uptadeWrongLetters(){

   const wrong_element=document.querySelector('#wrong-letters');

   wrong_element.innerHTML=`${wrongLetters.length>0?'<h3>Hatalı Harfler</h3>':""}
   ${wrongLetters.map(letter=>`<span>${letter}</span>`)}`

   if(wrongLetters.length==items.length){

   document.querySelector('.popup').style.background='red';
    popup_container.style.display='flex';
    popup.innerText='Maalesef Kaybettiniz';

   }
   items.forEach((item,index)=>{
    const errorCount=wrongLetters.length;

    if(index<errorCount){
       item.style.display='block';
    }
    else{
       item.style.display='none';

    }
})
}

window.addEventListener('keydown',function(e){


    if(e.keyCode>=65 && e.keyCode<=90){

        const letter=e.key;
    
      if(selectedWord.includes(letter)){

        if(!coreectLetters.includes(letter)){
            coreectLetters.push(letter);
            displayWord();
        }
        else{
            console.log("bu harfe zaten tıkladın")
        }

      }
      else{
        if(!wrongLetters.includes(letter)){
            wrongLetters.push(letter);
            uptadeWrongLetters();
        }
      }
     



    }
})