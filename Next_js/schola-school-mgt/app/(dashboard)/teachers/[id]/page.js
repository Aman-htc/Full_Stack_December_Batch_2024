


"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import Teacherprofile from "@/app/components/teachers/teacherprofile";
import Personainfo from "@/app/components/teachers/teacherinfo";
// import TeacherDocuments from "@/app/components/teachers/teacherdocuments";
import WorkloadSummary from "@/app/components/teachers/workloadsummary";
import ScheduleTable from "@/app/components/teachers/class_schedule";
import DevelopmentTraining from "@/app/components/teachers/developmenttraining";
import LeaveRequest from "@/app/components/teachers/leaverequest";
import PerformanceCard from "@/app/components/teachers/performencecard";
import Breadcrumb from "@/app/components/breadcrum";

import { Col, Container, Row } from "react-bootstrap";

// API
import { addDocument, deleteDocument, getTeacherAcademicInformation, getTeacherById, getTeacherDocumentById, getTeacherExperienceInformation, getTeacherLeavesById, getTeacherPerformance, getTeacherTrainings, getTrainings } from "../../../../services/teacherService";
import AcademicDetails from "@/app/components/teachers/AcademicDetails";
import ExperienceDetails from "@/app/components/teachers/ExperienceDetails";
import Documents from "@/app/components/teachers/teacherdocuments";

