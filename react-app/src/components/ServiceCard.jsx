function ServiceCard({ icon, title, description, iconColorClass = "text-brand-icon-primary" }) {
    return (
        <div className="service-card">
            <div className={`w-12 h-12 bg-brand-bg-highlight rounded-xl mb-6 flex items-center justify-center ${iconColorClass}`}>
                {icon}
            </div>
            <h3 className="h3 mb-3">{title}</h3>
            <p className="text-brand-text-muted">{description}</p>
        </div>
    )
}

export default ServiceCard
