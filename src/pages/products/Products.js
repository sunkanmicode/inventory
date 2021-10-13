import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import './products.css'

function Products() {
    // const [name, setName] = useState('');
    // const [price, setPrice] = useState('');
    // const [category, setCategory] = useState('');
    const [items, setItems] = useState([]);



    const handleSubmit = (e)=>{
      e.preventDefault();
      const data = e.target;
      // const user = [ name, price, category]
      // localStorage.setItem( 'user', JSON.stringify(user))
      // setItems([ ...items, user]);
      // console.log(items);
      // window.location.replace('/dashboard')
      const newItem = {
        name: data.name.value,
        price: data.price.value,
        category: data.category.value,
      };
      localStorage.setItem("newItem", JSON.stringify(newItem));

      setItems([...items, newItem]);
      console.log(items);
      // window.location.replace('/dashboard')
    }
    useEffect(() => {
      const loggedInUser = localStorage.getItem('user')
      if(loggedInUser){
          const foundUser =JSON.parse(loggedInUser)
          setItems(foundUser)
      }
    }, [])
  
    return (
      <div className="products">
        <h1>Add a Product</h1>

        <form className="formProduct" onSubmit={handleSubmit}>
          <div className="formInput">
            <input
              type="text"
              placeholder="Item Name"
              name="name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formInput">
            <input
              type="text"
              placeholder="price"
              name="price"
              // value={price}
              // onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="formInput">
            <input
              type="text"
              placeholder="Category"
              name="category"
              // value={category}
              // onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="productBtn">
            <button type="submit">Add</button>
          </div>
        </form>
        <div>
          <h1> Welcome {items.name} !!!</h1>
          <div>
            <button>
              <Link to="products">Add New Product</Link>
            </button>
          </div>
          <div className="table">
            <table className="tableContainer">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                
                 { items.map((item) => {
                    return (
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>

        {/* <Dashboard items={items} /> */}
      </div>
    );
}

export default Products
