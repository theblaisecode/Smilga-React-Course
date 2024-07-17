import { useState } from "react";
import imgPlacholder from "../../img/placeholderImg.png";
import "./Gallery.css";
import { useQuery } from "@tanstack/react-query";
import unsplashCustomInstance from "../baseUrl";


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

  const result = useQuery({
    queryKey: ["unSplashImages"],
    queryFn: unsplashCustomInstance.get("/"),
  });
  console.log(result);

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
