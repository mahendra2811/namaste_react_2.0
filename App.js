import React , {lazy , Suspense, useEffect, useState ,useContext} from "react" ;
import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter , RouterProvider , Outlet  } from "react-router-dom";
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import userContext from "./src/utils/userContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
// import Grocery from "./src/components/Grocery";
import Cart from "./src/components/Cart";


// lazzy laoding 
// or on demand loading 

// pehle se load nahi kerega grocerry , ye baad me laod keregaa
const Grocery = lazy(()=>{
    import('./src/components/Grocery');
} );
const About = lazy(()=>{
    import('./src/components/About');
} );



 const Applayout = ()=> {

    const [userName , setUserName] = useState();
    // authentication
    useEffect(()=>{
        // make an api call and send the username and password
        const data = {
            name: "mahendra",
            
        };
        setUserName(data.name);
    }, [])

    return(
        <Provider store={appStore}>
            <userContext.Provider value={ {loggedInUser : userName , setUserName }}>
            <div className="app">
                <Header/>
                <Outlet/>
                {/* outlet is replaced by the children element for this  */}
            </div>
            </userContext.Provider>
         </Provider>
    );
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Applayout/>,
        children: [
                {
                    path:"/",
                    element: <Body/>
                },
                {
                    path:"/about",
                    element:  //<About/>
                     <Suspense fallback={<h1>page is loading sooon data is loaded</h1>}>
                                <About/>
                            </Suspense>
                },
                {
                    path:"/contact",
                    element: <Contact/>
                },
                {
                    path:"/grocery",
                    element: <Suspense fallback={<h1>Loading..... the data </h1>} >
                                <Grocery/>
                            </Suspense>  
                },
                {
                    path:'/restaurant/:resId',
                    element: <RestaurantMenu/>
                },
                {
                    path:"/cart",
                    element: <Cart/>
                }
        ],
        errorElement: <Error/>
    },
   
    // {
    //     path:"/res",
    //     element: <Res />,
    // }
]);
    const root = ReactDom.createRoot(document.getElementById('root'));
    root.render(<RouterProvider router={appRouter} />);









// const Titles = () => (
//     <h1 className="head"   tabIndex={5}> 
//         Namaste react using JSX 🚀🚀
//     </h1> 
// )
 
// const HeadingComponents = () =>(
//     <div id="container">
//         {Titles()}
//         {/* <Titles/>
//         <Titles></Titles> */}
//         <h1 className="headings"> 
//             Namste react functional components 
//         </h1>
//     </div>
// );

// const root =  ReactDom.createRoot(document.getElementById("root"));
// root.render(<HeadingComponents/>);
























//  const parent = React.createElement("div" , {id:"parent"} , 
//      React.createElement("div" , {id:"child"} , 
//        [
//           React.createElement("h1" , {} , "hello this is h1 tag") , 
//           React.createElement("h4" , {} , "hello this is h3 tag ")
//        ] 
//   ))
//  console.log(parent);


//  // const heading = React.createElement("h1" , {id:"heading" , xyz:"abc"} , "hello mahendra ");
// const root = ReactDom.createRoot(document.getElementById("root"));
 // root.render(parent);