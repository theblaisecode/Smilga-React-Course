import { useState } from "react";
import imgPlacholder from "../../img/placeholderImg.png";
import "./Gallery.css";

function Gallery() {
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

  return (
    <section className="gallery">
      <div className="container">
        <div className="galleryContent">
          {galLength.map((item, index) => {
            console.log(item);
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
