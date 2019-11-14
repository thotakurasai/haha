import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filters from './filters';
import SentimentOutputs from './sentiment_outputs';
// import classes from '@material-ui/core/TextField';
import axios from 'axios';
import {Posts} from './Posts';
import Button from '@material-ui/core/Button';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      postinf:[]
    };
    this.click = this.click.bind(this);
  }
  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(res => {
  //   this.setState({userinfo:res.data})
  //   })
  // .catch(function (error) {
  // console.log(error);
  // })
  // } 
  click(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
    this.setState({postinf:res.data})
    console.log(this.postinf)
    })
  .catch(function (error) {
  console.log(error);
  })
  



  // click() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => {
  //   this.setState({postinfo:res.data})
  //   console.log(res.data)
  //   })
  // .catch(function (error) {
  // console.log(error);
  // })
    

  //   axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
  //   .then(res => {
      
  //     this.setState({postinfo:res.data});
      
        
  //         console.log(res.data)
          
                 
  //                 res.data.map((post) => {
  //                   return (
  //                     <div key={post.email}>
  //                     <p>{post.postId}</p>
  //                     <p>{post.name}</p>
  //                 </div>
  //                   );
  //                 })
              
              
      
  //   })
  // .catch(function (error) {
  //   console.log(error);
  // });
  }
  render(){
    // let Info   = this.state.postinfo;
    //         console.log(Info);

    return (
      <div className="App">
        <header className="App-header" style= {{ backgroundColor: 'Red', height: '50px', margin: 0 }}>
              <img src={logo} className="App-logo" alt="logo"  style={{float:"left"}}/>
              <h1 >SENTIMENT ANALYSER</h1>
        </header>
        <Filters style={{float:"left"}}></Filters>
        <SentimentOutputs style={{float:"right",width:'60%'}}></SentimentOutputs>
        <div style={{ padding: '25px' }}>
        <Button variant="contained" color="primary"  onClick = {this.click} >
        {/* render = { () => <Posts posts_data = {this.state.postinfo} /> } */}
                GET SENTIMENT
                
            </Button>
            <div>
            
                 {
                this.state.postinf.map((post) => {
                    return(
                        <div key={post.title}>
                            <p>{post.id}</p>
                            <p>{post.body}</p>
                        </div>
                    )
                })
              }
            </div>
            
          </div>
          </div>

      

    );
    
  }
}

export default App;
