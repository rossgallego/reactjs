import React from 'react';

let PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$49.99", stocked: false, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

// 0
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
      }
    render() {
      return (
        <div className="three-delta">
            <FilterableProductTable products={PRODUCTS}/>
        </div>
      );
    }
  
}



// 1
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputdat: "",
      checkdat: false
    }

    this.checkboxStatus = this.checkboxStatus.bind(this);
     this.formSubmit = this.formSubmit.bind(this)
  }

  checkboxStatus(e){
      this.setState({
        checkdat: e
      })
  }

  formSubmit(item){
      this.setState({
        inputdat: item
      })
  }
  render() {
      return (
        <div className="row">
          <div className="col-md-6">
            <h1> delta 2</h1>
            <h2>inout is: {this.state.inputdat} </h2>

            <SearchBar formSubmit={this.formSubmit} inputdat={this.state.inputdat} checkdat={this.state.checkdat} checkboxStatus={this.checkboxStatus}/>

            <ProductTable ItemStocked={this.state.checkdat} InputSearch={this.state.inputdat} products={this.props.products}/>
          </div>
          
        </div>
      );
  }
}

// 2
class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.setCheckBox = this.setCheckBox.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  setCheckBox(e){
      this.props.checkboxStatus(e.target.checked)
  }

  formSubmit(e){
      e.preventDefault();
      this.props.formSubmit(this.refs.formInput.value);
      this.refs.formInput.value ="";
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
            <input type="text" placeholder={this.props.inputdat} ref="formInput"/>
               <span className ="clearfix"></span>
            <input type="checkbox" checked={this.props.setCheckBox} onChange={this.setCheckBox}/> only stocked
      </form>
    )
  }




}

// 3
class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }



  render() {

      let CatHeading = null;  
      let InputSearch = this.props.InputSearch;
      let ItemStocked = this.props.ItemStocked;
      return (
      <div>
        <div className="clearfix"></div>
        {this.props.products.map(function(item,keyId){

              if(InputSearch.trim() === ""){
                        if(CatHeading == item.category){
                            return(
                                <div>
                                    {ItemStocked  ?  item.stocked ? <ProductRow item={item}/>: <div></div>   : <ProductRow item={item}/> }
                                </div>
                            )
                        }
                        else{
                                return(
                                  <div>
                                      <ProductCategoryRow category = {CatHeading = item.category} /> 
                                      {ItemStocked  ?  item.stocked ? <ProductRow item={item}/>: <div></div>   : <ProductRow item={item}/> }
                                  </div>
                                )
                        }

              }
              if(InputSearch.trim() === item.name){
                  return(
                      <div>
                            {ItemStocked  ?  item.stocked ? <ProductRow item={item}/>: <div></div>   : <ProductRow item={item}/> }
                      </div>
                    )
              }

              else{
                  return(
                      <div></div>
                    )
              }

            }
        )}

      </div>
      );
  }
}


// 4
class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      

      <div>
          <h1>{this.props.category}</h1>
          </div>

    );
  }
}

// 5
class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() { 
      return (
            <div>
             {this.props.item.stocked ?<div> {this.props.item.name} </div> :  <div className="red">{this.props.item.name }</div> }
             </div>
      )
  }
}

export default App