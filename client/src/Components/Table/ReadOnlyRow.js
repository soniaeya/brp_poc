import React from "react";
import folderIcon from "../../Img/folderIcon.png";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td className="folderIcon"><img src={folderIcon} alt="brp_logo"></img></td>
            <td>{contact.scenarioName}</td>
            <td>{contact.createdYear}</td>
            <td>{contact.createdBy}</td>
            <td>{contact.user}</td>
            <td>

                <TbEdit onClick={(event) => handleEditClick(event, contact)}></TbEdit>
            </td>
            <td>
                <RiDeleteBin6Line onClick={() => handleDeleteClick(contact.id)}></RiDeleteBin6Line>
            </td>

        </tr>
    );
};

export default ReadOnlyRow;