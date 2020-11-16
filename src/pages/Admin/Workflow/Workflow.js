import React, { useState, useEffect, useRef } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Styles from "./Workflow.module.css";
import WorkflowTable from "./Table";
import Form1 from "react-validation/build/form";
import Input from "react-validation/build/input";
import PhaseDataService from "../../../services/phase.service";
import WorkflowDataService from "../../../services/workflow.service";
import CheckButton from "react-validation/build/button";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
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
  const [columns, setColumns] = useState(() => {
    return {
      phases: {
        name: "Phases",
        items: [],
      },
      workflow: {
        name: "Workflow",
        items: [],
      },
    };
  });

  const retrievePhases = async () => {
    await PhaseDataService.getAll()
      .then((response) => {
        setColumns((previousState) => {
          previousState.phases.items = response.data.data;
          return { ...previousState };
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrievePhases();
  }, []);

  const form = useRef();
  const checkBtn = useRef();

  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [phases, setPhases] = useState([]);

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangePhases = (e) => {
    const phases = e.target.value;
    setPhases(phases);
  };
  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const handleCreateWorkflow = (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    setMessage("");

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      var workflowIds = [];
      for (var item of columns.workflow?.items) {
        workflowIds.push(item._id);
      }
      WorkflowDataService.create(name, description, workflowIds).then(
        (response) => {
          setMessage(response.data.message);
          // retrievePhases();
          setLoading(false);
          setSuccessful(true);
        },
        (error) => {
          const resMessage = error.response.data.message;
          error.toString();
          setSuccessful(false);
          setLoading(false);
          setMessage(error.response.data.message);
          console.log(error.response.data.message);
          // setTimeout(function () {
          //   setMessage("");
          // }, 1000);
        }
      );
    } else {
      setLoading(false);
    }
  };

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
                          minHeight: 700,
                        }}
                      >
                        {index === 1 ? (
                          <Form1
                            onSubmit={handleCreateWorkflow}
                            ref={form}
                            className={Styles.form}
                          >
                            <div style={{ marginBottom: "0px" }}>
                              <label style={{ fontSize: "12px" }}>Name:</label>
                              <Input
                                style={{
                                  width: "100%",
                                  height: "40px",
                                  outline: "none",
                                  border: "1px solid #4f26aa",
                                }}
                                placeholder="Enter Workflow Name"
                                type="text"
                                name="name"
                                onChange={onChangeName}
                                validations={[required]}
                              />

                              <label style={{ fontSize: "12px" }}>
                                Description:
                              </label>
                              <textarea
                                style={{
                                  width: "100%",
                                  height: "40px",
                                  outline: "none",
                                  border: "1px solid #4f26aa",
                                }}
                                placeholder="Describe Workflow"
                                type="text"
                                name="description"
                                onChange={onChangeDescription}
                                validations={[required]}
                              ></textarea>
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

                            <div style={{ minHeight: "150px" }}>
                              {column.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item._id}
                                    draggableId={item._id}
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
                                          <input
                                            style={{
                                              visibility: "hidden",
                                              position: "absolute",
                                            }}
                                            type="text"
                                            name="phases"
                                            value={item._id}
                                            onChange={onChangePhases}
                                          ></input>
                                          {item.name}
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
                              {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                              )}
                              Create Workflow
                            </button>

                            <span>
                              {message && (
                                <div className="form-group">
                                  <div
                                    className={
                                      successful
                                        ? "alert alert-success"
                                        : "alert alert-danger"
                                    }
                                    role="alert"
                                  >
                                    {message}
                                  </div>
                                </div>
                              )}
                            </span>

                            <CheckButton
                              style={{ display: "none" }}
                              ref={checkBtn}
                            />
                          </Form1>
                        ) : (
                          <div>
                            <div style={{ minHeight: "250px" }}>
                              {column.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item._id}
                                    draggableId={item._id}
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
                                          <input
                                            type="text"
                                            name="phases"
                                            value={item._id}
                                            onChange={onChangePhases}
                                            style={{
                                              visibility: "hidden",
                                              position: "absolute",
                                            }}
                                          ></input>
                                          {item.name}
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
