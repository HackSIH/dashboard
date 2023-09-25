import React, { Component } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';


const UploadContainer = styled.div`
  max-width: 900px;
  margin: 100px 400px;
  .curbut{    
    background: #B9DFFF;
    color: #fff;
    border: 1px solid #eee;
    border-radius: 20px;
    box-shadow: 5px 5px 5px #eee;
    text-shadow: none;
}
.curbut:hover {
background: #016ABC;
color: #fff;
border: 1px solid #eee;
border-radius: 20px;
box-shadow: 5px 5px 5px #eee;
text-shadow: none;
}

  }
`;

const FileUploadContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const FileUploadBox = styled.div`
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
`;

class CurriculumResourceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pdfFiles: [],
      mediaFiles: [],
      links: [],
    };
  }

  handlePdfDrop = (acceptedFiles) => {
    this.setState({ pdfFiles: acceptedFiles });
  };

  handleMediaDrop = (acceptedFiles) => {
    this.setState({ mediaFiles: acceptedFiles });
  };

  handleLinkInputChange = (e) => {
    const link = e.target.value;
    this.setState((prevState) => ({
      links: [...prevState.links, link],
    }));
    e.target.value = '';
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server or perform other actions.
    // For now, let's just log the form data.
    console.log(this.state);
  };

  render() {
    return (
      <div>
      <h1 className='res'>Upload Resources</h1>
      <UploadContainer>
        <form onSubmit={this.handleSubmit}>
          <FileUploadContainer>
            <Label>Upload PDF:</Label>
            <FileUploadBox>
              <Dropzone onDrop={this.handlePdfDrop}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some PDF files here, or click to select files</p>
                  </div>
                )}
              </Dropzone>
            </FileUploadBox>
            {this.state.pdfFiles.map((file) => (
              <div key={file.name}>
                PDF File: {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </div>
            ))}
          </FileUploadContainer>

          <FileUploadContainer>
            <Label>Upload Media (Video/Photo):</Label>
            <FileUploadBox>
              <Dropzone onDrop={this.handleMediaDrop}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some media files here, or click to select files</p>
                  </div>
                )}
              </Dropzone>
            </FileUploadBox>
            {this.state.mediaFiles.map((file) => (
              <div key={file.name}>
                Media File: {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </div>
            ))}
          </FileUploadContainer>

          <div>
            <Label>Add Links:</Label>
            <input
              type="text"
              onChange={this.handleLinkInputChange}
              placeholder="Enter a URL and press Enter"
            />
            <ul>
              {this.state.links.map((link, index) => (
                <li key={index}>
                  Link {index + 1}: {link}
                </li>
              ))}
            </ul>
          </div>

          <button className='curbut' type="submit">Submit</button>
        </form>
      </UploadContainer>
      </div>
    );
  }
}

export default CurriculumResourceForm;
