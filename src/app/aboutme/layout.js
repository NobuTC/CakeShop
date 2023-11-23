import "./aboutme.css";

export const metadata = {
  title: "aboutme",
  description: "aboutme",
};

export default function RootLayout({ children }) {
  return <div className="blog container mx-auto">{children}</div>;
}
