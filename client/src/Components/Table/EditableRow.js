import React from "react";
import folderIcon from "../../Img/folderIcon.png";
import "./EditableRow.css"

const EditableRow = ({
                         editFormData,
                         handleEditFormChange,
                         handleCancelClick,
                     }) => {
    return (
        <tr>
            <td className="folderIcon"><img src={folderIcon} alt="brp_logo"></img></td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Scenario Name"
                    name="scenarioName"
                    value={editFormData.scenarioName}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                {editFormData.createdYear}
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Username"
                    name="createdBy"
                    className="createdBy"
                    value={editFormData.createdBy}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="User type"
                    name="user"
                    value={editFormData.user}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td><button type="submit">Save</button></td>
            <td><button type="button" onClick={handleCancelClick}>Cancel</button></td>
        </tr>
    );
};

export default EditableRow;