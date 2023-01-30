import Table from 'react-bootstrap/Table';
import "./Table.css"
import folderIcon from "../../Img/folderIcon.png"
import data from "../../tableData.json"
import React, {useState, useEffect} from "react";
import {nanoid} from "nanoid";
import addButton from "../../Img/+ button.png";
import Popup from "reactjs-popup";
import axios from "axios";

export function MyTable() {


    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        scenarioName: '',
        createdYear: '',
        createdBy:'',
        user: ''
    });

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/scenario/")
        .then((res) => setContacts(res.data ))
        .catch((err) => console.log(err));
    
     }, []);

    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        let item = 
        {
            id: nanoid(),
            title: addFormData.scenarioName,
            createdBy: addFormData.createdBy,
        };
        axios
      .post("http://localhost:8000/api/scenario/", item);

        const newContact = {
            id: nanoid(),
            scenarioName: addFormData.scenarioName,
            createdYear: addFormData.createdYear,
            createdBy:addFormData.createdBy,
            user: addFormData.user,
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    return (
        <div className="tableClass">

            <Table  responsive="sm" striped>
                <thead class="table-light">
                <tr>
                    <th className="folderIcon"></th>
                    <th>Scenario Name</th>
                    <th>Created By</th>
                    <th>User Type</th>
                    <th>Created Year</th>
                </tr>
                </thead>
                <tbody>

                {contacts.map((contact) => (
                    <tr>
                        <td className="folderIcon"><img src={folderIcon} alt="brp_logo"></img></td>
                        <td>{contact.scenarioName}</td>
                        <td>{contact.createdYear}</td>
                        <td>{contact.createdBy}</td>
                        <td>{contact.user}</td>
                    </tr>

                ))}

                </tbody>
            </Table>
            <div className="popup">
            <Popup trigger={<img className="trigger" src={addButton} alt="addButton"></img>}>
                <div className="adding">
                    <p>Adding a Scenario</p>
                    <form onSubmit={handleAddFormSubmit}>
                        <input
                            type="text"
                            name="scenarioName"
                            required="required"
                            placeholder="Scenario Name"
                            onChange={handleAddFormChange}
                        />
                        <input
                            type="text"
                            name="createdYear"
                            required="required"
                            placeholder="Created Year"
                            onChange={handleAddFormChange}
                        />
                        <input
                            type="text"
                            name="createdBy"
                            required="required"
                            placeholder="Created By"
                            onChange={handleAddFormChange}
                        />
                        <input
                            type="text"
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
