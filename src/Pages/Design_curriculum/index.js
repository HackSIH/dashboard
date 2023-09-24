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
      subjectcode: '',
      subjectname: '',
      semester: '',
      Branch: '',
      institute: '',
      credits: '',
      curriculum: '',
      learningOutcome: '',
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
      <FormContainer className='curr'>
        <Form onSubmit={this.handleSubmit}>
         <div className='subject'> 
        <FormGroup >
            <Label htmlFor="subjectcode">Subject Code:</Label>
            <Input
            size="10"
              type="text"
              id="subjectcode"
              name="subjectcode"
              value={this.state.subjectcode}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup className='name'>
            <Label htmlFor="subjectname">Subject Name:</Label>
            <Input
            size="10"
              type="text"
              id="subjectname"
              name="subjectname"
              value={this.state.subjectname}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          </div>
          <div className='sem_branch'>
          <FormGroup>
            <Label htmlFor="semester">Semester:</Label>
            <Input
            size="14"
              type="text"
              id="semester"
              name="semester"
              value={this.state.semester}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup className='branch'>
            <Label htmlFor="branch">Branch:</Label>
            <Input
            size="18"
              type="text"
              id="branch"
              name="branch"
              value={this.state.branch}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          </div>
          <div className='inst_credits'>
          <FormGroup>
            <Label htmlFor="institute">Institute:         </Label>
            <Input
            size="14"
              type="text"
              id="institute"
              name="institute"
              value={this.state.institute}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup className='credits'>
            <Label htmlFor="credits">Credits:</Label>
            <Input
            size="18"
              type="text"
              id="credits"
              name="credits"
              value={this.state.credits}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          </div>
          <FormGroup>
            <Label htmlFor="curriculum" className='curriculum'>Curriculum:</Label>
            <TextArea
            rows="4" cols="50"
              id="curriculum"
              name="curriculum"
              value={this.state.curriculum}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="learningOutcome">Learning Outcome:</Label>
            <TextArea
            rows="4" cols="50"
              id="learningOutcome"
              name="learningOutcome"
              value={this.state.learningOutcome}
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