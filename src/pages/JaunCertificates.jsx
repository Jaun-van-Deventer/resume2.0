import { useEffect, useState } from "react";
import { useMenu } from "../components/MenuContext";
import jcert from "/assets/jcert.png";
import jcert2 from "/assets/jcert2.png";
import "../App.css";

function JaunProfile() {
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();
    const [selectedCert, setSelectedCert] = useState(null); // State for modal

    useEffect(() => {
        setMenuTitle('Jaun');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Profile', link: '/jaun' },
            { label: 'Projects', link: '/jaunprojects' },
            { label: 'About Me', link: '/jaunresume' },
            { label: "Blog", link: "/blog" },
        ]);
        setMenuSocial({
            linkedin: "https://www.linkedin.com/in/jaun-van-deventer-51314628a/",
            github: "https://github.com/Jaun-van-Deventer"
        });
    }, [setMenuTitle, setMenuItems, setMenuSocial]);

    const openModal = (cert) => {
        setSelectedCert(cert);
    };

    const closeModal = () => {
        setSelectedCert(null);
    };

    return (
        <div className="cert-container">
            <h1>Certificates</h1>
            <div className="cert-grid">
                <div className="cert-item" onClick={() => openModal(jcert)}>
                    <img src={jcert} alt="Harvard CS50" />
                    <p>Harvard CS50: Introduction to Computer Science</p>
                </div>
                <div className="cert-item" onClick={() => openModal(jcert2)}>
                    <img src={jcert2} alt="Upskillist CS" />
                    <p>Upskillist: Professional Diploma in Computer Science</p>
                </div>
            </div>

            {/* Modal for larger certificate view */}
            {selectedCert && (
                <div className="cert-modal" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={selectedCert} alt="Certificate" />
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default JaunProfile;