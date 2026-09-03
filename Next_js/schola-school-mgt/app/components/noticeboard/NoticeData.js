
"use client";

import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Badge,
  Card,
  Form,
  Button
} from 'react-bootstrap';

import {
  X,
  FileText,
  Eye,
  Users,
  CalendarDays,

} from 'lucide-react';

import { noticeBoardFilters, } from '@/app/data';
import DropdownBtn from '../dropdown';
import SmartPagination from '../smartpagination';

import { addNotice, deleteidNotice, getidNotice, getNotice, updateNotice, Views } from '@/services/noticeService';
import NoticeModal from './EditNoticeForm';
import { handleDelete } from '../Deletehandle';
import { FiDownload } from 'react-icons/fi';
import { toast } from 'react-toastify';

const NoticeData = ({ search }) => {
  const [showModal, setShowModal] = useState(false);

  const [editData, setEditData] = useState(null);

  const [notice, setNotce] = useState([])


  const handleAdd = () => {
    setSelectedNotice(null);
    setShowModal(true);
  };

  const handleEdit = (notice) => {
    setEditData(notice);
    setShowModal(true);
  };


  const [selectedNotice, setSelectedNotice] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectLetest, setSelectedLetest] = useState('Latest');
  const [page, setPage] = useState(1);


  const filteredData = notice.filter((item) => {

    const matchCategory =
      selectedCategory.toLowerCase() === "all" ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchSearch =
      item.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.category?.toLowerCase().includes(search.toLowerCase()) ||
      item.created_by?.toLowerCase().includes(search.toLowerCase()) ||
      item.audience?.toLowerCase().includes(search.toLowerCase()) ||
      item.status?.toLowerCase().includes(search.toLowerCase())

    return matchCategory && matchSearch;
  });

  const itemsPerPage = 9;


  const totalPages = Math.ceil(filteredData.length / itemsPerPage);


  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = filteredData.slice(startIndex, endIndex);





  const getdata = async () => {
    try {
      
      const res = await getNotice(selectLetest);


      setNotce(res.data || [])


    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {

    getdata()

  }, [selectLetest])


  const handleSelectNotice = async (id) => {
    try {


      const res = await getidNotice(id);

      await Views(id)



      setSelectedNotice(res.data);
    } catch (error) {
      console.error("Error fetching notice by id:", error);
    }
  };


  const saveNotice = async (payload) => {
    if (editData?.notice_id) {

      await updateNotice(editData.notice_id, payload);
    } else {
      await addNotice(payload);
    }

    getdata();
    setShowModal(false);
    setEditData(null);
  };



  const handleDownload = (url, filename = "file") => {
    const link = document.createElement("a");

    link.href = url;

    // IMPORTANT: force download
    link.setAttribute("download", filename);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    const shareText = `
Notice Details

Title: ${selectedNotice?.title}
Category: ${selectedNotice?.category}
Audience: ${selectedNotice?.audience}
Post Date: ${selectedNotice?.post_date}
Expiry Date: ${selectedNotice?.exp_date}

Message:
${selectedNotice?.message}
  `;

    if (navigator.share) {
      await navigator.share({
        title: "Notice Details",
        text: shareText,
      });
    } else {
      await navigator.clipboard.writeText(shareText);
      toast.error("Notice details copied to clipboard");
    }
  };



  return (

    <Container
      fluid
      className="py-3"

    >

      <Row className="g-3">

        {/* LEFT SIDE */}
        <Col lg={selectedNotice ? 9 : 12} className='h-100'>

          {/* Top Header */}
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">

            <div className='d-flex align-items-center gap-3'>
              <h6 className="h6-alt text-danger-subtle m-0 d-none d-md-block">
                Notice Board
              </h6>


              <div>

                <Button onClick={handleAdd}>
                  Add Notice
                </Button>
              </div>

            </div>



            <div className="d-flex align-items-center gap-2 flex-wrap">
              <DropdownBtn
                value={selectedCategory}
                setValue={setSelectedCategory}
                options1={noticeBoardFilters.categoryOptions}
              />
              <span className='text-danger cap-xs-med'>Sort by:</span>
              <DropdownBtn

                value={selectLetest}
                setValue={setSelectedLetest}

                options1={noticeBoardFilters.sortOptions}


              />



            </div>

          </div>

          {/* Notice List */}
          <div

          >
            {paginatedData.length > 0 ? (



              paginatedData.map((item, inbox) => (


                <Card
                  key={inbox}
                  onClick={() => handleSelectNotice(item.notice_id)}
                  className={`mb-3 rounded-4 ${selectedNotice?.notice_id === item.notice_id
                    ? "bg-success border-1 border-secondary"
                    : "bg-light border-0"
                    }`}
                  style={{ cursor: "pointer" }}
                >

                  <Card.Body className="px-3 py-3">

                    <Row className="align-items-center g-3">
                      {/* Content */}
                      <Col sm={12} md={5}>
                        <div className="d-flex gap-2 align-items-start">

                          {/* Image */}
                          <div
                            className="bg-primary rounded-3 flex-shrink-0"
                            style={{
                              width: "70px",
                              height: "70px",
                            }}
                          ></div>

                          {/* Content */}
                          <div className="flex-grow-1">

                            {/* Top Row */}
                            <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap mb-1">

                              <p className={`cap-md-med   px-2 py-1 rounded-2 mb-0 ${selectedNotice?.category === item.category ? "bg-light  text-dark " : " bg-success  text-danger-subtle"} `}>
                                {item.category}
                              </p>

                              <p
                                className={`text-light text-center cap-lg-med px-2 py-1 mb-0 rounded-2 d-md-none 
          ${item.status === "Active"
                                    ? "bg-warning-light"
                                    : item.status === "Scheduled"
                                      ? "bg-warning"
                                      : item.status === "Draft"
                                        ? "bg-danger"
                                        : item.status === "Expired"
                                          ? "bg-success-light"
                                          : ""
                                  }`}
                              >
                                {item.status}
                              </p>
                            </div>


                            <div className="body-md text-dark mb-1">
                              {item.title}
                            </div>


                            <div className="d-none d-lg-flex align-items-center gap-1 body-xs-med text-danger">
                              <Users size={11} />
                              {item.audience}
                            </div>


                            <div className="d-lg-none body-xs-med text-danger">
                              {item.createdBy}
                            </div>
                          </div>
                        </div>


                        <hr className="border-danger-light border-2 d-md-none opacity-100 my-3" />
                      </Col>
                      <Col className='d-md-none'>
                        <div className="d-flex justify-content-around align-items-start gap-4 flex-wrap">

                          {/* Post Date */}
                          <div>
                            <div className="cap-lg-reg text-danger mb-1">
                              Post Date
                            </div>

                            <div className="body-xs-med text-dark">
                              {item.post_date
                              }
                            </div>
                          </div>

                          {/* Audience */}
                          <div>
                            <div className="cap-lg-reg text-danger mb-1">
                              Audience
                            </div>

                            <div className="body-xs-med text-dark">
                              {item.audience}
                            </div>
                          </div>

                        </div>


                      </Col>
                      {/* Dates */}
                      <Col lg={3} md={5} className='d-none d-md-block'>

                        <div
                          className="d-flex align-items-center gap-1 mb-1"

                        >

                          <CalendarDays size={11} />

                          <span className='cap-lg-reg text-danger'>
                            Post Date:
                          </span>

                          <span className="body-xs-med text-dark">
                            {item.post_date
                            }
                          </span>

                        </div>

                        <div
                          className="d-flex align-items-center gap-1 text-muted"

                        >

                          <CalendarDays size={11} />

                          <span className='cap-lg-reg text-danger'>
                            Exp. Date:
                          </span>

                          <span className="body-xs-med text-dark">
                            {item.exp_date}
                          </span>

                        </div>
                        <div
                          className="d-flex align-items-center gap-1 d-lg-none "

                        >

                          <Users size={11} />

                          <span className='cap-lg-reg text-danger'>
                            Audience
                          </span>

                          <span className="body-xs-med text-dark">
                            {item.audience}
                          </span>

                        </div>

                      </Col>

                      {/* Created By */}
                      <Col md={2} className='d-none d-lg-block  '>

                        <div
                          className="text-danger  cap-md-med mb-1"

                        >
                          Created By
                        </div>

                        <div
                          className="body-xs-med text-dark"
                          style={{
                            fontSize: '11px'
                          }}
                        >
                          {item.created_by
                          }
                        </div>

                      </Col>

                      {/* Status */}
                      <Col md={2} className='d-none d-md-block'>
                        {/* {renderStatus(item.status)} */}
                        <p className={`text-light text-center cap-lg-med p-2 rounded-4 ${item.status === 'Active' ? "bg-warning-light" : item.status === "Scheduled" ? "bg-warning" : item.status === "Draft" ? "bg-danger" : item.status === "Expired" ? "bg-success-light" : ""}`}>{item.status}</p>
                      </Col>

                    </Row>


                  </Card.Body>

                </Card>

              ))) :
              (
                <div className="text-center py-5">
                  <h6 className="text-muted">No notices found</h6>
                </div>


              )}

          </div>
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-4 gap-3">

            <div className="text-muted small">
              Showing{" "}
              {(page - 1) * itemsPerPage + 1}
              {" - "}
              {Math.min(
                page * itemsPerPage,
                filteredData.length
              )}
              {" "}of {filteredData.length} results
            </div>

            <SmartPagination
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          </div>

        </Col>

        {/* RIGHT SIDE */}
        {selectedNotice && (
          <Col lg={3} className=''>

            <Card
              className="border-0 bg-light h-100 rounded-4"

            >

              <Card.Body className="p-3 d-flex flex-column">

                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4 mt-3">

                  <h6
                    className="h6-alt text-danger-subtle m-0"
                    style={{ fontSize: '14px' }}
                  >
                    Detail Board
                  </h6>

                  <X
                    size={18}
                    className="text-danger"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedNotice(null)}
                  />

                </div>

                {/* Placeholder */}
                <div
                  className="rounded-4 mb-3 bg-success"
                  style={{
                    height: '170px',

                  }}
                />

                {/* Top Tags */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">

                  {/* Left Side */}
                  <div className="d-flex align-items-center gap-2 flex-wrap">

                    {/* Category */}
                    <Badge className="bg-secondary text-danger-subtle cap-lg-med px-3 py-2 rounded-2 border-0">
                      {selectedNotice?.category
                      }
                    </Badge>

                    {/* Views */}
                    <div className="d-flex align-items-center gap-1 px-3 py-2 rounded-2 bg-danger-light cap-lg-med text-dark">
                      <Eye size={12} />
                      <span>{selectedNotice?.
                        views
                      }</span>
                    </div>

                  </div>

                  {/* Status */}
                  <p
                    className={`text-light text-center cap-lg-med px-2 py-1 mb-0 rounded-2
          ${selectedNotice.status === "Active"
                        ? "bg-warning-light"
                        : selectedNotice?.status === "Scheduled"
                          ? "bg-warning"
                          : selectedNotice?.status === "Draft"
                            ? "bg-danger"
                            : selectedNotice?.status === "Expired"
                              ? "bg-success-light"
                              : ""
                      }`}
                  >
                    {selectedNotice.status}
                  </p>

                </div>
                {/* Title */}
                <h6
                  className="body-lg text-dark mb-1"

                >
                  {selectedNotice?.title}
                </h6>

                <div
                  className=" mb-3 body-xs-bold text-danger"

                >
                  {selectedNotice?.created_by}
                </div>

                {/* Info */}
                <div
                  className=" p-3 mb-3"

                >

                  <div className="d-flex gap-5 mb-2">
                    <div className="text-danger body-xs-reg" >
                      Audience
                    </div>
                    <div className="body-xs-bold text-dark">
                      {selectedNotice?.audience
                      }
                    </div>
                  </div>

                  <div className="d-flex gap-5 mb-2">
                    <div className="text-danger body-xs-reg">
                      Post Date
                    </div>
                    <div className="body-xs-bold text-dark">
                      {selectedNotice?.post_date} - 08:00 AM
                    </div>
                  </div>

                  <div className="d-flex gap-5 mb-2">
                    <div className="text-danger body-xs-reg">
                      Exp. Date
                    </div>
                    <div className="body-xs-bold text-dark">
                      {selectedNotice?.exp_date} - 03:00 PM
                    </div>
                  </div>

                </div>

                {/* Content */}
                <h6
                  className=" text-dark body-xs-bold mb-2"

                >
                  Content
                </h6>

                <p
                  className="text-danger body-xs-med"
                  style={{

                    lineHeight: '1.8'
                  }}
                >
                  {selectedNotice?.message
                  }
                </p>
                <h6
                  className="fw-bold mb-2"
                  style={{ fontSize: '13px' }}
                >
                  Attachment
                </h6>





                < div className="d-flex align-items-center bg-white p-3 rounded-3 gap-2 overflow-hidden">

                  <div
                    className="d-flex align-items-center bg-secondary rounded-2 justify-content-center"
                    style={{
                      width: '40px',
                      height: '40px',
                    }}
                  >
                    <FileText
                      size={18}
                      className="text-danger"
                    />
                  </div>

                  <div>

                    <div
                      className="body-xs-med text-dark text-truncate"
                    >
                      {selectedNotice.
                        attachment_type
                      }
                    </div>


                  </div>

                  <Button
                    size="sm"
                    variant=""

                    onClick={() => handleDownload(selectedNotice?.attachment_url
                    )}
                  >
                    <FiDownload size={'15px'} />
                  </Button>
                </div>







                {/* <div className=""> */}
                <div className='mt-auto'>
                  <Button className='w-100 btn-sm  text-danger-subtle bg-secondary border-0'
                    // onClick={() => {
                    //   setEditData(selectedNotice);
                    //   setShowEditModal(true);
                    // }}
                    onClick={() => handleEdit(selectedNotice)}
                  >Edit</Button>

                  {/* Bottom Buttons */}
                  <div className="d-flex gap-2 mt-3 ">

                    <Button
                      variant="light"
                      className="border-0 bg-primary btn-sm  w-100"
                      onClick={(e) => {

                        handleDelete({
                          id: selectedNotice?.notice_id,
                          deleteApi: deleteidNotice,
                          title: "You want to delete this notice record?",
                          successMessage: "Notice deleted successfully",
                          onSuccess: getdata
                        });
                      }} >
                      Delete
                    </Button>

                    {/* <Button
                      variant="light"
                      className="border-0 btn-sm  bg-primary w-100"

                    >
                      Share
                    </Button> */}
                    <Button
                      variant="light"
                      className="border-0 btn-sm bg-primary w-100"
                      onClick={handleShare}
                    >
                      Share
                    </Button>

                    <Button
                      variant="light"
                      className="border-0 btn-sm  bg-primary  w-100"

                    >
                      Archive
                    </Button>

                  </div>
                </div>

              </Card.Body>

            </Card>

          </Col>
        )}

      </Row>



      <NoticeModal
        show={showModal}
        onHide={() => setShowModal(false)}
        editData={editData}
        onSubmit={saveNotice}
      />

    </Container >

  );
};

export default NoticeData;

