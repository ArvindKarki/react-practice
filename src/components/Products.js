import {Link} from 'react-router-dom'

export const Products = () => {
  return (
      <>
{console.log("first")}
    <div>
        <input type='search' placeholder='Search products' />
    </div>
    <nav>
       <Link to = 'featured'>Featured</Link>
       <Link to = 'new'>New</Link>
    </nav>
    </>
  )
}
