"use client";

import { useMemo, useState, useEffect } from "react"
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Badge,
} from "react-bootstrap";

import {
  FiSearch,
  FiSliders,
  FiPlus,
  FiStar,
  FiSend,
  FiTrash2,
  FiPaperclip,
  FiSmile,
  FiImage,
  FiLink,
  FiMoreVertical,
  FiCornerUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiBold,
  FiItalic,
  FiUnderline,
  FiAlignLeft,
  FiList,
  FiDownload,
  FiMaximize2,
} from "react-icons/fi";

import {
  MdOutlineInbox,
  MdOutlineDrafts,
  MdOutlineReportGmailerrorred,
} from "react-icons/md";

import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { LuUndo2, LuRedo2 } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";

import Header from "@/app/components/Header";
import Breadcrumb from "@/app/components/breadcrum";
import inboxData from "@/app/data/Inbox";
import { getDrafts, getFolderCounts, getMessagesByFolder, sendattachment, sendDrafts, sendMessage, updateMessageStatus } from "@/services/inboxService";
import { toast } from "react-toastify";
import { HiPaperClip } from "react-icons/hi";
import { uploadToCloudinary } from "@/app/components/Cloudinary";
import { useRouter } from "next/navigation";


const labelItems = [
  { label: "Academic", className: "label-academic" },
  { label: "Events", className: "label-events" },
  { label: "Finance", className: "label-finance" },
  { label: "Administration", className: "label-admin" },
];

