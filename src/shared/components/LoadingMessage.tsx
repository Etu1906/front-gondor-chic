import "./LoadingMessage.scss";
import { MessageProps } from "../types/message.types";

const LoadingMessage = ({ message = "Chargement" }: MessageProps) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      <p className="font-serif text-4xl text-text loading-text">{message}</p>
    </div>
  );
};

export default LoadingMessage;
