


"use client";

import { teacherPerformance as initialPerformance } from '@/app/data';
import React, { useState } from 'react';
import {
    Card,
    ProgressBar,
    Modal,
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap';

import DropdownBtn from '../dropdown';
import { addPerformance, deletePerformance, updatePerformance } from '@/services/teacherService';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { handleDelete } from '../Deletehandle';

const PerformanceCard = ({  perperiodType, setPerperiodType, teacher, performance = [], refreshPerformance }) => {
    console.log("performance data", performance)
    const [showModal, setShowModal] = useState(false);
    // const [performanceData, setPerformanceData] = useState(initialPerformance);
    const [editId, setEditId] = useState(null);
    const [errors, setErrors] = useState({});


    const validateForm = () => {
        let newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = "Performance title is required";
        }

        if (!formData.score) {
            newErrors.score = "Score is required";
        } else if (formData.score < 0 || formData.score > 100) {
            newErrors.score = "Score must be between 0 and 100";
        }

        if (!formData.targetScore) {
            newErrors.targetScore = "Target score is required";
        } else if (formData.targetScore < 0 || formData.targetScore > 100) {
            newErrors.targetScore = "Target score must be between 0 and 100";
        }

        if (!formData.status) {
            newErrors.status = "Status is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // FORM STATE
    const [formData, setFormData] = useState({
        title: "",
        score: "",
        targetScore: "",
        status: "Good"
    });

    // INPUT CHANGE
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    // MODAL CLOSE AND RESET HANDLER
    const handleCloseModal = () => {
        setShowModal(false);
        setFormData({
            title: "",
            score: "",
            targetScore: "",
            status: "Good"
        });

        setErrors({});

    };
    const handleEdit = (item) => {
        setFormData({
            title: item.Title,
            score: item.Score,
            targetScore: item.TargetScore,
            status: item.Status,
        });

        setEditId(item.PerformanceID);
        setShowModal(true);
    };

    // SAVE
    const handleSave = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const payload = {
                teacher_id: teacher?.data?.TeacherID,
                title: formData.title,
                score: Number(formData.score),
                target_score: Number(formData.targetScore),
                status: formData.status,
            };

            let res;

            // UPDATE
            if (editId) {
                res = await updatePerformance(editId, payload);

                setPerformanceData((prev) =>
                    prev.map((item) =>
                        item.id === editId ? res : item
                    )
                );
                refreshPerformance()
            }
            // ADD
            else {
                res = await addPerformance(payload);
                refreshPerformance()


            }

            handleCloseModal();
        } catch (error) {
            console.error(
                "API Error:",
                error?.response?.data || error.message
            );
        }
    };






    return (
        <>

            <div className='mt-8'>

                <Card className='border-0 h-100 p-3 rounded-4'>

                    {/* HEADER */}
                    <div className='d-flex justify-content-between align-items-center mb-4'>

                        <h5 className='h6-alt text-danger-subtle'>
                            Performance
                        </h5>

                        <div className='d-flex gap-2 align-items-center'>

                            <Button
                                variant='primary'
                                size='sm'
                                className='rounded-3 p-0 px-1'
                                onClick={() => setShowModal(true)}
                            >
                                +
                            </Button>

                           
                            <DropdownBtn

                            text1={perperiodType}
                            value={perperiodType}
                            setValue={setPerperiodType}
                            options1={[
                                { label: "This Month", value: "this_month" },
                                { label: "Last Month", value: "last_month" },
                                { label: "All ", value: "all" },

                            ]}
                        />

                        </div>

                    </div>

                    {/* PERFORMANCE LIST */}
                    {performance.length > 0 ? (


                        performance.map((items, index) => (

                            <div
                                key={index}
                                className='bg-light p-3 mb-3 rounded-4 '
                            >

                                {/* TOP */}
                                <div className='d-flex justify-content-between align-items-center'>

                                    <p className='mb-0 text-dark body-xs-med'>
                                        {items.Title}
                                    </p>

                                    <p className='mb-0'>

                                        <span className='me-2 body-xs-bold text-danger-subtle'>
                                            {items.
                                                Score}% /
                                        </span>

                                        <span className='text-danger body-xs-bold'>
                                            {items.TargetScore
                                            }%
                                        </span>

                                    </p>

                                </div>

                                {/* BOTTOM */}
                                <div className='d-flex justify-content-between align-items-center mt-3'>

                                    <p className='text-danger cap-lg-med mb-0'>
                                        {items.
                                            Status
                                        }
                                    </p>

                                    <div className='w-50'>

                                        <ProgressBar
                                            variant='secondary'
                                            now={items.Score}
                                            label={`${items.Score}%`}
                                            className='rounded-pill'
                                            style={{ fontSize: '8px' }}
                                        />

                                    </div>
                                    <Button
                                        size="sm"
                                        variant=""
                                        className='p-0'
                                        onClick={() => handleEdit(items)}
                                    >
                                        <FiEdit2 size={'8px'} />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant=""
                                        className="p-0"
                                        onClick={() =>
                                            handleDelete({
                                                id: items.PerformanceID,
                                                title: " ` Performance has been deleted successfully.`",
                                                deleteApi: deletePerformance,
                                                successMessage: ` Performance has been deleted successfully.`,
                                                onSuccess: refreshPerformance


                                            }
                                                ,)
                                        }
                                    >
                                        <FiTrash2 />
                                    </Button>

                                </div>


                            </div>

                        ))
                    ) : (
                        <p colSpan="5" className="text-center py-4 text-muted">
                            No performance Details Available
                        </p>

                    )}

                </Card>
            </div>

            {/* MODAL */}
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
                size='lg'
            >

                <Modal.Body className='p-0 rounded-4 overflow-hidden bg-white'>

                    {/* HEADER */}
                    <div className='bg-primary text-dark p-4'>

                        <div className='d-flex justify-content-between align-items-start'>

                            <div>

                                <h4 className='fw-bold mb-1'>
                                    Add Performance
                                </h4>

                                <p className='mb-0 small text-dark'>
                                    Add teacher performance details
                                </p>

                            </div>

                            <Button
                                variant='light'
                                size='sm'
                                className='rounded-circle'
                                onClick={() => setShowModal(false)}
                            >
                                ✕
                            </Button>

                        </div>

                    </div>

                    {/* FORM */}
                    <Form onSubmit={handleSave}>

                        <div className='p-4'>

                            <Row className='g-3'>

                                {/* TITLE */}
                                <Col md={12}>

                                    <Form.Group>

                                        <Form.Label className='fw-semibold text-dark'>
                                            Performance Title
                                        </Form.Label>

                                        <Form.Control
                                            type='text'
                                            name='title'
                                            value={formData.title}
                                            onChange={handleChange}
                                            placeholder='Enter performance title'
                                            className='rounded-3 py-2 shadow-sm border-0 bg-light'
                                            // required
                                        />
                                        {errors.title && (
                                            <div className="text-danger mt-1 small">
                                                {errors.title}
                                            </div>
                                        )}

                                    </Form.Group>

                                </Col>

                                {/* SCORE */}
                                <Col md={6}>

                                    <Form.Group>

                                        <Form.Label className='fw-semibold text-dark'>
                                            Score (%)
                                        </Form.Label>

                                        <Form.Control
                                            type='number'
                                            name='score'
                                            value={formData.score}
                                            onChange={handleChange}
                                            placeholder='Enter score'
                                            className='rounded-3 py-2 shadow-sm border-0 bg-light'
                                            // required
                                        />

                                        {errors.score && (
                                            <div className="text-danger mt-1 small">
                                                {errors.score}
                                            </div>
                                        )}

                                    </Form.Group>

                                </Col>

                                {/* TARGET SCORE */}
                                <Col md={6}>

                                    <Form.Group>

                                        <Form.Label className='fw-semibold text-dark'>
                                            Target Score (%)
                                        </Form.Label>

                                        <Form.Control
                                            type='number'
                                            name='targetScore'
                                            value={formData.targetScore}
                                            onChange={handleChange}
                                            placeholder='Enter target score'
                                            className='rounded-3 py-2 shadow-sm border-0 bg-light'
                                            // required
                                        />
                                        {errors.targetScore && (
                                            <div className="text-danger mt-1 small">
                                                {errors.targetScore}
                                            </div>
                                        )}

                                    </Form.Group>

                                </Col>

                                {/* STATUS */}
                                <Col md={12}>

                                    <Form.Group>

                                        <Form.Label className='fw-semibold text-dark'>
                                            Status
                                        </Form.Label>

                                        <Form.Select
                                            name='status'
                                            value={formData.status}
                                            onChange={handleChange}
                                            className='rounded-3 py-2 shadow-sm border-0 bg-light'
                                        >

                                            <option value="Excellent">
                                                Excellent
                                            </option>

                                            <option value="Good">
                                                Good
                                            </option>

                                            <option value="Needs Improvement">
                                                Needs Improvement
                                            </option>

                                            <option value="Below Standard">
                                                Below Standard
                                            </option>

                                        </Form.Select>
                                        {errors.status && (
                                            <div className="text-danger mt-1 small">
                                                {errors.status}
                                            </div>
                                        )}

                                    </Form.Group>

                                </Col>

                            </Row>

                        </div>

                        {/* FOOTER */}
                        <div className='border-top bg-light px-4 py-3 d-flex justify-content-end gap-2'>

                            <Button
                                variant='outline-secondary'
                                className='rounded-3 px-4 text-dark'
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </Button>

                            <Button
                                type='submit'
                                variant='primary'
                                className='rounded-3 px-4 shadow-sm'
                            >
                                Save Performance
                            </Button>

                        </div>

                    </Form>

                </Modal.Body>

            </Modal>

        </>
    );
};

export default PerformanceCard;