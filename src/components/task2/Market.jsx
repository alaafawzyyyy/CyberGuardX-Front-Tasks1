import "../../App.css"

function Market(){

   const foodList=[
    {Name: "milk", price: 10},
    {Name: "bread", price: 15},
    {Name: "Pasta", price: 20},
    {Name: "sugar", price: 25},
    {Name: "cheese", price: 20},
    {Name: "rice", price: 40}
   ];

    return (
    <div className="card">
      <h2> 🛒 Supermarket Items</h2>
      <ul>
        {foodList.map((item, index) => (
          <li key={index}>
            <span>{item.Name}</span> - <strong>{item.price} EGP</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Market;