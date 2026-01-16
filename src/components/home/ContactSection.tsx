"use client";

import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info Side */}
                    <div>
                        <span className="text-primary font-semibold uppercase tracking-wider text-sm">Get in Touch</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">We&apos;re Here to Help</h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Have a question about a scheme or need to report an issue? Reach out to us directly or visit the Gram Panchayat office.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shrink-0 text-primary">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Office Location</h3>
                                    <p className="text-muted-foreground">Gram Panchayat Bhawan,<br />Village Name, District - 123456</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shrink-0 text-primary">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Phone Number</h3>
                                    <p className="text-muted-foreground">+91 98765 43210</p>
                                    <p className="text-muted-foreground text-sm">(Mon-Sat, 9 AM - 5 PM)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shrink-0 text-primary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Email Address</h3>
                                    <p className="text-muted-foreground">helpdesk@grampanchayat.gov.in</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="+91 9000000000"
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="complaint">Complaint</option>
                                    <option value="suggestion">Suggestion</option>
                                    <option value="inquiry">General Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                                />
                            </div>

                            <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
