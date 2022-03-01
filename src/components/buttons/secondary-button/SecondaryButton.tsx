import "./style.scss";

interface SecondaryButtonProps {
  buttonText: string;
  linkUrl?: string;
  width: string;
  height: string;
  onClick?: () => void;
  className?: string;
  borderRadius?: string;
}

function SecondaryButton({
  buttonText,
  linkUrl,
  width,
  height,
  className,
  borderRadius,
  onClick,
}: SecondaryButtonProps) {
  return (
    <div className="secondary">
      <a href={linkUrl}>
        <button
          className={`secondary-btn ${className}`}
          style={{ width, height, borderRadius }}
          onClick={onClick}
        >
          {buttonText}
        </button>
      </a>
    </div>
  );
}

export default SecondaryButton;
