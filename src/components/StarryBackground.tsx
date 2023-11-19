// import Background from "../assets/backgrounds/alta.png";

interface ChildrenProp {
  children: React.ReactNode;
}

export const StarryBackground = ({ children }: ChildrenProp) => {
  return <div className="max-auto w-full h-screen px-4">{children}</div>;
};
