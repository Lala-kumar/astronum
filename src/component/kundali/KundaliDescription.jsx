import { Collapse } from "antd";

const items = [
  {
    key: "1",
    label: "What are the most important parameters in kundli matchmaking?",
    children: (
      <p>
        As per our astrologers, Mangal dosha matching and Nandi matching are
        some of the most important parameters when it comes to kundli matching.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can I marry if kundli does not match?",
    children: (
      <p>
        Yes, you can marry if your kundli does not match. However, you must
        first talk to an astrologer to be well aware of the consequences that
        come along when you marry despite the horoscope not matching for you.
        This way, you two will be well aware of things you need to work on to
        make your relationship work.
      </p>
    ),
  },
  {
    key: "3",
    label: "Is online horoscope matching accurate?",
    children: (
      <p>
        Yes, online horoscope matching is accurate. Like a pandit, we too also
        use Panchang or Patra to provide you accurate gun milan reports.
        Moreover, the information we share with you is thoroughly checked by our
        expert kundli matchmaking astrologers who forward only the right
        information to our customers.
      </p>
    ),
  },
  {
    key: "4",
    label: "What is kundli milan by name?",
    children: (
      <p>
        Though not opted often, kundli milan by name has been here for a while.
        If you have a handwritten kundli with you, it is most likely that it
        would contain a name. The same name is used to match kundli and the
        process is called kundli milan by name. Though not used much yet this
        process has always been here for your convenience.
      </p>
    ),
  },
  {
    key: "5",
    label: "How much does the kundli matching service cost?",
    children: <p>Kundli Matching service on Astronum is free of cost.</p>,
  },
  {
    key: "6",
    label: "How many gunas should match for marriage?",
    children: (
      <p>
        Of the total 36 gunas considered for Kundli Milan, a minimum of 18 gunas
        should match for a successful marriage. However, one should also
        consider that a high score might not be the sole determinant in deciding
        the marital life ahead.
      </p>
    ),
  },
];
const Description = () => {
  return (
    <div className="pb-10">
      <section className="font-bold mb-6 flex flex-col text-center p-2 mx-auto rounded-md items-center justify-center ">
        <p className="text-xl opacity-80">Horoscope Matching - FAQs</p>
        <p className="text-md opacity-70">
          All you need to know about Guna Milan (Kundli Milan)
        </p>
      </section>

      <Collapse items={items} defaultActiveKey={["1"]} />
    </div>
  );
};
export default Description;
