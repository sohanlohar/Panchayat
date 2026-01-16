import { Shield, Clock, Users, Globe } from "lucide-react";

const FEATURES = [
    {
        icon: Shield,
        title: "100% Transparent",
        description: "All records and funds usage are available for public scrutiny."
    },
    {
        icon: Clock,
        title: "Timely Services",
        description: "Commitment to providing certificates and documents within 48 hours."
    },
    {
        icon: Users,
        title: "Community Focused",
        description: "Regular Gram Sabhas to hear and act on citizen's voices."
    },
    {
        icon: Globe,
        title: "Digital Integration",
        description: "First Panchayat in the district to go fully paperless."
    }
];

export default function WhyChooseUsSection() {
    return (
        <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why We Stand Out</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our commitment to excellence and citizen-centric approach makes us a model Gram Panchayat.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feature, index) => (
                        <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-border hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 text-secondary">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-muted pt-12">
                    {[
                        { label: "Population", value: "5,000+" },
                        { label: "Households", value: "1,200" },
                        { label: "Schools", value: "4" },
                        { label: "Health Centers", value: "2" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
