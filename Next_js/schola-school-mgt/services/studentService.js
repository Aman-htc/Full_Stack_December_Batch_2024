import api from "./api";

/* =========================
   STUDENT APIs
========================= */

// GET ALL STUDENTS
export const getStudents = async () => {
  const response = await api.get("/students/");
  return response.data;
};

// GET SINGLE STUDENT
export const getStudentById = async (id) => {
  const response = await api.get(`/students/${id}`);
  return response.data;
};

// ADD STUDENT
export const addStudent = async (studentData) => {
  const response = await api.post("/students/", studentData);
  return response.data;
};

// UPDATE STUDENT
export const updateStudent = async (id, studentData) => {
  const response = await api.put(`/students/${id}`, studentData);
  return response.data;
};

// DELETE STUDENT
export const deleteStudent = async (id) => {
  const response = await api.delete(`/students/${id}`);
  return response.data;
};

/* =========================
   BEHAVIOR LOG APIs
========================= */

// ADD BEHAVIOR LOG
export const addBehaviorLog = async (logData) => {
  const response = await api.post(
    "/students/behavior-logs",
    logData
  );
  return response.data;
};

// GET STUDENT BEHAVIOR LOGS
export const getBehaviorLogs = async (studentId) => {
  const response = await api.get(
    `/students/${studentId}/behavior-logs`
  );
  return response.data;
};



export const updateBehaviorLog = async (
  logId,
  payload
) => {
  const response = await api.put(
    `/students/behavior-logs/${logId}`,
    payload
  );

  return response.data;
};


export const deleteBehaviorLog = async (logId) => {
  const response = await api.delete(
    `/students/behavior-logs`,
    {
      data: {
        log_id: logId,
      },
    }
  );

  return response.data;
};




// Add Scholarship
export const addScholarship = async (data) => {
  const response = await api.post(
    "/students/scholarships",
    data
  );
  return response.data;
};

// Get Scholarships By Student ID
export const getScholarshipsByStudentId = async (studentId) => {
  const response = await api.get(
    `/students/${studentId}/scholarships`
  );
  return response.data;
};

// Update Scholarship
export const updateScholarship = async (scholarshipId, data) => {
  const response = await api.put(
    `/students/scholarships/${scholarshipId}`,
    data
  );
  return response.data;
};

// Delete Scholarship
export const deleteScholarship = async (scholarshipId) => {
  const response = await api.delete(
    `/students/scholarships/${scholarshipId}`
  );
  return response.data;
};




// Add Club
export const addClub = async (data) => {
  const response = await api.post(
    "/students/clubs",
    data
  );
  return response.data;
};

// Get Clubs By Student ID
export const getClubsByStudentId = async (studentId) => {
  const response = await api.get(
    `/students/${studentId}/clubs`
  );
  return response.data;
};

// Update Club
export const updateClub = async (clubId, data) => {
  const response = await api.put(
    `/students/clubs/${clubId}`,
    data
  );
  return response.data;
};

// Delete Club
export const deleteClub = async (clubId) => {
  const response = await api.delete(
    `/students/clubs/${clubId}`
  );
  return response.data;
};



// Get All Special Programs
export const getAllSpecialPrograms = async () => {
  const response = await api.get("/students/special-programs");
  return response.data;
};

// Add Special Program
export const addSpecialProgram = async (data) => {
  const response = await api.post("/students/special-programs", data);
  return response.data;
};

// Update Special Program
export const updateSpecialProgram = async (programId, data) => {
  const response = await api.put(
    `/students/special-programs/${programId}`,
    data
  );
  return response.data;
};

// Delete Special Program
export const deleteSpecialProgram = async (programId) => {
  const response = await api.delete(
    `/students/special-programs/${programId}`
  );
  return response.data;
};



export const getAllClasses = async () => {
  try {
    const response = await api.get("/students/classes");

    return response.data;
  } catch (error) {
    console.error("Get Classes API Error:", error);

    throw error?.response?.data || error;
  }
};


export const getAllSections = async () => {
  try {
    const response = await api.get("/students/sections");

    return response.data;
  } catch (error) {
    console.error("Get Sections API Error:", error);

    throw error?.response?.data || error;
  }
};



export const getStats = async () => {
  const response = await api.get(
    "/students/charts/stats"
  );
  return response.data;
};


export const getEnrollmentTrends = async (period = "Last 3 Years") => {
  const response = await api.get("/students/charts/enrollment-trends", {
    params: { period },
  });

  return response.data;
};



export const getAcademicPerformance = async (period) => {
  const response = await api.get(
    `/students/charts/academic-performance?period=${encodeURIComponent(period)}`
  );

  return response.data;
};


export const getStudentAttendanceOverview = async (
  period = "This Week"
) => {
  try {
    const response = await api.get(
      `/students/charts/attendance-overview?period=${encodeURIComponent(period)}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
