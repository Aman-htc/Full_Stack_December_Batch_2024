import React from 'react'
import { Breadcrumb, Table } from 'react-bootstrap';
import {  CartFill, TelephoneFill } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';

function Tabless({Employee,Departement,Salary,PaymentDate,PaymentStatus,EmploymentStatus}) {
    return (
        <div>


            <Breadcrumb>
                <Breadcrumb.Item to="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item to="#"t>
                    Layout
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Badge</Breadcrumb.Item>
            </Breadcrumb>


            <h3 className='text-primary'>Badge</h3>
            {/* <div>
             
                <hr />
                <h1>
                    Example heading <Badge bg="secondary">New</Badge>
                </h1>
                <h2>
                    Example heading <Badge bg="secondary">New</Badge>
                </h2>
                <h3>
                    Example heading <Badge bg="secondary">New</Badge>
                </h3>
                <h4>
                    Example heading <Badge bg="secondary">New</Badge>
                </h4>
                <h5>
                    Example heading <Badge bg="secondary">New</Badge>
                </h5>
                <h6>
                    Example heading <Badge bg="secondary">New</Badge>
                </h6>
            </div> */}

            <Table responsive>
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Departement</th>
                        <th>Salary</th>
                        <th>Payment Date</th>
                        <th>Payment Status</th>
                        <th>Employment Status</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Joseph Oden</td>
                        <td> <CartFill/> Slaes</td>

                        <td>$64,000</td>
                        <td>Aug 3,2024</td>
                        <td><Badge className="pri rounded-5" >PENDING</Badge></td>
                        <td>Part-Time</td>

                    </tr>
                    <tr>
                        <td>Carol Brown</td>
                        <td>  <TelephoneFill/> Support</td>
                        <td>$82,000</td>
                        <td>Aug 6,2024</td>
                        <td><Badge className="neo rounded-5" >NEOTIATING</Badge></td>
                        <td>Part-Time</td>
                    </tr>
                    <tr>
                        <td>Katherine Grey</td>
                        <td>  <TelephoneFill/> Support</td>
                        <td>$120,000</td>
                        <td>Aug 13,2024</td>
                        <td><Badge className="faild  rounded-5" > FAILED</Badge></td>
                        <td>Full-Time</td>
                    </tr>
                    <tr>
                        <td>Aman kushwaha</td>
                        <td>  <CartFill/> Slaes</td>
                        <td>$64,000</td>
                        <td>Aug 3,2024</td>
                        <td><Badge className="paid  rounded-5" >PAID</Badge></td>
                        <td>Part-Time</td>
                    </tr>
                    <tr>
                        <td>suraj kumar</td>
                        <td>  <CartFill/> Slaes</td>
                        <td>$64,000</td>
                        <td>Aug 19,2024</td>
                        <td><Badge className="pri rounded-5" >PENDING</Badge></td>
                        <td>part-Time</td>
                    </tr>
                    <tr>
                        <td>Carol Brown</td>
                        <td>  <TelephoneFill/> Sopport</td>
                        <td>$82,000</td>
                        <td>Aug 13,2024</td>
                        <td><Badge className="faild rounded-5" >FAILED</Badge></td>
                        <td>part-Time</td>
                    </tr>
                    <tr>
                        <td>Peggy Castello</td>
                        <td>Design</td>
                        <td>$120,000</td>
                        <td>Aug 13,2024</td>
                        <td><Badge className="over rounded-5" >OVERDUE</Badge></td>
                        <td>Full-Time</td> 
                    </tr>
                    <tr>
                        <td>Joseph Oden</td>
                        <td><CartFill/> Slaes</td>
                        <td>$64,000</td>
                        <td>Aug 3,2024</td>
                        <td><Badge className="faild  rounded-5" >FAILED</Badge></td>
                        <td>Part-Time</td>
                    </tr>
                    <tr>
                        <td>Nelson Metz</td>
                        <td> <CartFill/> Sales</td>
                        <td>$28,000</td>
                        <td>Aug 22,2024</td>
                        <td><Badge className="pri rounded-5" >PENDING</Badge></td>
                        <td>Full-Time</td>
                    </tr>
                    <tr>
                        <td>Roger Ryder</td>
                        <td><CartFill/> Slaes</td>
                        <td>$93,000</td>
                        <td>Aug 31,2024</td>
                        <td><Badge className="paid  rounded-5" >PAID</Badge></td>
                        <td>Part-Time</td>
                    </tr>
                    <tr>
                        <td> Evam Walter</td>
                        <td> <TelephoneFill/> Support</td>
                        <td> $55,000</td>
                        <td> Aug 5,2024</td>
                        <td><Badge className="neo  rounded-5" > NEGOTIATING</Badge></td>
                        <td>Full-Time</td>
                    </tr>
                </tbody>
            </Table>





        </div>
    )
}

export default Tabless


function DynamicTableCard({ name = 'Your name', imgURL = 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png', email = 'your email', phone = "your phone" }) {
  return (
    <div>
      <table>
        <tr>
          <td colSpan={3} rowSpan={3}>
         <Avatar imgURl={imgURL}/> 

          </td>
          <td className='bold' >Name</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td className='bold'> Email</td>
          <td>{email}</td>
        </tr>
        <tr>
          <td className='bold' >Phone</td>
          <td>{phone}</td>
        </tr>
      </table>

      

    </div>
  )
}


