import { createBrowserRouter, Link, NavLink, Outlet, RouterProvider, useNavigation, useRouteError } from "react-router-dom"
import { single } from "./pages/single.jsx";
import { Blog } from "./pages/Blog.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <PageError/>,
    children: [
      {
        path: 'blog',
        element: <div className="row">
          <asside className="col-3">
            <h2>Sidebar</h2>
          </asside>
        <main className="col-9">
          <Outlet/>
        </main> 
        </div>,
        children: [
          {
            path: '',
        element: <Blog/>,
      } ] },
      {
        path: 'id',
        element: <single/>
      }
    ]
  }
]);



function PageError() {
  const error = useRouteError()
  return <>
  <h1>Une erreur est survenue</h1>
 <p> 
  {error?.error?.toString() ?? error?.toString()}
  </p>
  </>
}
function Root () {
  const {state} = useNavigation()
return <>
<header>
  <nav>
    <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </nav>
</header>
<div className="container my-4">
  {state === 'loading' && <Spinner />} 
  <Outlet/>
</div>
</>
}

function App() {

}




 
export default App()

