import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'How do I book a ride with Royal Ride?',
    answer:
      'You can book a ride in three easy ways: call us directly at (510) 316-2021, send us a text message, or fill out the booking form on our website. We respond quickly and confirm your reservation immediately.',
  },
  {
    question: 'What areas do you service?',
    answer:
      'We serve the entire San Francisco Bay Area within a 100-mile radius of SFO, including San Francisco, Oakland, San Jose, Berkeley, Napa Valley, Sonoma, and all surrounding cities. We also accommodate special requests for destinations outside our regular service area.',
  },
  {
    question: 'Do you provide airport pickup services?',
    answer:
      "Yes! Airport transportation is one of our specialties. We service SFO, OAK, SJC, and private airports. We track your flight in real-time and adjust pickup times for delays, ensuring we're always there when you land. Our drivers will meet you at baggage claim or the designated pickup area.",
  },
  {
    question: 'How much advance notice do you need for bookings?',
    answer:
      'While we recommend booking at least 24-48 hours in advance for best availability, we also accommodate last-minute requests whenever possible. For special events like weddings or large group transportation, we suggest booking several weeks ahead to ensure vehicle availability.',
  },
  {
    question: 'What types of vehicles do you have?',
    answer:
      'Our premium fleet includes executive sedans (up to 3 passengers), luxury SUVs (up to 6 passengers), and stretch limousines (up to 8 passengers). All vehicles are modern, meticulously maintained, and equipped with premium amenities like WiFi, climate control, and entertainment systems.',
  },
  {
    question: 'Are your drivers licensed and insured?',
    answer:
      'Absolutely. All our chauffeurs are professionally licensed, extensively trained, and background-checked. We carry full commercial vehicle insurance for your complete peace of mind. Safety and professionalism are our top priorities.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We understand plans change. For standard reservations, we ask for at least 24 hours notice for cancellations to receive a full refund. For weddings and special events, our cancellation policy varies—please discuss this when booking. We always strive to be flexible and accommodating.',
  },
  {
    question: 'Do you offer hourly or daily rentals?',
    answer:
      'Yes! We offer flexible rental options including hourly, half-day, and full-day services. This is perfect for wine tours, corporate events, city tours, or any occasion where you need transportation for an extended period. Contact us for custom pricing based on your specific needs.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, debit cards, cash, and digital payment methods. Payment can be made in advance or after service. For corporate clients, we offer invoicing and account billing options.',
  },
  {
    question: 'Can you accommodate large groups or multiple vehicles?',
    answer:
      'Yes! We can coordinate multiple vehicles for large groups, corporate events, weddings, or any occasion requiring transportation for many guests. Our team will work with you to ensure seamless coordination and timing for all vehicles.',
  },
  {
    question: 'Do you provide car seats for children?',
    answer:
      'Yes, we can provide car seats upon request. Please let us know the age and size of the child when booking so we can install the appropriate car seat before your pickup. Child safety is a priority.',
  },
  {
    question: 'Are gratuities included in the price?',
    answer:
      'Gratuity is not automatically included in our rates, but it is always appreciated for exceptional service. If you wish to tip your chauffeur, you can do so directly or add it to your credit card payment. Standard gratuity is typically 15-20%.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/10 rounded-full mb-6">
            <HelpCircle size={32} className="text-yellow-400" />
          </div>
          <span className="block text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about our luxury transportation services.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl overflow-hidden hover:border-yellow-400/40 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-bold text-lg pr-8">{faq.question}</span>
                  <ChevronDown
                    size={24}
                    className={`text-yellow-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-yellow-400/10 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center bg-gradient-to-r from-yellow-400/10 via-yellow-600/10 to-yellow-400/10 border border-yellow-400/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-3">Still Have Questions?</h3>
          <p className="text-gray-300 mb-6">
            Our team is available 24/7 to answer any questions you may have. Don't hesitate to reach
            out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5103162021"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              Call (510) 316-2021
            </a>
            <a
              href="sms:5103162021"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300"
            >
              Send a Text
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