export default function InboxPage() {


  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("idToken");

    if (!token) {
      router.push("/signin");
    }
  }, []);

  const [showMailList, setShowMailList] = useState(false);
  const [attachment, setAttachment] = useState(null);

  const [emailError, setEmailError] = useState("");
  const [ccError, setCcError] = useState("");
  const [bccError, setBccError] = useState("");

  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);

  const [activeCategory, setActiveCategory] = useState("");
  const [selectedEmailId, setSelectedEmailId] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [headerSearch, setHeaderSearch] = useState("");
  const [toInput, setToInput] = useState("");
  const [emails, setEmails] = useState(inboxData.emails);
  const [draftCount, setDraftCount] = useState(0);


  const handleSaveDraft = async () => {
    try {
      const payload = {

        sender_name: "Admin",
        sender_email: "admin@school.com",

        receiver_emails: Array.isArray(emailForm.to)
          ? emailForm.to.join(",")
          : emailForm.to || "",

        subject: emailForm.subject,
        body: emailForm.body,

        category: emailForm.category || "Academic",

        cc_emails: emailForm.cc || "",
        bcc_emails: emailForm.bcc || "",
      };

      

      const res = await sendDrafts(payload);

      

      toast.success("Draft saved successfully");
      setEmailForm({
        to: [],
        cc: "",
        bcc: "",
        subject: "",
        body: "",
        category: "Academic",
      });

      await loadFolderCounts();
      await loadDraftCount();

    } catch (error) {
      console.log("Draft Error:", error);
      console.log("Response:", error.response?.data);

      toast.error("Failed to save draft");
    }
  };


  const handleMessageAction = async (message, action) => {
    if (!message) {
      toast.error("Please select an email");
      return;
    }

    try {
      await updateMessageStatus(
        message.id,
        message.senderEmail,
        action,
        true
      );

      setEmails((prev) =>
        prev.filter((item) => item.id !== message.id)
      );

      setSelectedEmailId(null);

      toast.success(`Moved to ${action}`)
      await loadFolderCounts()
    } catch (error) {
      toast.error(`${action} failed`);
    }
  };


  const handleFileChange = (e) => {
    setAttachment(e.target.files[0]);
  };


  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleCcChange = (e) => {
    const value = e.target.value;

    setEmailForm((prev) => ({
      ...prev,
      cc: value,
    }));

    if (value && !isValidEmail(value)) {
      setCcError("Invalid CC email");
    } else {
      setCcError("");
    }
  };

  const handleBccChange = (e) => {
    const value = e.target.value;

    setEmailForm((prev) => ({
      ...prev,
      bcc: value,
    }));

    if (value && !isValidEmail(value)) {
      setBccError("Invalid BCC email");
    } else {
      setBccError("");
    }
  };


  const [emailForm, setEmailForm] = useState({
    to: [],
    cc: "",
    bcc: "",
    subject: "",
    body: "",
    category: "Academic",
  });







  const selectedEmail = useMemo(() => {
    return emails.find(
      (email) => email.id === selectedEmailId
    );
  }, [emails, selectedEmailId]);





  const filteredEmails = useMemo(() => {
    const value = (headerSearch || searchText).trim().toLowerCase();

    return emails.filter((email) => {
      return (
        !value ||
        email.senderName?.toLowerCase().includes(value) ||
        email.senderEmail?.toLowerCase().includes(value) ||
        email.subject?.toLowerCase().includes(value) ||
        email.shortMessage?.toLowerCase().includes(value)
      );
    });
  }, [emails, searchText, headerSearch]);


  const handleCategoryChange = async (folder) => {
    setActiveCategory(folder);
    setShowMailList(true);
    setSelectedEmailId(null);

    if (folder === "all") {
      setEmails(inboxData.emails);
      return;
    }

    const folderMap = {
      sent: "Sent",
      drafts: "Drafts",
      trash: "Trash",
      starred: "Starred",
      spam: "Spam",
    };

    try {

      // Drafts API
      if (folder === "drafts") {

        const response = await getDrafts();



        const apiData = response.data || [];

        const formattedData = apiData.map((item) => ({
          id: item.DraftID,

          senderName: item.SenderName || "Admin",

          senderEmail: item.SenderEmail,

          avatarText:
            item.SenderName?.slice(0, 2).toUpperCase() || "NA",

          subject: item.Subject || "",

          shortMessage: item.Body?.slice(0, 50) || "",

          fullMessage: item.Body || "",

          date: item.CreatedAt,

          time: item.CreatedAt,

          label: item.Category,
        }));


        setEmails(formattedData);
        await loadFolderCounts();
        return;
      }

      // Existing Messages API
      const response = await getMessagesByFolder(
        "admin@school.com",
        folderMap[folder]
      );



      const apiData = response.data.data || [];

      // setDraftCount(apiData.length);

      const formattedData = apiData.map((item) => ({
        id: item.MessageID,
        senderName: item.SenderName || "Unknown",
        senderEmail: item.SenderEmail || item.ReceiverEmail,
        avatarText:
          item.SenderName?.slice(0, 2).toUpperCase() || "NA",

        subject: item.Subject || "",
        shortMessage: item.Body?.slice(0, 50) || "",
        fullMessage: item.Body || "",

        date: item.CreatedAt,
        time: item.CreatedAt,

        label: item.Category,
        isRead: item.IsRead,
        isStarred: item.IsStarred,
      }));

      setEmails(formattedData);
      await loadFolderCounts();

    } catch (error) {
      console.error(error);
      toast.error("Failed to load messages");
      setEmails([]);
    }
  };




  useEffect(() => {
    if (selectedEmail) {
      setEmailForm((prev) => ({
        ...prev,
        to: selectedEmail.senderEmail
          ? [selectedEmail.senderEmail]
          : [],
        subject: `Re: ${selectedEmail.subject || ""}`,
      }));
    }
  }, [selectedEmail]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEmailForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleSend = async () => {
    try {
      if (emailForm.to.length === 0) {
        toast.error("Please add at least one recipient email");
        return;
      }

      // TO validation
      const invalidTo = emailForm.to.find(
        (email) => !isValidEmail(email)
      );

      if (invalidTo) {
        toast.error(`Invalid To email: ${invalidTo}`);
        return;
      }

      // CC validation
      if (emailForm.cc && !isValidEmail(emailForm.cc)) {
        toast.error("Invalid CC email");
        return;
      }

      // BCC validation
      if (emailForm.bcc && !isValidEmail(emailForm.bcc)) {
        toast.error("Invalid BCC email");
        return;
      }


      const receiverEmails = Array.isArray(emailForm.to)
        ? emailForm.to
        : emailForm.to.split(",").map(e => e.trim()).filter(Boolean);

      const payload = {
        sender_name: "Admin",
        sender_email: "admin@school.com",
        receiver_emails: receiverEmails,
        subject: emailForm.subject,
        body: emailForm.body,
        category: emailForm.category,
        cc_emails: emailForm.cc,
        bcc_emails: emailForm.bcc,
        receiver_type: receiverEmails.length > 1 ? "Multiple" : "Single",
        send_type: receiverEmails.length > 1 ? "Bulk" : "Single",
        folder: "Sent",
      };



      const res = await sendMessage(payload);

      const messageId = res?.data?.saved_messages?.[0]?.MessageID;



      let fileData = '';

      if (attachment) {
        const uploadRes = await uploadToCloudinary(attachment);

        fileData = {
          message_id: messageId,
          file_url: uploadRes,
          file_name: attachment.name,
          file_type: attachment.type,
          file_size_kb: Math.round(attachment.size / 1024),
        };


        try {
          const attachmentRes = await sendattachment(fileData);


        } catch (error) {

        }
      }

      toast.success("Email sent successfully");

      await loadFolderCounts()

      setEmailForm({
        to: [],
        subject: "",
        body: "",
        category: "",
        cc: "",
        bcc: "",
      });

      setAttachment(null);

    } catch (error) {
      toast.error("Failed to send email");
    }
  };
  const handleToKeyDown = (e) => {
    if (e.key === " " || e.key === "," || e.key === "Enter") {
      e.preventDefault();

      const email = toInput.trim().replace(",", "");

      if (!email) return;

      setEmailForm((prev) => ({
        ...prev,
        to: [...prev.to, email],
      }));

      setToInput("");
    }
  };

  const removeEmail = (index) => {
    setEmailForm((prev) => ({
      ...prev,
      to: prev.to.filter((_, i) => i !== index),
    }));
  };


  const [folderCounts, setFolderCounts] = useState({
    Inbox: 0,
    Sent: 0,
    Drafts: 0,
    Spam: 0,
    Trash: 0,
    Starred: 0,
  });

  const loadDraftCount = async () => {
    try {
      const res = await getDrafts();
      setDraftCount(res.data.data?.length || 0);
    } catch (err) {
      console.log(err);
    }
  };

  const loadFolderCounts = async () => {
    try {
      const res = await getFolderCounts(
        "admin@school.com"
      );

      

      setFolderCounts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDraftCount();

    loadFolderCounts();
  }, []);

  const categoryItems = [
    {
      id: "all",
      label: "All Inbox",
      count: folderCounts.Inbox || 0,
      icon: MdOutlineInbox,
    },
    {
      id: "starred",
      label: "Starred",
      count: folderCounts.Starred || 0,
      icon: FiStar,
    },
    {
      id: "sent",
      label: "Sent",
      count: folderCounts.Sent || 0,
      icon: HiOutlinePaperAirplane,
    },
    {
      id: "drafts",
      label: "Drafts",
      count: draftCount,
      icon: MdOutlineDrafts,
    },
    {
      id: "spam",
      label: "Spam",
      count: folderCounts.Spam || 0,
      icon: MdOutlineReportGmailerrorred,
    },
    {
      id: "trash",
      label: "Trash",
      count: folderCounts.Trash || 0,
      icon: AiOutlineDelete,
    },
  ];



  return (
    <Container fluid className="inbox-page min-vh-100 px-0 pb-4">
      {/* <Header text={inboxData.pageTitle} /> */}
      <Header
        text="Inbox"
        search={headerSearch}
        setSearch={setHeaderSearch}
      />
      <div className="px-3 px-lg-4">
        <Breadcrumb
          items={[
            { label: inboxData.breadcrumb.parent, path: "/dashboard" },
            { label: inboxData.breadcrumb.current },
          ]}
        />

        <Row className="g-3 mt-2 align-items-stretch">
          <Col xs={12} md={5} xl={2}>
            <div className="inbox-panel h-100 bg-white rounded-4 p-3">
              <h5 className="inbox-title mb-3 p-2">Category</h5>

              <div className="d-flex flex-column gap-2">
                {categoryItems.map((item) => {
                  const Icon = item.icon;
                  const active = activeCategory === item.id;

                  return (
                    <Button
                      key={item.id}
                      variant="link"
                      type="button"
                      onClick={() => {

                        handleCategoryChange(item.id)
                        setShowMailList(true);
                      }}

                      className={`category-btn w-100 border-0 rounded-3 px-3 py-2 text-decoration-none shadow-none d-flex align-items-center justify-content-between ${active ? "active" : ""
                        }`}
                    >
                      <span className="d-flex align-items-center gap-2">
                        <Icon size={17} />
                        <span>{item.label}</span>
                      </span>

                      {item.count !== null && (
                        <span className="category-count">{item.count}</span>
                      )}
                    </Button>
                  );
                })}
              </div>

              <div className="d-flex align-items-center justify-content-between mt-4 mb-3">
                <h6 className="inbox-title mb-0">Label</h6>

                <Button
                  variant="link"
                  className="p-0 border-0 text-dark text-decoration-none shadow-none"
                >
                  <FiPlus size={17} />
                </Button>
              </div>


              <div className="d-flex flex-column gap-3">
                {labelItems.map((item) => (
                  <div
                    key={item.label}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span className="label-name d-flex align-items-center gap-2">
                      <span className={`label-dot ${item.className}`} />
                      {item.label}
                    </span>

                    <span className="label-count">
                      {
                        inboxData.emails.filter(
                          (email) => email.label === item.label
                        ).length
                      }
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col xs={12} md={7} xl={3} className={!showMailList ? "d-none" : ""}>
            <div className=" h-100 rounded-4 p-3">
              <div className="d-flex align-items-center gap-2 mb-3">
                <InputGroup className="mail-search flex-grow-1">
                  <InputGroup.Text className="border-0 shadow-none">
                    <FiSearch size={17} />
                  </InputGroup.Text>

                  <Form.Control
                    value={searchText}
                    placeholder="Search email"
                    onChange={(event) => setSearchText(event.target.value)}
                    className="border-0 shadow-none"
                  />

                  <InputGroup.Text className="border-0 shadow-none">
                    <FiSliders size={17} />
                  </InputGroup.Text>
                </InputGroup>


                <Button
                  className="add-mail-btn border-0 rounded-3 p-0 d-flex align-items-center justify-content-center"
                  onClick={() => setShowMailList((prev) => !prev)}
                >
                  {showMailList ? <FiChevronLeft size={18} /> : <FiChevronRight size={18} />}
                </Button>
              </div>

              {filteredEmails.length > 0 ?

                <div className="email-list d-flex flex-column gap-2 overflow-auto ">
                  {filteredEmails.map((email) => {
                    const active = email.id === selectedEmail?.id;

                    return (
                      <Button
                        key={email.id}
                        variant="link"
                        type="button"
                        onClick={() => setSelectedEmailId(email.id)}
                        className={`email-item w-100 border-0 rounded-4 p-3 text-start text-decoration-none shadow-none d-flex gap-3 ${active ? "active" : ""
                          }`}
                      >
                        <div className="avatar-box">{email.avatarText}</div>

                        <div className="flex-grow-1 overflow-hidden">
                          <div className="d-flex align-items-center justify-content-between gap-2">
                            <h6 className="email-name mb-1 text-truncate">
                              {email.senderName}
                            </h6>

                            <span className="email-time flex-shrink-0">
                              {email.time}
                            </span>
                          </div>

                          <p className="email-subject mb-1 text-truncate">
                            {email.subject}
                          </p>

                          <p className="email-preview mb-0">
                            {email.shortMessage}
                          </p>
                        </div>
                      </Button>
                    );
                  })}
                </div>
                : 'No details found'}
            </div>
          </Col>


          <Col xs={12} xl={showMailList ? 7 : 10}>
            <div className="inbox-panel bg-white h-100 rounded-4 p-3 p-lg-4">
              {selectedEmail && (
                <div className="mail-toolbar  d-flex align-items-center justify-content-between gap-3 flex-wrap pb-3 mb-3 border-bottom">


                  <div className="d-flex align-items-center gap-3">
                    <Button
                      variant="link"
                      className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none"
                    >
                      <FiChevronLeft size={20} />
                    </Button>

                    <Button
                      variant="link"
                      className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none"
                    >
                      <FiDownload size={17} />
                    </Button>


                    <Button
                      variant="link"
                      className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none"
                      onClick={() => handleMessageAction(selectedEmail, "delete")}
                    >
                      <FiTrash2 size={17} />
                    </Button>

                    <Button
                      variant="link"
                      className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none"
                      onClick={() => handleMessageAction(selectedEmail, "star")}
                    >
                      <FiStar size={17} />
                    </Button>

                    <Button
                      variant="link"
                      className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none"
                      onClick={() => handleMessageAction(selectedEmail, "spam")}
                    >
                      <MdOutlineReportGmailerrorred size={17} />
                    </Button>


                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <Button
                      variant="link"
                      className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none"
                    >
                      <FiChevronLeft size={17} />
                    </Button>

                    <span className="small-text text-secondary d-none d-sm-inline">
                      5 from 36
                    </span>

                    <Button
                      variant="link"
                      className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none"
                    >
                      <FiChevronRight size={17} />
                    </Button>

                    <Button
                      variant="link"
                      className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none"
                    >
                      <FiCornerUpRight size={17} />
                    </Button>

                    <Button
                      variant="link"
                      className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none"
                    >
                      <FiMoreVertical size={17} />
                    </Button>
                  </div>
                </div>
              )}

              {selectedEmail && (

                <div className={`d-flex align-items-start justify-content-between gap-3 mb-4 flex-wrap ${!showMailList ? "d-none" : ""
                  }`}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="avatar-box avatar-lg">
                      {selectedEmail.avatarText}
                    </div>

                    <div>
                      <h5 className="mail-user-name text-danger-subtle mb-1">
                        {selectedEmail.senderName}
                      </h5>

                      <p className="small-text text-secondary mb-0">
                        {selectedEmail.senderEmail}
                      </p>
                    </div>
                  </div>

                  <p className="small-text text-secondary text-end mb-0">
                    {selectedEmail.date}
                    <br />
                    {selectedEmail.time}
                  </p>
                </div>
              )}

              {selectedEmail && (

                <div className={`mail-message-box  mb-4 p-4 shadow-sm ${!showMailList ? "d-none" : ""
                  }`}>
                  <h5 className="mail-subject text-dark mb-4">
                    {selectedEmail.subject}
                  </h5>

                  <div className="mail-body text-dark lh-lg">
                    {selectedEmail.fullMessage}
                  </div>
                </div>

              )}

              <div className="compose-card rounded-4 p-3 border">

                <div className="border-bottom pb-3 mb-3">

                  {/* To Field */}
                  <div className="d-flex align-items-start border-bottom py-2">

                    <div
                      className="text-dark small flex-shrink-0 pt-2"
                      style={{ width: "60px" }}
                    >
                      To
                    </div>

                    <div className="flex-grow-1">

                      <div className="d-flex flex-wrap align-items-center gap-2">

                        {Array.isArray(emailForm.to) &&
                          emailForm.to.map((email, index) => (
                            <Badge
                              key={index}
                              pill
                              bg="primary"
                              className="d-flex align-items-center gap-2 px-3 py-2"
                            >
                              <span>{email}</span>

                              <Button
                                variant="link"
                                className="p-0 text-white text-decoration-none shadow-none lh-1"
                                onClick={() => removeEmail(index)}
                              >
                                ×
                              </Button>
                            </Badge>
                          ))}

                        <Form.Control
                          type="text"
                          value={toInput}
                          onChange={(e) => {
                            setToInput(e.target.value);
                            setEmailError("");
                          }}
                          onKeyDown={handleToKeyDown}

                          className={`border-0 shadow-none bg-transparent p-0 flex-grow-1 ${emailError ? "is-invalid" : ""
                            }`}
                        />
                      </div>
                    </div>

                    <div className="d-flex gap-3 ms-3 pt-2 flex-shrink-0">

                      {!showCc && (
                        <Button
                          variant="link"
                          className="p-0 text-dark text-decoration-none shadow-none"
                          onClick={() => setShowCc(true)}
                        >
                          Cc
                        </Button>
                      )}

                      {!showBcc && (
                        <Button
                          variant="link"
                          className="p-0 text-dark text-decoration-none shadow-none"
                          onClick={() => setShowBcc(true)}
                        >
                          Bcc
                        </Button>
                      )}

                    </div>
                  </div>

                  {/* CC Field */}
                  {showCc && (
                    <div className="d-flex align-items-center border-bottom py-2">

                      <div
                        className="text-dark small flex-shrink-0"
                        style={{ width: "60px" }}
                      >
                        Cc
                      </div>

                      <Form.Control
                        type="text"
                        name="cc"
                        value={emailForm.cc}
                        onChange={handleCcChange}
                        placeholder="cc@example.com"
                        className={`border-0 shadow-none bg-transparent p-0 ${ccError ? "is-invalid" : ""
                          }`}
                      />

                      {ccError && (
                        <div className="text-danger small mt-1">
                          {ccError}
                        </div>
                      )}
                    </div>
                  )}

                  {/* BCC Field */}
                  {showBcc && (
                    <div className="d-flex align-items-center border-bottom py-2">

                      <div
                        className="text-dark small flex-shrink-0"
                        style={{ width: "60px" }}
                      >
                        Bcc
                      </div>

                      <Form.Control
                        type="text"
                        name="bcc"
                        value={emailForm.bcc}
                        onChange={handleBccChange}
                        placeholder="bcc@example.com"
                        className={`border-0 shadow-none bg-transparent p-0 ${bccError ? "is-invalid" : ""
                          }`}
                      />

                      {bccError && (
                        <div className="text-danger small mt-1">
                          {bccError}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Subject Field */}
                  <div className="d-flex align-items-center py-2">

                    <div
                      className="text-dark small flex-shrink-0"
                      style={{ width: "60px" }}
                    >
                      Subject
                    </div>

                    <Form.Control
                      type="text"
                      name="subject"
                      value={emailForm.subject}
                      onChange={handleInputChange}
                      placeholder="Enter subject"
                      className="border-0  shadow-none bg-transparent p-0"
                    />
                  </div>

                </div>


                <Form.Control
                  as="textarea"
                  rows={4}
                  name="body"
                  value={emailForm.body}
                  placeholder="Type your message..."
                  className="compose-textarea bg-white h-100 border-0 shadow-none mb-3"
                  onChange={handleInputChange}
                />

                <div className="editor-toolbar bg-white border rounded-3 p-2 mb-3 d-flex align-items-center gap-2 flex-wrap">
                  <Button variant="link" className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none">
                    <LuUndo2 size={17} />
                  </Button>

                  <Button variant="link" className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none">
                    <LuRedo2 size={17} />
                  </Button>

                  <Form.Select size="sm" className="border-0 shadow-none w-auto small">
                    <option>Sans Serif</option>
                  </Form.Select>

                  <Button variant="link" className="icon-btn p-0 border-0 text-dark text-decoration-none shadow-none">
                    Aa
                  </Button>

                  <Button
                    variant="link"
                    className="icon-btn p-0 border-0 text-dark text-decoration-none shadow-none"

                    onClick={() =>
                      setEmailForm((prev) => ({
                        ...prev,
                        body: `**${prev.body}**`,
                      }))
                    }
                  >
                    <FiBold size={16} />
                  </Button>

                  <Button
                    variant="link"
                    className="icon-btn p-0 border-0 text-dark text-decoration-none shadow-none"
                    // onClick={() => setMessageText((prev) => `_${prev}_`)}
                    onClick={() =>
                      setEmailForm((prev) => ({
                        ...prev,
                        body: `_${prev.body}_`,
                      }))
                    }
                  >
                    <FiItalic size={16} />
                  </Button>

                  <Button
                    variant="link"
                    className="icon-btn p-0 border-0 text-dark text-decoration-none shadow-none"

                    onClick={() =>
                      setEmailForm((prev) => ({
                        ...prev,
                        body: `• ${prev.body}`,
                      }))
                    }
                  >
                    <FiUnderline size={16} />
                  </Button>

                  <Button variant="link" className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none">
                    <FiAlignLeft size={16} />
                  </Button>

                  <Button
                    variant="link"
                    className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none"

                    onClick={() =>
                      setEmailForm((prev) => ({
                        ...prev,
                        body: `• ${prev.body}`,
                      }))
                    }
                  >
                    <FiList size={16} />
                  </Button>
                </div>

                <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <Button className="format-btn border-0 rounded-circle p-0 d-flex align-items-center justify-content-center">
                      A
                    </Button>



                    <Button variant="link" className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none">
                      <FiLink size={17} />
                    </Button>

                    <Button variant="link" className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none">
                      <FiSmile size={17} />
                    </Button>

                    <Button variant="link" className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none">
                      <FiImage size={17} />
                      {/* <HiPaperClip/>   */}
                    </Button>

                    <Button
                      variant="link"
                      className=" icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none "
                      onClick={() => document.getElementById("fileInput").click()}
                    >
                      <FiPaperclip size={16} />

                    </Button>

                    <div className="d-flex align-items-center gap-2 mb-2">
                      <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                      <div className="d-flex align-items-center gap-2 mb-2">



                        {/* show selected file */}
                        {attachment && (
                          <div className="d-flex align-items-center gap-2 bg-light px-3 py-2 rounded-3 border">
                            <span className="small text-truncate" style={{ maxWidth: "180px" }}>
                              {attachment.name}
                            </span>

                            <Button
                              variant="link"
                              className="p-0 text-danger text-decoration-none"
                              onClick={() => setAttachment(null)}
                            >
                              ✕
                            </Button>
                          </div>
                        )}

                      </div>
                    </div>


                  </div>


                  <div className="d-flex align-items-center gap-2">
                    <Button
                      variant="link"
                      className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none"
                      onClick={() => {
                        setEmailForm({
                          to: [],
                          cc: "",
                          bcc: "",
                          subject: "",
                          body: "",
                          category: "Academic",
                        });

                        setAttachment(null);
                      }}
                    >
                      <FiTrash2 size={17} />
                    </Button>
                    <Button
                      variant="link"
                      className="icon-btn p-0 border-0 text-secondary text-decoration-none shadow-none"
                      onClick={handleSaveDraft}
                    >
                      <MdOutlineDrafts size={17} />
                    </Button>









                    <Button
                      className="send-btn border-0 rounded-3 d-flex align-items-center gap-2"
                      onClick={handleSend}
                    >
                      <FiSend size={15} />
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
