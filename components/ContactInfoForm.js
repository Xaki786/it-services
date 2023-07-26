/** @format */

const ContactInfoForm = () => {
  return (
    <section className="bg-gray-100 py-12 bg-inherit">
      <div className="max-w-7xl mx-auto px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center lg:text-left">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-6">
              Please feel free to get in touch with us for any inquiries or
              questions you may have. We'd be happy to assist you.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-700">Address</p>
                <p className="text-gray-600">123 Main Street, City, Country</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Phone</p>
                <p className="text-gray-600">+1 123-456-7890</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Email</p>
                <p className="text-gray-600">info@example.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Website</p>
                <p className="text-gray-600">www.example.com</p>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center lg:text-left">
              Enquiry Form
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500 focus:outline-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-6 py-3 w-full bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoForm;
