
import "./MyNavbar.css";
import {Dropdown} from "react-bootstrap";
import {DropdownButton} from "react-bootstrap";

function MyNavbar() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (

        <div className="navbarDiv">
            <Dropdown>

                <DropdownButton
                    id="dropdown-button-dark-example2"
                    variant="secondary"
                    menuVariant="dark"
                    title="HOMEPAGE"
                    className="mt-2"
                ></DropdownButton>


            </Dropdown>

        </div>

  );
}

export default MyNavbar;