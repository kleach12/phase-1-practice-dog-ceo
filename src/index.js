
console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',function () {

  let dataArray = [];

  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
      return response.json();
    })
    .then(function(data) {
      const dogImgContainer = document.querySelector('#dog-image-container')
      const dataArray = data.message;


      dataArray.forEach(element => {
        const createdImg = document.createElement('img')
         createdImg.src = element
         dogImgContainer.appendChild(createdImg)
        });
      
    })
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response){
      return response.json();
    })
    .then(function(data){
    
      dataArray = [...Object.keys(data.message)]

      renderDogs(dataArray)

      console.log(filterDogs(dataArray, 'a',))
      console.log(filterDogs(dataArray, 'b',))
      console.log(filterDogs(dataArray, 'c',))
      console.log(filterDogs(dataArray, 'd',))
      //debugger;
    })

    function renderDogs(array){
      const breeds = document.querySelector('#dog-breeds')
      array.forEach(element => {
        const createdLi = document.createElement('li');
        createdLi.innerText = element;
        createdLi.addEventListener('click', function(){
          return createdLi.style.color = 'red';
        })
        breeds.appendChild(createdLi);
      }) 
    }
//debugger;
    function filterDogs(array, string){

      const dropDown = document.querySelector("#breed-dropdown");
     
      dropDown.addEventListener('change', function(){
        const lengthOfString  = string.length;
        const dogNamesFilter = array.filter(array => array.slice(0, lengthOfString) === string);
        const exisitngLi = document.querySelector('li');

        const dropDownValue = dropDown.value;
        if (dropDownValue === string){
          console.log(exisitngLi.innerHTML)
        }
      })
    }

    //debugger;
})