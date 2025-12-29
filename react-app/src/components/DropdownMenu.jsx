function DropdownMenu({ data }) {
    const { title, width, columns, sections } = data

    return (
        <li className="group relative">
            <a
                href="#"
                className="px-3 py-2 rounded-full text-sm font-medium text-brand-text-muted group-hover:text-brand-heading-h1 group-hover:bg-brand-bg-highlight transition-colors inline-block"
            >
                {title}
            </a>
            <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 ${width} bg-brand-bg-card rounded-2xl shadow-xl border border-brand-border-soft p-6 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 transform origin-top z-50`}
            >
                <div className={`grid grid-cols-${columns} gap-6 text-sm`}>
                    {sections.map((section, idx) => (
                        <div key={idx}>
                            {section.heading && (
                                <h4 className="font-bold text-brand-heading-h3 mb-3 border-b border-brand-border-soft pb-2">
                                    {section.heading}
                                </h4>
                            )}
                            <ul className="space-y-2 text-brand-text-muted">
                                {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                        <a href="#" className="hover:text-brand-link-hover transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </li>
    )
}

export default DropdownMenu
