import { MdOutlineStarPurple500 } from "react-icons/md";
import Link from "next/link";
import SB from "../styles/Slider.module.css";
import React from "react";
import Image from "next/image";

export default function SliderBox({
  medium_cover_image,
  rating,
  slug,
  genres,
  date_uploaded,
  title,
  id,
}) {
  // console.log(genres);
  // const getID = (e) => {

  // };

  return (
    <>
      <div className={SB.sliderBox}>
        <div className={SB.imgcontains}>
          <Image
            src={medium_cover_image}
            alt=""
            layout="fixed"
            height={250}
            width={160}
            objectFit="cover"
          />
        </div>

        <div className={SB.detailsBox}>
          <h3 className={SB.h3}>{title}</h3>
          <div className={SB.rating}>
            <MdOutlineStarPurple500
              color="blue"
              style={{ fontSize: "2rem", color: "purple" }}
              className={SB.icon}
            />
            <span className={SB.spanrating}>{rating}</span>
          </div>
          <button className={SB.donwloadBtn}>
            <Link href={`/download/${id}`}>DownLoad Now</Link>
          </button>
          <div className={SB.generes}>
            <h5 className={SB.h5}>genres</h5> :
            {genres === undefined
              ? "Not Available"
              : genres.map((gen) => {
                  return (
                    <button className={SB.button} value={gen} key={gen}>
                      {gen}
                    </button>
                  );
                })}
            <span className={SB.span}>{date_uploaded}</span>;
          </div>
        </div>
      </div>
    </>
  );
}
