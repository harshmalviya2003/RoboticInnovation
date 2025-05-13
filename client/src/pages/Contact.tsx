import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { apiRequest } from "@/lib/queryClient";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/components/ThemeProvider";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  service: z.string({ required_error: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });
  
  const mutation = useMutation({
    mutationFn: (values: FormValues) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  function onSubmit(values: FormValues) {
    mutation.mutate(values);
  }
  
  return (
    <section className={`py-24 ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
            Contact Us
          </h1>
          <p className={`max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Got questions about our AI and robotics solutions? Get in touch with our team to discuss how we can help transform your business.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`p-8 rounded-xl ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-200"} shadow-lg`}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={isDark ? "text-gray-300" : "text-gray-700"}>Your Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className={isDark 
                                ? "bg-gray-800 border-gray-700 text-white focus:border-gray-500" 
                                : "bg-gray-50 border-gray-300 text-black focus:border-gray-400"
                              }
                              placeholder="John Doe"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={isDark ? "text-gray-300" : "text-gray-700"}>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className={isDark 
                                ? "bg-gray-800 border-gray-700 text-white focus:border-gray-500" 
                                : "bg-gray-50 border-gray-300 text-black focus:border-gray-400"
                              }
                              placeholder="john@example.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={isDark ? "text-gray-300" : "text-gray-700"}>Company</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={isDark 
                              ? "bg-gray-800 border-gray-700 text-white focus:border-gray-500" 
                              : "bg-gray-50 border-gray-300 text-black focus:border-gray-400"
                            }
                            placeholder="Your Company"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={isDark ? "text-gray-300" : "text-gray-700"}>Service of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className={isDark 
                              ? "bg-gray-800 border-gray-700 text-white focus:border-gray-500" 
                              : "bg-gray-50 border-gray-300 text-black focus:border-gray-400"
                            }>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className={isDark 
                            ? "bg-gray-800 border-gray-700 text-white" 
                            : "bg-white border-gray-300 text-black"
                          }>
                            <SelectItem value="robotics">Advanced Robotics</SelectItem>
                            <SelectItem value="ai">AI Solutions</SelectItem>
                            <SelectItem value="embedded">Embedded Systems</SelectItem>
                            <SelectItem value="vision">Computer Vision</SelectItem>
                            <SelectItem value="analytics">Data Analytics</SelectItem>
                            <SelectItem value="consulting">R&D Consulting</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={isDark ? "text-gray-300" : "text-gray-700"}>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            className={isDark 
                              ? "bg-gray-800 border-gray-700 text-white focus:border-gray-500 resize-none" 
                              : "bg-gray-50 border-gray-300 text-black focus:border-gray-400 resize-none"
                            }
                            placeholder="Tell us about your project or inquiry"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className={`w-full ${
                      isDark 
                        ? "bg-gray-800 hover:bg-gray-700" 
                        : "bg-gray-200 hover:bg-gray-300"
                    } text-${isDark ? "white" : "black"} font-semibold py-6 transition-all duration-300`}
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={`p-8 rounded-xl ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-200"} shadow-lg h-full`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className={`w-10 h-10 ${isDark ? "bg-gray-800" : "bg-gray-100"} rounded-lg flex items-center justify-center mr-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isDark ? "white" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${isDark ? "text-white" : "text-black"}`}>Headquarters</h4>
                    <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                      123 Innovation Drive<br />
                      Silicon Valley, CA 94025<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`w-10 h-10 ${isDark ? "bg-gray-800" : "bg-gray-100"} rounded-lg flex items-center justify-center mr-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isDark ? "white" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${isDark ? "text-white" : "text-black"}`}>Email</h4>
                    <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                      info@nexusai.tech<br />
                      support@nexusai.tech
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`w-10 h-10 ${isDark ? "bg-gray-800" : "bg-gray-100"} rounded-lg flex items-center justify-center mr-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isDark ? "white" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${isDark ? "text-white" : "text-black"}`}>Phone</h4>
                    <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className={`font-medium mb-4 ${isDark ? "text-white" : "text-black"}`}>Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className={`w-10 h-10 ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"} border rounded-lg flex items-center justify-center ${isDark ? "text-gray-400 hover:text-white hover:border-gray-600" : "text-gray-600 hover:text-black hover:border-gray-400"} transition-colors`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className={`w-10 h-10 ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"} border rounded-lg flex items-center justify-center ${isDark ? "text-gray-400 hover:text-white hover:border-gray-600" : "text-gray-600 hover:text-black hover:border-gray-400"} transition-colors`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className={`w-10 h-10 ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"} border rounded-lg flex items-center justify-center ${isDark ? "text-gray-400 hover:text-white hover:border-gray-600" : "text-gray-600 hover:text-black hover:border-gray-400"} transition-colors`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className={`w-10 h-10 ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"} border rounded-lg flex items-center justify-center ${isDark ? "text-gray-400 hover:text-white hover:border-gray-600" : "text-gray-600 hover:text-black hover:border-gray-400"} transition-colors`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="NexusAI Headquarters" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}