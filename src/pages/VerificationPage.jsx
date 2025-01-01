import React, { useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import trophy from "/assets/images/trophy.webp";
import arcade from "/assets/images/arcade.webp";
import bag from "/assets/images/bag.webp";
import coin from "/assets/images/coin.webp";
import TV from "/assets/images/TV.webp";
import recaptcha from "/assets/images/recaptcha.png";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email is required"
  }).email(),
  phoneNumber: z.string().min(2, {
    message: "Phone number is required"
  }).max(250)
});

function VerificationPage() {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      phoneNumber: ''
    }
  });

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.value !== '' && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (values) => {
    console.log('Form Data:', values);
    console.log('OTP Submitted:', otp.join(''));
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-[url('/assets/images/bg.png')] !object-cover bg-cover relative">
      {/* Random Trophy Images for large screens */}
      <div className="hidden lg:block z-0">
        <img src={trophy} alt="Trophy" className="absolute w-16 h-16 top-[15%] left-[10%] opacity-50 rotate-12" />
        <img src={arcade} alt="Trophy" className="absolute w-20 h-20 top-[45%] right-[8%] opacity-50 -rotate-12" />
        <img src={bag} alt="Trophy" className="absolute w-14 h-14 bottom-[25%] left-[15%] opacity-50 rotate-45" />
        <img src={coin} alt="Trophy" className="absolute w-24 h-24 top-[65%] right-[20%] opacity-50 -rotate-6" />
        <img src={TV} alt="Trophy" className="absolute w-16 h-16 bottom-[10%] left-[40%] opacity-50 rotate-180" />
        <img src={trophy} alt="Trophy" className="absolute w-20 h-20 top-[30%] left-[25%] opacity-50 rotate-90" />
        <img src={arcade} alt="Trophy" className="absolute w-16 h-16 top-[80%] right-[35%] opacity-50 rotate-45" />
        <img src={bag} alt="Trophy" className="absolute w-18 h-18 top-[20%] right-[15%] opacity-50 -rotate-90" />
        <img src={coin} alt="Trophy" className="absolute w-20 h-20 bottom-[40%] right-[45%] opacity-50 rotate-180" />
      </div>

      {/* Random Trophy Images for medium screens */}
      <div className="hidden md:block lg:hidden z-0">
        <img src={trophy} alt="Trophy" className="absolute w-16 h-16 top-[15%] left-[10%] opacity-50 rotate-12" />
        <img src={arcade} alt="Trophy" className="absolute w-20 h-20 top-[45%] right-[8%] opacity-50 -rotate-12" />
        <img src={bag} alt="Trophy" className="absolute w-14 h-14 bottom-[25%] left-[15%] opacity-50 rotate-45" />
        <img src={coin} alt="Trophy" className="absolute w-24 h-24 top-[65%] right-[20%] opacity-50 -rotate-6" />
        <img src={TV} alt="Trophy" className="absolute w-16 h-16 bottom-[10%] left-[40%] opacity-50 rotate-180" />
      </div>

      {/* Random Trophy Images for small screens */}
      <div className="md:hidden z-0">
        <img src={trophy} alt="Trophy" className="absolute w-16 h-16 top-[15%] left-[10%] opacity-50 rotate-12" />
        <img src={arcade} alt="Trophy" className="absolute w-20 h-20 top-[45%] right-[8%] opacity-50 -rotate-12" />
        <img src={bag} alt="Trophy" className="absolute w-14 h-14 bottom-[25%] left-[15%] opacity-50 rotate-45" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4 relative z-10">
        <div className="w-full sm:max-w-[70%] bg-[#592D62]/60 rounded-[3rem] p-6 sm:p-12 
                    shadow-[rgba(17,17,26,0.4)_0px_8px_24px,_rgba(17,17,26,0.4)_0px_16px_56px,_rgba(17,17,26,0.4)_0px_24px_80px]
                    backdrop-blur-sm">
          <h2 className="sm:text-6xl text-4xl text-center font-bold text-gray-100 mb-8 sm:mb-16 font-lusitana [text-shadow:_2px_4px_0px_#000000]">
            Download Your Pass
          </h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 sm:space-y-20 sm:mt-20 flex flex-col items-center justify-center">
              <div className="flex flex-col sm:flex-row sm:justify-evenly gap-8 sm:gap-4 w-full">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full sm:w-auto">
                      <FormLabel className="text-white text-lg sm:text-3xl font-bold font-lusitana mb-2">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          {...field}
                          className="w-full md:max-w-xs text-lg sm:text-2xl p-2
                                   bg-transparent border-b-[1px] sm:border-b-2 border-gray-400/80
                                   outline-none text-white font-lusitana"
                          required
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full sm:w-auto">
                      <FormLabel className="text-white text-lg sm:text-3xl font-bold font-lusitana mb-2">
                        Phone Number *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          {...field}
                          maxLength="10"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) {
                              e.preventDefault();
                            }
                          }}
                          className="w-full md:max-w-xs text-lg sm:text-2xl p-2
                                   bg-transparent border-b-[1px] sm:border-b-2 border-gray-400/80
                                   outline-none text-white font-lusitana"
                          required
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-sm" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Pass Number Section */}
              <div className="w-full mt-8 sm:mt-16">
                <h3 className="text-2xl sm:text-5xl text-center font-bold text-gray-100 mb-6 sm:mb-8 font-lusitana [text-shadow:_1px_2px_0px_#000000]">
                  Enter Verification code
                </h3>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mx-auto mt-6 sm:mt-10">
                  {otp.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                      className="w-10 h-10 sm:w-20 sm:h-20 text-center text-xl sm:text-4xl font-bold 
                               rounded-xl border-2 border-gray-400/80 focus:border-purple-500 
                               focus:ring-2 focus:ring-purple-500 outline-none text-white
                               bg-transparent shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
                               transition-all duration-200 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_4px_12px]"
                    />
                  ))}
                </div>
              </div>

              {/* reCAPTCHA Section */}
              <div className="w-full flex justify-center mt-8">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <img 
                    src={recaptcha}
                    alt="reCAPTCHA verification" 
                    className="w-[300px] sm:w-[304px]"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="border-2 hover:bg-gray-300 flex mx-auto justify-self-center max-w-sm 
                         border-black dark:border-white uppercase bg-white text-black 
                         transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]
                         font-lusitana mt-8 sm:mt-16 px-8 sm:px-16 py-2 sm:py-3"
              >
                Download
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black p-6 sm:p-8 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-full max-w-[320px] sm:w-96">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 font-lusitana">Verification Successful</h3>
            <p className="mb-6 text-gray-600">Your pass has been verified successfully!</p>
            <Button
              onClick={closeDialog}
              className="w-full bg-[#592D62] text-white py-2 sm:py-3 px-4 rounded-lg hover:bg-[#4a2651]
                       transition-all duration-200 font-lusitana text-base sm:text-lg"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerificationPage;
