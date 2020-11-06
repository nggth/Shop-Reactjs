import React, { Component } from "react";
import items from "./data";
//import Client from "./Contentful";

const ClothesContext = React.createContext();

export default class ContextFeature extends Component {
    state = {
        clothes: [],
        featuredClothes: [],
        loading: true
    };
    componentDidMount() {
        // this.getData();
        let clothes = this.formatData(items);
        let featuredClothes = clothes.filter(cloth => cloth.featured === true);
        
        this.setState({
          clothes,
          featuredClothes,
          loading: false
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

    // let tempClothes = [...clothes];

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
    
    export { ContextFeature, ClothesConsumer, ClothesContext };
    
    export function withClothesConsumer(Component) {
      return function ConsumerWrapper(props) {
        return (
          <ClothesConsumer>
            {value => <Component {...props} context={value} />}
          </ClothesConsumer>
        );
      };
    }
