import { FileText, Droplets, Home, Lightbulb, UserCheck, Phone } from "lucide-react";

const SERVICES = [
    {
        icon: FileText,
        title: "Certificates",
        description: "Apply for Birth, Death, and Marriage certificates online.",
    },
    {
        icon: Droplets,
        title: "Water Tax",
        description: "Pay your water tax securely and view history.",
    },
    {
        icon: Home,
        title: "House Tax",
        description: "Manage your property assessments and payments.",
    },
    {
        icon: Lightbulb,
        title: "Street Light",
        description: "Report issues with street lights in your area.",
    },
    {
        icon: UserCheck,
        title: "Voter List",
        description: "Check your name in the voter list and apply for corrections.",
    },
    {
        icon: Phone,
        title: "Helpline",
        description: "24/7 dedicated helpline for complaints and queries.",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-semibold uppercase tracking-wider text-sm">What we do</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">Essential Services for Citizens</h2>
                    <p className="text-muted-foreground">
                        Digital governance bringing efficiency and transparency to every household. Access these services from the comfort of your home.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                                <service.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