const Page = () => {
  const { id } = useParams();

  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [trainings, setTrainings] = useState([]);
  const [performance, setPerformanceData] = useState([])
  const [leavedata, setLeaveData] = useState([])
  const [AcademicInformation, setAcademicInformation] = useState([])
  const [Experience, setExperience] = useState([])
  const [documents, setDocument] = useState([])
  const [periodType, setPeriodType] = useState("this_semester");
  const [perperiodType, setPerperiodType] = useState("this_month");
  const [search, setSearch] = useState("");
  // teacher training data get 

  const filteredPerformance = performance.filter((item) =>
    item.Title?.toLowerCase().includes(search.toLowerCase())
  );

const filteredTraining = trainings.filter((item) =>
  item.EventName?.toLowerCase().includes(search.toLowerCase()) ||
  item.Category?.toLowerCase().includes(search.toLowerCase())
);
const filteredAcademicInformation =AcademicInformation.filter((item) =>
  item.Qualification?.toLowerCase().includes(search.toLowerCase()) ||
  item.UniversityInstitute?.toLowerCase().includes(search.toLowerCase()) ||
  item.Specialization?.toLowerCase().includes(search.toLowerCase())
);
const filteredExperience =Experience.filter((item) =>
  item.OrganizationName?.toLowerCase().includes(search.toLowerCase()) ||
  item.JobTitle?.toLowerCase().includes(search.toLowerCase()) ||
  item.Description?.toLowerCase().includes(search.toLowerCase())
);


  const fetchTeacherInfo = async () => {
    try {
      const data = await getTeacherById(id);
      setTeacher(data);
    } catch (err) {
      console.log("Teacher API failed", err);
    }
  };

  const fetchDocuments = async () => {
    try {
      const docs = await getTeacherDocumentById('Teacher', id);

      console.log("FULL DOCS:", docs);

      setDocument(docs.data || []);
      console.log('document ', documents)
    } catch (err) {
      console.log(err);
      setDocument([]);
    }
  };


  const fetchTrainings = async () => {
    try {
      const res = await getTrainings(id, periodType);
      setTrainings(res.data || []);
    } catch (err) {
      setTrainings([]);
    }
  };

  useEffect(() => {
    if (id) {
      fetchTrainings();
    }
  }, [id, periodType]);




  const fetchPerformance = async () => {
    try {
      const res = await getTeacherPerformance(id, perperiodType);
      setPerformanceData(res.data || []);
    } catch (err) {
      setPerformanceData([]);
    }
  };


  useEffect(() => {
    if (id) {
      fetchPerformance();
    }
  }, [id, perperiodType]);



  const fetchLeaves = async () => {
    try {
      const res = await getTeacherLeavesById(id);
      setLeaveData(res.data || []);
    } catch (err) {
      setLeaveData([]);
    }
  };

  const fetchAcademicInfo = async () => {
    try {
      const res = await getTeacherAcademicInformation(id);
      setAcademicInformation(res.data || []);
    } catch (err) {
      setAcademicInformation([]);
    }
  };

  const fetchExperience = async () => {
    try {
      const res = await getTeacherExperienceInformation(id);
      setExperience(res.data || []);
    } catch (err) {
      setExperience([]);
    }
  };

  useEffect(() => {
    if (!id) return;

    const loadData = async () => {
      setLoading(true);

      await Promise.all([
        fetchTeacherInfo(),
        fetchDocuments(),

        // fetchPerformance(),
        fetchLeaves(),
        fetchAcademicInfo(),
        fetchExperience(),
      ]);

      setLoading(false);
    };

    loadData();
  }, [id]);





  // Loading state
  if (loading) {
    return <h3 className="p-3">Loading teacher details...</h3>;
  }

  //  Error state
  if (error) {
    return <h3 className="p-3 text-danger">{error}</h3>;
  }

  //  Not found state
  if (!teacher) {
    return <h3 className="p-3">Teacher not found</h3>;
  }

  return (
    <>
      {/* DESKTOP */}
      <Container fluid className="p-3 d-none d-lg-block">
        <Header text="Teachers Details" backgound={"bg-primary"} search={search}
          setSearch={setSearch} />

        <Breadcrumb
          items={[
            { label: "Dashboard", path: "/dashboard" },
            { label: "Teachers", path: "/teachers" },
            { label: "Teacher Details", path: `/teachers/${id}` },
          ]}
        />

        <Row className="g-3 mt-1">
          {/* LEFT */}
          <Col xs={12} md={4} lg={3} className="d-flex flex-column gap-3">
            <Teacherprofile teacher={teacher} />
            <Personainfo teacher={teacher} />

            <Documents
              title="Teacher Documents"
              entity={teacher}
              entityIdKey="TeacherID"
              documents={documents}
              refreshDocuments={fetchDocuments}
              addDocument={addDocument}
              deleteDocument={deleteDocument}
              ownerType="Teacher"
            />

          </Col>

          {/* CENTER */}
          <Col xs={12} md={8} lg={6} className="d-flex flex-column gap-3">
            <WorkloadSummary teacher={teacher} />
            <ScheduleTable teacher={teacher} />
            <DevelopmentTraining
              teacher={teacher}
              trainings={filteredTraining}
              refreshTrainings={fetchTrainings}
              periodType={periodType}
              setPeriodType={setPeriodType}
            />
           <AcademicDetails AcademicInformation={filteredAcademicInformation}    refreshAcademicInfo={fetchAcademicInfo}/>
            <ExperienceDetails Experience={filteredExperience}     refreshExperience={fetchExperience} /> 
          </Col>

          {/* RIGHT */}
          <Col xs={12} lg={3} className="d-flex flex-column gap-3">
            <LeaveRequest
              teacher={teacher}
              leavedata={leavedata}
              refreshLeaves={fetchLeaves}
            />
            <PerformanceCard teacher={teacher} performance={filteredPerformance} refreshPerformance={fetchPerformance} perperiodType={perperiodType} setPerperiodType={setPerperiodType} />
          </Col>



        </Row>

      </Container>

      {/* MOBILE */}
      <Container fluid className="p-3 d-lg-none">
        
        <Header text="Teachers Details" backgound={"bg-primary"} />

        <Breadcrumb
          items={[
            { label: "Dashboard", path: "/dashboard" },
            { label: "Teachers", path: "/teachers" },
            { label: "Teacher Details", path: `/teachers/${id}` },
          ]}
        />

        <Row className="g-3 mt-1">
          <Col xs={12} md={6} className="d-flex flex-column gap-3">
            <Teacherprofile teacher={teacher} />
            <Personainfo teacher={teacher} />
            <Documents
              title="Teacher Documents"
              entity={teacher}
              entityIdKey="TeacherID"
              documents={documents}
              refreshDocuments={fetchDocuments}
              addDocument={addDocument}
              deleteDocument={deleteDocument}
              ownerType="Teacher"
            />
          </Col>

          <Col xs={12} md={6} className="d-flex flex-column gap-3">
            <LeaveRequest
              teacher={teacher}
              leavedata={leavedata}
              refreshLeaves={fetchLeaves}
            />
            <PerformanceCard teacher={teacher} performance={performance} refreshPerformance={fetchPerformance} perperiodType={perperiodType} setPerperiodType={setPerperiodType} />
          </Col>

          <Col xs={12} className="d-flex flex-column gap-3">
            <WorkloadSummary teacher={teacher} />
            <ScheduleTable teacher={teacher} />
            <DevelopmentTraining
              teacher={teacher}
              trainings={filteredTraining}
              refreshTrainings={fetchTrainings}
            />
          </Col>
          <Col xs={12} className="d-flex flex-column gap-3">
            <WorkloadSummary teacher={teacher} />
            <ScheduleTable teacher={teacher} />
            <DevelopmentTraining teacher={teacher} trainings={trainings} periodType={periodType}
              setPeriodType={setPeriodType} />
           <AcademicDetails AcademicInformation={filteredAcademicInformation}    refreshAcademicInfo={fetchAcademicInfo}/>
            <ExperienceDetails Experience={filteredExperience}     refreshExperience={fetchExperience} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Page;