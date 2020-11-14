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

    let mySectionTag = document.createElement('section');
    mySectionTag.className = 'hotelCard';

    let myFigureTag = document.createElement('figure');
    myFigureTag.className = 'imageInfo';
 
    let myHotelInfoTag = document.createElement('div');
    myHotelInfoTag.className = "hotelInfo";

    
    let hotelAddressTag = document.createElement('span');
    hotelAddressTag.className = 'hotelAddress';
    let addressIcon = document.createElement('i');
    addressIcon.innerHTML = `<ion-icon name="location"></ion-icon>`;
    let address = document.createElement('p');
    address.textContent = myList[i].address;

    let phoneTag = document.createElement('span');
    phoneTag.className = 'phoneInfo';
    let phoneIcon = document.createElement('i');
    phoneIcon.innerHTML = `<ion-icon name="call"></ion-icon>`;
    let phone = document.createElement('p');
    phone.textContent = myList[i].phone;

    
    document.getElementById('myCards').appendChild(mySectionTag);


    myFigureTag.appendChild(myImgTag);
    myFigureTag.appendChild(myFigCapTag);
    mySectionTag.appendChild(myFigureTag);
    mySectionTag.appendChild(myHotelInfoTag);
    myHotelInfoTag.appendChild(hotelAddressTag);
    myHotelInfoTag.appendChild(phoneTag);
    hotelAddressTag.appendChild(addressIcon);
    hotelAddressTag.appendChild(address);
    phoneTag.appendChild(phoneIcon);
    phoneTag.appendChild(phone);






    }
    
}); //end of arrow function

