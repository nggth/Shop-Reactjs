// import React, { Component } from 'react';
// import items from './data';

// const ClothesContext = React.createContext();

// // <ClothesContext.Provider value={'hello'}
// export default class ClothesProvider extends Component {
//     state = {
//         clothes: [],
//         sortedClothes: [],
//         featuredClothes: [],
//         loading: true,

//         type: "all",
//         capacity: 1,
//         price: 0,
//         minPrice: 0,
//         maxPrice: 0,
//         minSize: 0,
//         maxSize: 0
//     };
//     //getData
//     componentDidMount(){
//         //this.getData
//         let clothes = this.formatData(items);
//         let featuredClothes = clothes.filter(cloth => cloth.featured === true);
//         //
//         let maxPrice = Math.max(...clothes.map(item => item.price));
//         let maxSize = Math.max(...clothes.map(item => item.size));
//         this.setState({
//             clothes,
//             featuredClothes,
//             sortedClothes: clothes,
//             loading: false,
//              //
//             price: maxPrice,
//             maxPrice,
//             maxSize
//         });
//     }

//     formatData(items){
//         let tempItems = items.map(item => {
//             let id = item.sys.id;
//             let images = item.fields.images.map(image => image.fields.file.url);
            
//             let cloth = { ...item.fields, images, id };
//             return cloth;
//         });
//         return tempItems;
//     }   

//     getCloth = slug => {
//         let tempClothes = [...this.state.clothes];
//         const cloth = tempClothes.find(cloth => cloth.slug === slug);
//         return cloth;
//     };


//     render() {
//         return (
//             <ClothesContext.Provider
//                 value={{ ...this.state,
//                         getCloth: this.getCloth }}>
//                 {this.props.children}
//             </ClothesContext.Provider>
//         );
//     }
// }

// const ClothesConsumer = ClothesContext.Consumer;

// export { ClothesProvider, ClothesConsumer, ClothesContext };

// export function withClothesConsumer(Component){
//     return function ConsumerWrapper(props){
//         return (
//             <ClothesConsumer>
//                 {value => <Component {...props} content={value}/>}
//             </ClothesConsumer>
//         );
//     };
// }


import React, { Component } from "react";
import items from "./data";
//import Client from "./Contentful";

const ClothesContext = React.createContext();

export default class ClothesProvider extends Component {
  state = {
    clothes: [],
    sortedClothes: [],
    featuredClothes: [],
    loading: true
  };


  componentDidMount() {
    // this.getData();
    let clothes = this.formatData(items);
    let featuredClothes = clothes.filter(cloth => cloth.featured === true);
    //
    let maxPrice = Math.max(...clothes.map(item => item.price));
    let maxSize = Math.max(...clothes.map(item => item.size));
    this.setState({
      clothes,
      featuredClothes,
      sortedClothes: clothes,
      loading: false,
      //
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let cloth = { ...item.fields, images, id };
      return cloth;
    });
    return tempItems;
  }
  getCloth = slug => {
    let tempClothes = [...this.state.clothes];
    const cloth = tempClothes.find(cloth => cloth.slug === slug);
    return cloth;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterClothes
    );
  };
  filterClothes = () => {
    let {
      clothes,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempClothes = [...clothes];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
   
    // filter by price
    tempClothes = tempClothes.filter(cloth => cloth.price <= price);
    //filter by size
    tempClothes = tempClothes.filter(
      cloth => cloth.size >= minSize && cloth.size <= maxSize
    );
    
    this.setState({
      sortedClothes: tempClothes
    });
  };
  render() {
    return (
      <ClothesContext.Provider
        value={{
          ...this.state,
          getCloth: this.getCloth,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ClothesContext.Provider>
    );
  }
}
const ClothesConsumer = ClothesContext.Consumer;

export { ClothesProvider, ClothesConsumer, ClothesContext };

export function withClothesConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ClothesConsumer>
        {value => <Component {...props} context={value} />}
      </ClothesConsumer>
    );
  };
}