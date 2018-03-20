import React, { Component } from 'react';
const numbers = [1,2,3,4,5,6,7,8,9];

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    }
  }
  componentWillMount() {
    let results = [];
    fetch('items')
      .then(response => {
        return response.json();
      })
      .then(response => {
        results = response.catalog;
      })
      .then(() => {
        this.setState({
          data: results,
          loading: false
        })
      })
      .then(() => {
        console.log(this.state);
      })
      .catch(error => {
        console.log('error >' + error);
      })
  }
  render() {
    return (
      <div>
        {
          this.state.loading ? <p>Loading...</p> :
          this.state.data.map((item, index) =>
            <div>
              <img src={item.imageURL} alt={item.name} key={item.name}/>
              <p key={index}>{item.name}</p>
            </div>
          )
        }
      </div>
    );
  }
}

export default ProductList;