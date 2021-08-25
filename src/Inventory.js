function Inventory({ items, handleAdd }) {
  
  return (
    <div>
      { items.map((item, index) => (
        <div className='myStyle' key={index}>
          <p>{item}</p>
          <button onClick={() => handleAdd(item)}>Add to Cart</button>
        </div>
      )) }
    </div>
  )
}

export default Inventory;