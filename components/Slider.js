import React from "react";
import SC from "../styles/Slider.module.css";
import SliderBox from "./SliderBox";

export default function Slider({ data }) {
  return (
    <>
      {!data && <div>Result not found</div>}
      {data && (
        <div className={SC.slider}>
          <div className={SC.sliderCol}>
            {data.map((movies) => {
              const {
                medium_cover_image,
                rating,
                slug,
                genres,
                date_uploaded,
                title,
                id,
              } = movies;
              return (
                <SliderBox
                  key={slug}
                  medium_cover_image={medium_cover_image}
                  rating={rating}
                  slug={slug}
                  genres={genres}
                  date_uploaded={date_uploaded}
                  title={title}
                  id={id}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
