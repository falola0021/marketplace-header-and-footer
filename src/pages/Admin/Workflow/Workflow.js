import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import Styles from "./Workflow.module.css";
import WorkflowTable from "./WorkflowTable";

const itemsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Phases",
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: "Workflow",
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function DND() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={columnId}
            >
              <div className={Styles.title}>{column.name}</div>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "#ffeaed"
                            : "#ffffff",
                          padding: 4,
                          width: 250,
                          minHeight: 500,
                        }}
                      >
                        {index === 1 ? (
                          <form>
                            <div style={{ marginBottom: "0px" }}>
                              <label>Name:</label>
                              <input
                                style={{
                                  width: "100%",
                                  height: "40px",
                                  outline: "none",
                                  border: "1px solid #4f26aa",
                                }}
                                placeholder="Enter Workflow Name"
                              ></input>
                              <label
                                style={{
                                  textAlign: "center",
                                  marginTop: "5px",
                                  width: "100%",
                                }}
                              >
                                Drop and arrange Phases
                              </label>
                              <div
                                style={{
                                  textAlign: "center",
                                  marginBottom: "5px",
                                  width: "100%",
                                }}
                                className="fa fa-arrow-down"
                              ></div>
                            </div>

                            <div style={{ minHeight: "250px" }}>
                              {column.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => {
                                      return (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={{
                                            userSelect: "none",
                                            padding: 10,
                                            margin: "0 0 8px 0",
                                            minHeight: "0px",
                                            backgroundColor: snapshot.isDragging
                                              ? "#4f26aa"
                                              : "#f9f9f9",
                                            color: snapshot.isDragging
                                              ? "#ffffff"
                                              : "#4f26aa",
                                            border: "1px solid #4f26aa",

                                            ...provided.draggableProps.style,
                                          }}
                                        >
                                          {item.content}
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                            </div>
                            {provided.placeholder}

                            <button
                              style={{
                                width: "100%",
                                height: "40px",
                                outline: "none",
                                backgroundColor: "#4f26aa",
                                color: "#ffffff",
                                border: "none",
                                fontWeight: "bold",
                              }}
                            >
                              Create Workflow
                            </button>
                          </form>
                        ) : (
                          <div>
                            <div style={{ minHeight: "250px" }}>
                              {column.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => {
                                      return (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={{
                                            userSelect: "none",
                                            padding: 10,
                                            margin: "0 0 8px 0",
                                            minHeight: "0px",
                                            backgroundColor: snapshot.isDragging
                                              ? "#4f26aa"
                                              : "#f9f9f9",
                                            color: snapshot.isDragging
                                              ? "#ffffff"
                                              : "#4f26aa",
                                            border: "1px solid #4f26aa",

                                            ...provided.draggableProps.style,
                                          }}
                                        >
                                          {item.content}
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                            </div>
                            {provided.placeholder}
                          </div>
                        )}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
      <div>
        <WorkflowTable />
      </div>
    </div>
  );
}

export default DND;
