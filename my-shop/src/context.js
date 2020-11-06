// import React, { Component } from "react";
// import items from "./data";
// //import Client from "./Contentful";

// const ClothesContext = React.createContext();

// export default class ClothesProvider extends Component {
//   state = {
//     clothes: [],
//     sortedClothes: [],
//     featuredClothes: [],
//     loading: true,

//     type: "all",
//     price: 0,
//     minPrice: 0,
//     maxPrice: 0,
//     // minSize: 0,
//     // maxSize: 0,
//     sizeM: false,
//     sizeL: false
//   };


//   componentDidMount() {
//     // this.getData();
//     let clothes = this.formatData(items);
//     let featuredClothes = clothes.filter(cloth => cloth.featured === true);
//     //
//     let maxPrice = Math.max(...clothes.map(item => item.price));
//     //let maxSize = Math.max(...clothes.map(item => item.size));
//     this.setState({
//       clothes,
//       featuredClothes,
//       sortedClothes: clothes, //if not have this code, Clothes page will not have the list of clothes
//       loading: false,
//       //
//       price: maxPrice,
//       maxPrice
//       //maxSize
//     });
//   }
//   // add to cart 
//   addToCart = () => {
//     const cloth = this.props.cloth;

//     let cart = localStorage.getItem("cart");

//     if (cart === null) cart = [];
//     else cart = JSON.parse(cart);

//     for (let i = 0; i < cart.length; i++)
//       if (cart[i].cloth.id === cloth.id) return;

//     cart.push({ cloth: cloth, quantity: 1 });

//     localStorage.setItem("cart", JSON.stringify(cart));
//   };

//   formatData(items) {
//     let tempItems = items.map(item => {
//       let id = item.sys.id;
//       let images = item.fields.images.map(image => image.fields.file.url);
//       let cloth = { ...item.fields, images, id };
//       return cloth;
//     });
//     return tempItems;
//   }
//   getCloth = slug => {
//     let tempClothes = [...this.state.clothes];
//     const cloth = tempClothes.find(cloth => cloth.slug === slug);
//     return cloth;
//   };
//   handleChange = event => {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;
//     console.log(name, value);

//     this.setState(
//       {
//         [name]: value
//       },
//       this.filterClothes
//     );
//   };
//   filterClothes = () => {
//     let {
//       clothes,
//       type,
//       price,
//       sizeM,
//       sizeL
//     } = this.state;

//     let tempClothes = [...clothes];
//     // transform values
    
//     price = parseInt(price);
//     // filter by tyoe
//     if(type !== "all") {
//       tempClothes = tempClothes.filter(cloth => cloth.type === type);
//       console.log(tempClothes);
//     }
//     // filter by price
//     tempClothes = tempClothes.filter(cloth => cloth.price <= price);
//     //filter by size
//     // tempClothes = tempClothes.filter(
//     //   cloth => cloth.size >= minSize && cloth.size <= maxSize
//     // );
//     //filter by breakfast
//     if (sizeM) {
//       tempClothes = tempClothes.filter(cloth => cloth.sizeM === true);
//     }
//     //filter by pets
//     if (sizeL) {
//       tempClothes = tempClothes.filter(cloth => cloth.sizeL === true);
//     }
  
//     this.setState({
//       sortedClothes: tempClothes
//     });
//   };
//   render() {
//     const cloth = this.props.cloth;
//     const updateCartState = this.props.updateCartState;
    
//     return (
//       <ClothesContext.Provider
//         value={{
//           ...this.state,
//           getCloth: this.getCloth,
//           handleChange: this.handleChange
//         }}
//       >
//         {this.props.children}
//       </ClothesContext.Provider>
//     );
//   }
// }
// const ClothesConsumer = ClothesContext.Consumer;

// export { ClothesProvider, ClothesConsumer, ClothesContext };

// export function withClothesConsumer(Component) {
//   return function ConsumerWrapper(props) {
//     return (
//       <ClothesConsumer>
//         {value => <Component {...props} context={value} />}
//       </ClothesConsumer>
//     );
//   };
// }