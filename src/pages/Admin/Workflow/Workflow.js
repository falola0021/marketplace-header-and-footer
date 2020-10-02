import React, { useState } from "react";

import Styles from "./Workflow.module.css";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import WorkflowTable from "./WorkflowTable";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const itemsFromBackend = [
  { id: uuidv4(), content: "First phase" },
  { id: uuidv4(), content: "Second phase" },
  { id: uuidv4(), content: "Third phase" },
  { id: uuidv4(), content: "Fourth phase" },
  { id: uuidv4(), content: "Fifth phase" },
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: "Requested",
    items: itemsFromBackend,
  },
  // [uuidv4()]: {
  //   name: "To do",
  //   items: [],
  // },
};

const columnsFromBackend2 = {
  // [uuidv4()]: {
  //   name: "Requested",
  //   items: itemsFromBackend,
  // },
  [uuidv4()]: {
    name: "To do",
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

function Appp() {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
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
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500,
                        }}
                      >
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
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      color: "white",
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
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

function Workflow() {
  return (
    <>
      <div className={Styles.body}>
        <p className={Styles.title}>Workflow</p>
        <Appp />

        <Row className={Styles.usercontainer}>
          <Col sm="8" className={Styles.userbox}>
            <div className={Styles.heading}>Available Phases</div>
          </Col>
          <Col className={Styles.userbox}>
            <div className={Styles.heading}>Create Workflow</div>
            <form></form>
          </Col>{" "}
        </Row>

        <WorkflowTable />
      </div>
    </>
  );
}

export default Workflow;
