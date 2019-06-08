import React from "react";
import Layout from '../Layout/Layout.js';
import { rules, subjects } from '../storage/data.js';
import Header from '../components/Header/Header.js';
import Form from '../components/Form/Form.js';
import Rules from '../components/PointsRules/Rules.js';
import Footer from '../components/Footer/Footer.js';
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
  };

  check(item, value, name) {
     
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
    console.log('elo', event.target);
    const newArr = this.state.subjects.filter(item => {
      if(item.disabled === false && item.value) return item;
    });
    console.log(newArr);
    //let word = 'basicSth';
    //word.substr(0, 5)

    const result = newArr.map((item, i) => {
      if(item.subject.substr(0, 5) === "basic") {
        console.log('elo');
      }
      if(i === 0) {
        
      }
    });
  }

  handleClick = (id) => {
    console.log('elo', id);
    const newRules = this.state.rules.filter(item => {
      if(id === item.id) {
        item.clicked = !item.clicked;
      }
      return item;
    });
    console.log(newRules)
    this.setState({rules: newRules});
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
    
      return ( 
      <Layout>
        <Header />
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
