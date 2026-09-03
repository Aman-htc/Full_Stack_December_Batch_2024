import api from "./api";

// GET ALL TEACHERS
export const getTeachers = async () => {
  const response = await api.get("/teachers/");
  return response.data;
};

// GET SINGLE TEACHER
export const getTeacherById = async (id) => {
  const response = await api.get(`/teachers/${id}`);
  return response.data;
};


// ADD TEACHER
export const addTeacher = async (teacherData) => {
  const response = await api.post("/teachers/", teacherData);
  return response.data;
};

// UPDATE TEACHER
export const updateTeacher = async (id, teacherData) => {
  const response = await api.put(`/teachers/${id}`, teacherData);
  return response.data;
};

// DELETE TEACHER
export const deleteTeacher = async (id) => {
  const response = await api.delete(`/teachers/${id}`);
  return response.data;
};

// UPDATE PROFILE PHOTO
export const updateTeacherPhoto = async (id, file) => {
  const formData = new FormData();

  formData.append("profile_photo", file);

  const response = await api.put(
    `/teachers/${id}/profile-photo`,
    formData
  );

  return response.data;
};


export const addTimetable = async (
  data
) => {
  const response = await api.post(
    "/teachers/timetable",
    data
  );
  return response.data;
};

export const getTeacherTimetable =
  async (teacherId) => {
    const response = await api.get(
      `/teachers/${teacherId}/timetable`
    );
    return response.data;
  };

// ======================
// Department APIs
// ======================

export const addDepartment = async (data) => {
  const response = await api.post(
    "/teachers/departments",
    data
  );
  return response.data;
};

export const getDepartments = async () => {
  const response = await api.get(
    "/teachers/departments"
  );
  return response.data;
};

// ======================
// Training APIs
// ======================

export const addTraining = async (
  data
) => {
  const response = await api.post(
    "/teachers/trainings",
    data
  );
  return response.data;
};

// export const getTrainings = async () => {
//   const response = await api.get(
//     "/teachers/trainings"
//   );
//   return response.data;
// };

// export const getTeacherTrainings =
//   async (teacherId) => {
//     const response = await api.get(
//       `/teachers/${teacherId}/trainings`
//     );
//     return response.data;
//   };
export const getTrainings = async (teacherId, periodType) => {
  const response = await api.get(
    `/teachers/${teacherId}/trainings`,
    {
      params: {
        period_type: periodType,
      },
    }
  );

  return response.data;
};
// export const getTeacherTrainings = async (teacherId) => {
//   const response = await api.get(
//     `/trainings?teacher_id=${teacherId}`
//   );
//   return response.data;
// };

export const updateTraining = async (
  trainingId,
  data
) => {
  const response = await api.put(
    `/teachers/trainings/${trainingId}`,
    data
  );
  return response.data;
};

export const deleteTraining =
  async (trainingId) => {
    const response = await api.delete(
      `/teachers/trainings/${trainingId}`
    );
    return response.data;
  };


// ======================
// Performance APIs
// ======================

export const addPerformance = async (
  data
) => {
  const response = await api.post(
    "/teachers/performance",
    data
  );
  return response.data;
};

export const getTeacherPerformance =
  async (teacherId , perperiodType ) => {
    const response = await api.get(
      `/teachers/${teacherId}/performance`,
     {
      params: {
        period_type: perperiodType,
      },
    }
    );
    return response.data;
  };

export const updatePerformance =
  async (
    performanceId,
    data
  ) => {
    const response = await api.put(
      `/teachers/performance/${performanceId}`,
      data
    );
    return response.data;
  };

export const deletePerformance =
  async (performanceId) => {
    const response = await api.delete(
      `/teachers/performance/${performanceId}`
    );
    return response.data;
  };


// Teacher ID se leaves get karna
export const getTeacherLeavesById = async (teacherId) => {
  const response = await api.get(`/teachers/${teacherId}/leaves`);
  return response.data;
};

// Nayi leave add karna
export const addTeacherLeave = async (data) => {
  const response = await api.post("/teachers/leaves", data);
  return response.data;
};

// Sabhi leaves get karna
export const getAllTeacherLeaves = async () => {
  const response = await api.get("/teachers/leaves");
  return response.data;
};


export const getTeacherAcademicInformation = async (teacherId) => {
  const response = await api.get(
    `/teachers/${teacherId}/academic-information`
  );
  return response.data;
};

export const getTeacherExperienceInformation = async (teacherId) => {
  const response = await api.get(
    `/teachers/${teacherId}/experience`
  );
  return response.data;
};

