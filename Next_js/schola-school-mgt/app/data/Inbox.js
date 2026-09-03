const inboxData = {
    pageTitle: "Inbox",
    breadcrumb: {
        parent: "Dashboard",
        current: "Inbox",
    },

    user: {
        id: 1,
        name: "Oscar Hansen",
        role: "Admin",
        avatar: "",
    },

    emails: [
        {
            id: 1,
            senderName: "Jaden Lowe",
            senderEmail: "jaden.lowe@schola.org",
            avatarText: "JL",
            subject: "Attendance Report for 7A",
            shortMessage:
                "Please find attached the attendance summary for class 7A for this week.",
            fullMessage:
                "Dear Admin,\n\nPlease find attached the attendance summary for class 7A for this week. Kindly review the report and let us know if any correction is required.\n\nRegards,\nJaden Lowe",
            time: "01:45 PM",
            date: "March 7, 2035",
            label: "Academic",
            isRead: false,
            isStarred: false,
            hasAttachment: true,
            isActive: false,
        },
        {
            id: 2,
            senderName: "Finance Office",
            senderEmail: "finance@studyschool.org",
            avatarText: "FO",
            subject: "Reminder: Fee Payment Deadline",
            shortMessage:
                "Kindly ensure all pending Grade 9 fee payments are completed by March 15.",
            fullMessage:
                "Dear Admin,\n\nThis is a gentle reminder that all pending Grade 9 student fee payments must be completed by March 15, 2035. Kindly check the finance section of the dashboard to verify payments and follow up with students or parents if required.\n\nThank you for your cooperation.\n\n— Finance Office",
            time: "11:00 AM",
            date: "March 7, 2035",
            label: "Finance",
            isRead: false,
            isStarred: true,
            hasAttachment: false,
            isActive: true,
        },
        {
            id: 3,
            senderName: "Suzanne Lim",
            senderEmail: "suzanne.lim@schola.org",
            avatarText: "SL",
            subject: "Science Fair Volunteer Request",
            shortMessage:
                "We are looking for staff to help coordinate the upcoming Science Fair on March 20.",
            fullMessage:
                "Hello Admin,\n\nWe are looking for staff members to help coordinate the upcoming Science Fair on March 20. Please let us know if any teachers or staff are available for volunteer support.\n\nThanks,\nSuzanne Lim",
            time: "08:30 AM",
            date: "March 7, 2035",
            label: "Events",
            isRead: true,
            isStarred: false,
            hasAttachment: false,
            isActive: false,
        },
        {
            id: 4,
            senderName: "Principal's Office",
            senderEmail: "principal@studyschool.org",
            avatarText: "PO",
            subject: "Teacher Development Workshop",
            shortMessage:
                "A professional development workshop for all teachers has been scheduled for next week.",
            fullMessage:
                "Dear Admin,\n\nA professional development workshop for all teachers has been scheduled for next week. Please coordinate with department heads and share the final attendee list.\n\nRegards,\nPrincipal's Office",
            time: "Yesterday",
            date: "March 6, 2035",
            label: "Administration",
            isRead: true,
            isStarred: false,
            hasAttachment: true,
            isActive: false,
        },
        {
            id: 5,
            senderName: "Librarian",
            senderEmail: "library@studyschool.org",
            avatarText: "LB",
            subject: "New Books Arrival Notification",
            shortMessage:
                "The library has received 120 new books, including updated references for science subjects.",
            fullMessage:
                "Dear Admin,\n\nThe library has received 120 new books, including updated reference books for science subjects. Please update the notice board for students and teachers.\n\nRegards,\nLibrarian",
            time: "Yesterday",
            date: "March 6, 2035",
            label: "Academic",
            isRead: true,
            isStarred: false,
            hasAttachment: false,
            isActive: false,
        },
        {
            id: 6,
            senderName: "Parent Association",
            senderEmail: "parents.association@studyschool.org",
            avatarText: "PA",
            subject: "Parent-Teacher Meeting Invitation",
            shortMessage:
                "You are invited to attend the Parent-Teacher Meeting scheduled on March 18.",
            fullMessage:
                "Dear Admin,\n\nYou are invited to attend the Parent-Teacher Meeting scheduled on March 18. Please coordinate with class teachers and share the meeting details with parents.\n\nRegards,\nParent Association",
            time: "5 Mar",
            date: "March 5, 2035",
            label: "Administration",
            isRead: true,
            isStarred: false,
            hasAttachment: false,
            isActive: false,
        },
        {
            id: 7,
            senderName: "Sports Department",
            senderEmail: "sports@studyschool.org",
            avatarText: "SD",
            subject: "Annual Sports Competition Details",
            shortMessage:
                "Final match schedules and venue arrangements for the Annual Sports Competition are ready.",
            fullMessage:
                "Dear Admin,\n\nFinal match schedules and venue arrangements for the Annual Sports Competition are ready. Please review the details and approve the notice before publishing.\n\nRegards,\nSports Department",
            time: "5 Mar",
            date: "March 5, 2035",
            label: "Events",
            isRead: true,
            isStarred: false,
            hasAttachment: true,
            isActive: false,
        },
        {
            id: 8,
            senderName: "Administration Office",
            senderEmail: "admin.office@studyschool.org",
            avatarText: "AO",
            subject: "Annual Reports Completion Details",
            shortMessage:
                "Final reports and documents are required for completion of the annual school record.",
            fullMessage:
                "Dear Admin,\n\nFinal reports and documents are required for completion of the annual school record. Please collect reports from all departments before the deadline.\n\nRegards,\nAdministration Office",
            time: "4 Mar",
            date: "March 4, 2035",
            label: "Administration",
            isRead: true,
            isStarred: false,
            hasAttachment: false,
            isActive: false,
        },
    ],

    selectedEmail: {
        id: 2,
        senderName: "Finance Office",
        senderEmail: "finance@studyschool.org",
        avatarText: "FO",
        subject: "Reminder: Fee Payment Deadline",
        date: "March 7, 2035",
        time: "11:00 AM",
        message:
            "Dear Admin,\n\nThis is a gentle reminder that all pending Grade 9 student fee payments must be completed by March 15, 2035. Kindly check the finance section of the dashboard to verify payments and follow up with students or parents if required.\n\nThank you for your cooperation.\n\n— Finance Office",
        to: [
            {
                name: "Admin",
                email: "finace@studyschool.org",
            },
        ],

        cc: [],
        bcc: [],
        attachments: [],
    },

    composeMessage: {
        to: [
            {
                name: "Finance",
                email: "finance@studyschool.org",
            },
        ],
        cc: [],
        bcc: [],
        placeholder: "Type something...",
        toolbar: [
            "undo",
            "redo",
            "font-family",
            "font-size",
            "bold",
            "italic",
            "underline",
            "align",
            "list",
            "link",
            "attachment",
            "image",
            "emoji",
        ],
    },
};


export default inboxData;