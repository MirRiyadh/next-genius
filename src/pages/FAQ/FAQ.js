import React from "react";

const FAQ = () => {
  return (
    <div className=" bg-gradient-to-br from-pink-50 to-indigo-100">
      <h1 className="text-center py-3 text-4xl font-semibold underline text-sky-700">
        Frequently Asked Questions
      </h1>
      <div className="  grid place-items-center md:w-7/12 lg:w-4/12 m-auto">
        <div className=" my-12">
          <div className="bg-white">
            <div className="container px-4 py-8 mx-auto md:p-8">
              <p className="mt-4 mb-8 text-gray-500 text-md">
                Why this courses are useful, and what people stand to gain. It
                also allows you to answer other questions related to our online
                courses and virtual learning that you may have.
              </p>
              <div className="space-y-4">
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                  <summary className="px-4 py-6 font-semibold">
                    What is online learning?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-500">
                    For those who have never encountered online learning, the
                    biggest question is often what it is actually like. The
                    caveat, as you know, is that online learning comes in
                    several forms. Therefore, this is your chance to explain
                    that to people. Point out that there are different types of
                    online courses and programs, and that they’ll have to decide
                    which is best for them. Then, explain the types of courses
                    you offer and how your online programs work to give them all
                    the information they need.
                  </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                  <summary className="px-4 py-6 font-semibold">
                    Are you accredited or licensed by educational organizations?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-500">
                    There isn’t always a need for licensing or accreditation for
                    online courses. However, some programs do require it. Either
                    way, people will usually ask what type of training or
                    background you have, as well as any licensing that’s
                    available if that’s relevant. Make sure that you answer this
                    question by telling them if you do hold any licenses or
                    accreditation, as well as by explaining whether or not those
                    are needed, and why. It gives them the confidence that you
                    have the right experience.
                  </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                  <summary className="px-4 py-6 font-semibold">
                    How long does each course take?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-500">
                    Some online courses are just a few hours long, while others
                    last a few months. Depending on the type of online learning
                    that you offer, your courses may have their own variable
                    lengths. Explain to people the types of courses that you
                    have available and what the time frame is for each one. If
                    you offer self-paced learning, this is another place to
                    reiterate that and reassure people that you can help them
                    learn on their own time.
                  </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                  <summary className="px-4 py-6 font-semibold">
                    Why should I use online learning?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-500">
                    Provide testimonials, perks, and other insight to help
                    people decide that your online courses are right for their
                    needs. Online learning benefits just about everyone. You can
                    even go the extra mile and list some stats about the success
                    rates and benefits of online courses to reaffirm your
                    stance.
                  </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                  <summary className="px-4 py-6 font-semibold">
                    What types of assignments do you give?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-500">
                    Like knowing the format of online learning, people often
                    want to know the type of work they’ll be doing when they
                    take online courses. Be sure to provide a glimpse of what
                    you offer here and link to previous projects or assignments
                    if you can. You can also link to course or program pages.
                  </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                  <summary className="px-4 py-6 font-semibold">
                    Can I learn at my own pace?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-500">
                    This is another common question that people have about
                    online courses. There are usually self-paced programs and
                    traditional classroom or meeting-style programs available.
                    Today’s world is full of busy people that want to better
                    themselves, so the self-paced programs are popular. Whether
                    or not you provide this option, be sure to answer this
                    question for people and explain the pros and cons of each
                    type of learning.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
