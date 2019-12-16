import React from "react";

import Layout from "../components/Layout";

import Image from "../components/Image";

const Index = ({}) => {
    return (
        <Layout>
            <h1 className="visuallyhidden">Lucent Enterprises Ltd.</h1>
            <h2 id="about">We Are Lucent!</h2>
            <p>
                We are <b>Lucent Enterprises</b>. We're a collaborative marketer
                and product-minded software creator duo who believe in making a
                positive impact with whatever we do. Between the two of us, we
                have planned and hosted large events, produced dance
                performances, run company marketing efforts, led small
                engineering teams, and built software products used by thousands
                of people.
            </p>
            <p>
                We want to give back to our community by participating in
                community events, hiring and working with great people with
                great ideas, and supporting local efforts to make our community
                a better place.
            </p>
            <h2 id="work">Our Work</h2>
            <p>
                <a href="https://www.poleart.ca">Electra Productions</a> is a
                dance production company founded by Linley Faulkner and Jane
                Bull. The’ve produced multiple sold-out dance performances in
                Victoria, BC that attracted performers from across Canada and
                the United States.
            </p>
            <p>
                <a href="https://30hourjobs.com">30 Hour Jobs</a> is a job board
                and community for job seekers who need or want to work less than
                40 hours per week and employers who support this. Nick created
                30 Hour Jobs with the belief that, while many people will work
                more than 30 hours per week, the number of hours dedicated to an
                employer alone should be less than it is currently. By reducing
                the expected time commitment to employers, individuals will have
                more time to spend time with their families, engage in their
                community, work on their passions, and do great things.
            </p>
            <p>
                <a href="https://github.com/nrempel">Nick</a> is an experienced
                freelance software developer who is{" "}
                <a href="mailto:nick@lucent.is">available to hire</a>. He has
                experience creating{" "}
                <a href="https://vonx.io">scalable web software solutions</a> as
                well as creating{" "}
                <a href="https://www.ferriesapp.com">
                    cross-platform mobile applications
                </a>{" "}
                for Android and iOS.
            </p>
            <p>
                <a href="https://ca.linkedin.com/in/linleyf"></a>Linley is an
                experienced writer and marketer who can help you scale your
                business.
            </p>
            <h2 id="people">Who We Are</h2>
            <h3>Linley Faulkner</h3>
            <p>
                <Image
                    className="w-32 mt-1 mr-3 mb-3 rounded float-left shadow"
                    src="linley.jpg"
                />
                Linley is experienced writer, marketer, and leader and she has
                experience coordinating recruiting and sales processes for small
                to medium sized businesses. She is passionate about engaging
                with her community and she works hard to leave a positive impact
                with the work that she does. Before working in the technology
                sector, Linley worked with not for profit organizations in
                Victoria and British Columbia.
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
                leading small engineering teams as well as designing and
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
