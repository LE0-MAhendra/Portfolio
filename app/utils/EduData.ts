
// Define the type for an education entry
interface EducationEntry {
    id: string; // Unique ID for key prop
    degree: string;
    institution: string;
    dates: string;
}

// Dummy data for the education section
export const educationData: EducationEntry[] = [
    {
        id: "edu-1",
        degree: "Master of Computer Applications",
        institution: "Kurukshetra University",
        dates: "January 2024 - December 2025",
    },
    {
        id: "edu-2",
        degree: "Bachelor of Technology",
        institution: "Anurag Group of Institutions",
        dates: "December 2019 - May 2023",
    },

];
