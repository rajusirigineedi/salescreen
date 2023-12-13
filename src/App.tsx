import "./App.css";
import { SaleCard } from "./components/SaleCard/SaleCard";

function App() {
  return (
    <div>
      SaleScreen Package
      <div>
        <SaleCard
          height={96}
          items={[
            {
              id: 1,
              imageUrl:
                "http://res.cloudinary.com/dr8pyxxqb/image/upload/v1693739369/ed3vqzcf7l8higzyx0ur.avif",
              actualUrl: "/home",
            },
            {
              id: 2,
              imageUrl:
                "http://res.cloudinary.com/dr8pyxxqb/image/upload/v1693739369/ed3vqzcf7l8higzyx0ur.avif",
              actualUrl: "/image",
            },
            {
              id: 3,
              imageUrl:
                "http://res.cloudinary.com/dr8pyxxqb/image/upload/v1693739369/ed3vqzcf7l8higzyx0ur.avif",
              actualUrl: "/image",
            },
          ]}
          marginTop={20}
          type="block"
        />
      </div>
    </div>
  );
}

export default App;
