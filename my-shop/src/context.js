import React, { Component } from 'react';
import items from './data';

const ClothesContext = React.createContext();

// <ClothesContext.Provider value={'hello'}
export default class ClothesProvider extends Component {
    state = {
        clothes: [],
        sortedClothes: [],
        featuredClothes: [],
        loading: true,

        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0
    };
    //getData
    componentDidMount(){
        //this.getData
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

    formatData(items){
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


    render() {
        return (
            <ClothesContext.Provider
                value={{ ...this.state,
                        getCloth: this.getCloth }}>
                {this.props.children}
            </ClothesContext.Provider>
        );
    }
}

const ClothesConsumer = ClothesContext.Consumer;

export { ClothesProvider, ClothesConsumer, ClothesContext };

export function withClothesConsumer(Component){
    return function ConsumerWrapper(props){
        return (
            <ClothesConsumer>
                {value => <Component {...props} content={value}/>}
            </ClothesConsumer>
        );
    };
}


