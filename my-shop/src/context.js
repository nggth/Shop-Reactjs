import React, { Component } from 'react';
import items from './data';

const ClothContext = React.createContext();
// <ClothesContext.Provider value={'hello'}

class ClothesProvider extends Component {
    state = {
        clothes: [],
        sortedClothes: [],
        featuredClothes: [],
        loading: true
    };
    //getData
    componentDidMount(){
        //this.getData
        let clothes = this.formatData(items);
        let featuredClothes = clothes.filter(cloth => cloth.featured === true);
        this.setState({
            clothes,
            featuredClothes,
            sortedClothes: clothes,
            loading: false
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

    getCloth = (slug) => {
        let tempClothes = [...this.state.clothes];
        const cloth = tempClothes.find(cloth => cloth.slug === slug);
        return cloth;

    };


    render() {
        return (
            <ClothContext.Provider value={{ ...this.state, getCloth: this.getCloth }}>
                {this.props.children}
            </ClothContext.Provider>
        );
    }
}

const ClothesConsumer = ClothContext.Consumer;

export { ClothesProvider, ClothesConsumer, ClothContext };
