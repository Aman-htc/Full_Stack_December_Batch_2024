"use client";

import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "react-bootstrap-icons";

export default function Footer() {
    return (
        <footer className="py-4">
            <div className="Container">
                <div className="row align-items-center">

                    {/* Text section */}
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <div className="d-flex justify-content-center justify-content-md-between flex-wrap gap-2">
                            <span className="text-danger b-12-bold">Copyright © 2026 Indixper</span>
                            <span className="text-danger b-12-bold">Privacy Policy</span>
                            <span className="text-danger b-12-bold">Terms and Conditions</span>
                            <span className="text-danger b-12-bold">Contact</span>
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="col-12 col-md-6 text-center text-md-end mt-3 mt-md-0">

                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook size={18} className="me-3 text-danger" />
                        </a>

                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter size={18} className="me-3 text-danger" />
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram size={18} className="me-3 text-danger" />
                        </a>

                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <Youtube size={18} className="me-3 text-danger" />
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <span className="px-2 text-danger">
                                <Linkedin size={20} />
                            </span>
                        </a>

                    </div>

                </div>
            </div>
        </footer>
    );
}