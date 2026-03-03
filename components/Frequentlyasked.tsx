"use client"
import { SetStateAction, useState } from 'react';
import { ChevronDown, Mail, MessageCircle } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What exactly do I get after purchase?",
      answer: "You'll instantly receive a secure download link containing all the files included in your pack, whether it's T-shirt designs, mockups, or pose bundles. All files are high-quality, editable, and ready to use for your projects."
    },
    {
      question: "How do I download my purchased product?",
      answer: "After checkout, you'll receive an automatic download link via email. You can also access your downloads anytime from your order confirmation page."
    },
    {
      question: "Are all packs available for commercial use?",
      answer: "Not all packs include a commercial license. The ones that do will clearly mention \"Commercial Use Included\" in the product description. Please check the details before purchasing."
    },
    {
      question: "Can I resell or share these files?",
      answer: "No. Redistribution, reselling, or sharing our digital files is strictly prohibited. The files are meant for personal or licensed commercial use only, as stated in each product's license terms."
    },
    {
      question: "What should I do if my download link doesn't work?",
      answer: "No worries — sometimes links expire or emails get filtered. Just contact us via email or WhatsApp, and we'll resend your download link immediately."
    },
    {
      question: "Do you provide refunds for digital products?",
      answer: "Since all our products are instant digital downloads, we don't offer refunds once a purchase is completed. However, if you face any technical issues or file corruption, we'll provide a quick replacement."
    },
    {
      question: "How can I use the designs after downloading?",
      answer: "You can use the designs on T-shirts, hoodies, posters, merchandise, or digital art projects. The files work perfectly with Photoshop, Illustrator, Canva, or any design software — all are high-resolution and print-ready."
    },
    {
      question: "Can I request custom designs or bundles?",
      answer: "Absolutely! We offer custom anime T-shirt designs, themed pose packs, and bulk bundle requests. Reach out with your idea, and our team will help you create something unique."
    },
    {
      question: "How can I contact NextZShop for support or inquiries?",
      answer: "You can reach us anytime through email or WhatsApp for faster support. We usually respond within a few hours during business days."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major debit/credit cards, UPI, Google Pay, Paytm, and Razorpay checkout options. Your payment is fully secure and processed through Razorpay, India's most trusted payment gateway."
    }
  ];

  const toggleFAQ = (index: number | SetStateAction<null>) => {
    setOpenIndex(openIndex === index ? null : index as SetStateAction<null> | null);
  };    

  return (
    <div className="min-h-screen bg-[#12121A]">
      {/* Header */}
      <div className="bg-[#12121A] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
          <p className="text-white">Everything you need to know about NextZShop</p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#12121A] rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 transition-colors hover:bg-[#12121A]"
              >
                <span className="font-semibold text-white pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`flex-shrink-0 w-5 h-5 text-slate-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2 text-white leading-relaxed">
                  {faq.answer}
                  {index === 8 && (
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">Email:</span>
                        <a href="mailto:nextzshop.online@gmail.com" className="text-blue-600 hover:underline">
                          nextzshop2.online@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MessageCircle className="w-4 h-4 text-green-600" />
                        <span className="font-medium">WhatsApp:</span>
                        <a href="https://wa.me/91987654321" className="text-green-600 hover:underline">
                          +91 987654321
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#12121A] text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl  text-white text-extrabold font-bold mb-3">Subscribe to our emails</h2>
            <p className="text-white mb-6">Exclusive drops, early access, and VIP offers.</p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center gap-2">
                <span>⭐</span>
                <span>Exclusive deals</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚡</span>
                <span>Early access</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🛡️</span>
                <span>No spam</span>
              </div>
            </div>

            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Email"
                className="flex-1 px-4 py-3 rounded-lg bg-white border border-slate-700 focus:outline-none focus:border-blue-500 text-black placeholder-black"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-white text-sm mt-4">
              Join our email list for exclusive offers and the latest news.<br />
              We respect your time. Subscribe with one click.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}