const {
    User,
    Camp,
    Organizer,
    Doctor,
    Participant,
    UpcomingCamp,
} = require("../models/model");
const insertUser = require("../services/insertUser");

async function dataInitializer() {
    // Create a camp data
    await Camp.create({
        name: "Medical Checkup Camp",
        img: "https://random.imagecdn.app/500/150",
        date: "2023-03-01",
        venue: "Community Center",
        desc: "The Annual Health Checkup Camp, scheduled for March 1, 2023, at the Community Center, is a crucial event tailored for individuals aged 50 and above. This comprehensive health screening aims to detect potential health issues early, offering tests such as blood pressure, cholesterol checks, and blood glucose screenings. The camp emphasizes preventative healthcare, empowering participants with knowledge and tools for proactive well-being. Beyond medical assessments, the event fosters a supportive community, where healthcare professionals provide personalized advice. The nominal 3000 registration fee covers tests, consultations, and informational materials. Join us for a day dedicated to prioritizing your health and well-being on March 1st at the Community Center.",
        fees: "3000",
        purpose: "Health screening",
        benefits: "Early detection of health issues",
        target_audience: "People over 50",
        phone_number: "+91 9998888777",
        doctors: [],
        participants: [],
        feedbacks: [],
        rating: 4,
    });

    await UpcomingCamp.create({
        name: "Free Dental Camp",
        img: "https://random.imagecdn.app/500/150",
        date: "2023-06-01",
        venue: "City Hospital",
        desc: "Join us at the Free Dental Camp on June 1, 2023, at City Hospital for a day dedicated to promoting dental health. This special event offers a comprehensive and free dental checkup and treatment for attendees. Our team of experienced dentists will be on hand to provide personalized care, focusing on oral health improvement. The camp is specifically designed for children aged 2-10 years, ensuring a child-friendly environment for their comfort. Parents, guardians, and caregivers are encouraged to bring their little ones for this valuable opportunity. The registration fee for this event is generously set at Rs. 0, making it accessible to all. For inquiries and registration, contact us at +91 1112223334. Don't miss this chance to contribute to your child's oral well-being and overall health.",
        fees: "0",
        purpose: "Dental care",
        benefits: "Oral health improvement",
        target_audience: "Children (2-10 years)",
        phone_number: "+91 1112223334",
        doctors_interested: [],
        doctors_accepted: [],
        participants_registered: [],
        participants_accepted: [],
    });

    const organizer = {
        role: "organizer",
        name: "John Doe",
        email: "john.doe@example.com",
        phone_number: "+91 9876543210",
        organized_camps: [],
        feedbacks: [],
    };

    const participant = {
        role: "participant",
        name: "Alice Gupta",
        age: 62,
        phone_number: "+91 9874561230",
        email: "alice@example.com",
        gender: "Female",
        address: "123 Main St, City, State, Country",
        requirements: "Wheelchair access",
        attended_camps: [],
        registered_camps: [],
    };

    const doctor = {
        role: "doctor",
        _id: "63fda5a2f36cbb0cb3779443",
        name: "Dr. Sanjay Gupta",
        phone_number: "+91 9820755512",
        email: "sanjay.gupta@example.com",
        speciality: "Cardiology",
        certification: "DM Cardiology",
        interested_camps: [],
        accepted_camps: [],
    };

    // await insertUser(organizer);
    // await insertUser(participant);
    // await insertUser(doctor);
}

module.exports = dataInitializer;
