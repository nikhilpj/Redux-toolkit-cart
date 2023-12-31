import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch,useSelector } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import { useEffect } from "react";


function App() {
  const {cartItems} = useSelector((store)=>store.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItems])
  return <main>
    <Navbar/>
    <CartContainer/>
  </main>;
}
export default App;
