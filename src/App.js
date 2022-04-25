
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Admin } from './components/Admin';
import { AuthProvider } from './components/Auth';
import { Featuredprodcuts } from './components/Featuredprodcuts';
import { Home } from './components/Home';
import Login from './components/Login';
import { Navbar } from './components/Navbar';
import { Newprodcuts } from './components/Newprodcuts';
import { Nomatch } from './components/Nomatch';
import { Ordersummary } from './components/Ordersummary';
import { Products } from './components/Products';
import Profile from './components/Profile';
import { Userdetails } from './components/Userdetails';
import { Users } from './components/Users';

function App() {
  return (
    <div className="App">

    <AuthProvider>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='order-summary' element={<Ordersummary/>}></Route>
        <Route path='*' element={<Nomatch/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='products' element={<Products/>}>
          <Route index element={<Featuredprodcuts/>}/>
          <Route path='featured' element={<Featuredprodcuts/>} />
          <Route path='new' element={<Newprodcuts/>} />
        </Route>
        <Route path='users' element={<Users/>}>
        <Route path=':userId' element={<Userdetails/>}/>
        <Route path='admin' element={<Admin/>}/>
        </Route>
      </Routes>
    </AuthProvider>
    </div>
  );
}


export default App;