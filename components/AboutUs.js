/** @format */

const aboutUsContent = [
  {
    key: "Innovation",
    heading: "Innovation",
    content:
      "Do non eiusmod cillum deserunt dolore nisi duis sit eiusmod nostrud. Adipisicing dolor eu exercitation mollit. Deserunt culpa incididunt cillum deserunt exercitation fugiat exercitation elit ullamco duis adipisicing ullamco cillum do. Amet et adipisicing anim elit amet aliqua id Lorem. Labore eu ut non eiusmod nostrud aute voluptate. Esse labore cupidatat culpa magna ullamco anim exercitation proident do eiusmod est. Eiusmod in laboris elit do eu ea sunt mollit ad ex do consectetur.",
  },
  {
    key: "Integrity",
    heading: "Integrity",
    content:
      "Consectetur Lorem dolore laborum excepteur elit esse non duis cillum nostrud aute amet. Qui consequat reprehenderit qui laboris eiusmod consectetur irure anim. Eu excepteur in mollit cillum. Laboris exercitation laborum proident ea occaecat esse laborum. Est dolor magna exercitation sit ipsum eu dolore deserunt sint occaecat proident ipsum id.",
  },
  {
    key: "Collaboration",
    heading: "Collaboration",
    content:
      "Do ullamco ipsum duis velit quis dolor amet. Nostrud occaecat commodo officia et cupidatat elit dolor aute sunt dolor eiusmod. Nostrud mollit non cillum eu id ipsum magna. Cillum nisi et id mollit quis in do ut. Aliquip aute nisi aliqua et irure id nostrud dolore ad adipisicing. Sint enim dolore velit sit. Id dolore sit deserunt reprehenderit non cillum culpa proident in excepteur ullamco irure ullamco.",
  },
  {
    key: "Quality",
    heading: "Quality",
    content:
      "Sit esse minim et amet culpa irure magna fugiat. Elit ipsum minim incididunt amet laborum velit. Dolore pariatur eu duis nisi ullamco fugiat id mollit do occaecat. Ea sint est voluptate excepteur cillum proident aliquip excepteur voluptate. Ad quis fugiat elit aliquip qui laborum. Commodo tempor mollit deserunt velit labore. Non laboris incididunt eiusmod velit nulla in ea.",
  },
  {
    key: "Customer-Centric",
    heading: "Customer-Centric",
    content:
      "Aliquip esse veniam ullamco eiusmod. Veniam sit reprehenderit exercitation amet Lorem minim ut laborum reprehenderit veniam id aliquip. Sunt ut reprehenderit ipsum amet nulla reprehenderit. Id adipisicing deserunt esse incididunt nostrud elit et cupidatat mollit sint nulla. Exercitation exercitation commodo voluptate aliquip eiusmod ad qui pariatur nulla ex enim tempor cillum. Magna dolor exercitation cupidatat fugiat tempor ex aliqua tempor eiusmod commodo ipsum do dolore. Ipsum non ex amet irure anim eiusmod anim.",
  },
];

const AboutUs = () => {
  return (
    <section className="about-us text-center py-12">
      <h2 className="text-3xl font-bold mb-12 mt-0">About Us</h2>
      <div className="rounded-lg py-8 px-4 mx-auto max-w-screen-xl text-justify lg:py-16 lg:px-12 bg-white">
        <p className="text-gray-700">
          Welcome to our IT services and software development company! At
          [Company Name], we take pride in providing cutting-edge solutions that
          empower businesses to thrive in the digital age. With a team of
          skilled professionals, innovative technologies, and a passion for
          excellence, we are dedicated to delivering exceptional results that
          exceed our clients' expectations.
        </p>
        <h3 className="text-2xl font-medium mt-4 text-center">Our Mission</h3>
        <p className="text-gray-700 mt-4">
          Our mission is to create a positive impact on businesses and
          individuals by delivering top-notch IT services and software
          solutions. We strive to be the catalyst for growth and success for our
          clients, helping them achieve their goals and objectives with our
          expertise and commitment to excellence.
        </p>
        <h3 className="text-2xl font-medium mt-4 text-center">Our Values</h3>
        <p className="text-gray-700 mt-4 ml-4">
          <ol class="list-decimal">
            {aboutUsContent.map(({ heading, content, key }) => (
              <li key={key}>
                <h4 className="text-xl font-medium mt-4">{heading}</h4>
                <p>{content}</p>
              </li>
            ))}
          </ol>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
