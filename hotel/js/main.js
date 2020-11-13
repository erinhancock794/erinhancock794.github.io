//what is the path to the JSON file?
const apiUrl = 'css/hotelData.JSON';

//Go fetch it and then wait for a response
fetch(apiUrl)
.then((response) => response.json())
.then((myList) => {
    //when it comes back, display to console
    console.log('myList--->', myList);
    for (i=0; i < myList.length; i++){

    let myImgTag = document.createElement('img');
    myImgTag.src = myList[i].photo;

    let myFigCapTag = document.createElement('figcaption');
    myFigCapTag.textContent = myList[i].name;

    let myFigureTag = document.createElement('figure');
    myFigureTag.appendChild(myImgTag);
    myFigureTag.appendChild(myFigCapTag);

    let myHotelInfoTag = document.createElement('div');
    myHotelInfoTag.className = "hotelInfo";

    let carIcon = document.createElement('i');
    carIcon.innerHTML = `<ion-icon name="car"></ion-icon>`;
    let phoneIcon = document.createElement('');
    phoneIcon.innerHTML = ` <ion-icon name="call"></ion-icon>`;

    let mySectionTag = document.createElement('section');
    mySectionTag.className('hotelCard');
    mySectionTag.appendChild(myFigureTag);
    mySectionTag.appendChild(myHotelInfoTag);

 



    // myFigureTag.className = "happyCamper";
    // let theIconLeftTag = document.createElement('ion-icon')
    // theIconLeftTag.name ="icon ion-md-car";
    // myFigureTag.appendChild(theIconLeftTag);



    document.getElementById('myCards').appendChild(myFigureTag);
    }
    
}); //end of arrow function

