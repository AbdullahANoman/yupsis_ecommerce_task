const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary  py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShopEase</h1>
        <p className="text-xl mb-8">
          Discover amazing products at unbeatable prices
        </p>
        <button className="bg-blue-500 text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;