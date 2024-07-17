import { useState } from "react";
import imgPlacholder from "../../img/placeholderImg.png";
import "./Gallery.css";
import { useQuery } from "@tanstack/react-query";

function Gallery({ isDarkMode }) {
  const [galLength, setGalLength] = useState([
    { img: imgPlacholder },
    { img: imgPlacholder },
    { img: imgPlacholder },
    { img: imgPlacholder },
    { img: imgPlacholder },
    { img: imgPlacholder },
    { img: imgPlacholder },
    { img: imgPlacholder },
    { img: imgPlacholder },
    { img: imgPlacholder },
  ]);

  const getImages = useQuery()

  return (
    <section
      className="gallery"
      style={{ backgroundColor: isDarkMode ? "#333" : "#fff" }}>
      <div className="container">
        <div className="galleryContent">
          {galLength.map((item, index) => {
            return (
              <div key={index} className="imgPreview">
                <img src={item.img} />;
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
