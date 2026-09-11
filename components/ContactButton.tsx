type ContactButtonProps = {
  buttonText: string;
  url: string;
  inverted?: boolean;
};

const ContactButton = ({
  buttonText,
  url,
  inverted = false,
}: ContactButtonProps) => {
  const contactButtonClass = inverted
    ? "bg-themeColor text-white"
    : "bg-white text-themeColor";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${contactButtonClass} inline-block rounded px-6 py-4 text-xl font-bold transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent`}
      style={{ marginTop: "2rem" }}
    >
      {buttonText}
    </a>
  );
};

export default ContactButton;
