import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, features, price } = option;
  return (
    <div className="bg-blue-500 p-4 rounded-md text-white mt-5 flex flex-col">
      <div className="text-center">
        <h2>
          <span className="text-6xl font-bold">{price}</span>
          <span className="text-2xl">/mon</span>
        </h2>
        <h1 className="text-3xl my-8">{name}</h1>
      </div>

      <div className="pl-8 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>

      <button className="mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};
export default PriceOption;
