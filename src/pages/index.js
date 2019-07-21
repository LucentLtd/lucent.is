import React from "react";

import Layout from "../components/Layout";

import Image from "../components/Image";

const Index = ({}) => {
    return (
        <Layout>
            <h1 className="visuallyhidden">Lucent Enterprises Ltd.</h1>
            <h2 id="mission">Our Mission</h2>
            <p>
                Labore do anim in consectetur do magna proident ex culpa enim
                reprehenderit aute officia elit. Aute laboris nisi duis elit
                exercitation aliquip quis ullamco in ullamco. Aliqua fugiat esse
                commodo cillum consectetur proident minim. Cupidatat officia
                eiusmod qui nulla eiusmod in.
            </p>
            <p>
                Anim cillum ut qui officia. Labore consectetur reprehenderit qui
                occaecat elit pariatur dolore aute adipisicing reprehenderit.
                Minim ad ex irure minim aute nostrud incididunt officia sunt.
            </p>
            <h2 id="values">Our Values</h2>
            <p>
                Consequat dolore nisi in consectetur cupidatat. Laborum ea
                aliqua consectetur qui sint quis reprehenderit eu incididunt ex
                aliqua laboris. Velit elit eiusmod non fugiat ipsum veniam minim
                dolore mollit nostrud ex dolor eu. Eiusmod est laborum tempor
                exercitation dolore incididunt aliquip. Dolor est id nulla Lorem
                nulla non exercitation. Fugiat ad voluptate irure dolor pariatur
                consectetur aliquip.
            </p>
            <p>
                Aliquip laborum nulla irure culpa eu proident nulla. Et et
                fugiat elit reprehenderit. Amet amet laborum commodo sit. Sit
                reprehenderit do veniam adipisicing aliquip commodo aliqua esse
                nisi mollit nostrud. Eu exercitation cillum deserunt eiusmod
                minim ullamco minim. Incididunt exercitation ex cillum officia
                laborum aliqua minim. Ad enim laboris quis incididunt minim
                commodo.
            </p>
            <h2 id="people">Who We Are</h2>
            <h3>Linley Faulkner</h3>
            <p>
                <Image
                    className="w-32 mt-1 mr-3 mb-3 rounded float-left shadow"
                    src="linley.jpg"
                />
                Sint anim ullamco irure sit magna aliqua laborum ut dolore.
                Veniam veniam ut Lorem tempor mollit aute. Deserunt incididunt
                do dolor adipisicing magna pariatur irure laboris sit excepteur
                aute eu amet. Eu mollit cupidatat qui occaecat do eiusmod
                consequat excepteur commodo. Deserunt culpa veniam minim sunt
                cillum deserunt veniam. Sint nulla dolore non non ipsum
                incididunt id duis laboris irure qui. Sunt sint elit minim culpa
                quis ullamco culpa laborum dolore cillum sunt pariatur nisi. Do
                tempor anim dolor anim Lorem laborum aute ullamco aute in.
                Excepteur voluptate excepteur eu fugiat sint incididunt sint
                Lorem sunt dolor velit sint.
            </p>
            <h3>Nicholas Rempel</h3>
            <p>
                <Image
                    className="w-32 mt-1 ml-3 mb-3 rounded float-right shadow"
                    src="nick.jpg"
                />
                Sint anim ullamco irure sit magna aliqua laborum ut dolore.
                Veniam veniam ut Lorem tempor mollit aute. Deserunt incididunt
                do dolor adipisicing magna pariatur irure laboris sit excepteur
                aute eu amet. Eu mollit cupidatat qui occaecat do eiusmod
                consequat excepteur commodo. Deserunt culpa veniam minim sunt
                cillum deserunt veniam. Sint nulla dolore non non ipsum
                incididunt id duis laboris irure qui. Sunt sint elit minim culpa
                quis ullamco culpa laborum dolore cillum sunt pariatur nisi. Do
                tempor anim dolor anim Lorem laborum aute ullamco aute in.
                Excepteur voluptate excepteur eu fugiat sint incididunt sint
                Lorem sunt dolor velit sint.
            </p>
            <h2 id="contact">Contact Us</h2>
            <p>
                You can send us a text or leave a message toll-free at{" "}
                <a href="tel:+18887607611">1-888-760-7611</a> or you can
                contact us by email at{" "}
                <a href="mailto:info@lucent.is">info@lucent.is</a> or simply by
                filling out the form below.
            </p>

            <form
                className="mb-12"
                action="/message-thanks"
                name="contact"
                method="POST"
                netlify
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <div className="flex">
                    <div className="w-1/2 mr-2">
                        <label className="block text-sm mb-2" for="name">
                            Your Name
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 mb-3 font-light leading-tight focus:outline-none"
                            id="name"
                            name="name"
                            type="name"
                            placeholder="Jane"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-sm mb-2" for="email">
                            Your Email
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 mb-3 font-light leading-tight focus:outline-none"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="jane@example.com"
                            required
                        />
                    </div>
                </div>
                <div className="">
                    <label className="block text-sm mb-2" for="message">
                        Message
                    </label>
                    <textarea
                        className="border h-24 rounded w-full py-2 px-3 mb-3 font-light leading-tight focus:outline-none"
                        id="message"
                        type="message"
                        name="message"
                        placeholder="Hi, I'd like to talk to you about something!"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="shadow submit-button uppercase font-light text-white py-2 px-4 rounded focus:outline-none"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </Layout>
    );
};

export default Index;
