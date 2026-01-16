import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/panchayat-meet.jpg"
                                alt="Gram Panchayat Meeting"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <span className="text-secondary font-semibold uppercase tracking-wider text-sm">About Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Dedicated to the Prosperity of Our Village</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Established with the vision of self-governance and robust rural development, our Gram Panchayat serves as the cornerstone of local democracy. We bridge the gap between the government and citizens, ensuring that welfare schemes reach the last mile.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {[
                                "Implements central and state government schemes effectively.",
                                "Maintains village infrastructure, sanitation, and water supply.",
                                "Promotes education, health, and social welfare.",
                                "Ensures transparent and accountable utilization of funds."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                    <span className="text-foreground/80">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-medium transition-colors mt-4">
                            Learn More About Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
