export default function SectionHeading({
  number,
  label,
  title,
  aside,
}: {
  number: string;
  label: string;
  title: string;
  aside?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-label">
          <span>{number}</span> / {label}
        </p>
        <h2>{title}</h2>
      </div>
      {aside && <p className="section-aside">{aside}</p>}
    </div>
  );
}
