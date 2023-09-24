import React, { Component } from 'react';
import styled from 'styled-components';
const FormContainer = styled.div`
  max-width: 700px;
  margin: auto 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  `
  
class CurriculumForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curriculum: '',
      resources: '',
      credits: '',
      learningOutcome: '',
      instituteName: '',
      semester: '',
      branch: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1 className='descurr'>Design Your Curriculum Here </h1>
      <FormContainer>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="curriculum" className='curriculum'>Curriculum:</Label>
            <TextArea
              id="curriculum"
              name="curriculum"
              value={this.state.curriculum}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="resources">Resources:</Label>
            <TextArea
              id="resources"
              name="resources"
              value={this.state.resources}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="credits">Credits:</Label>
            <Input
              type="text"
              id="credits"
              name="credits"
              value={this.state.credits}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="learningOutcome">Learning Outcome:</Label>
            <TextArea
              id="learningOutcome"
              name="learningOutcome"
              value={this.state.learningOutcome}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="instituteName">Institute Name:</Label>
            <Input
              type="text"
              id="instituteName"
              name="instituteName"
              value={this.state.instituteName}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="semester">Semester:</Label>
            <Input
              type="text"
              id="semester"
              name="semester"
              value={this.state.semester}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="branch">Branch:</Label>
            <Input
              type="text"
              id="branch"
              name="branch"
              value={this.state.branch}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">Upload</Button>
        </Form>
      </FormContainer>
      </div>
    );
  }
}

export default CurriculumForm;