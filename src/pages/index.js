import React from "react";
import Layout from '../Layout/Layout.js';
import { rules, subjects } from '../storage/data.js';
import Header from '../components/Header/Header.js';
import Form from '../components/Form/Form.js';
import Rules from '../components/PointsRules/Rules.js';
import Footer from '../components/Footer/Footer.js';
import Result from '../components/Result/Result.js';
import styled from 'styled-components';
//import { Link } from "gatsby"

const StyledWrapper = styled.div`
    ${({theme}) => theme.queries.desktop} {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

class IndexPage extends React.Component {

  state = {
    rules: rules,
    selectValue: 'matematyka',
    subjects: subjects,
    checked: false,
    resultComp: 0,
    close: true,
  };

  check = (item, value, name) => {
     
      const subjectsNames = ["basicMain", "extMain", "basicPolish", "extPolish", "basicForeign", "extForeign"];
      
      for(let i=0; i<subjectsNames.length; i+=2) {
      if(name === subjectsNames[i] && value !== "") {
        if(item.subject === subjectsNames[i+1]) {
          item.disabled = true;
        }
      } else if(name === subjectsNames[i] && value === "") {
        if(item.subject === subjectsNames[i+1]) {
          item.disabled = false;
        }
      }

      if(name === subjectsNames[i+1] && value !== "") {
        if(item.subject === subjectsNames[i]) {
          item.disabled = true;
        }
      } else if(name === subjectsNames[i+1] && value === "") {
        if(item.subject === subjectsNames[i]) {
          item.disabled = false;
        }
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.id)
    const { id } = event.target;
    const newArr = this.state.subjects.filter(item => {
      if(item.disabled === false && item.value) return item;
    });
    //Calculating points are made here
    let main;
    let polish;
    let foreign;
    const wieloJezyczna = this.state.checked ? 0.15 : 0.1;
    //loop which is calculating points for every subject
    newArr.forEach((item, i) => {
      if(i === 0) {
        if(item.subject.substr(0, 5) === "basic") {
          main = (item.value * 0.6).toFixed(2);
        } else main = (item.value * 1).toFixed(2);
      }

      if(i === 1) {
        if(item.subject.substr(0, 5) === "basic") {
          polish = (0.1 * item.value * 0.6).toFixed(2);
        } else polish = (0.1 * item.value * 1).toFixed(2);
      }

      if(i === 2) {
        if(item.subject.substr(0, 5) === "basic") {
          foreign = (wieloJezyczna * item.value * 0.6).toFixed(2);
        } else foreign = (wieloJezyczna * item.value * 1).toFixed(2);
      }
    });
    //Changing type to float becouse strings cannot be added to each other
    let result = (parseFloat(main) + parseFloat(polish) + parseFloat(foreign));

    //Result !!!
    result = parseFloat(result.toFixed(2));
    if(isNaN(result) || result === 0) result = 'Pola muszą być uzupełnione';

    // If it's form show values if it's not then do sth with other form
    id === "imp" && this.setState({resultComp: result, close: true});
    
  }

  handleClick = (event, id) => {
   // console.log('elo', id, event);
    const { type } = event;
    const newRules = this.state.rules.filter(item => {
      if(id === item.id) {
        item.clicked = !item.clicked;
      }
      return item;
    });
    //console.log(newRules)
    type === "click" ? this.setState({close: false})
    : this.setState({rules: newRules});
  }

  handleChange = (event) => {
    const {name, type} = event.target;
    let {value} = event.target;
    //Checking if value is correct, if not it's changing to 100 or 0
    //It depends if value is lower than 0 or higher than 100
    if (value < 0) value = "";
    if (value > 100) value = 100;
    const newSub = this.state.subjects.map(item => {

      this.check(item, value, name);

      if(name === item.subject) {
        item.value = value;
      }
      return item;
    });

    type === 'select-one' ?
    this.setState({selectValue: value})
    : type === 'checkbox' ?
    this.setState(prevState => { return {checked: !prevState.checked} })
    : this.setState({subjects: newSub});
  }

  render() {
    //const expression = this.state.resultComp === 0 ? false : true;
    const expression = isNaN(this.state.resultComp) ? true : false;
    return (
      <Layout>
        <Header />
        {expression ? <Result
          data={this.state.resultComp}
          close={this.state.close}
          handleClick={this.handleClick}
        ></Result> : null}
        <StyledWrapper>
          <Form 
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange}
            {...this.state}
          />
          <Rules
            {...this.state}
            data={this.state.rules}
            selectValue={this.state.selectValue}
            handleClick={this.handleClick}
            handleChange={this.handleChange}
          />
        </StyledWrapper>
        <Footer handleSubmit={this.handleSubmit}/>
      </Layout>
    );
  }
}

export default IndexPage;
