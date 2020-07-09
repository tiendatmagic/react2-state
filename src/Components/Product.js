import React,{Component} from 'react';

class Product extends Component {
    //state = {  }
    constructor(props){
        super(props);
        console.log(props);
        //this.addcard = this.addcard.bind(this);
      } 
    onclickmua =()=> {
        alert('Sản phẩm tên' + ''  + this.props.name + ' '+ 'Giá' + ' ' + this.props.price);
    }
    render() { 
        
        return (  
            
                <div className ="col">
                    <div className ="thumbnail">
                        <img src={this.props.image} alt = "Generic placeholder thumbnail"/>
                    <div className="caption">
                    
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.price}</h4>
                    <p>
                        <input type="button" className="btn btn-success" onClick={ this.onclickmua } value="Mua"></input>
                    </p>
                    </div>
                    </div>
                </div>
                
                
            
        );
    }
}
export default Product;