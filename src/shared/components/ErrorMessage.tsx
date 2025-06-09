import { MessageProps } from "../types/message.types";

const ErrorMessage = ({
  message = "Une erreur est survenue",
}: MessageProps) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      <p className="font-serif text-4xl text-red">{message}</p>
    </div>
  );
};

export default ErrorMessage;
