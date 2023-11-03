/* eslint-disable react/prop-types */
import React from "react";
import blankImage from "../assets/images/image-loader-icon.png";
import "./styles.css";
import SinglePhoto from "./SinglePhoto";

function Gallery({ data, selectedItem, setSelectedItem }) {
    return (
        <div className="grid grid-cols-5 gap-6 p-10">
            {data.map((item, index) => (
                <SinglePhoto
                    key={index}
                    index={index}
                    item={item}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                />
            ))}

            <div
                className={`border-[2px] border-iron border-dashed rounded-lg flex flex-col items-center justify-center ${
                    data.length <= 1 && "h-44 w-44"
                }`}
            >
                <img src={blankImage} alt="" className="h-14 w-14" />
                <h1 className="text-24 font-semibold mt-5">Add Image</h1>
            </div>
        </div>
    );
}

export default Gallery;
