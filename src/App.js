
import React, { useState } from "react";
import { Input } from "./components/forms/input";
const products =[
  { category: "fruits", price: "$1", stocked: true, name: "apple"},
   { category: "fruits", price: "$1", stocked: true, name: "dragonfruit"},
    { category: "fruits", price: "$1", stocked: false, name: "passion fruit"},
     { category: "vegetables", price: "$4", stocked: true, name: "spinach"},
      { category: "fruits", price: "$1", stocked: false, name: "pumpkin"},
       { category: "vegetables", price: "$2", stocked: true, name: "peas"}


  
]
function App() {
  const [showStockedOnly, setshowStockedOnly] = useState(false)
  const [search, setsearch] = useState('')
  const visibleProducts = products.filter(product => {
    if (showStockedOnly && !product.stocked) {
      return false
    }
    if (search && !product.name.includes(search)) {
      return false
    }
    return true 
  } )

return <div className="container my-3">
  <SearchBar
  search={search}
  onsearchChange={setsearch}
   showStockedOnly={showStockedOnly} onStockedOnlyChange={setshowStockedOnly} />
<ProductTable products={visibleProducts} />
</div>
}
function SearchBar ({showStockedOnly, onStockedOnlyChange, search, onsearchChange}) {
  return <div>
    <div className="mb-3">
      <Input value={search} onChange={onsearchChange} placeholder="Rechercher..."/>
      <checkbox id="stocked" checked={showStockedOnly} onChange={onStockedOnlyChange} label="N'afficher que les produits 
      en stock"/>
    </div>
  </div>
}

function ProductTable ({products}) {
  const rows = []
  let lastCategory = null

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<productCategoryRow key={product.category} name={product.category} />)
    }
    lastCategory = product.category
    rows.push(<productRow product={product} key={product.name} />)
  }
  return <table className="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
     {rows}
    </tbody>
  </table>
}





export default App()
 