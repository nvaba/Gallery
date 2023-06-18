import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

interface PhotoData {
  acf: {
    photography_repeater: {
      photography_image: {
        url: string;
        alt: string;
      };
      photography_title: string;
      photography_date: string;
    }[];
  };
}

function Photography() {
  const [data, setData] = useState<PhotoData>({
    acf: { photography_repeater: [] },
  });

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get<PhotoData[]>(
          "https://nateabaria.ca/naportfolio/wp-json/wp/v2/photography?acf_format=standard"
        );
        if (response.data.length > 0) {
          setData(response.data[0]);
          console.log(response.data[0].acf.photography_repeater);
        }
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <section className="mt-20">
      <h2 className="text-xl xl:text-3xl">Photography</h2>
      <div className="custom-grid mt-5">
        {data.acf.photography_repeater.map((photoGroup, index) => (
          <article
            style={{ breakInside: "avoid", marginBottom: "2rem" }}
            key={index}
          >
            <img
              className="w-full"
              src={photoGroup.photography_image.url}
              alt={photoGroup.photography_image.alt}
            />
            <div className="flex justify-between">
              <p>{photoGroup.photography_title}</p>
              <p>{photoGroup.photography_date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Photography;
