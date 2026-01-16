import Link from "next/link";
import { Landmark, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-muted/50 border-t border-muted-foreground/10 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Landmark className="w-6 h-6 text-primary" />
                            <span className="text-xl font-bold">Gram Panchayat</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Empowering our village through digital governance. Transparent, efficient, and accessible services for all citizens.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Schemes</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Notices</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Right to Information</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Accessibility</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>Village Hall, Main Road,<br />District Name, State - 123456</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>contact@grampanchayat.gov.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-muted-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        &copy; {new Date().getFullYear()} Gram Panchayat. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Digital India</span>
                        <span>•</span>
                        <span>e-Governance</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
