import React from "react";

import Layout from "../components/Layout";

import Image from "../components/Image";

const Index = ({}) => {
    return (
        <Layout>
            <h1 className="visuallyhidden">Lucent Enterprises Ltd.</h1>
            <h2 id="about">We Are Lucent!</h2>
            <p>
                We are a collaborative marketer and product-minded software
                creator duo who believe in making a positive impact with
                whatever we do. Between the two of us, we have planned and
                hosted large events, produced dance performances, run company
                marketing efforts, led small engineering teams, and built
                software products used by thousands of people.
            </p>
            <p>
                We want to give back to our community by participating in
                community events, hiring and working with great people with
                great ideas, and supporting local efforts to make our community
                a better place.
            </p>
            <h2 id="work">Our Work</h2>
            <p>
                Electra Productions is a dance production company founded by
                Linley Faulkner and Jane Bull. The’ve produced multiple sold-out
                dance performances in Victoria, BC that attracted performers
                from across Canada and the United States.
            </p>
            <p>
                30 Hour Jobs is a job board and community for job seekers who
                need or want to work less than 40 hours per week and employers
                who support this. Nick created 30 Hour Jobs with the belief
                that, while many people will work more than 30 hours per week,
                the number of hours dedicated to an employer alone should be
                less than it is currently. By reducing the expected time
                commitment to employers, individuals will have more time to
                raise their families, engage in their community, work on their
                passions, and do great things.
            </p>
            <p>
                Nick currently works primarily as a contract software developer
                who is available to hire. He has experience creating scalable
                web software solutions as well as creating cross-platform mobile
                applications for Android and iOS.
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
                Nick is an entrepreneur and product-minded software developer.
                Previously, he was the co-founder of Servmetrics Ltd. which was
                a software company whose product enabled restaurant owners to
                engage their customers by SMS message after their meal. There,
                he acted as CTO and Head of Software. Nick has experience
                leading small engineering teams and has experience designing and
                implemented software projects used by thousands of people.
                Before working with technology, Nick worked with individuals
                with Autism spectrum disorder to support them in daily life.
            </p>
            <h2 id="contact">Contact Us</h2>
            <p>
                You can send us a text or leave a message toll-free at{" "}
                <a href="tel:+18887607611">1-888-760-7611</a> or you can contact
                us by email at{" "}
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
