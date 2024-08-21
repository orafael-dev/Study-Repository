/* eslint-disable react/prop-types */
function OrderDetails({itemsInBag}) {
  
  function CalculateTotal() {
    let orderTotal = 0
    itemsInBag.forEach(item => orderTotal += (item.quantity * item.price))
    return orderTotal
  }
    return(
        <>
        <section className="summary">
        <strong>Order SUmmary</strong>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
          {itemsInBag.map(item => 
            <tr key={item.id}>
              <td>{item.quantity} x {item.name}</td>
              <td>$ {(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          
          )}

            <tr>
              <th>Total</th>
              <th>$ {CalculateTotal().toFixed(2)}</th>
            </tr>
          </tbody>
        </table>
      </section>
        </>
    )
}

export default OrderDetails