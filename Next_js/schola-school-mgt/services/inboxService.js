

import api from './api'



export const sendMessage = async (data) => {
  const response = await api.post("/messages/send", data);
  return response.data;
};
export const sendattachment = async (data) => {
  const response = await api.post("/messages/attachments", data);
  return response.data;
};



export const updateMessageStatus = (
  messageId,
  userEmail,
  action,
  status
) => {
   return api.patch(
    `/messages/${messageId}/status`,
    {
      action,
      status,
    },
    {
      params: {
        user_email: userEmail,
      },
    }
  );
};


export const getMessagesByFolder = (userEmail, folder) => {
  return api.get("/messages/folder", {
    params: {
      user_email: userEmail,
      folder: folder,
    },
  });
};


export const getFolderCounts = (userEmail) => {
  return api.get("/messages/counts/folders", {
    params: {
      user_email: userEmail,
    },
  });
};


export const sendDrafts = async (data) => {
  const response = await api.post("/messages/drafts", data);
  return response.data;
};



export const getDrafts = async (data) => {
  const response = await api.get("/messages/drafts/all", data);
  return response.data;
};