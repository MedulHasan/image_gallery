/* eslint-disable react/prop-types */
import React from "react";
import blankImage from "../assets/images/image-loader-icon.png";
import "./styles.css";
import SinglePhoto from "./SinglePhoto";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Gallery({ data, setData, selectedItem, setSelectedItem }) {
    console.log(data);
    const handleDragEnd = (result) => {
        console.log(result);
        const { destination, source } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        )
            return;

        const draggableItem = data.find((item) => item.id == source.index);
        const restItem = data.filter((item) => item.id != source.index);
        restItem.splice(destination?.index, 0, draggableItem);
        setData(restItem);
        console.log(draggableItem);
        console.log("restItem", restItem);
        //[1,2,3,4,5,6]
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId={"1"}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="grid grid-cols-5 gap-6 p-10"
                    >
                        {data.map((item, index) => (
                            <SinglePhoto
                                key={index}
                                index={index}
                                item={item}
                                selectedItem={selectedItem}
                                setSelectedItem={setSelectedItem}
                            />
                        ))}
                        {provided.placeholder}
                        <div
                            className={`border-[2px] border-iron border-dashed rounded-lg flex flex-col items-center justify-center ${
                                data.length <= 1 && "h-44 w-44"
                            }`}
                        >
                            <img
                                src={blankImage}
                                alt=""
                                className="h-14 w-14"
                            />
                            <h1 className="text-24 font-semibold mt-5">
                                Add Image
                            </h1>
                        </div>
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default Gallery;
