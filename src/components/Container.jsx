import React, { useState } from "react";
import Header from "./Header";
import Gallery from "./Gallery";
import { images } from "./imagesData";

function Container() {
    const [data, setData] = useState(images);
    const [selectedItem, setSelectedItem] = useState([]);

    return (
        <div className="bg-white h-full rounded-md shadow">
            <Header
                data={data}
                setData={setData}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />
            <Gallery
                data={data}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />
        </div>
    );
}

export default Container;