export const addAcademicInformation = async (
  teacherId,
  academicData
) => {
  const response = await api.post(
    `/teachers/${teacherId}/academic-information`,
    academicData
  );

  return response.data;
};

export const updateAcademicInformation = async (
  academicId,
  data
) => {
  const response = await api.put(
    `/teachers/academic-information/${academicId}`,
    data
  );

  return response.data;
};


export const deleteAcademicInformation = async (
  academicId
) => {
  const response = await api.delete(
    `/teachers/academic-information/${academicId}`
  );

  return response.data;
};



export const addExperienceInformation = async (
  teacherId,
  data
) => {
  const response = await api.post(
    `/teachers/${teacherId}/experience`,
    data
  );

  return response.data;
};

export const updateExperienceInformation = async (
  experienceId,
  data
) => {
  const response = await api.put(
    `/teachers/experience/${experienceId}`,
    data
  );

  return response.data;
};

export const deleteExperienceInformation = async (
  experienceId
) => {
  const response = await api.delete(
    `/teachers/experience/${experienceId}`
  );

  return response.data;
};


// Get all documents of a teacher
export const getTeacherDocuments = async (
  teacherId
) => {
  const response = await api.get(
    `/teachers/${teacherId}/documents`
  );

  return response.data;
};

// Get single document
export const getTeacherDocumentById = (owner_type, teacherId) => {
  return api.get(`/documents/owner/${owner_type}/${teacherId}`);
};


// Add document
// export const addDocument = async (teacherId, data) => {
//   const response = await api.post(
//     `/teachers/${teacherId}/documents`,
//     data 
//   );
//   return response.data;
// };

export const addDocument = async (payload) => {
  const response = await api.post("/documents/", payload);
  return response.data;
};

// Update document
export const updateTeacherDocument = async (
  documentId,
  data
) => {
  const response = await api.put(
    `/teachers/documents/${documentId}`,
    data
  );

  return response.data;
};

// Delete document
export const deleteDocument = async (documentId) => {
  const response = await api.delete(
    `/documents/${documentId}`
  );

  return response.data;
};



//  Get all attendance
export const getAllAttendance = async () => {
  const response = await api.get("/teachers/attendance");
  return response.data;
};


//  Get attendance by teacher ID
export const getAttendanceByTeacher = async (teacherId) => {
  const response = await api.get(
    `/teachers/${teacherId}/attendance`
  );
  return response.data;
};


//  Get attendance by date
export const getAttendanceByDate = async (date) => {
  const response = await api.get(
    `/teachers/attendance/date/${date}`
  );
  return response.data;
};


//  Create attendance
export const createAttendance = async (data) => {
  const response = await api.post(
    "/attendance/",
    data
  );
  return response.data;
};





export const getAttendanceById = (owner_type, Id) => {
  return api.get(`/attendance/owner/${owner_type}/${Id}`);
};


// export const gettypeAttendance = (owner_type) => {
//   return api.get(`/attendance/type/${owner_type}`);
// };


export const gettypeAttendance = (owner_type, class_id = null) => {
  let url = `/attendance/type/${owner_type}`;

  if (owner_type === "Student" && class_id) {
    url += `?class_id=${class_id}`;
  }

  return api.get(url);
};



//  Update attendance
export const updateAttendance = async (id, data) => {
  const response = await api.put(
    `/teachers/attendance/${id}`,
    data
  );
  return response.data;
};


//  Delete attendance (agar API hai)
export const deleteAttendance = async (id) => {
  const response = await api.delete(
    `/teachers/attendance/${id}`
  );
  return response.data;
};


export const getSummary = async () => {
  const response = await api.get("/teachers/charts/summary");
  return response.data;
};



export const getDepartmentChart = async () => {
  const response = await api.get("/teachers/charts/department");
  return response.data;
};

export const getAttendanceOverview = async (viewType = "weekly") => {
  const response = await api.get(
    "/teachers/charts/attendance-overview",
    {
      params: {
        view_type: viewType,
      },
    }
  );

  return response.data;
};





export const getWorkloadDistribution = async (
  departmentId = 1,
  viewType = "Monthly"
) => {
  const response = await api.get(
    "/teachers/charts/workload-distribution",
    {
      params: {
        department_id: departmentId,
        view_type: viewType,
      },
    }
  );

  return response.data;
};


// services/teacherService.js



export const getTeacherWorkloadSummary = async (
  teacherId,
  periodType = "last_8_months"
) => {
  try {
    const response = await api.get(
      `/teachers/${teacherId}/charts/workload-summary?period_type=${periodType}`
    );

    return response.data;
  } catch (error) {
    console.error("Teacher Workload Summary Error:", error);
    throw error;
  }
};




