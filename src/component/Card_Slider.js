import React from "react";
import "../css/CardSlider.css";
import IMAGES from "../component/Images";
export default function Card_Slider() {
 
  const slider = [
    {
      src: IMAGES.USER,
      name: "Jone Deow",
      profassion: "Java Tranier",
      disc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      src: IMAGES.USER,
      name: "Jonney",
      profassion: "AI Data Science Tranier",
      disc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      src: IMAGES.USER,
      name: "Shimran",
      profassion: "MERN Tranier",
      disc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      src: IMAGES.USER,
      name: "Adit ",
      profassion: "Placement Officer",
      disc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      src: IMAGES.USER,
      name: "Head",
      profassion: "Java Tranier",
      disc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      src: IMAGES.USER,
      name: "Shalani Mam",
      profassion: "Soft Tranier",
      disc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      src: IMAGES.USER,
      name: "Olio ",
      profassion: "Aptitue Tranier",
      disc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div>
      <div className="coursesHeader">OUR FACULTIES</div>
      <div className="mainContainor">
        <div className="cardContainor">
          {slider.map((item, index) => {
            return (
              <div className="card">
                <div className="imageContainor">
                  <img src={IMAGES.USER} className="imageStyle" />
                </div>
                <div className="containorSection">
                  <h5>{item.name}</h5>
                  <p>{item.profassion}</p>
                  <p className="descriptionSection">{item.disc}</p>
                  <div className="buttonStyle">
                    <p>Read More</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
