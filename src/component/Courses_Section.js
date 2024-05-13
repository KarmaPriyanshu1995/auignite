import React from "react";
import "../css/Courses_Section.css";
import IMAGES from "./Images";
export default function Courses_Section() {
  return (
    <div>
      <div className="coursesHeader">Courses_Section</div>
      <div className="coursesCard">
        <img src={IMAGES.FULL_STACK} className="coursesImageStyle" />
        <div className="subjectSection">
          <h1>Full Stack</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="buttonContainor">
          <button className="buttonStyle">Read More</button>
          </div>
          
        </div>
        
      </div>
      <div className="coursesCard">
       
        <div className="subjectSection">
          <h1>SalseForce</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="buttonContainor">
          <button className="buttonStyle">Read More</button>
          </div>
        </div>
          <img src={IMAGES.SALES_FORCE} className="coursesImageStyle" />
        
      </div>
      <div className="coursesCard">
        <img src={IMAGES.AI_DATA_SCIENCE} className="coursesImageStyle" />
        <div className="subjectSection">
          <h1>AI Data Science</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="buttonContainor">
          <button className="buttonStyle">Read More</button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
