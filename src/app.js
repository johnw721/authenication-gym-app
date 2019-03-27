import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './component/pages/home'
import Merchandise from './component/pages/merchandise'
import Plans from './component/pages/plans'
import AboutUs from './component/pages/aboutus'
class App extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div className='ui container'>
                        <NavBar />
                        <Route path='/' exact component={Home}/>
                        <Route path='/merchandise' exact component={Merchandise}/>
                        <Route path='/plans' exact component={Plans}/>
                        <Route path='/aboutus' exact component={AboutUs}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;