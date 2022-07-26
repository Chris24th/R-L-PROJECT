import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../PostelloLogo.png';

export default function PublicPost(){
   return(
    <div className="container-fluid my-4">
            <div className="d-flex justify-content-center row m-8">
                <div className="col-md-15">
                    <div className="feed">
                        <div className="share border bg-white rounded m-1">
                            <div className="d-flex flex-row inputs p-2 py-4">
                                <img className="rounded-circle p-2" src={Logo} width="40"/>
                                <input type="text" className="border-2 form-control share-input p-2" placeholder="Share your thoughts"/>
                            </div>
                            <div className="d-flex flex-row justify-content-between border-top p-2">
                                <div className="d-flex flex-row publish-options">
                                    <div className="align-items-center border-right p-1 share">
                                        <button type="button" className="btn btn-light">
                                            {/* ICON FOR PHOTO */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                                                <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
                                            </svg>{" "}
                                            Photo
                                        </button>
                                       
                                    </div>
                                </div>
                            <div className="align-items-center border-right p-1 share">
                                <button type="button" class="btn btn-dark btn-rounded">Publish</button>
                            </div>
                        </div>
                    </div>
                    <div className="feed-post mt-2 border">
                        <div className="p-2 bg-white rounded m-1">
                            <div className="d-flex flex-row justify-content-between align-items-start profile p-2">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle img-responsive p-2" src={Logo} width="40"/>
                                    <div className="d-flex flex-column ml-2 m-2 p-2 justify-content-between">
                                        <h6>Name of User</h6>
                                    </div>
                                </div><i className="fa fa-ellipsis-h text-black-50 mt-2"></i></div>
                            <div className="feed-content p-2 m-1">
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
                            </div>
                            <div className="profile-engagements"></div>
                        </div>
                    </div>
                    <div className="feed-post mt-2 border">
                        <div className="p-2 bg-white rounded m-1">
                            <div className="d-flex flex-row justify-content-between align-items-start profile p-2">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle img-responsive p-2" src={Logo} width="40"/>
                                    <div className="d-flex flex-column ml-2 m-2 p-2 justify-content-between">
                                        <h6>Name of User</h6>
                                    </div>
                                </div><i className="fa fa-ellipsis-h text-black-50 mt-2"></i></div>
                                <div className="feed content p-2 m-1">
                                    <span>We selected the best tech projects to find you the ideal jobs. we offers salaries from $70K -100K so what you are waiting for just apply now with your latest resume.</span>
                                    <img className="img-fluid img-responsive mt-2" src="https://i.imgur.com/C1U3zy4.jpg"/>
                                </div>
                            </div>
                            <div className="profile-engagements"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

   );
}