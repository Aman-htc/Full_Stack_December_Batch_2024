
import api from "./api";

export const createFeeStructure = async (data) => {
  const response = await api.post("/fees/structures", data);
  return response.data;
};


export const getFeeStructure = async (data) => {
  const response = await api.get("/fees/structures", data);
  return response.data;
};
export const addFeeassign = async (data) => {
  const response = await api.post("/fees/assign", data);
  return response.data;
};




export const getStudentsfess = async ({
  class_section = "All",
  period_type = "all",
  status = "All",
} = {}) => {
  const response = await api.get("/fees/students", {
    params: {
      class_section,
      period_type,
      status
    },
  });

  return response.data;
};

export const studentfeepage= async (data) => {
  const response = await api.post("/fees/pay", data);
  return response.data;
};



export const addExpenses = async (data) => {
  const response = await api.post("/expenses/", data);
  return response.data;
};

// export const getExpenses = async (data) => {
//   const response = await api.get("/expenses/", data);
//   return response.data;
// };
export const getExpenses = async (period_type = "all") => {
  const response = await api.get("/expenses/", {
    params: {
      period_type,
    },
  });

  return response.data;
};


export const updateExpense = async (expense_id, data) => {
  const response = await api.put(`/expenses/${expense_id}`, data);
  return response.data;
};


export const deleteExpense = async (expense_id) => {
  const response = await api.delete(`/expenses/${expense_id}`);
  return response.data;
};


// export const getExpenseTrendChart = async (month) => {
//   const response = await api.get(`/expenses/charts/trend?period=${month}`);
//   return response.data;
// };
export const getExpenseTrendChart = async (period) => {
  const response = await api.get("/expenses/charts/trend", {
    params: {
      period,
    },
  });

  return response.data;
};

export const getExpensecategory = async () => {
  const response = await api.get("/expenses/charts/category");
  return response.data;
};



export const addreimbursements = async (data) => {
  const response = await api.post("/expenses/reimbursements", data);
  return response.data;
};
// export const getreimbursements = async (data) => {
//   const response = await api.get("/expenses/reimbursements", data);
//   return response.data;
// };


export const getreimbursements = async (period_type) => {
  const response = await api.get("/expenses/reimbursements", {
    params: {
      period_type,
    },
  });

  return response.data;
};

export const updateReimbursement = async (id, payload) => {
  try {
    const response = await api.put(
      `/expenses/reimbursements/${id}`,
      payload
    );

    return response.data;
  } catch (error) {
    console.error("Update Reimbursement Error:", error);
    throw error;
  }
};

export const deletereimbursement = async (reimbursement_id) => {
  const response = await api.delete(`/expenses/reimbursements/${reimbursement_id}`);
  return response.data;
};


export const fetchFeeStats= async () => {
  const response = await api.get("/fees/charts/stats");
  return response.data;
};


// export const getfessTrends = async (period = "Last 3 Years") => {
//   const response = await api.get("/fees/charts/trend", {
//     params: { period },
//   });

//   return response.data;
// };

export const getfessTrends = async (period = "Last 3 Years") => {
  try {
    const response = await api.get("/fees/charts/trend", {
      params: { period },
    });

    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return {
        success: false,
        data: [],
      };
    }

    throw error; 
  }
};
export const getfessprogress = async () => {
  const response = await api.get("/fees/charts/progress");

  return response.data;
};


