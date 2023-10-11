import { CardComponent } from "./Card.style";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <CardComponent className={className}>{children}</CardComponent>;
};

export default Card;
