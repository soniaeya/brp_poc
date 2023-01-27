import Table from 'react-bootstrap/Table';
import "./Table.css"
import folderIcon from "../../Img/folderIcon.png"

function ResponsiveBreakpointsExample() {
  return (
      <div className="tableClass">
        <Table responsive="sm" striped >
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
          <tr>
            <td className="folderIcon"><img src={folderIcon} alt="brp_logo"></img></td>
            <td>S1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td className="folderIcon"><img src={folderIcon} alt="brp_logo"></img></td>
            <td>S2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
              <td className="folderIcon"><img src={folderIcon} alt="brp_logo"></img></td>
            <td>S3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>



          <tr>
            <td className="folderIcon"><img src={folderIcon} alt="brp_logo"></img></td>
            <td>S3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr><tr>
            <td className="folderIcon"><img src={folderIcon} alt="brp_logo"></img></td>
            <td>S3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr><tr>
            <td className="folderIcon"><img src={folderIcon} alt="brp_logo"></img></td>
            <td>S3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr><tr>
            <td className="folderIcon"><img src={folderIcon} alt="brp_logo"></img></td>
            <td>S3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr><tr>
            <td className="folderIcon"><img src={folderIcon} alt="brp_logo"></img></td>
            <td>S3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr><tr>
            <td className="folderIcon"><img src={folderIcon} alt="brp_logo"></img></td>
            <td>S3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr><tr>
            <td className="folderIcon"><img src={folderIcon} alt="brp_logo"></img></td>
            <td>S3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr><tr>
            <td className="folderIcon"><img src={folderIcon} alt="brp_logo"></img></td>
            <td>S3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr><tr>
            <td className="folderIcon"><img src={folderIcon} alt="brp_logo"></img></td>
            <td>S3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>






          </tbody>
          </Table>

      </div>
  );
}

export default ResponsiveBreakpointsExample;