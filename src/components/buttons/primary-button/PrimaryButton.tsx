import "./style.scss";

interface PrimaryButtonProps {
  buttonText: string;
  linkUrl?: string;
  width: string;
  height: string;
  onClick?: () => void;
  className?: string;
  borderRadius?: string;
}

const PrimaryButton = ({
  buttonText,
  linkUrl,
  width,
  height,
  onClick,
  className,
  borderRadius,
}: PrimaryButtonProps) => {
  return (
    <div className="primary">
      <a href={linkUrl}>
        <button
          className={`primary__btn ${className}`}
          style={{ width, height, borderRadius }}
          onClick={onClick}
        >
          {buttonText}
        </button>
      </a>
    </div>
  );
};

export default PrimaryButton;
