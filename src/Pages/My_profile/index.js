
import React from "react";

  
  function Dashboard() {

    const handleChange = (e) => {
 
    };
  
    const handleSubmit = (e) => {
     
    };
  
    return (
      <div className="profdata">
        <h1 className="title">My Personal Information</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <div className='div1'>
          <div>
            <label htmlFor="name">Name</label><br/>
            <textarea
              rows="2"
              cols="30"
              id="Name"
              placeholder="firstname sirname"
              // value={formData.name}
              // onChange={handleChange}
            />
          </div>
          <div className='Email'>
            <label htmlFor="email">Email</label><br/>
            <textarea
              rows="2"
              cols="30"
              id="email"
              placeholder="example@xyz.com"
              // value={formData.email}
              // onChange={handleChange}
            />
          </div>
          </div>
          <br/>
          <div className='div2'><br/>
          <div>
            <label htmlFor="number">Number</label><br/>
            <textarea
              rows="2"
              cols="30"
              id="number"
              placeholder="123456789"
              // value={formData.number}
              // onChange={handleChange}
            />
          </div><br/>
          <div className='Institute'>
            <label htmlFor="institute">Institute</label><br/>
            <textarea
              rows="2"
              cols="30"
              id="institute"
              placeholder="Example University"
              // value={formData.institute}
              // onChange={handleChange}
            />
          </div>
          </div><br/>
          <div className='Designation'>
            <label htmlFor="designation">Designation</label><br/>
            <textarea
              rows="2"
              cols="30"
              id="designation"
              placeholder="student/teacher/administrator"
              // value={formData.designation}
              // onChange={handleChange}
            />
          </div>
       
        </form>
      </div>
      </div>
    );
  }
  
  export default Dashboard;
  