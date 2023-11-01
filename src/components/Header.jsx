import React, { useState } from "react";

function Header() {
    const [selectedFiles] = useState(false);
    return (
        <div className="border-b-[2px] border-iron px-5 py-3 flex flex-row justify-between">
            {!selectedFiles ? (
                <h1 className="text-24 font-bold text-woodsmoke">Gallery</h1>
            ) : (
                <h1 className="text-18 font-bold text-woodsmoke">
                    3 Files Selected
                </h1>
            )}
            {selectedFiles && (
                <h1 className="text-14 text-alizarin_crimson font-semibold">
                    Delete files
                </h1>
            )}
        </div>
    );
}

export default Header;
