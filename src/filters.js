import React from 'react';
// import logo from './logo.svg';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import classes from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function valuetext(value) {
    return `${value}`;
  }

//   function changeVisibility() {
//     document.getElementById("customid").style.visibility = "hidden";
// }

// function topicname(){
//     let value = event.target.value;
//         this.setState({
//           topicName: value,
//         });
// }



const marks = [
    {
      value: 1,
      label: '1',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 10,
        label: '10',
    },
  ];

function removeSource(e) {
    let filteredArray = this.state.sourceName.filter(item => item !== e.target.value)
    this.setState({sourceName: filteredArray});
}

const array=[]

function CheckboxLabels() {
    const [state, setState] = React.useState({
      twitter: false,
      reddit: false,
      news: false,
    });
  
    
    const handleChange = name => event => {
      // console.log(this.state.sourceName)
      setState({ ...state, [name]: event.target.checked });

    };
  
    return (
      <FormGroup row>
        <InputLabel id="label">SOURCES</InputLabel>
        <FormControlLabel
          control={
            <Checkbox checked={state.twitter} onChange={handleChange('twitter')} value="twitter" />
          }
          label="TWITTER"
        />
        <FormControlLabel
          control={
            <Checkbox checked={state.reddit} onChange={handleChange('reddit')} value="reddit" />
          }
          label="REDDIT"
        />
        <FormControlLabel
          control={
            <Checkbox checked={state.news} onChange={handleChange('news')} value="news" />
          }
          label="NEWS"
        />
      </FormGroup>
    );
  }

export default class Filters extends React.Component{
    constructor(props){
        super(props);
        this.state={
            topicName:'',
            countryName:'',
            sourceName:[],
            date:'',
            relevancyValue:''
        }
        
        // this.handleChange = this.handleChange.bind(this);
        this.topicname=this.topicname.bind(this);
        // this.getsentiment = this.getsentiment.bind(this);
    }

    // function getsentiment(){
    //   console.log(this.topicName)
      //   axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
      //   .then(res => {
      //   this.setState({postinfo:res.data})
      //   })
      // .catch(function (error) {
      // console.log(error);
      // })
      // }

    


    topicname(event){
        let value = event.target.value;
            this.setState({
              topicName: value,
            });
    }
    
    // countryname(event){
    //   let value = event.target.value;
    //       this.setState({
    //         countryName: value,
    //       });
    // }

    // sourcename(event){
    //   let value = event.target.value;
    //       this.setState({
    //         sourceName: value,
    //       });
    // }

    // datename(event){
    //   let value = event.target.value;
    //       this.setState({
    //         date: value,
    //       });
    // }

    // relevancyname(event){
    //   let value = event.target.value;
    //       this.setState({
    //         relevancyValue: value,
    //       });
    //}
    // function getsentiment(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    //     .then(res => {
    //     this.setState({postinfo:res.data})
    //     })
    //   .catch(function (error) {
    //   console.log(error);
    //   })
    //   }
    

    render(){
    return (


        <div className="App" style= {{backgroundColor:'grey', width: '25%'}}>
        <div style= {{ width: '25%'}}>
            <div style={{ padding: '40px' }}>
            <InputLabel id="label">TOPIC</InputLabel>
                <Select labelId="label" id="select_topic" onChange={this.topicname}>
                <MenuItem value="fdi">FDI</MenuItem>
                <MenuItem value="economy">ECONOMY</MenuItem>
            </Select>
            </div>




            <div style={{ padding: '40px' }}>
            <InputLabel id="label">COUNTRY</InputLabel>
                <Select labelId="label" id="select_country" onChange={this.countryname}>
                <MenuItem value="india">INDIA</MenuItem>
                <MenuItem value="usa">US</MenuItem>
                <MenuItem value="uk">UK</MenuItem>
                <MenuItem value="saudi">SAUDI</MenuItem>
            </Select>
            </div>


            <CheckboxLabels onChange={this.sourcename}/>



            <div style={{ padding: '40px' }}>
            <InputLabel id="label">DATE</InputLabel>
                <Select labelId="label" id="select_date" placeholder='LAST WEEK' style= {{ float: 'none'}} onChange={this.datename}>
                {/* <MenuItem value="custom"  onclick= "changeVisibility()">CUSTOM</MenuItem> */}
                <MenuItem value="present_day">PRESENT DAY</MenuItem>
                <MenuItem value="last_week">LAST WEEK</MenuItem>
                <MenuItem value="last_month">LAST MONTH</MenuItem>
                <MenuItem value="last_year">LAST YEAR</MenuItem>                
            </Select>
            
            {/* <form className={classes.container} noValidate id="customid" style={{display : "none"}}>
                <TextField
                    id="from_date"
                    label="FROM"
                    type="date"
                    defaultValue={new Date().toLocaleTimeString()}
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </form>
                <form className={classes.container} noValidate id="customid" style={{display : "none"}}>
                <TextField
                    id="to_date"
                    label="TO"
                    type="date"
                    defaultValue={new Date().toLocaleTimeString()}
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </form> */}
            </div>
            <div className={classes.root} style={{ padding: '25px', width: '100%' }} onChange={this.relevancyname}>
            <Typography id="track-false-slider" gutterBottom>
                <InputLabel id="label">RELEVANCY FILTER</InputLabel>
            </Typography>
            <Slider 
                valueLabelDisplay="auto"
                track={false} id="valuetext()"
                aria-labelledby="track-false-slider"
                getAriaValueText={valuetext}
                defaultValue={1}
                marks={marks}
                min={1}
                max={10}
            />
            </div>
            <div style={{ padding: '25px' }}>
            <Button variant="contained" color="primary" className={classes.button} onClick={this.getsentiment}>
                GET SENTIMENT
            </Button>
            </div>

        </div>
    </div>
    );
    }
}
