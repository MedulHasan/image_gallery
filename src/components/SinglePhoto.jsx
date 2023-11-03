/* eslint-disable react/prop-types */
import React from "react";

function SinglePhoto({ selectedItem, setSelectedItem, item, index }) {
    const handleChange = (e) => {
        const isSelected = e.target.checked;
        const value = Number(e.target.value);

        if (isSelected) {
            setSelectedItem([...selectedItem, value]);
        } else {
            setSelectedItem((prev) => prev.filter((id) => id != value));
        }
    };
    return (
        <div
            className={`relative group ${
                index === 0 ? "col-span-2 row-span-2" : ""
            } hover:scale-[0.99] duration-500`}
        >
            <img
                src={item?.value}
                alt={`image-${index + 1}`}
                className="border-2 border-iron rounded-lg w-full h-full object-cover"
            />
            <input
                type="checkbox"
                name={`checkbox-${index + 1}`}
                id={`checkbox-${index}`}
                value={item?.id}
                checked={selectedItem.includes(item?.id)}
                className={`absolute top-5 left-5 h-5 w-5 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity z-10 isCheck`}
                onChange={handleChange}
            />
            {/* Overlay with additional content */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-black bg-opacity-50 p-4 text-white text-center w-full h-full rounded-lg"></div>
            </div>
        </div>
    );
}

export default SinglePhoto;
