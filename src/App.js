import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth , createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
   
   constructor(props) {
     super(props)
   
     this.state = {
        currentUser: null,
     }
   }
  
   unsubscribeFromAuth= null;

   componentDidMount()
   {
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      //  this.setState({ currentUser : user });
      //  console.log(user)
      
      if(userAuth)
      {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{

          this.setState({
            currentUser: {
               id: snapShot.id,
              ...snapShot.data()
             }
          }, ()=>{
            console.log(this.state)
          })
        })
      }
      this.setState({ currentUser : userAuth })
     });
   }

   componentWillUnmount()
   {
     this.unsubscribeFromAuth();
    //  componentWillUnmount is called right before a component is removed from the DOM.
    // so that time unsubscribeFromAuth = null so no any memory leak of auth ( lec - 96)
   }
   

  render(){
  return (
    <div >
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
 }
}
export default App;