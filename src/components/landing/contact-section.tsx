import { Building2, Clock, MapPin, Phone } from "lucide-react";
import { CustomBlurBgDialog } from "../ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { CardContent, CardHeader, CardTitle } from "../ui/card";

const ContactSection = () => {
  const [show, setShow] = useState(false);

  return (
    <div id="contact-us" className="bg-primary py-20 md:py-36 flex flex-col items-center">
      <div className="mx-auto grid w-full grid-cols-12 gap-4 px-4 lg:gap-8 lg:px-10  xl:w-[1280px] xl:px-2">
        <div className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 md:col-start-2 md:col-end-12">
          <div className="mb-16 text-center">
            <div className="mb-12 px-4 text-white text-center sm:px-8 lg:px-0">
              <h1 className="break-normal leading-10 mb-2 text-[1.5rem] font-extralight sm:text-[3rem] md:text-[3.25rem] lg:text-[3.5rem] text-jump-gradient">
                Power Your Future With Us
              </h1>
              <div className="mx-10 mt-10">
                <p className="text-[1rem] leading-tight md:text-[1.25rem]">
                  It’s not just an inquiry. It’s guidance, trusted solutions,
                  and energy independence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-13 sm:col-start-1 text-black sm:col-end-7 md:col-start-2 md:col-end-7">
          <div className="lg:rounded-4xl relative rounded-2xl md:rounded-3xl p-4 md:px-8 md:py-6 bg-white mb-2 sm:mb-0 sm:h-full md:mb-6">
            <div className="mb-4 flex items-center gap-x-3">
              <Building2 size={24} />
              <h3 className="text-xl md:text-2xl">Head Office:</h3>
            </div>
            <div className="rounded-md bg-gray-100 px-5 py-4 text-base leading-tight text-black lg:text-lg">
              2nd Floor, ACOA House, Aderoju Adewuyi Street, Opebi, Lagos.
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-13 sm:col-start-7 sm:col-end-13 md:col-start-7 md:col-end-12">
          <div className="lg:rounded-4xl relative rounded-2xl md:rounded-3xl p-4 md:px-8 md:py-6 bg-white mb-2 sm:mb-0 sm:h-full md:mb-6">
            <div className="mb-4 flex items-center gap-x-3">
              <MapPin />
              <h3 className="text-xl md:text-2xl">
                PowerFlex Experience Outlet:
              </h3>
            </div>
            <div className="rounded-md bg-gray-100 px-5 py-4 text-base leading-tight text-black lg:text-lg">
              No 2B Medical Road, Computer Village, Ikeja, Lagos
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-7 md:col-start-2 md:col-end-7">
          <div className="lg:rounded-4xl relative rounded-2xl md:rounded-3xl p-4 md:px-8 md:py-6 bg-white mb-2 sm:mb-0 sm:h-full md:mb-6">
            <div className="mb-4 flex items-center gap-x-3">
              <Phone />
              <h3 className="text-xl md:text-2xl">Contact Details:</h3>
            </div>
            <div className="mb-4 rounded-md bg-gray-100 px-5 py-4 text-base leading-tight text-black lg:text-lg">
              02092204001 | 02014146393
            </div>
            <div className="rounded-md bg-gray-100 px-5 py-4 text-base leading-tight text-black lg:text-lg">
              info@sapphirevirtual.com
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-13 sm:col-start-7 sm:col-end-13 md:col-start-7 md:col-end-12">
          <div className="lg:rounded-4xl relative rounded-2xl md:rounded-3xl p-4 md:px-8 md:py-6 bg-white mb-2 sm:mb-0 sm:h-full md:mb-6">
            <div className="mb-4 flex items-center gap-x-3">
              <Clock />
              <h3 className="text-xl md:text-2xl">Working Hours:</h3>
            </div>
            <div className="mb-4 rounded-md bg-gray-100 px-5 py-4 text-base leading-tight text-black lg:text-lg">
              Mon-Fri: 8:00 AM - 5:00 PM
            </div>
            <div className="rounded-md bg-gray-100 px-5 py-4 text-base leading-tight text-black lg:text-lg">
              Sat: 9:00 AM - 5:00 PM
            </div>
          </div>
        </div>
      </div>
      <Button variant={"outline"} className="!mx-auto mt-10 hover:bg-gray-200 hover:text-black" onClick={() => setShow(true)} size={"lg"}>Send us a Message</Button>

      <CustomBlurBgDialog open={show} onOpenChange={setShow} maxWidth="700px">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Send us a Message</CardTitle>
          <p className="text-muted-foreground">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="john@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="How can we help you?"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Tell us more about your inquiry..."
            />
          </div>
          <Button className="w-full" size="lg">
            Send Message
          </Button>
        </CardContent>
      </CustomBlurBgDialog>
    </div>
  );
};

export default ContactSection;
