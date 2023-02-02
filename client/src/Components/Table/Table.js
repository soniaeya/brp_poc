import Table from 'react-bootstrap/Table';
import "./Table.css"
import folderIcon from "../../Img/folderIcon.png"
import data from "../../tableData.json"
import React, {useState, useEffect, Fragment} from "react";
import {nanoid} from "nanoid";
import addButton from "../../Img/+ button.png";
import Popup from "reactjs-popup";
import axios from "axios";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const scenarios = [];
export function MyTable() {

    const [contacts, setContacts] = useState(data);

    const [editFormData, setEditFormData] = useState({
        scenarioName: '',
        createdYear: '',
        createdBy:'',
        user: ''
    });


    const [addFormData, setAddFormData] = useState({
        scenarioName: '',
        createdYear: '',
        createdBy:'',
        user: ''
    });
    const [editContactId, setEditContactId] = useState(null);


    const refreshList = () => {
        axios
        .get("http://localhost:8000/api/scenarios/")
        .then((res) => setContacts(res.data ))
        .catch((err) => console.log(err));

    }

    useEffect(() => {
        refreshList();
    
     }, []);

    const handleAddFormChange = (event) => {

        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);

    };
    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
        axios
        .put(`http://localhost:8000/api/scenarios/${editContactId}/`, newFormData)
    };
    const handleCancelClick = () => {
        setEditContactId(null);
    };
    const handleEditClick = (event, contact) => {
        event.preventDefault();
        console.log(contact.id)
        console.log(editContactId)

        setEditContactId(contact.id);
        

        const formValues = {
            scenarioName: contact.scenarioName,
            createdYear: contact.createdYear,
            createdBy: contact.createdBy,
            user: contact.user,
        };

        setEditFormData(formValues);
    };
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
        axios
        .delete(`http://localhost:8000/api/scenarios/${contactId}/`);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        let item = 
        {
            id: nanoid(),
            scenarioName: addFormData.scenarioName,
            createdYear: addFormData.createdYear,
            createdBy:addFormData.createdBy,
            user: addFormData.user,
        };
        axios
      .post("http://localhost:8000/api/scenarios/", item);

        const newContact = {
            id: nanoid(),
            scenarioName: addFormData.scenarioName,
            createdYear: addFormData.createdYear,
            createdBy:addFormData.createdBy,
            user: addFormData.user,
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);



        scenarios.push(newContact.scenarioName);
        console.log(scenarios);


    };


    return (
        <div className="tableClass">
            <form>

            <Table  size="sm" >
                <thead class="table-light">
                <tr>
                    <th className="folderIcon" rowSpan="2">Exercise</th>
                    <th className="scenarioName" rowSpan="2"></th>
                    <th className="createdYear">Season Year</th>
                    <th className="createdBy">Created By</th>
                    <th className="user">User Type</th>
                </tr>
                </thead>
                <tbody>

                {contacts.map((contact) => (
                    <Fragment>
                        {editContactId === contact.id ? (
                            <EditableRow

                                editFormData={editFormData}
                                handleEditFormChange={handleEditFormChange}
                                handleCancelClick={handleCancelClick}
                            />
                        ) : (
                            <ReadOnlyRow

                                contact={contact}
                                handleEditClick={handleEditClick}
                                handleDeleteClick={handleDeleteClick}
                            />
                        )}
                    </Fragment>


                ))}

                </tbody>
            </Table>
            </form>
            <div className="popup">
            <Popup position="top center" trigger={<img className="trigger" src={addButton} alt="addButton"></img>}>
                <div className="adding">
                    <p>Adding a Scenario</p>
                    <form onSubmit={handleAddFormSubmit}>
                        <input
                            className="scenarioName"
                            type="text"
                            name="scenarioName"
                            required="required"
                            placeholder="Scenario Name"
                            onChange={handleAddFormChange}
                        />
                        <input
                            type="text"
                            className="createdYear"
                            name="createdYear"
                            required="required"
                            placeholder="Created Year"
                            onChange={handleAddFormChange}
                        />
                        <input
                            type="text"
                            className="createdBy"
                            name="createdBy"
                            required="required"
                            placeholder="Created By"
                            onChange={handleAddFormChange}
                        />
                        <input
                            type="text"
                            className="user"
                            name="user"
                            required="required"
                            placeholder="User Type"
                            onChange={handleAddFormChange}
                        />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </Popup>
            </div>
        </div>
    );
}

export default MyTable;
