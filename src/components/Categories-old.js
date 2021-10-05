import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import hose from '../assets/4 foot house.jpg';
import burner from '../assets/burner.jpg';
import fryer from '../assets/Fryer.png';
import Container from 'react-bootstrap/Container';
import cylinder from '../assets/small-cylinder.png';

const Categories = () => {

    let products = [{
        productName: 'Nike Man\'s Flex',
        image: `<img src="images/nike-shoes.jpg" alt="nike-shoes-red" width="173" height="120" class = "imageClass">`,
        isLiked: false,
        tag: "footwear",
        price: "$100"
      },
      {
        productName: "Nike shoes black",
        image:`<img src="images/nike-black-shoes.jpg" alt="nike-shoes-black" width="173" height="120" class = "imageClass">`,
        isLiked: true,
        tag: "footwear",
        price: "$1100"
      }]

filterSelection("all"); // by default display all items

function filterSelection(filterBtn) {
  let x = document.getElementsByClassName("product-card");
  if (filterBtn == "all"){
      filterBtn = "";
  } 
  for (let i = 0; i < x.length; i++) {
    removeProduct(x[i], "show");
    if (x[i].className.indexOf(filterBtn) > -1){
       addProduct(x[i], "show"); //i will try with != -1
    } 
  }
}

function addProduct(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(" ");
  //console.log(arr1);
  arr2 = name.split(" ");
  //console.log(arr2);
  for (let i = 0; i < arr2.length; i++) {

    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeProduct(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
// let btnContainer = document.getElementById("filter-buttons");
// let btns = btnContainer.getElementsByClassName("btn");
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

    return (
        <>
            <div className = "filter-buttons">
            <Button className="btn active" onclick="filterSelection('all')"> Show all</Button>
            <Button className="btn" onclick="filterSelection('footwear')"> Footwear</Button>
            <Button className="btn" onclick="filterSelection('clothes')"> Clothes</Button>
            <Button className="btn" onclick="filterSelection('electronics')"> Electronics</Button>
            </div>

            <div className="product-card footwear">
            <Button className="btnLike"><i class="fas fa-heart"></i></Button>
            <div className="imageDiv"></div>
            <h1 className="productName"></h1>
            <h1 className="price"></h1>
            <Button className="btnAdd" onclick="addItem()">Add</Button>
            </div>

            <div className="product-card footwear">
            <Button className="btnLike"><i class="fas fa-heart"></i></Button>
            <div className="imageDiv"></div>
            <h1 className="productName"></h1>
            <h1 className="price"></h1>
            <Button className="btnAdd" onclick="addItem()">Add</Button>
            </div>
        </>
  );
}
export default Categories;