import React from "react";
import Layout from '../Layout/Layout.js';
import { rules } from '../storage/rules.js';
import Header from '../components/Header/Header.js';
import Form from '../components/Form/Form.js';
import Rules from '../components/PointsRules/Rules.js';
import Footer from '../components/Footer/Footer.js';
import styled from 'styled-components';
import shortid from 'short-id';
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
    basicMain: 0,
    extMain: 0,
    basicPolish: 0,
    extPolish: 0,
    basicForeign: 0,
    extForeign: 0,
    subjects: [
      {basicMain: 0},
      {extMain: 0},
      {basicPolish: 0},
      {extPolish: 0},
      {basicForeign: 0},
      {extForeign: 0}
    ]
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('elo', event.target);
    let newArr = this.state.subjects.filter((item, i) => {
      if(i === 5) return item;
    })
    console.log(newArr);
    const { id } = event.target;
    if(id === 'imp') {
      
    }
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
    const {value, type, name} = event.target;
    // //console.log(type)
    // type === 'select-one' ? this.setState( prevState => {
    //   return {
    //     selectValue: prevState.value = value
    //   }
    // })
    // : this.setState({[name]: value});
    let test = [...this.state.subjects];
    //console.log(test)
    
    // const tescik = test.filter((item, i) => {
    //   console.log(item.name)
    //   //console.log(name)
    //   return item.name;
    // })
    //console.log(this.state.subjects[0][name]);
    const subjects = this.state.subjects.map(item => {
      //if(item === name) item = value;
      item[name] = value;
      return item;
    })
    //console.log(newArr)

    this.setState(prevState => {
      const subjects = this.state.subjects.map(item => {
        //if(item === name) item = value;
        item[name] = value;
        return item;
      })
      return {subjects,};
    });
  }

  render() {
    
      console.log(this.state)
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
