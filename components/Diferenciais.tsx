// components/Diferenciais.js
import Wrapper from "./Wrapper";

const Diferenciais = () => {
  const items = [
    {
      logo: "/images/logo1.png",
      title: "Title 1",
      description: "This is a small description for item 1. It should be about twenty words long."
    },
    {
      logo: "/images/logo2.png",
      title: "Title 2",
      description: "This is a small description for item 2. It should be about twenty words long."
    },
    {
      logo: "/images/logo3.png",
      title: "Title 3",
      description: "This is a small description for item 3. It should be about twenty words long."
    },
    {
      logo: "/images/logo4.png",
      title: "Title 4",
      description: "This is a small description for item 4. It should be about twenty words long."
    },
    {
      logo: "/images/logo5.png",
      title: "Title 5",
      description: "This is a small description for item 5. It should be about twenty words long."
    },
  ];

  return (
    <Wrapper>
      <h2 className="text-3xl font-bold mb-8 text-center">Diferenciais</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4 border rounded shadow">
            <img src={item.logo} alt={`Logo ${index + 1}`} className="h-16 w-16 mb-4" />
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Diferenciais;
