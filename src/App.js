import React ,{Component} from 'react';

import './App.css';

class App extends Component {
  //state = {  }

  constructor(props){
    super(props);
    this.state = {
      products : [
        {
        id: 1,
        name:"SSamsungarr",
        price: 15000000,
        image: "https://cdn.tgdd.vn/Products/Images/42/161554/sieu-pham-galaxy-s-black-400x460.png",
        status: true
    
      },
      {
        id: 2,
        name:"OOppoarr",
        price: 18000000,
        image: "https://cdn.tgdd.vn/Products/Images/42/161554/sieu-pham-galaxy-s-black-400x460.png",
        status: true
    
      },
      {
        id: 3,
        name:"AApple",
        price: 28000000,
        image: "https://cdn.tgdd.vn/Products/Images/42/161554/sieu-pham-galaxy-s-black-400x460.png",
        status: false
    
      },
    ],
    isActive :true,
    }
    
  }

  kichhoat =()=> {
   // alert("OK I'm fine");
   if(this.state.isActive === true)
    {
      this.setState({
        isActive : false
      });
    }
    else
    {
      this.setState({
        isActive : true
      });
    }

  }
  render() { 

    var element = this.state.products.map((products, index) => {
      let result = '';
       if(this.state.isActive === true){
       
      result = <tr key={products.id}>
      <td>{products.id}</td>
      <td>{products.name}</td>
      <td className="table-success">{products.price} VNĐ</td>
    </tr>
      }
 
    return result;
    });
      
      
       

    // let element = this.state.products.map((products, index) => {
    //   let result = '';
    //   if (this.state.isActive === true)
    //   {

      
    //   if(products.status){
        
    //   result = <tr key={products.id}>
    //   <td>{products.id}</td>
    //   <td>{products.name}</td>
    //   <td className="table-success">{products.price} VNĐ</td>
    // </tr>
    //   }
    // }
      
      
    //     return result
      
   
    // });
    return (
      <div className="Appp">
            <div className="container-fluid">
              
            
            <label>Thêm thông tin</label>
            <input type="text" className="form-control"></input>
            <input type="submit" className="btn btn-warning" value="Lưu"></input>
  
            <div className="table">
                <table className="table table-bordered">
                    <thead>
                      <tr>
                      <th>STT</th>
                      <th>Tên sản phẩm</th>
                      <th>Giá</th>
                      </tr>
                      
                    </thead>
                    <tbody>
                     {/* <tr>
                      <td>1</td>
                      <td>Apple</td>
                      <td className="table-success">3000</td>
                    </tr> */}
                    { element }
                    </tbody>
                </table>
                  <button className="btn btn-success btn-lg" onClick= { this.kichhoat } >Kích hoạt: { this.state.isActive === true ? 'OK nè' : 'Chưa OK' } </button>
            </div>
            </div>
      </div>
    );
  }
}
 
export default App;


