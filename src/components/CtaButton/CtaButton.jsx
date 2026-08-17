function CtaButton({
  href,
  children,
  variant = "primary",
  size = "",
  ctaLabel = "",
}) {
  const className = `btn btn-${variant} ${size ? `btn-${size}` : ""}`.trim();

  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "cta_click",
      cta_location: ctaLabel || "unknown",
    });

    if (typeof window.ym === "function") {
      window.ym(12345678, "reachGoal", "cta_click", { cta_location: ctaLabel });
    }
  };

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export default CtaButton;
